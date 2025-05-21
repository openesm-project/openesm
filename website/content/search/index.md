---
title: "Search Datasets and Variables"
---


Use the search box below to find datasets and variables in the OpenESM database.

<div id="custom-search-container">
  <input type="text" id="custom-search-input" placeholder="Search datasets and variables...">
  <div id="custom-search-results"></div>
</div>

<script src="https://unpkg.com/lunr/lunr.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  let datasets = [];
  let idx = null;
  
  // Debug flag to log more information
  const debug = true;
  
  function log(message, data) {
    if (debug) {
      console.log(message, data);
    }
  }
  
  // Determine path based on whether we're in development or production
  const basePath = window.location.pathname.includes('/openesm/') ? '/openesm' : '';
  const jsonUrl = `${basePath}/data/datasets-index.json`;
  
  log("Will fetch search index from:", jsonUrl);
  
  // Load the dataset metadata
  fetch(jsonUrl)
    .then(response => {
      log("Fetch response status:", response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      log("Successfully loaded search index with datasets:", data.length);
      datasets = data;
      
      // Build the search index
      idx = lunr(function() {
        log("Building Lunr index");
        this.ref('id');
        this.field('first_author');
        this.field('year');
        this.field('topics');
        this.field('variables');
        
        // Create a pipeline function to extract variable data
        this.pipeline.add(function(token) {
          return token.toString().toLowerCase();
        });
        
        // Add each dataset to the index
        datasets.forEach(function(doc, index) {
          log(`Indexing dataset ${index}: ${doc.id}`);
          
          // Create searchable text from variables
          const variableText = doc.variables.map(v => 
            `${v.name} ${v.description} ${v.type}`
          ).join(' ');
          
          const indexDoc = {
            id: doc.id,
            first_author: doc.first_author || '',
            year: (doc.year || '').toString(),
            topics: doc.topics || '',
            variables: variableText
          };
          
          this.add(indexDoc);
        }, this);
        
        log("Finished building Lunr index");
      });
      
      // Set up event listener
      document.getElementById('custom-search-input').addEventListener('input', performSearch);
      
      log("Search setup complete");
    })
    .catch(error => {
      console.error('Error loading search index:', error);
      document.getElementById('custom-search-results').innerHTML = 
        '<p>Error loading search index: ' + error.message + '</p>';
    });
  
  function performSearch() {
    const query = document.getElementById('custom-search-input').value;
    const resultsContainer = document.getElementById('custom-search-results');
    
    log("Performing search for query:", query);
    
    if (query.trim() === '') {
      resultsContainer.innerHTML = '';
      return;
    }
    
    try {
      const searchResults = idx.search(query);
      log("Search results:", searchResults);
      
      if (searchResults.length === 0) {
        resultsContainer.innerHTML = '<p>No results found. Try different search terms.</p>';
        return;
      }
      
      // Map search results to datasets
      const results = searchResults.map(result => {
        const dataset = datasets.find(d => d.id === result.ref);
        if (dataset) {
          // Add score from search for sorting
          dataset.score = result.score;
          // Add matched terms for highlighting
          dataset.matchedTerms = Object.keys(result.matchData.metadata);
        }
        return dataset;
      }).filter(Boolean);
      
      log("Mapped results:", results);
      
      // Display results
      resultsContainer.innerHTML = '';
      
      results.forEach(dataset => {
        const datasetEl = document.createElement('div');
        datasetEl.className = 'search-result';
        
        // Find variables that match the query
        const queryTerms = query.toLowerCase().split(/\s+/);
        const matchingVariables = dataset.variables.filter(variable => {
          return queryTerms.some(term => 
            variable.name.toLowerCase().includes(term) || 
            variable.description.toLowerCase().includes(term)
          );
        }).slice(0, 3); // Limit to 3 matches
        
        const url = dataset.url.startsWith('/') ? 
          `${basePath}${dataset.url}` : dataset.url;
        
        datasetEl.innerHTML = `
          <h3><a href="${url}">${dataset.first_author} (${dataset.year})</a></h3>
          <p><strong>Topics:</strong> ${dataset.topics || ''}</p>
          <p><strong>Participants:</strong> ${dataset.n_participants} | <strong>Time points:</strong> ${dataset.n_time_points}</p>
        `;
        
        // Add matching variables if any
        if (matchingVariables.length > 0) {
          const varsEl = document.createElement('div');
          varsEl.className = 'matching-variables';
          varsEl.innerHTML = `<h4>Matching Variables (${matchingVariables.length})</h4>`;
          
          const varsList = document.createElement('ul');
          matchingVariables.forEach(variable => {
            const varItem = document.createElement('li');
            varItem.innerHTML = `
              <strong>${variable.name}</strong>: 
              ${variable.description}
              <em>(${variable.type})</em>
            `;
            varsList.appendChild(varItem);
          });
          
          varsEl.appendChild(varsList);
          datasetEl.appendChild(varsEl);
        }
        
        resultsContainer.appendChild(datasetEl);
      });
      
    } catch (error) {
      console.error("Search error:", error);
      resultsContainer.innerHTML = '<p>Search error: ' + error.message + '</p>';
    }
  }
});
</script>

<style>
  /* Search container styles */
  #custom-search-container {
    margin: 2rem 0;
  }

  /* Search input styles */
  #custom-search-input {
    width: 100%;
    padding: 0.8rem;
    font-size: 1.1rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    margin-bottom: 1.5rem;
    background-color: var(--entry);
    color: var(--primary);
  }

  /* Search results styles */
  .search-stats {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--secondary);
  }

  .search-result {
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid var(--border);
    background-color: var(--entry);
  }

  .search-result h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .matching-variables {
    margin-top: 0.8rem;
  }

  .matching-variables h4 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .matching-variables ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
  }

  .matching-variables li {
    margin-bottom: 0.3rem;
  }

  /* Highlight matches */
  mark {
    background-color: rgba(255, 255, 0, 0.3);
    padding: 0.1em 0.2em;
    border-radius: 2px;
  }
</style>
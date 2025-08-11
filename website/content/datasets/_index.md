---
title: "Datasets"
# Hide list of posts in this section
layout: "single"
# prevent showing posts
hidemeta: true
# Hide the default list of posts
hideposts: true
---

Below, you will find the full list of all datasets available in the OpenESM database. Each dataset is linked to its detailed page where you can find more information, download options, and metadata. More information about the datasets and their metadata can be found in the [Data Documentation]({{< relref "docs/data/" >}}).

## Dataset Overview

<div id="datasets-table-container">
  <table id="datasets-table">
  <thead>
    <tr>
      <th>Dataset ID</th>
      <th>First Author</th>
      <th>Year</th>
      <th>Topics</th>
      <th>Participants</th>
      <th>Time Points</th>
      <th>Beeps/Day</th>
      <th>Variables</th>
      <th>Cross-sectional</th>
      <th>Passive Sensor</th>
    </tr>
  </thead>
    <tbody id="datasets-table-body">
      <!-- Loading message will be replaced by JavaScript -->
      <tr>
        <td colspan="10">Loading datasets...</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  #datasets-table-container {
    overflow-x: auto;
    margin: 1.5rem 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: #FDFDFD;
  }

  #datasets-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0;
    font-size: 0.9rem;
    background: white;
    border-radius: 8px;
    overflow: hidden;
  }
  
  #datasets-table th {
    background: #085AB3;
    color: white;
    font-weight: 600;
    padding: 1rem 0.75rem;
    text-align: left;
    border: none;
    font-size: 0.90rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  #datasets-table th:first-child {
    border-top-left-radius: 8px;
  }

  #datasets-table th:last-child {
    border-top-right-radius: 8px;
  }
  
  #datasets-table td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
    color: #262626;
    vertical-align: top;
  }

  #datasets-table tbody tr {
    transition: background-color 0.2s ease;
  }
  
  #datasets-table tbody tr:hover {
    background-color: #f8f9fa;
  }

  #datasets-table tbody tr:nth-child(even) {
    background-color: #fafafa;
  }

  #datasets-table tbody tr:nth-child(even):hover {
    background-color: #f0f0f0;
  }

  /* Style links in the table */
  #datasets-table a {
    color: #085AB3;
    text-decoration: none !important;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  #datasets-table a:hover {
    color: #E78A00;
    text-decoration: none !important;
  }

  /* Style boolean values */
  #datasets-table .bool-yes {
    color: #28a745;
    font-weight: 600;
  }

  #datasets-table .bool-no {
    color: #dc3545;
    font-weight: 600;
  }

  /* Style numeric values */
  #datasets-table .numeric {
    text-align: right;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    #datasets-table {
      font-size: 0.8rem;
    }
    
    #datasets-table th,
    #datasets-table td {
      padding: 0.5rem 0.4rem;
    }
    
    #datasets-table th {
      font-size: 0.75rem;
    }
  }

  /* Loading state styling */
  .loading-cell {
    text-align: center;
    font-style: italic;
    color: #666;
    padding: 2rem;
  }

  /* Error state styling */
  .error-cell {
    text-align: center;
    color: #dc3545;
    font-weight: bold;
    padding: 2rem;
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Debug: Log our current location
  console.log("Current pathname:", window.location.pathname);
  
  // Determine base path dynamically
  const basePath = window.location.pathname.includes('/openesm/') ? '/openesm' : '';
  const jsonUrl = `${basePath}/data/datasets_table.json`;
  
  console.log("Will fetch JSON from:", jsonUrl);
  
  // Find the table body element
  const tableBody = document.getElementById('datasets-table-body');
  
  // Function to format boolean values
  function formatBoolean(value) {
    return value;
  }
  
  // Function to format numeric values
  function formatNumeric(value) {
    if (!isNaN(value) && value !== '') {
      return `<span class="numeric">${value}</span>`;
    }
    return value;
  }
  
  // Attempt to fetch data with detailed logging
  console.log("Starting fetch request...");
  fetch(jsonUrl)
    .then(response => {
      console.log("Fetch response received:", response);
      console.log("Response status:", response.status);
      console.log("Response headers:", [...response.headers.entries()]);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      console.log("Response OK, parsing JSON...");
      return response.json();
    })
    .then(datasets => {
      console.log("JSON parsed successfully:", datasets);
      
      // Clear loading message
      tableBody.innerHTML = '';
      
      // Check if datasets array is valid
      if (!Array.isArray(datasets)) {
        throw new Error("Datasets is not an array: " + typeof datasets);
      }
      
      console.log(`Populating table with ${datasets.length} datasets`);
      
      // Generate table rows
      datasets.forEach((dataset, index) => {
        console.log(`Processing dataset ${index}:`, dataset);
        
        const row = document.createElement('tr');
        
        // Add URL correction for links
        const url = dataset.url.startsWith('/') ? 
          `${basePath}${dataset.url}` : dataset.url;
        
        row.innerHTML = `
          <td><a href="${url}">${dataset.dataset_id}</a></td>
          <td>${dataset.first_author}</td>
          <td>${formatNumeric(dataset.year)}</td>
          <td>${dataset.topics || ''}</td>
          <td>${formatNumeric(dataset.n_participants)}</td>
          <td>${formatNumeric(dataset.n_time_points)}</td>
          <td>${formatNumeric(dataset.n_beeps_per_day || '')}</td>
          <td>${formatNumeric(dataset.n_variables)}</td>
          <td>${formatBoolean(dataset.cross_sectional_available)}</td>
          <td>${formatBoolean(dataset.passive_data_available)}</td>
        `;
        
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error loading datasets table:', error);
      tableBody.innerHTML = `
        <tr>
          <td colspan="10" class="error-cell">
            Error loading datasets: ${error.message}<br>
            Please check the browser console for more details.
          </td>
        </tr>
      `;
    });
});
</script>
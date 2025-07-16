---
title: "Search Datasets and Variables"
---

Use the search box below to find datasets and variables in the OpenESM database.

<div id="custom-search-container" style="display: flex; gap: 20px;">
<aside style="width: 250px; background-color: var(--code-bg); padding: 20px; border-radius: 8px; height: fit-content; flex-shrink: 0; border: 1px solid var(--border);">
<h3 style="margin-top: 0; margin-bottom: 20px; font-size: 1.1rem; border-bottom: 1px solid var(--border); padding-bottom: 10px;">Filters</h3>
<div style="margin-bottom: 20px;">
<h4 style="margin-bottom: 10px; font-size: 0.9rem; color: var(--secondary);">Dataset Size</h4>
<div style="margin-bottom: 15px;">
<label for="min-participants" style="display: block; font-weight: 500; margin-bottom: 5px; font-size: 0.875rem;">Min Participants</label>
<input type="number" id="min-participants" min="1" value="1" style="width: 100%; padding: 8px; border: 1px solid var(--border); border-radius: 4px; background-color: var(--entry); color: var(--primary);">
</div>
<div>
<label for="min-observations" style="display: block; font-weight: 500; margin-bottom: 5px; font-size: 0.875rem;">Min Observations</label>
<input type="number" id="min-observations" min="1" value="1" style="width: 100%; padding: 8px; border: 1px solid var(--border); border-radius: 4px; background-color: var(--entry); color: var(--primary);">
</div>
</div>
<div style="margin-bottom: 20px;">
<h4 style="margin-bottom: 10px; font-size: 0.9rem; color: var(--secondary);">Data Types</h4>
<div style="margin-bottom: 8px; display: flex; align-items: center;">
<input type="checkbox" id="passive-data" style="margin-right: 8px;">
<label for="passive-data" style="font-size: 0.875rem;">Passive data</label>
</div>
<div style="margin-bottom: 8px; display: flex; align-items: center;">
<input type="checkbox" id="cross-sectional" style="margin-right: 8px;">
<label for="cross-sectional" style="font-size: 0.875rem;">Cross-sectional data</label>
</div>
<div style="display: flex; align-items: center;">
<input type="checkbox" id="raw-timestamp" style="margin-right: 8px;">
<label for="raw-timestamp" style="font-size: 0.875rem;">Raw timestamp</label>
</div>
</div>
<div>
<h4 style="margin-bottom: 10px; font-size: 0.9rem; color: var(--secondary);">Constructs</h4>
<div class="construct-dropdown">
<button class="construct-button" id="construct-button">
<span id="construct-button-text">All constructs</span>
<span>▼</span>
</button>
<div class="construct-dropdown-content" id="construct-dropdown">
<!-- Constructs will be populated dynamically -->
</div>
</div>
</div>
</aside>
<main style="flex: 1;">
<input type="text" id="custom-search-input" placeholder="Search datasets and variables...">
<div id="selected-datasets" class="selected-datasets hidden">
<div class="selected-header">
<h3 id="selected-count">0 datasets selected</h3>
<span class="toggle-arrow">▼</span>
</div>
<div class="selected-content">
<button id="clear-selection-btn" class="clear-btn">Clear Selection</button>
<div class="code-section">
<div class="code-block">
<div class="code-header">R Code</div>
<pre><code class="code-content" id="r-code"></code></pre>
</div>
<div class="code-block">
<div class="code-header">Python Code</div>
<pre><code class="code-content" id="python-code"></code></pre>
</div>
</div>
</div>
</div>
<div id="custom-search-results"></div>
</main>
</div>
<script src="https://unpkg.com/lunr/lunr.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    let datasets = [];
    let idx = null;
    let selectedDatasets = new Set();
    let selectedConstructs = new Set();
    let constructCounts = {};
    const debug = false;
    function log(message, data) {
        if (debug) {
            console.log(message, data || '');
        }
    }
    const basePath = window.location.pathname.includes('/openesm/') ? '/openesm' : '';
    const jsonUrl = `${basePath}/data/datasets-index.json`;
    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            datasets = data;
            buildSearchIndex();
            buildConstructCounts();
            populateConstructDropdown();
            setupEventListeners();
            performSearch();
        })
        .catch(error => {
            console.error('Error loading search index:', error);
            const resultsContainer = document.getElementById('custom-search-results');
            if (resultsContainer) {
                resultsContainer.innerHTML = '<p>Error loading search index. ' + error.message + '</p>';
            }
        });
    function buildSearchIndex() {
        idx = lunr(function() {
            this.ref('id');
            this.field('first_author', { boost: 10 });
            this.field('year', { boost: 5 });
            this.field('topics', { boost: 8 });
            this.field('variables', { boost: 5 });
            datasets.forEach(doc => {
                const variableText = Array.isArray(doc.variables)
    ? doc.variables.map(v => {
        const constructs = Array.isArray(v.construct) ? v.construct.join(' ') : (v.construct || '');
        return `${v.name || ''} ${v.description || ''} ${v.variable_type || ''} ${constructs}`;
    }).join(' ')
    : '';
                this.add({
                    id: doc.id,
                    first_author: doc.first_author || '',
                    year: (doc.year || '').toString(),
                    topics: doc.topics || '',
                    variables: variableText
                });
            });
        });
    }
    function buildConstructCounts() {
        constructCounts = {};
        datasets.forEach(dataset => {
            const datasetConstructs = new Set();
            if (Array.isArray(dataset.variables)) {
                dataset.variables.forEach(variable => {
                    if (variable.construct) {
                        const constructs = Array.isArray(variable.construct)
                            ? variable.construct
                            : [variable.construct];
                        // Split by comma and flatten the array
                        const individualConstructs = constructs.flatMap(c => {
                            return c && typeof c === 'string'
                             ? c.split(',').map(s => s.trim()).filter(Boolean)
                              : [];
                        });
                        individualConstructs.forEach(construct => {
                            if (construct) { // Already trimmed and filtered for non-empty
                                datasetConstructs.add(construct);
                            }
                        });
                    }
                });
            }
            datasetConstructs.forEach(construct => {
                constructCounts[construct] = (constructCounts[construct] || 0) + 1;
            });
        });
        log("Construct counts:", constructCounts);
    }
    function populateConstructDropdown() {
        const dropdown = document.getElementById('construct-dropdown');
        dropdown.innerHTML = '';
        const sortedConstructs = Object.entries(constructCounts)
            .sort((a, b) => {
                if (b[1] !== a[1]) return b[1] - a[1];
                return a[0].localeCompare(b[0]);
            });
        sortedConstructs.forEach(([construct, count]) => {
            const item = document.createElement('div');
            item.className = 'construct-item';
            item.innerHTML = `
                <input type="checkbox" id="construct-${construct.replace(/\s+/g, '-')}" value="${construct}">
                <label for="construct-${construct.replace(/\s+/g, '-')}">${construct}</label>
                <span class="construct-count">(${count})</span>
            `;
            const checkbox = item.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    selectedConstructs.add(construct);
                } else {
                    selectedConstructs.delete(construct);
                }
                updateConstructButtonText();
                performSearch();
            });
            dropdown.appendChild(item);
        });
    }
    function updateConstructButtonText() {
        const buttonText = document.getElementById('construct-button-text');
        if (selectedConstructs.size === 0) {
            buttonText.textContent = 'All constructs';
        } else if (selectedConstructs.size === 1) {
            buttonText.textContent = Array.from(selectedConstructs)[0];
        } else {
            buttonText.textContent = `${selectedConstructs.size} constructs selected`;
        }
    }
    function setupEventListeners() {
        document.getElementById('custom-search-input').addEventListener('input', performSearch);
        document.getElementById('min-participants').addEventListener('input', performSearch);
        document.getElementById('min-observations').addEventListener('input', performSearch);
        document.getElementById('passive-data').addEventListener('change', performSearch);
        document.getElementById('cross-sectional').addEventListener('change', performSearch);
        document.getElementById('raw-timestamp').addEventListener('change', performSearch);
        document.querySelector('.selected-header').addEventListener('click', toggleSelectedSection);
        document.getElementById('clear-selection-btn').addEventListener('click', clearSelection);
        // Construct dropdown toggle
        const constructButton = document.getElementById('construct-button');
        const constructDropdown = document.getElementById('construct-dropdown');
        constructButton.addEventListener('click', (e) => {
            e.stopPropagation();
            constructDropdown.classList.toggle('show');
            constructButton.classList.toggle('active');
        });
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            constructDropdown.classList.remove('show');
            constructButton.classList.remove('active');
        });
        // Prevent dropdown from closing when clicking inside
        constructDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    function performSearch() {
        const query = document.getElementById('custom-search-input').value;
        let searchResults;
        if (query.trim() !== '') {
            try {
                searchResults = idx.search(query);
            } catch (error) {
                console.error("Search error:", error);
                document.getElementById('custom-search-results').innerHTML = '<p>Search error: ' + error.message + '</p>';
                return;
            }
        } else {
            searchResults = datasets.map(d => ({ ref: d.id, score: 1, matchData: { metadata: {} } }));
        }
        const mappedResults = searchResults.map(result => {
            const dataset = datasets.find(d => d.id === result.ref);
            if (dataset) {
                dataset.score = result.score;
                dataset.matchedTerms = Object.keys(result.matchData.metadata);
            }
            return dataset;
        });
        const filteredResults = applyFilters(mappedResults);
        displayResults(filteredResults, query);
    }
    function applyFilters(results) {
        const minParticipants = parseInt(document.getElementById('min-participants').value) || 1;
        const minObservations = parseInt(document.getElementById('min-observations').value) || 1;
        const needsPassiveData = document.getElementById('passive-data').checked;
        const needsCrossSectional = document.getElementById('cross-sectional').checked;
        const needsRawTimestamp = document.getElementById('raw-timestamp').checked;
        return results.filter(dataset => {
            if (!dataset) return false;
            if ((dataset.n_participants || 0) < minParticipants) return false;
            if ((dataset.n_time_points || 0) < minObservations) return false;
            if (needsPassiveData && dataset.passive_data_available !== "yes") return false;
            if (needsCrossSectional && dataset.cross_sectional_available !== "yes") return false;
            if (needsRawTimestamp && (!dataset.raw_time_stamp || dataset.raw_time_stamp === "no")) return false;
            // Check construct filter
            if (selectedConstructs.size > 0) {
                const datasetConstructs = new Set();
                if (Array.isArray(dataset.variables)) {
                    dataset.variables.forEach(variable => {
                        if (variable.construct) {
                            const constructs = Array.isArray(variable.construct)
                                ? variable.construct
                                : [variable.construct];
                            // Split by comma and flatten the array, then trim and filter
                            const individualConstructs = constructs.flatMap(c =>
                                c && typeof c === 'string'
                                    ? c.split(',').map(s => s.trim()).filter(Boolean)
                                    : []
                            );
                            individualConstructs.forEach(c => {
                                if (c) datasetConstructs.add(c); // Already trimmed and filtered for non-empty
                            });
                        }
                    });
                }
                // Check if dataset has any of the selected constructs
                const hasSelectedConstruct = Array.from(selectedConstructs).some(
                    construct => datasetConstructs.has(construct)
                );
                if (!hasSelectedConstruct) return false;
            }
            return true;
        });
    }
    function displayResults(results, query) {
        const resultsContainer = document.getElementById('custom-search-results');
        resultsContainer.innerHTML = '';
        const resultsHeader = document.createElement('div');
        resultsHeader.className = 'search-stats';
        resultsHeader.textContent = `${results.length} dataset${results.length !== 1 ? 's' : ''} found`;
        resultsContainer.appendChild(resultsHeader);
        if (results.length === 0) {
            resultsContainer.innerHTML += '<p>No results found matching your criteria.</p>';
            return;
        }
        results.forEach(dataset => {
            const isSelected = selectedDatasets.has(dataset.id);
            const datasetEl = document.createElement('div');
            datasetEl.className = `search-result ${isSelected ? 'selected' : ''}`;
            datasetEl.dataset.id = dataset.id;
            datasetEl.addEventListener('click', () => toggleDatasetSelection(dataset.id));
            const queryTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
            const matchingVariables = query.trim() === '' ? [] : dataset.variables.filter(variable =>
                queryTerms.some(term =>
                    (variable.name || '').toLowerCase().includes(term) ||
                    (variable.description || '').toLowerCase().includes(term)
                )
            ).slice(0, 3);
            const url = dataset.url.startsWith('/') ? `${basePath}${dataset.url}` : dataset.url;
            datasetEl.innerHTML = `
                <div class="selection-checkbox ${isSelected ? 'selected' : ''}"></div>
                <h3><a href="${url}" onclick="event.stopPropagation()">${dataset.first_author} (${dataset.year})</a></h3>
                <p><strong>Topics:</strong> ${dataset.topics || 'N/A'}</p>
                <p><strong>Participants:</strong> ${dataset.n_participants || 'N/A'} | <strong>Time points:</strong> ${dataset.n_time_points || 'N/A'}</p>
                ${matchingVariables.length > 0 ? `
                    <div class="matching-variables">
                        <h4>Matching Variables</h4>
                        <ul>
                            ${matchingVariables.map(v => `<li><strong>${v.name}</strong>: ${v.description || 'No description.'}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            `;
            resultsContainer.appendChild(datasetEl);
        });
    }
    function toggleDatasetSelection(datasetId) {
        const resultEl = document.querySelector(`.search-result[data-id="${datasetId}"]`);
        const checkboxEl = resultEl.querySelector('.selection-checkbox');
        if (selectedDatasets.has(datasetId)) {
            selectedDatasets.delete(datasetId);
            resultEl.classList.remove('selected');
            checkboxEl.classList.remove('selected');
        } else {
            selectedDatasets.add(datasetId);
            resultEl.classList.add('selected');
            checkboxEl.classList.add('selected');
        }
        updateSelectedSection();
    }
    function updateSelectedSection() {
        const selectedSection = document.getElementById('selected-datasets');
        const countElement = document.getElementById('selected-count');
        const hasSelection = selectedDatasets.size > 0;
        selectedSection.classList.toggle('hidden', !hasSelection);
        if (hasSelection) {
            countElement.textContent = `${selectedDatasets.size} dataset${selectedDatasets.size !== 1 ? 's' : ''} selected`;
            updateCode();
        }
    }
    function updateCode() {
        const datasetIds = Array.from(selectedDatasets).sort().map(id => `"${id}"`).join(', ');
        document.getElementById('r-code').textContent = `library(openesm)\ndatasets <- get_dataset(c(${datasetIds}))`;
        document.getElementById('python-code').textContent = `import openesm\ndatasets = openesm.get_dataset([${datasetIds}])`;
    }
    function toggleSelectedSection() {
        const content = document.querySelector('.selected-content');
        const arrow = document.querySelector('.toggle-arrow');
        const isExpanded = content.classList.toggle('expanded');
        arrow.classList.toggle('expanded', isExpanded);
    }
    function clearSelection() {
        selectedDatasets.clear();
        document.querySelectorAll('.search-result.selected').forEach(el => {
            el.classList.remove('selected');
            el.querySelector('.selection-checkbox').classList.remove('selected');
        });
        updateSelectedSection();
    }
});
</script>
<style>
#custom-search-container { margin: 2rem -15px; }
#custom-search-input { width: 100%; padding: 0.8rem; font-size: 1.1rem; border: 1px solid var(--border); border-radius: 4px; margin-bottom: 1.5rem; background-color: var(--entry); color: var(--primary); }
.search-stats { margin-bottom: 1rem; font-size: 0.9rem; color: var(--secondary); }
.search-result { margin-bottom: 1rem; padding: 1rem; border-radius: 4px; border: 2px solid var(--border); background-color: var(--entry); position: relative; cursor: pointer; transition: border-color 0.2s ease, background-color 0.2s ease; }
.search-result:hover { border-color: var(--primary); }
.search-result.selected { border-color: var(--primary); background-color: var(--code-bg); }
.search-result h3 { margin-top: 0; margin-bottom: 0.5rem; }
.search-result h3 a { color: var(--primary); text-decoration: none; }
.search-result h3 a:hover { text-decoration: underline; }
.search-result p { margin: 0.3rem 0; font-size: 0.9rem; }
.matching-variables { margin-top: 0.8rem; padding-top: 0.8rem; border-top: 1px solid var(--border); }
.matching-variables h4 { margin-bottom: 0.5rem; font-size: 1rem; }
.matching-variables ul { margin: 0.5rem 0 0 0; padding-left: 1.2rem; }
.matching-variables li { margin-bottom: 0.3rem; }
.selection-checkbox { position: absolute; top: 1rem; right: 1rem; width: 22px; height: 22px; border: 2px solid var(--secondary); border-radius: 4px; background: var(--entry); transition: all 0.2s ease; }
.selection-checkbox.selected { background: var(--primary); border-color: var(--primary); color: var(--entry); }
.selection-checkbox.selected::after { content: '✓'; display: block; text-align: center; font-weight: bold; line-height: 18px; }
.selected-datasets { background: var(--code-bg); border: 1px solid var(--border); border-radius: 8px; margin-bottom: 1.5rem; overflow: hidden; transition: all 0.3s ease; }
.selected-datasets.hidden { display: none; }
.selected-header { padding: 12px 15px; background: var(--tertiary); color: var(--primary); display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
.selected-header h3 { margin: 0; font-size: 1rem; }
.toggle-arrow { transition: transform 0.3s ease; }
.toggle-arrow.expanded { transform: rotate(180deg); }
.selected-content { display: none; padding: 15px; }
.selected-content.expanded { display: block; }
.clear-btn { background: #dc3545; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px; margin-bottom: 15px; }
.clear-btn:hover { background: #c82333; }
.code-section { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.code-block { border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
.code-header { background: var(--secondary); color: var(--code-bg); padding: 8px 12px; font-weight: 500; font-size: 14px; }
.code-content { display: block; padding: 12px; font-family: var(--font-mono); font-size: 13px; white-space: pre-wrap; background: var(--entry); color: var(--primary); }
/* Construct dropdown styles */
.construct-dropdown { position: relative; }
.construct-button { width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 4px; background: var(--entry); color: var(--primary); font-size: 0.875rem; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
.construct-button:hover { border-color: var(--primary); }
.construct-button.active { border-color: var(--primary); }
.construct-dropdown-content { display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--entry); border: 1px solid var(--border); border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-height: 300px; overflow-y: auto; z-index: 1000; margin-top: 4px; }
.construct-dropdown-content.show { display: block; }
.construct-item { padding: 8px 12px; display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.875rem; }
.construct-item:hover { background: var(--code-bg); }
.construct-item input[type="checkbox"] { margin: 0; }
.construct-item label { flex: 1; cursor: pointer; margin: 0; }
.construct-count { color: var(--secondary); font-size: 0.8125rem; }
@media (max-width: 900px) { .code-section { grid-template-columns: 1fr; } }
@media (max-width: 768px) { #custom-search-container { flex-direction: column; margin: 2rem 0; } #custom-search-container aside { width: 100%; margin-bottom: 20px; } }
</style>
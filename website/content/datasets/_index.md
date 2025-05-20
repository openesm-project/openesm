---
title: "Datasets"
date: 2025-05-19
# Hide list of posts in this section
layout: "single"
# prevent showing posts
hidemeta: true
# Hide the default list of posts
hideposts: true
---

# Available Datasets

Browse all available datasets in the OpenESM database.

## Dataset Overview

<div id="datasets-table-container">
  <table id="datasets-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Author</th>
        <th>Year</th>
        <th>Topics</th>
        <th>Participants</th>
        <th>Time Points</th>
        <th>Beeps/Day</th>
        <th>Variables</th>
      </tr>
    </thead>
    <tbody id="datasets-table-body">
      <!-- Loading message will be replaced by JavaScript -->
      <tr>
        <td colspan="8">Loading datasets...</td>
      </tr>
    </tbody>
  </table>
</div>


<style>
  #datasets-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }
  
  #datasets-table th, 
  #datasets-table td {
    padding: 0.5rem 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--border);
  }
  
  #datasets-table th {
    font-weight: 600;
  }
  
  #datasets-table tbody tr:hover {
    background-color: var(--code-bg);
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
          <td><a href="${url}">${dataset.id}</a></td>
          <td>${dataset.first_author}</td>
          <td>${dataset.year}</td>
          <td>${dataset.topics || ''}</td>
          <td>${dataset.n_participants}</td>
          <td>${dataset.n_time_points}</td>
          <td>${dataset.n_beeps_per_day || ''}</td>
          <td>${dataset.n_variables}</td>
        `;
        
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error loading datasets table:', error);
      tableBody.innerHTML = `
        <tr>
          <td colspan="8" style="color: red; font-weight: bold;">
            Error loading datasets: ${error.message}<br>
            Please check the browser console for more details.
          </td>
        </tr>
      `;
    });
});
</script>
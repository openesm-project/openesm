// Simple log to confirm script is loading
console.log("Dataset table script has loaded");

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM content loaded event fired");
  
  // Find the table body element
  const tableBody = document.getElementById('datasets-table-body');
  if (tableBody) {
    console.log("Found the table body element");
  } else {
    console.error("Could NOT find the table body element - check your HTML");
  }
  
  // Attempt to fetch data
  console.log("About to fetch data from /data/datasets_table.json");
  fetch('/data/datasets_table.json')
    .then(response => {
      console.log("Fetch response received:", response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(datasets => {
      console.log("Successfully parsed JSON data:", datasets);
      
      if (!tableBody) {
        return; // Already logged error above
      }
      
      // Generate table rows
      datasets.forEach(dataset => {
        console.log("Adding dataset to table:", dataset.id);
        const row = document.createElement('tr');
        
        row.innerHTML = `
          <td><a href="${dataset.url}">${dataset.id}</a></td>
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
    });
});
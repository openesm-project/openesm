---
title: "Datasets"
# Hide list of posts in this section
layout: "single"
# prevent showing posts
hidemeta: true
# Hide the default list of posts
hideposts: true
---

Below, you will find the full list of all datasets available in the openESM database. Each dataset is linked to its detailed page where you can find more information, download options, and metadata. More information about the datasets and their metadata can be found in the [Data Documentation]({{< relref "docs/data/" >}}).

## Dataset Overview

<p class="table-hint">Click any column header to sort &middot; Scroll right to see all columns &rarr;</p>

<div id="datasets-table-container">
  <table id="datasets-table">
  <thead>
    <tr>
      <th>Dataset ID <span class="sort-arrow"></span></th>
      <th>First Author <span class="sort-arrow"></span></th>
      <th>Year <span class="sort-arrow"></span></th>
      <th>Topics <span class="sort-arrow"></span></th>
      <th>Participants <span class="sort-arrow"></span></th>
      <th>Time Points <span class="sort-arrow"></span></th>
      <th>Days <span class="sort-arrow"></span></th>
      <th>Beeps/Day <span class="sort-arrow"></span></th>
      <th>Variables <span class="sort-arrow"></span></th>
      <th>Cross-sectional <span class="sort-arrow"></span></th>
      <th>Passive Sensor <span class="sort-arrow"></span></th>
    </tr>
  </thead>
  <tbody id="datasets-table-body">
    <tr><td colspan="11">Loading datasets...</td></tr>
  </tbody>
  </table>
</div>

<style>
  .table-hint {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  #datasets-table-container {
    position: relative;
    overflow-x: auto;
    margin: 1.5rem 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: #FDFDFD;
  }

  #datasets-table-container::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 100%;
    background: linear-gradient(to right, transparent, white);
    pointer-events: none;
    border-radius: 0 8px 8px 0;
    transition: opacity 0.2s ease;
  }

  #datasets-table-container.scrolled-end::after {
    opacity: 0;
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
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    transition: background-color 0.15s ease;
  }

  #datasets-table th:hover {
    background: #0a6ad4;
  }

  #datasets-table th.sort-active {
    background: #0a6ad4;
  }

  #datasets-table th:first-child {
    border-top-left-radius: 8px;
  }

  #datasets-table th:last-child {
    border-top-right-radius: 8px;
  }

  .sort-arrow {
    margin-left: 5px;
    font-size: 0.8em;
    opacity: 0.35;
    display: inline-block;
    width: 0.8em;
    text-align: center;
  }

  th.sort-active .sort-arrow {
    opacity: 1;
  }

  #datasets-table td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
    color: #262626;
    vertical-align: middle;
  }

  #datasets-table td.num {
    text-align: right;
  }

  #datasets-table td.topics-cell {
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* center boolean column headers and cells */
  #datasets-table th:nth-child(n+10),
  #datasets-table td:nth-child(n+10) {
    text-align: center;
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

  #datasets-table .bool-yes {
    color: #28a745;
    font-weight: 700;
  }

  #datasets-table .bool-no {
    color: #dc3545;
    font-weight: 700;
  }

  #datasets-table .bool-unclear {
    color: #E78A00;
    font-weight: 700;
  }

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

  .error-cell {
    text-align: center;
    color: #dc3545;
    font-weight: bold;
    padding: 2rem;
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const basePath = window.location.pathname.includes('/openesm/') ? '/openesm' : '';
  const jsonUrl = `${basePath}/data/datasets_table.json`;
  const tableBody = document.getElementById('datasets-table-body');
  const headers = document.querySelectorAll('#datasets-table thead th');

  // column definitions matching the header order
  const colConfig = [
    { key: 'dataset_id',               type: 'string'  },
    { key: 'first_author',             type: 'string'  },
    { key: 'year',                     type: 'numeric' },
    { key: 'topics',                   type: 'string'  },
    { key: 'n_participants',           type: 'numeric' },
    { key: 'n_time_points',            type: 'numeric' },
    { key: 'n_days',                   type: 'numeric' },
    { key: 'n_beeps_per_day',          type: 'numeric' },
    { key: 'n_variables',              type: 'numeric' },
    { key: 'cross_sectional_available',type: 'boolean' },
    { key: 'passive_data_available',   type: 'boolean' },
  ];

  // boolean sort rank: yes > unclear > no
  const boolRank = { yes: 2, unclear: 1, no: 0 };

  let allDatasets = [];
  let sortCol = null;
  let sortDir = 1; // 1 = asc, -1 = desc

  function formatBoolean(value) {
    if (value === 'yes')    return '<span class="bool-yes">✓</span>';
    if (value === 'no')     return '<span class="bool-no">✗</span>';
    return '<span class="bool-unclear">?</span>';
  }

  function buildRow(dataset) {
    const url = dataset.url.startsWith('/') ? `${basePath}${dataset.url}` : dataset.url;
    const topicsText = dataset.topics || '';
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><a href="${url}">${dataset.dataset_id}</a></td>
      <td>${dataset.first_author}</td>
      <td class="num">${dataset.year}</td>
      <td class="topics-cell" title="${topicsText.replace(/"/g, '&quot;')}">${topicsText}</td>
      <td class="num">${dataset.n_participants ?? ''}</td>
      <td class="num">${dataset.n_time_points ?? ''}</td>
      <td class="num">${dataset.n_days ?? ''}</td>
      <td class="num">${dataset.n_beeps_per_day ?? ''}</td>
      <td class="num">${dataset.n_variables ?? ''}</td>
      <td>${formatBoolean(dataset.cross_sectional_available)}</td>
      <td>${formatBoolean(dataset.passive_data_available)}</td>
    `;
    return row;
  }

  function renderRows(data) {
    tableBody.innerHTML = '';
    data.forEach(d => tableBody.appendChild(buildRow(d)));
  }

  function compare(a, b, col, dir) {
    const { key, type } = colConfig[col];
    const av = a[key] ?? '';
    const bv = b[key] ?? '';

    if (type === 'numeric') {
      const na = parseFloat(av);
      const nb = parseFloat(bv);
      if (isNaN(na) && isNaN(nb)) return 0;
      if (isNaN(na)) return 1;  // non-numeric values always sort last
      if (isNaN(nb)) return -1;
      return (na - nb) * dir;
    }

    if (type === 'boolean') {
      return ((boolRank[av] ?? -1) - (boolRank[bv] ?? -1)) * dir;
    }

    return String(av).localeCompare(String(bv)) * dir;
  }

  function updateHeaders(activeCol) {
    headers.forEach((th, i) => {
      const arrow = th.querySelector('.sort-arrow');
      th.classList.toggle('sort-active', i === activeCol);
      if (arrow) {
        arrow.textContent = i === activeCol ? (sortDir === 1 ? '↑' : '↓') : '↕';
      }
    });
  }

  headers.forEach((th, i) => {
    th.addEventListener('click', () => {
      sortDir = sortCol === i ? sortDir * -1 : 1;
      sortCol = i;
      updateHeaders(sortCol);
      renderRows([...allDatasets].sort((a, b) => compare(a, b, sortCol, sortDir)));
    });
  });

  fetch(jsonUrl)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then(datasets => {
      if (!Array.isArray(datasets)) throw new Error('Expected an array of datasets');
      allDatasets = datasets;
      renderRows(allDatasets);
      // initialize ↕ arrows on all headers
      headers.forEach(th => {
        const arrow = th.querySelector('.sort-arrow');
        if (arrow) arrow.textContent = '↕';
      });
      // hide right-edge gradient once user has scrolled to the end
      const container = document.getElementById('datasets-table-container');
      container.addEventListener('scroll', () => {
        const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 4;
        container.classList.toggle('scrolled-end', atEnd);
      });
    })
    .catch(error => {
      tableBody.innerHTML = `
        <tr>
          <td colspan="11" class="error-cell">
            Error loading datasets: ${error.message}
          </td>
        </tr>
      `;
    });
});
</script>
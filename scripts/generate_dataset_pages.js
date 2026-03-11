const fs = require('fs');
const path = require('path');
const { Cite } = require('@citation-js/core');
require('@citation-js/plugin-bibtex');
require('@citation-js/plugin-csl');

// Directory containing the dataset folders
const datasetsDir = path.join(__dirname, '../datasets');

// Output directory for the dataset pages
const outputDir = path.join(__dirname, '../website/content/datasets');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}



function formatAPAReference(bibtex) {
  if (!bibtex) return '';
  try {
    const cite = new Cite(bibtex);
    return cite.format('bibliography', {
      format: 'text',
      template: 'apa',
      lang: 'en-US'
    });
  } catch (error) {
    console.warn('Citation.js error:', error);
    return bibtex; // Fallback
  }
}

// format n_beeps_per_day
function formatBeepsPerDay(beeps) {
  if (Array.isArray(beeps)) {
    return beeps.join(', ');
  }
  return beeps || '';
}

// format text fields for markdown tables
function formatForTable(text) {
  if (!text) return '';
  // Replace newlines with HTML line breaks for table cells
  return text.replace(/\n/g, '<br>');
}

// format zenodo DOI by prepending "https://doi.org/"
function formatZenodoDOI(doi) {
  if (!doi) return '';
  return `https://doi.org/${doi}`;
}

// Escape double quotes for YAML frontmatter string values
function escapeFM(val) {
  if (val === null || val === undefined) return '';
  return String(val)
    .replace(/\r\n|\r|\n/g, ' ')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
}

// Return true only for valid http/https URLs (not placeholders like "-")
function isValidUrl(val) {
  if (!val || typeof val !== 'string') return false;
  return /^https?:\/\//i.test(val.trim());
}

// Read and process all dataset folders
const generateDatasetPages = () => {
  // Get all subdirectories in the datasets directory
  const datasetFolders = fs.readdirSync(datasetsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  datasetFolders.forEach(folder => {
    // Look for metadata file in the dataset folder
    const metadataPath = path.join(datasetsDir, folder, `${folder}_metadata.json`);

    if (fs.existsSync(metadataPath)) {
      const data = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

      // Format the reference
      const apaReference = data.reference_a ? formatAPAReference(data.reference_a) : '';
      const additionalReference = data.reference_b ? formatAPAReference(data.reference_b) : '';

      const zenodoUrl = data.zenodo_doi ? formatZenodoDOI(data.zenodo_doi) : '';

      // Create markdown content for the dataset page
      const content = `---
title: "${escapeFM(data.first_author)} (${data.year})"
date: ${new Date().toISOString().split('T')[0]}
draft: false
dataset_id: "${escapeFM(folder)}"
first_author: "${escapeFM(data.first_author)}"
year: ${data.year}
paper_doi: "${escapeFM(data.paper_doi || '')}"
zenodo_doi: "${escapeFM(data.zenodo_doi || '')}"
license: "${escapeFM(data.license || '')}"
n_participants: ${data.n_participants || 0}
n_time_points: ${data.n_time_points || 0}
n_days: "${escapeFM(String(data.n_days || ''))}"
topics: "${escapeFM(data.topics || '')}"
sampling_scheme: "${escapeFM(data.sampling_scheme || '')}"
participants: "${escapeFM(data.participants || '')}"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
${data.zenodo_doi ? `<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="${zenodoUrl}">${data.zenodo_doi}</a></p>` : '<p class="dataset-access-doi"><em>Zenodo DOI not yet available</em></p>'}
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("${folder}")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("${folder}")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> ${data.first_author}</li>
<li><strong>Year:</strong> ${data.year}</li>
${data.paper_doi ? `<li><strong>Paper DOI:</strong> <a href="${data.paper_doi}">${data.paper_doi}</a></li>` : ''}
<li><strong>Topics:</strong> ${data.topics || ''}</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> ${data.n_participants}${data.participants ? ` (${data.participants})` : ''}</li>
<li><strong>Time Points:</strong> ${data.n_time_points}</li>
<li><strong>Days:</strong> ${data.n_days}</li>
<li><strong>Beeps per Day:</strong> ${formatBeepsPerDay(data.n_beeps_per_day)}</li>
<li><strong>Sampling Scheme:</strong> ${data.sampling_scheme || ''}</li>
<li><strong>Raw Timestamp:</strong> ${data.raw_time_stamp || ''}</li>
<li><strong>Implicit Missingness:</strong> ${data.implicit_missingness || ''}</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** ${data.cross_sectional_available || 'not specified'}
- **Passive Sensor Data:** ${data.passive_data_available || 'not specified'}
- **License:** ${data.license || 'not specified'}

<div class="dataset-links">
${data.zenodo_doi ? `<p><strong>Harmonized Data (Zenodo):</strong> <a href="${zenodoUrl}">${data.zenodo_doi}</a></p>` : ''}
${isValidUrl(data.link_to_data) ? `<p><strong>Original Source Data:</strong> <a href="${data.link_to_data}">${data.link_to_data}</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>` : ''}
${isValidUrl(data.link_to_codebook) ? `<p><strong>Codebook:</strong> <a href="${data.link_to_codebook}">${data.link_to_codebook}</a></p>` : ''}
${isValidUrl(data.link_to_code) ? `<p><strong>Code:</strong> <a href="${data.link_to_code}">${data.link_to_code}</a></p>` : ''}
</div>

${data.additional_comments ? `## Additional Comments\n\n${data.additional_comments}\n` : ''}

## Citation

${apaReference}

${additionalReference ? `\n### Additional Reference\n\n${additionalReference}\n` : ''}

## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
${data.features.map(feature => `| ${feature.name} | ${formatForTable(feature.description)} | ${feature.variable_type} | ${formatForTable(feature.answer_categories)} | ${formatForTable(feature.details)} | ${formatForTable(feature.labels)} | ${formatForTable(feature.transformation)} | ${formatForTable(feature.source)} | ${formatForTable(feature.assessment_type)} | ${formatForTable(feature.construct)} | ${formatForTable(feature.comments)} |`).join('\n')}
`;

      // Write the markdown file
      const outputPath = path.join(outputDir, `${folder}.md`);
      fs.writeFileSync(outputPath, content);
      console.log(`Generated dataset page for ${folder}`);
    } else {
      console.warn(`Warning: No metadata file found for ${folder}`);
    }
  });
};


generateDatasetPages();

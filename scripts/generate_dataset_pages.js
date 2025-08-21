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
      
      // Create markdown content for the dataset page
      const content = `---
title: "${data.first_author} (${data.year})"
date: ${new Date().toISOString().split('T')[0]}
draft: false
---


## Study Information

- **First Author:** ${data.first_author}
- **Year:** ${data.year}
- **Paper DOI:** [${data.paper_doi}](${data.paper_doi})
- **Topics:** ${data.topics || ''}

## Data Characteristics

- **Participants:** ${data.n_participants} (${data.participants || ''})
- **Time Points:** ${data.n_time_points}
- **Beeps per Day:** ${formatBeepsPerDay(data.n_beeps_per_day)}
- **Sampling Scheme:** ${data.sampling_scheme || ''}
- **Raw Timestamp:** ${data.raw_time_stamp || ''}
- **Implicit Missingness:** ${data.implicit_missingness || ''}

## Data Availability

- **Cross-sectional Data:** ${data.cross_sectional_available || 'not specified'}
- **Passive Sensor Data:** ${data.passive_data_available || 'not specified'}
- **Link to Original Data:** [${data.link_to_data}](${data.link_to_data})
- **Link to Codebook:** ${data.link_to_codebook ? `[${data.link_to_codebook}](${data.link_to_codebook})` : 'not available'}
- **Link to Code:** [${data.link_to_code}](${data.link_to_code})
- **License:** ${data.license || 'not specified'}

## Data Access

- **Zenodo DOI:** ${data.zenodo_doi ? `[${data.zenodo_doi}](${formatZenodoDOI(data.zenodo_doi)})` : 'not available'}
- **R:** \`openesm::get_dataset("${folder}")\`
- **Python:** \`openesm.get_dataset("${folder}")\`

${data.additional_comments ? `## Additional Comments\n\n${data.additional_comments}\n` : ''}

## Citation

${apaReference}

${additionalReference ? `\n### Additional Reference\n\n${additionalReference}\n` : ''}

## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Wording | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
${data.features.map(feature => `| ${feature.name} | ${formatForTable(feature.description)} | ${feature.variable_type} | ${formatForTable(feature.answer_categories)} | ${formatForTable(feature.wording)} | ${formatForTable(feature.labels)} | ${formatForTable(feature.transformation)} | ${formatForTable(feature.source)} | ${formatForTable(feature.assessment_type)} | ${formatForTable(feature.construct)} | ${formatForTable(feature.comments)} |`).join('\n')}
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


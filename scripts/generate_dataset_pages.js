const fs = require('fs');
const path = require('path');

// Directory containing the dataset folders
const datasetsDir = path.join(__dirname, '../datasets');

// Output directory for the dataset pages
const outputDir = path.join(__dirname, '../website/content/datasets');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to format BibTeX as APA7 reference
function formatAPAReference(bibtex) {
  if (!bibtex) return '';
  
  try {
    // Simple parser for the common fields - this is a basic implementation
    // For a production system, you might want to use a proper BibTeX parser
    const authorMatch = bibtex.match(/author\s*=\s*{([^}]+)}/);
    const titleMatch = bibtex.match(/title\s*=\s*{([^}]+)}/);
    const journalMatch = bibtex.match(/journaltitle\s*=\s*{([^}]+)}/);
    const volumeMatch = bibtex.match(/volume\s*=\s*{([^}]+)}/);
    const numberMatch = bibtex.match(/number\s*=\s*{([^}]+)}/);
    const pagesMatch = bibtex.match(/pages\s*=\s*{([^}]+)}/);
    const dateMatch = bibtex.match(/date\s*=\s*{([^}]+)}/);
    const doiMatch = bibtex.match(/doi\s*=\s*{([^}]+)}/);
    
    let reference = '';
    
    if (authorMatch) {
      // Simple author formatting 
      let authors = authorMatch[1].replace(/\s+and\s+/g, ', ');
      authors = authors.replace(/{{([^}]+)}}/g, '$1'); // Remove double braces
      reference += authors;
    }
    
    if (dateMatch) {
      const year = dateMatch[1].substring(0, 4);
      reference += ` (${year}).`;
    }
    
    if (titleMatch) {
      let title = titleMatch[1].replace(/{{([^}]+)}}/g, '$1');
      reference += ` ${title}.`;
    }
    
    if (journalMatch) {
      let journal = journalMatch[1].replace(/{{([^}]+)}}/g, '$1');
      reference += ` *${journal}*`;
      
      if (volumeMatch) {
        reference += `, *${volumeMatch[1]}*`;
        if (numberMatch) {
          reference += `(${numberMatch[1]})`;
        }
      }
      
      if (pagesMatch) {
        reference += `, ${pagesMatch[1]}`;
      }
      
      reference += '.';
    }
    
    if (doiMatch) {
      reference += ` https://doi.org/${doiMatch[1]}`;
    }
    
    return reference;
  } catch (error) {
    console.warn('Error formatting reference:', error);
    return bibtex; // Fallback to raw BibTeX
  }
}

// Function to format n_beeps_per_day
function formatBeepsPerDay(beeps) {
  if (Array.isArray(beeps)) {
    return beeps.join(', ');
  }
  return beeps || '';
}

// Function to format text fields for markdown tables
function formatForTable(text) {
  if (!text) return '';
  // Replace newlines with HTML line breaks for table cells
  return text.replace(/\n/g, '<br>');
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
- **DOI:** [${data.paper_doi}](${data.paper_doi})
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

## Data Access

- **Zenodo:** ${data.link_to_zenodo ? `[${data.link_to_zenodo}](${data.link_to_zenodo})` : 'not available'}
- **R:** \`openesm::get_dataset("${folder}")\`
- **Python:** \`openesm.get_dataset("${folder}")\`

${data.additional_comments ? `## Additional Comments\n\n${data.additional_comments}\n` : ''}

## Citation

${apaReference}

${additionalReference ? `\n### Additional Reference\n\n${additionalReference}\n` : ''}

## Variables

| Name | Type | Answer Categories | Wording | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
${data.features.map(feature => `| ${feature.name} | ${feature.type} | ${formatForTable(feature.answer_categories)} | ${formatForTable(feature.wording)} | ${formatForTable(feature.labels)} | ${formatForTable(feature.transformation)} | ${formatForTable(feature.source)} | ${formatForTable(feature.assessment_type)} | ${formatForTable(feature.construct)} | ${formatForTable(feature.comments)} |`).join('\n')}
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
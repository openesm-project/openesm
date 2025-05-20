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
      
      // Create markdown content for the dataset page
      const content = `---
title: "${data.first_author} (${data.year})"
date: ${new Date().toISOString().split('T')[0]}
draft: false
---

# ${data.first_author} (${data.year})

## Dataset Information

- **First Author:** ${data.first_author}
- **Year:** ${data.year}
- **DOI:** [${data.paper_doi}](${data.paper_doi})
- **Topics:** ${data.topics || ''}
- **Participants:** ${data.n_participants}
- **Time Points:** ${data.n_time_points}
- **Beeps per Day:** ${data.n_beeps_per_day || ''}
- **Sampling Scheme:** ${data.sampling_scheme || ''}
- **Link to Data:** [${data.link_to_data}](${data.link_to_data})
- **Link to Code:** [${data.link_to_code}](${data.link_to_code})

## Data Access

TODO this needs to be updated with the correct links
- **Zenodo:** [Download Dataset from Zenodo](https://zenodo.org/record/[RECORD_ID])
- **R:** \`openesm::get_dataset("${folder}")\`
- **Python:** \`openesm.get_dataset("${folder}")\`

## Variables

| Name | Description | Type | Coding | Answer Categories |
|------|-------------|------|------------------|--------|
${data.features.map(feature => `| ${feature.name} | ${feature.description} | ${feature.type} | ${feature.coding ? feature.coding.replace(/\r?\n/g, '<br>') : ''} |${feature.answer_categories || ''} | `).join('\n')}

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
const fs = require('fs');
const path = require('path');

// Directory containing the dataset folders
const datasetsDir = path.join(__dirname, '../datasets');

// Output file for the search index
const outputFile = path.join(__dirname, '../website/static/data/datasets-index.json');

// Ensure the output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to extract searchable text from BibTeX
function extractReferenceText(bibtex) {
  if (!bibtex) return '';
  
  // Extract key fields from BibTeX for searching
  const fields = ['author', 'title', 'journaltitle', 'journal'];
  let searchText = '';
  
  fields.forEach(field => {
    const regex = new RegExp(`${field}\\s*=\\s*{([^}]+)}`, 'i');
    const match = bibtex.match(regex);
    if (match) {
      // Clean up the text and remove special LaTeX formatting
      let text = match[1].replace(/{{([^}]+)}}/g, '$1');
      text = text.replace(/\s+and\s+/g, ' ');
      searchText += ' ' + text;
    }
  });
  
  return searchText.trim();
}

// Function to format n_beeps_per_day for search
function formatBeepsPerDay(beeps) {
  if (Array.isArray(beeps)) {
    return beeps.join(' ');
  }
  return beeps ? beeps.toString() : '';
}

// Read and process all dataset folders
const processDatasets = () => {
  // Get all subdirectories in the datasets directory
  const datasetFolders = fs.readdirSync(datasetsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  const datasets = [];
  
  datasetFolders.forEach(folder => {
    // Look for metadata file in the dataset folder
    const metadataPath = path.join(datasetsDir, folder, `${folder}_metadata.json`);
    
    if (fs.existsSync(metadataPath)) {
      const data = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      
      // Create a searchable representation of the dataset
      datasets.push({
        id: folder,
        first_author: data.first_author,
        dataset_id: data.dataset_id,
        year: data.year,
        topics: data.topics,
        participants: data.participants,
        sampling_scheme: data.sampling_scheme,
        cross_sectional_available: data.cross_sectional_available,
        passive_data_available: data.passive_data_available,
        additional_comments: data.additional_comments,
        reference_text: extractReferenceText(data.reference_a) + ' ' + extractReferenceText(data.reference_b),
        n_participants: data.n_participants,
        n_time_points: data.n_time_points,
        n_beeps_per_day: formatBeepsPerDay(data.n_beeps_per_day),
        variables: data.features.map(feature => ({
        name: feature.name,
        description: feature.description,
        type: feature.variable_type,
        coding: feature.coding,
        answer_categories: feature.answer_categories,
        details: feature.details,
        labels: feature.labels,
        transformation: feature.transformation,
        source: feature.source,
        assessment_type: feature.assessment_type,
        construct: feature.construct,
        comments: feature.comments
      })),
        url: `/datasets/${folder}/`
      });
    }
  });
  
  // Write the search index
  fs.writeFileSync(outputFile, JSON.stringify(datasets, null, 2));
  console.log(`Generated search index with ${datasets.length} datasets`);
};

processDatasets();
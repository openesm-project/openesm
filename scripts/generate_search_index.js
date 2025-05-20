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
        dataset: data.dataset,
        year: data.year,
        topics: data.topics,
        n_participants: data.n_participants,
        n_time_points: data.n_time_points,
        n_beeps_per_day: data.n_beeps_per_day || null,
        variables: data.features.map(feature => ({
          name: feature.name,
          description: feature.description,
          type: feature.type,
          coding: feature.coding,
          answer_categories: feature.answer_categories
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
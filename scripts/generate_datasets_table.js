const fs = require('fs');
const path = require('path');

// Directory containing the dataset folders
const datasetsDir = path.join(__dirname, '../datasets');

// Output file for the datasets table
// might need to change this to static/data/datasets_table.json if rendering fails
const outputFile = path.join(__dirname, '../data/datasets_table.json');

// ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read and process all dataset folders
const processDatasets = () => {
  // Get all subdirectories
  const datasetFolders = fs.readdirSync(datasetsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  const datasets = [];
  
  datasetFolders.forEach(folder => {
    // Look for metadata file in the dataset folder
    const metadataPath = path.join(datasetsDir, folder, `${folder}_metadata.json`);
    
    if (fs.existsSync(metadataPath)) {
      const data = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      
      // Create a table row representation of the dataset
      datasets.push({
        id: folder,
        first_author: data.first_author,
        year: data.year,
        topics: data.topics,
        n_participants: data.n_participants,
        n_time_points: data.n_time_points,
        n_beeps_per_day: data.n_beeps_per_day,
        n_variables: data.features.length,
        variable_types: [...new Set(data.features.map(f => f.type))].join(', '),
        url: `/datasets/${folder}/`
      });
    }
  });
  
  // Sort datasets by id
  datasets.sort((a, b) => a.id.localeCompare(b.id));
  
  // Write the datasets table data
  fs.writeFileSync(outputFile, JSON.stringify(datasets, null, 2));
  console.log(`Generated datasets table with ${datasets.length} datasets`);
};

processDatasets();
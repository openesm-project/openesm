const fs = require('fs');
const path = require('path');

// Directory containing the dataset folders
const datasetsDir = path.join(__dirname, '../datasets');

// Output file for the datasets table
// points to static directory
const outputFile = path.join(__dirname, '../website/static/data/datasets_table.json');

// Ensure the output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to format n_beeps_per_day for display
function formatBeepsPerDay(beeps) {
  if (Array.isArray(beeps)) {
    return beeps.join(', ');
  }
  return beeps || '';
}

// Read and process all dataset folders
const processDatasets = () => {
  // Get all subdirectories in the datasets directory
  const datasetFolders = fs.readdirSync(datasetsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  const datasets = datasetFolders.map(folder => {
    // Look for metadata file in the dataset folder
    const metadataPath = path.join(datasetsDir, folder, `${folder}_metadata.json`);
    
    if (fs.existsSync(metadataPath)) {
      const data = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      
      // Create a table row representation of the dataset
      return {
        dataset_id: folder,
        first_author: data.first_author,
        year: data.year,
        topics: data.topics,
        n_participants: data.n_participants,
        n_time_points: data.n_time_points,
        n_days: data.n_days,
        n_beeps_per_day: formatBeepsPerDay(data.n_beeps_per_day),
        n_variables: data.features.length,
        cross_sectional_available: data.cross_sectional_available || '',
        passive_data_available: data.passive_data_available || '',
        url: `/datasets/${folder}/`
      };
    }
    return null;
  }).filter(Boolean);
  
  // Sort datasets by id
  datasets.sort((a, b) => a.dataset_id.localeCompare(b.dataset_id));
  
  // Write the datasets table data
  fs.writeFileSync(outputFile, JSON.stringify(datasets, null, 2));
  console.log(`Generated datasets table with ${datasets.length} datasets`);
};

processDatasets();
const { spawnSync } = require('child_process');
const path = require('path');

const generators = [
  'generate_descriptives_index.js',
  'generate_datasets_table.js',
  'generate_search_index.js',
  'generate_dataset_pages.js'
];

for (const generator of generators) {
  console.log(`\nRunning ${generator}`);
  const result = spawnSync(process.execPath, [path.join(__dirname, generator)], {
    stdio: 'inherit'
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

console.log('\nWebsite content updated successfully.');
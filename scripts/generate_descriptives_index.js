const fs = require('fs');
const path = require('path');

const descriptivesDir = path.join(__dirname, '../website/static/data/descriptives');
const outputFile = path.join(__dirname, '../website/static/data/descriptives_index.json');

const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const buildIndex = () => {
  if (!fs.existsSync(descriptivesDir)) {
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    console.log('No descriptives directory found — wrote empty index');
    return;
  }

  const files = fs.readdirSync(descriptivesDir)
    .filter(f => f.endsWith('.json') && !f.startsWith('.'));

  const entries = [];

  for (const file of files.sort()) {
    const filePath = path.join(descriptivesDir, file);
    let items;
    try {
      items = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      console.warn(`Skipping ${file}: ${e.message}`);
      continue;
    }

    if (!Array.isArray(items)) {
      console.warn(`Skipping ${file}: expected top-level array`);
      continue;
    }

    for (const entry of items) {
      if (entry.dataset_id && entry.item) {
        entries.push({ dataset_id: entry.dataset_id, item: entry.item });
      }
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(entries, null, 2));
  console.log(`Generated descriptives index with ${entries.length} entries across ${files.length} dataset(s)`);
};

buildIndex();

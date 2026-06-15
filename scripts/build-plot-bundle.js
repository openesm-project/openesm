const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const outputFile = path.join(repoRoot, 'website/static/vendor/observable-plot-bundled.esm.js');

fs.mkdirSync(path.dirname(outputFile), { recursive: true });

async function build() {
  await esbuild.build({
    absWorkingDir: repoRoot,
    entryPoints: ['@observablehq/plot'],
    bundle: true,
    format: 'esm',
    platform: 'browser',
    target: ['es2020'],
    minify: true,
    legalComments: 'none',
    outfile: outputFile,
  });

  console.log(`Bundled Plot to ${path.relative(repoRoot, outputFile)}`);
}

build().catch(error => {
  console.error(error);
  process.exit(1);
});
---
title: "Technical Documentation"
description: "System architecture and technical implementation details"
---

<div class="docs-page">

This section covers the technical aspects of how openESM works, including infrastructure, workflows, and system architecture.

<div class="docs-topics" role="navigation" aria-label="Topics on this page">
	<span class="docs-topics-label">On this page</span>
	<a class="docs-topic-chip" href="#system-architecture">System architecture</a>
	<a class="docs-topic-chip" href="#metadata-repository">Metadata repository</a>
	<a class="docs-topic-chip" href="#website-repository">Website repository</a>
	<a class="docs-topic-chip" href="#descriptives-pipeline">Descriptives pipeline</a>
	<>
</div>

## System Architecture

openESM uses a static site generator approach with the following components:

- **Hugo static site generator** - Builds the website from markdown files
- **GitHub Pages** - Hosts the static website
- **Zenodo** - Stores actual dataset files with DOIs
- **GitHub repository** - Version control and metadata storage
- **Lunr.js** - Client-side search functionality


The website repository then pulls in the metadata from the metadata GitHub repository via GitHub actions upon change in the metadata repository. This allows us to keep the website and metadata in sync automatically.

## Metadata Repository
The metadata repository contains all the dataset metadata in JSON format. Each dataset has a corresponding JSON file that includes detailed information about the dataset, such as authors, publication references, and links to data files. These are then bundled into `datasets.json` for easy access via the R package. This happens automatically via GitHub actions whenever a change is made to the metadata repository.

For the versioning rules of our metadata, see the data documentation section on [Versioning and Updates](../data/).

## Website Repository
The website repository contains the static site files, including markdown files for documentation, configuration files, and the Hugo theme. The website is built using Hugo and deployed to GitHub Pages.

## Descriptives Pipeline

The [descriptives explorer](/descriptives/) shows item-level distributional
statistics (per-participant means, SDs, skewness, floor/ceiling effects,
and mode counts) for datasets where cleaned data is available.

**Computation** runs in the
[openesm-cleaning](https://github.com/bsiepe/openesm-cleaning) repository,
which is the only repository that interacts with raw participant data. The
script `descriptives/compute_descriptives.R` processes each dataset and
writes one JSON file per dataset. Key choices:

- Participants with fewer than 5 observations or zero within-person variance are excluded.
- ICC(1) is estimated via one-way ANOVA (algebraically equivalent to a random-intercept model, without singular-fit issues on constant responses).
- Skewness uses the Fisher–Pearson estimator (type 2 in R's e1071 package).
- Floor and ceiling proportions are defined relative to the global response range for each item, not each participant's personal range.
- Mode counts use frequency-table local maxima rather than kernel density, which is more reliable for discrete Likert scales.
- KDE curves are precomputed in R (100 points, Silverman bandwidth, IQR-based x-range) so the browser renders them directly.

**Output format**: one JSON array per dataset, with one entry per item.
Each entry contains `n_included`, `n_excluded`, `excluded_reasons`, ICC,
empirical scale range, mode counts, and precomputed KDE + median/IQR for
each statistic. Datasets with ≤ 150 included participants also carry raw
per-person values for individual dot overlays on the density plots.

**Dataset coverage**: only datasets indexed on openESM are shown. The
`generate_descriptives_index.js` script cross-references descriptives files
against the `datasets/` folder, so any dataset present in the cleaning
pipeline but not yet on the website is automatically excluded. When a
dataset goes live on openESM, it appears in the descriptives explorer on
the next pipeline run without any manual intervention.

**Updating**: copy new JSON files into `website/static/data/descriptives/`,
then run:

```shell
node scripts/generate_descriptives_index.js
node scripts/generate_dataset_pages.js
```

The first script rebuilds the index that drives the dataset dropdown; the
second regenerates dataset pages so variable names link to the descriptives
view when data is available.

> **Note:** these statistics are automated summaries intended for
> orientation. The exclusion criteria and statistical choices may not match
> the preprocessing appropriate for a given research question. Do not use
> them directly in scientific publications without replicating the analysis
> on the underlying data.

## Item Similarity

Each item in the descriptives explorer shows up to 10 similar items from other datasets. Similarity is computed offline using a local sentence embedding model ([BAAI/bge-large-en-v1.5](https://huggingface.co/BAAI/bge-large-en-v1.5)) via [sentence-transformers](https://sbert.net/index.html), applied to each item's description and details text. Embeddings are compared with cosine similarity, and the top 10 cross-dataset neighbors per item are stored as precomputed JSON, so no computation happens at browsing time.

Because similarity is based on item wording rather than construct labels, scores also reflect how questions are phrased. Two items measuring the same construct may score lower if worded differently; two items phrased similarly may score high even if they target different constructs.

The code for similarity computation is in the [openesm-cleaning](https://github.com/openesm-project/openesm-cleaning) repository.


</div>

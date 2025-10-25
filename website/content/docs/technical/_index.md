---
title: "Technical Documentation"
description: "System architecture and technical implementation details"
---

This section covers the technical aspects of how openESM works, including infrastructure, workflows, and system architecture.

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

---
title: "Technical Documentation"
description: "System architecture and technical implementation details"
---

# Technical Documentation

This section covers the technical aspects of how OpenESM works, including infrastructure, workflows, and system architecture.

## System Architecture

OpenESM uses a static site generator approach with the following components:

- **Hugo static site generator** - Builds the website from markdown files
- **GitHub Pages** - Hosts the static website
- **Zenodo** - Stores actual dataset files with DOIs
- **GitHub repository** - Version control and metadata storage
- **Lunr.js** - Client-side search functionality


The website repository then pulls in the metadata from the metadata GitHub repository via GitHub actions upon change in the metadata repository. This allows us to keep the website and metadata in sync automatically.
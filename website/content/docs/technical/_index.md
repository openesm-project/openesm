---
title: "Technical Documentation"
description: "System architecture and technical implementation details"
---

# Technical Documentation

This section covers the technical aspects of how OpenESM works, including infrastructure, workflows, and system architecture.

## System Architecture

OpenESM uses a **static site generator** approach with the following components:

- **Hugo static site generator** - Builds the website from markdown files
- **GitHub Pages** - Hosts the static website
- **Zenodo** - Stores actual dataset files with DOIs
- **GitHub repository** - Version control and metadata storage
- **Lunr.js** - Client-side search functionality


---
title: "Documentation"
date: 2025-05-19
---

# OpenESM Documentation

Welcome to the OpenESM documentation. Here you'll find information on how to use the OpenESM database and packages.

## Database Structure

OpenESM contains a collection of experience sampling datasets, each with standardized metadata. The datasets are stored in TSV format, and each dataset has a corresponding JSON metadata file.

## Using the R Package

```r
# Install from GitHub
devtools::install_github("yourusername/openesm-r")

# Load the package
library(openesm)

# List available datasets
list_datasets()

# Download a dataset
dataset <- get_dataset("0001_fried")

# Get metadata for a dataset
metadata <- get_metadata("0001_fried")
```

## Using the Python Package

```python
# Install from PyPI
pip install openesm

# Import the package
import openesm

# List available datasets
openesm.list_datasets()

# Download a dataset
dataset = openesm.get_dataset("0001_fried")

# Get metadata for a dataset
metadata = openesm.get_metadata("0001_fried")
``` 
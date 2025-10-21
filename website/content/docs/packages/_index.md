---
title: "Package Documentation"
description: "Using the openESM R and Python packages"
---


The openESM packages provide programmatic access to the dataset collection, making it easy to download, explore, and analyze the data directly from R or Python.

## R Package

### Installation
```r
# Install from GitHub (development version)
remotes::install_github("openesm-project/openesm-r")

# Install from CRAN (release version)
install.packages("openesm")
```

## Python Package
### Installation
```bash
# Install from PyPI
pip install openesm
```

## Getting Started
For detailed guides on how to use the packages, please refer to their respective manuals. 
Both packages share the same core functionality:

- You can list all metadata using `list_datasets()`. The returned data frame contains key information about each dataset.
- You can download datasets using `get_dataset("dataset_id")`, where `"dataset_id"` is the unique identifier for the dataset you want to access. You can also specify multiple dataset IDs to download several datasets at once.
- Both packages handle data caching automatically, so datasets are only downloaded once and stored locally for future use.
- Each dataset is returned as a standardized data frame (R) or polars DataFrame (Python), with consistent variable names and formats across studies.
- There are additional functions for obtaining citation information and metadata details.

## Example Usage

First, list all available datasets and their metadata:

```r
library(openesm)
datasets <- list_datasets()
head(datasets)
```

```python
import openesm
datasets = openesm.list_datasets()
print(datasets.head())
```

Then, download one or multiple datasets by their IDs:

```r
# Download a single dataset
df_example <- get_dataset("0001")

# Download multiple datasets
df_multiple <- get_dataset(c("0001", "0002", "0003"))
```

```python
# Download a single dataset
df_example = openesm.get_dataset("0001")
# Download multiple datasets
df_multiple = openesm.get_dataset(["0001", "0002", "0003"])
```

Obtain various information about a dataset

```r
# Print general information
print(df_example)

# Obtain citation information
cite(df_example)

# Get notes about dataset
notes(df_example)
```

```python
# Access the polars DataFrame
print(dataset.data)  

# Obtain citation information
print(dataset.cite())

# Get notes about dataset
print(dataset.notes())

```
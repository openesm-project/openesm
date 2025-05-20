---
title: "Contribute"
date: 2025-05-19
---

# Contribute to OpenESM

We welcome contributions to the OpenESM database! Here's how you can contribute:

## Adding a New Dataset

1. Fork the [OpenESM GitHub repository](https://github.com/bsiepe/openesm)
2. Prepare your dataset in TSV format
3. Create a metadata file following our JSON schema
4. Submit a pull request

## Metadata Schema

Each dataset should have a metadata file in the following format:

```json
{
  "first_author": "Author's last name",
  "dataset": "Dataset ID",
  "year": 2021,
  "paper_doi": "https://doi.org/...",
  "link_to_data": "URL to original data",
  "link_to_code": "URL to original code",
  "n_participants": 80,
  "n_time_points": 56,
  "n_beeps_per_day": 4,
  "passive_data_available": "yes/no",
  "topics": "comma-separated topics",
  "features": [
    {
      "name": "variable_name",
      "description": "Variable description",
      "type": "Variable type (e.g., Likert, categorical)",
      "coding": "Coding information"
    },
    ...
  ]
}
``` 

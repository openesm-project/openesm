---
title: "Contribute"
---

We welcome contributions to the OpenESM database, both in the form of new datasets and improvements to existing metadata and the software infrastructure. 

Here's how you can contribute:

## Adding a New Dataset

If you have a dataset that you would like to add to the OpenESM database, you can simply contact us under the [Contact](https://openesm.org/contact) section, or follow these steps to submit it yourself:


1. Fork the [OpenESM GitHub repository](https://github.com/bsiepe/openesm)
2. Prepare your dataset in TSV format, following our formatting guidelines:
   - Each dataset should be in a separate TSV file.
   - The first row should contain the variable names.
   - Each subsequent row should contain the data for each participant.
   - Ensure that the dataset is anonymized and does not contain any personally identifiable information (PII).
3. Create a dataset metadata file following our standard format. An example metadata file is provided below.
   - Include all relevant information about the dataset, such as authors, year, number of participants, time points, and topics covered.
4. Create a variable metadata file for each variable in the dataset, detailing the variable name, description, type, and coding information.
5. Submit a pull request

### Metadata Schema

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

## Contributing to Existing Datasets
If you find errors or have suggestions for existing datasets, please follow these steps:
1. Open an issue on the [GitHub repository](https://github.com/bsiepe/openesm) describing the problem or suggestion.
2. If you can, fork the repository and make the changes directly.
3. Submit a pull request with your changes.

## Improving the Software Infrastructure
If you have ideas for improving the OpenESM software infrastructure, such as the website or data processing scripts, we welcome your contributions. Please follow these steps:
1. Open an issue on the openESM GitHub repository for the website or metadata. Open an issue in the respective software package repositories to improve the software infrastructure.
2. Fork the repository and make your changes.
3. Submit a pull request with a clear description of your changes and their benefits.

## Contact
If you have any questions or need help with contributions, feel free to reach out. 

---
title: "Contribute"
---

We welcome contributions to the OpenESM database, both in the form of new datasets and improvements to existing metadata and the software infrastructure. 

# Adding a New Dataset

If you have a dataset that you would like to add to the OpenESM database, you can simply contact us. In the early stages of the project, we are happy to add datasets that meet our inclusion criteria ourselves. We then aim to continuously improve the process of adding datasets to the OpenESM database, so that you can add datasets yourself in the future.

Alternatively, you can follow these steps to add a new dataset:

Before contributing, please ensure:
- You have permission to share the data publicly
- Participants provided appropriate consent for data sharing
- The data has been de-identified and anonymized
- You can provide basic metadata about the study design and variables

1. Open an issue on the [metadata GitHub repository](https://github.com/bsiepe/openesm-metadata) to discuss the dataset you want to add. Provide a brief description of the dataset, its relevance, and any preliminary metadata you have.
2. If the dataset meets our inclusion criteria (see our [Data Documentation]({{< relref "docs/data/" >}}) for more information), we will guide you through the process of adding it to the OpenESM database.
3. Prepare your dataset in TSV format, following our formatting guidelines (see below).
4. Create a dataset metadata file following our standard format. An example metadata file is provided below.
   - Include all relevant information about the dataset, such as authors, year, number of participants, time points, and topics covered.
5. Create a variable metadata file for each variable in the dataset, detailing the variable name, description, type, and coding information.
6. Upload the dataset files to our [Zenodo community](https://zenodo.org/communities/openesm/) and obtain a DOI for citation purposes.
7. Add this information to the dataset metadata file.
8. Submit a pull request to the [metadata GitHub repository](https://github.com/bsiepe/openesm-metadata).


## Dataset Formatting Guidelines

Create a folder structure for your dataset using the following naming convention:
- **Main time series data**: `id_lastname_ts.tsv`
- **Static/baseline data**: `id_lastname_static.tsv` (if applicable)
- **Weekly data**: `id_lastname_weekly.tsv` (if applicable)
- **Passive sensor data**: `id_lastname_passive.tsv` (if applicable)
- **Metadata file**: `id_lastname_metadata.json`

Where:
- `id` is a placeholder for the dataset ID (we'll assign this)
- `lastname` is the surname of the first author
- All files, except for the metadata, should be in TSV (tab-separated values) format

### Data Cleaning Requirements

#### Column Names
- Apply consistent naming: Use `snake_case` format (lowercase with underscores). In R, you can use `janitor::clean_names()` to standardize column names.
- Replace ambiguous names like "Q1" with descriptive names like "stressed". Orient yourself at other variable names in the OpenESM database.
- Ensure variable names are informative and self-explanatory.

#### Required Standard Columns
Every time series dataset must include these four columns:

**`id`**
- Participant identifier (anonymized)
- Should be consistent across all data files for the same participant

**`day`**
- Day of data collection (numeric, starting from 1 for every participant)
- If not available in your original data, code as `NA`

**`beep`**
- Beep number per day (numeric, starting from 1)
- For daily diary studies, set all values to `1`
- If not available, code as `NA`

#### Data Splitting
Organize your data into separate files based on data type:

**Time Series Data (`_ts.tsv`)**
- Contains repeated measurements (ESM responses, daily diary entries)
- Remove any time-invariant variables (move to static file)

**Static Data (`_static.tsv`)**
- Contains time-invariant variables (age, gender, baseline questionnaires)
- Include the `id` variable to link with time series data
- If unsure whether a variable is time-invariant, check the number of distinct values per participant

**Weekly Data (`_weekly.tsv`)**
- Contains weekly assessments if applicable
- Include `id` and `week` variables

**Passive Data (`_passive.tsv`)**
- Contains sensor data, app usage, or other passively collected data

#### Data Quality Checks
- **Missing values**: Ensure all missing values are coded as `NA`
- **Convert non-standard missing codes**: Change values like `-999`, `NaN`, or empty strings to `NA`
- **Remove redundant columns**: Delete variables that can be easily computed from others (e.g., sum scores when individual items are present)
- **Check for duplicates**: Remove or flag duplicate responses if present

## Variable Metadata

For each variable in your dataset, please provide the following information in a structured format:

### Core Variable Information

#### name
The exact column name as it appears in your cleaned dataset

#### description
Brief, clear description of what the variable measures

#### variable_type
Select the most appropriate type:
- **rating_scale**: Typical ESM items on an ordinal, Likert, VAS scale
- **categorical**: Nominal variables with more than two categories
- **binary**: Yes/no, true/false, or other two-category variables
- **numeric**: Continuous variables (reaction times, counts, etc.)
- **PosixCt**: Date-time variables
- **Date**: Date-only variables
- **open-text**: Free-text responses

#### details
- Exact question text as presented to participants
- For computed variables, describe how they were created
- Example: "How stressed do you feel right now?" or "Sum of items 1-5 from stress scale"

#### labels
Response scale labels and anchors
- Format: "1 = Not at all, 7 = Extremely"
- Use line breaks to separate multiple labels
- Include all relevant scale points

### Additional Metadata

#### transformations
Document any data transformations applied:
- Log transformation
- Standardization (z-scores)
- Sum scoring
- Reverse coding
- Mean centering

#### source
Source of the question or scale:
- Standardized questionnaire name (e.g., "PANAS")
- Custom question developed for the study
- Adapted from another source

#### assessment_type
Method of data collection:
- **ESM**: Experience Sampling Method (momentary assessments)
- **Daily**: Daily diary assessments
- **Passive**: Automatically collected data
- **Other**: Other assessment methods

#### answer_categories
Number of response options (for categorical variables)

#### comments
Any additional relevant information about the variable



## Metadata Formatting Guidelines

Each dataset should have a .json metadata file in the following format:

```json
{
  "first_author": "LastName",
  "dataset": "000x",
  "year": 2024,
  "reference_a": "@article{lastname2024,\n  title = {Title of your paper},\n  author = {Last, First and Second, Author},\n  date = {2024-01-01},\n  journaltitle = {Journal Name},\n  volume = {X},\n  number = {X},\n  pages = {X--X},\n  doi = {10.xxxx/xxxxxxx}\n}",
  "reference_b": null,
  "paper_doi": "https://doi.org/10.xxxx/xxxxxxx",
  "link_to_zenodo": "https://doi.org/10.5281/zenodo.xxxxxxx",
  "link_to_data": "https://osf.io/xxxxx/ or https://zenodo.org/record/xxxxx",
  "link_to_codebook": "https://osf.io/xxxxx or URL to codebook",
  "link_to_code": "https://osf.io/xxxxx or https://github.com/username/repo",
  "license": "CC BY 4.0",
  "n_participants": 100,
  "n_time_points": 70,
  "n_beeps_per_day": "5",
  "passive_data_available": "yes",
  "which_passive_data": "GPS, accelerometer, app usage",
  "cross_sectional_available": "yes",
  "topics": "mood, stress, social interaction",
  "implicit_missingness": "no",
  "raw_time_stamp": "yes",
  "sampling_scheme": "5x/day random within windows",
  "participants": "community sample, ages 18-65",
  "additional_comments": "Any additional notes about the dataset",
  "coder_data": "Your Name",
  "coder_metadata": "Your Name",
  "features": [
    {
      "name": "id",
      "description": "Participant ID",
      "variable_type": "categorical",
      "details": "",
      "labels": "",
      "transformation": "",
      "source": "",
      "assessment_type": "ESM",
      "construct": "",
      "answer_categories": "",
      "comments": "Standard participant identifier"
    },
    {
      "name": "day",
      "description": "Day of data collection",
      "variable_type": "numeric",
      "details": "",
      "labels": "",
      "transformation": "",
      "source": "",
      "assessment_type": "ESM",
      "construct": "",
      "answer_categories": "",
      "comments": "Numeric day counter starting from 1"
    },
    {
      "name": "beep",
      "description": "Beep number per day",
      "variable_type": "numeric",
      "details": "",
      "labels": "",
      "transformation": "",
      "source": "",
      "assessment_type": "ESM",
      "construct": "",
      "answer_categories": "",
      "comments": "Beep counter within each day, starting from 1"
    },
    {
      "name": "example_variable",
      "description": "Brief description of the variable",
      "variable_type": "Likert",
      "details": "Wording of the question or statement",
      "labels": "1 = Not at all, 7 = Extremely",
      "transformation": "",
      "source": "Custom question developed for the study",
      "assessment_type": "ESM",
      "construct": "",
      "answer_categories": 7,
      "comments": ""
    }
``` 

# Contributing to Existing Datasets
If you find errors or have suggestions for existing datasets, please follow these steps:
1. Open an issue on the metadata [GitHub repository](https://github.com/bsiepe/openesm-metadata) describing the problem or suggestion.
2. If you can, fork the repository and make the changes directly.
3. Submit a pull request with your changes.

# Improving the Software Infrastructure
If you have ideas for improving the OpenESM software infrastructure, such as the website or data processing scripts, we welcome your contributions. Please follow these steps:
1. Open an issue on the openESM GitHub repository for the website or metadata. Open an issue in the respective software package repositories to improve the software infrastructure.
2. Fork the repository and make your changes.
3. Submit a pull request with a clear description of your changes and their benefits.

# Contact
If you have any questions or need help with contributions, feel free to reach out. 

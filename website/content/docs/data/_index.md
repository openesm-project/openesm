---
title: "Data Documentation"
description: "Understanding OpenESM datasets and metadata"
---


This section covers everything you need to know about the OpenESM datasets, their structure, and how to work with them effectively.

## Initial Data Search Strategy

Our inclusion criteria for datasets were the following:

- At least 20 individuals (to allow for group-based modeling later on)
- At least 20 time points possible (to estimate person-specific models)
- At least 2 self-report variables collected over time (to fit the overarching topic of the project, and to allow for multivariate modeling strategies)
- Not being synthetic data, in other words, not data simulated based on real data

## Dataset Structure

All datasets are stored in **TSV format** with standardized metadata in **JSON format**. Each dataset is stored on Zenodo with a DOI for citation purposes. The naming convention for datasets is `ID_datasetname_type.tsv` where `ID` is a unique identifier for the dataset id, `datasetname` is the name of the dataset, and `type` indicates the type of data. This type can be `ts` for time series data, `static` for cross-sectional/baseline data, or `sensor` for sensor data.




# Metadata

## Dataset Metadata
The dataset metadata are stored in the metadata `.json` file of the dataset. It includes the following fields: 

### General Information

#### Author
Primary author(s) of the dataset. This typically corresponds to the first or corresponding author of the associated publication.

#### Dataset ID
Unique dataset identifier used throughout the OpenESM database (e.g., "0001", "0002"). This ID is used in folder names and file references.

#### Year
Year when the data collection took place. This may differ from the publication year.

#### Reference A
Primary publication reference associated with the dataset. This is typically the main paper that describes the study and findings.

#### Reference B
Secondary publication reference, if applicable. Some datasets may be associated with multiple publications or follow-up studies.

### Code & Data Access

#### Link to Zenodo
DOI link to the dataset stored on Zenodo. This provides persistent access to the actual data files.

#### Paper DOI
Digital Object Identifier (DOI) of the associated publication, enabling direct access to the published research.

#### Link to Data
Direct URL to dataset files. This typically points to the TSV files containing the actual data.

#### Link to Code
URL to analysis code, when available. This may include preprocessing scripts, analysis code, or supplementary materials.

#### Link to Codebook
URL to variable documentation or codebook that provides detailed information about variables and their coding.

#### License
Data usage license specifying terms and conditions for using the dataset. Common licenses include Creative Commons variants and custom research licenses.

### Design & Participants

#### N Participants
Total number of study participants who contributed data to the dataset.

#### N Time Points
Maximum number of possible ESM observations per participant. This represents the theoretical maximum if all prompts were answered. In some datasets, this may vary by participant.

#### N Beeps/Day
Maximum Number of ESM prompts sent to participants per day. This indicates the sampling frequency of the study. In some studies, this may vary by day or participant, so we provide the maximum observed value.

#### Passive Data
Indicates whether passive data (e.g., GPS, accelerometer, app usage) was collected and is available.

#### Which Passive Data?
Specifies the types of passive data collected, such as location data, physical activity, phone usage, or sensor data.

#### Cross-sectional
Indicates availability of baseline or trait measures collected at the beginning or end of the study period. These measures can be found in the `static` file for the dataset.

#### Topics
Primary research topics or psychological constructs examined in the study (e.g., mood, stress, social interactions). This helps categorize datasets based on their focus areas, but is not exhaustive.

#### Implicit Missingness
Specifies whether missing observations are implicitly missing (i.e., non-response can be inferred) or if only completed responses are included. In some datasets, this is unclear, as most individuals have the same number of responses (including missing ones), but some individuals differ.

#### Raw Time Stamp
Indicates availability of timestamp information for when responses were provided.

#### Sampling Scheme
Describes the ESM prompt schedule (e.g., fixed intervals, random within time windows, event-contingent). 

#### Participants
Describes participant characteristics such as age range, demographic information, or clinical status. This is typically just a brief summary, and more detailed information can be found in the associated publication.

## Variable-Level Metadata

Variable-level metadata provides detailed information about each variable in the dataset, enabling researchers to understand and appropriately use the data.

### Core Variable Information

#### Name
The exact variable name as it appears in the dataset files. 

#### Description
Brief, clear description of what the variable measures or represents.

#### Variable Type
Data type specification (e.g., numeric, integer, character, date, logical) indicating how the variable should be interpreted.

#### Details
Comprehensive information including exact question wording or exact meaning of passive sensor variable.

#### Labels
Scale labels and response options. For scales, this typically includes anchor points (e.g., "1 = Not at all, 7 = Extremely").

#### Transformation
Documents any data transformations applied to the original responses, such as reverse coding, standardization, or aggregation.

### Data Collection Context

#### Source  
Origin of the variable, such as the specific questionnaire, scale, or measurement instrument used.

#### Assessment Type
Method of data collection, categorized as:
- **ESM**: Experience Sampling Method (momentary assessments)
- **Daily**: Daily assessments
- **Passive**: Automatically collected sensor or behavioral data
- **Other**: Any other type of assessment not fitting the above categories

#### Construct
The psychological or behavioral construct(s) that the variable is intended to measure (e.g., "positive affect," "relationship," "context"). Obviously, assigning a variable to a construct is subjective, so we try to be as consistent as possible, but this is not always possible. We mainly added this field to allow for easier filtering of variables, and thus sometimes used relatively broad constructs. 

#### Comments
Additional notes, caveats, or important information about the variable that doesn't fit in other categories.




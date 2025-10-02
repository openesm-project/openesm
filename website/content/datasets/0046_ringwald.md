---
title: "Ringwald (2024)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Ringwald
- **Year:** 2024
- **Paper DOI:** [https://doi.org/10.31234/osf.io/g7n4a_v3](https://doi.org/10.31234/osf.io/g7n4a_v3)
- **Topics:** empathy, affect, interpersonal, congruence, social perception

## Data Characteristics

- **Participants:** 526 (adults (18-50))
- **Time Points:** 145
- **Days:** 15
- **Beeps per Day:** event-contingent
- **Sampling Scheme:** event-contingent based on social interactions
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/unvp8/files/osfstorage](https://osf.io/unvp8/files/osfstorage)
- **Link to Codebook:** not available
- **Link to Code:** [https://osf.io/unvp8/files/osfstorage](https://osf.io/unvp8/files/osfstorage)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0046_ringwald")`
- **Python:** `openesm.get_dataset("0046_ringwald")`

## Additional Comments

ILIADD study; randomly initiated ESM surveys not available in this dataset; number of max. time points taken as maximum of observations in data; day and beep information missing


## Citation

Ringwald, W., Vize, C., & Wright, A. (2025, March 9). Do you feel what I feel? The relation between congruence of perceived affect and self-reported empathy in daily life social situations. https://doi.org/10.31234/osf.io/g7n4a_v3




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| empathy_global | Global empathy | rating_scale | 11 | Mean of other two empathy categories (3 items) and additional item:<br>"When the person(s) I interacted with showed emotions, I <br>felt their emotions inside of me." |  | Mean-scored and likely person-mean centered |  | ESM | empathy |  |
| empathy_cog | Cognitive empathy | rating_scale | 11 | Mean of two items:<br>"I considered what the person(s) I interacted with was <br>thinking." and "I considered what the person(s) I interacted with was feeling." |  | Mean-scored and likely person-mean centered |  | ESM | cognitive empathy, empathy |  |
| empathy_aff | Affective empathy | rating_scale | 11 | When the person(s) I interacted with showed emotions, I <br>felt their emotions inside of me. |  | Mean-scored and likely person-mean centered |  | ESM | affective empathy, empathy |  |
| pa_self | Positive affect self | rating_scale | 11 | How positive did you feel during the interaction? |  | Likely person-mean centered |  | ESM | positive affect, affect, interaction |  |
| pa_other | Positive affect other | rating_scale | 11 | How positive were their emotions during the interaction? |  | Likely person-mean centered |  | ESM | positive affect, affect, interaction, external rating |  |
| na_self | Negative affect self | rating_scale | 11 | How negative did you feel during the interaction? |  | Likely person-mean centered |  | ESM | negative affect, affect |  |
| na_other | Negative affect other | rating_scale | 11 | How negative were their emotions during the interaction? |  | Likely person-mean centered |  | ESM | negative affect, affect, external rating |  |

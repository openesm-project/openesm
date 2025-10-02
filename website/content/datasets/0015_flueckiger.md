---
title: "Flueckiger (2014)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Flueckiger
- **Year:** 2014
- **Paper DOI:** [https://doi.org/10.1371/journal.pone.0111080](https://doi.org/10.1371/journal.pone.0111080)
- **Topics:** health behavior, depression, academic performance, affect

## Data Characteristics

- **Participants:** 72 (first-year psychology students)
- **Time Points:** 32
- **Days:** 32
- **Beeps per Day:** 1
- **Sampling Scheme:** 1x/day at 5pm
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/27388](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/27388)
- **Link to Codebook:** [https://doi.org/10.7910/DVN/27388/U8IPJZ](https://doi.org/10.7910/DVN/27388/U8IPJZ)
- **Link to Code:** [null](null)
- **License:** CC0 1.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0015_flueckiger")`
- **Python:** `openesm.get_dataset("0015_flueckiger")`



## Citation

Flueckiger, L., Lieb, R., Meyer, A. H., & Mata, J. (2014). How health behaviors relate to academic performance via affect: An intensive longitudinal study. PLOS ONE, 9(10), e111080. https://doi.org/10.1371/journal.pone.0111080




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | Daily |  |  |
| day | Day of study | other |  |  |  |  |  | Daily |  |  |
| beep | Beep of the day | other |  |  |  |  |  | Daily |  |  |
| sleep_quality | Sleep quality | rating_scale | 4 |  | 1 = very bad<br>4 = very good |  | Pittsburgh Sleep Quality Index (German version) | Daily | sleep quality, sleep |  |
| physical_activity | Physical activity | numerical |  | Number of minutes engaged in mild, moderate and strenuous exercise weighted by metabolic equivalents and then summed to produce a total daily leisure activity score |  |  | Godin Leisure-Time Exercise Questionnaire | Daily | exercise, physical activity, activity |  |
| pa | Positive affect | rating_scale | 7 | Happy, content, cheerful | 1 = not at all<br>7 = extremely | mean-scored | Pleasentness scale (German version) | Daily | positive affect, affect |  |
| na | Negative affect | rating_scale | 7 | Sad, downhearted, frustrated | 1 = not at all<br>7 = extremely | mean-scored | Pleasentness scale (German version) | Daily | negative affect, affect |  |
| learning_goal_achievement | Learning goal achievement | rating_scale | 5 | Did you achieve the learning goals you set for yourself in the last 24 hours? (paraphrasd after item description in the paper) | 0 = not at all<br>4 = completely |  |  | Daily | learning, academic |  |

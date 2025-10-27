---
title: "Kuczynski (2021)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Kuczynski
- **Year:** 2021
- **Paper DOI:** [https://doi.org/10.1177/02654075211045717](https://doi.org/10.1177/02654075211045717)
- **Topics:** loneliness, depression, affect, social interaction

## Data Characteristics

- **Participants:** 515 (adults)
- **Time Points:** 75
- **Days:** 75
- **Beeps per Day:** 1
- **Sampling Scheme:** 1x/day in the evening
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/huz67](https://osf.io/huz67)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://osf.io/wtbx8/](https://osf.io/wtbx8/)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347657](https://doi.org/10.5281/zenodo.17347657)
- **R:** `openesm::get_dataset("0039_kuczynski")`
- **Python:** `openesm.get_dataset("0039_kuczynski")`

## Additional Comments

variable coding partially unclear; 1.0.1: changed publication year to 2021


## Citation

Kuczynski, A. M., Halvorson, M. A., Slater, L. R., & Kanter, J. W. (2022). The effect of social interaction quantity and quality on depressed mood and loneliness: A daily diary study. Journal of Social and Personal Relationships, 39(3), 734–756. https://doi.org/10.1177/02654075211045717




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | Daily |  |  |
| day | Day of study | other |  |  |  |  |  | Daily |  |  |
| beep | Beep of the day | other | 1 | only 1 beep ber day |  |  |  | Daily |  |  |
| date | Date | Date |  | Date of data collection |  |  |  | Daily |  |  |
| depressed | Depressed | rating_scale | 11 | I felt down, depressed, or hopeless today | 0 = None of the time<br>10 = All of the time |  | Patient Health Questionnaire (PHQ-2) | Daily | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| anhedonia | Anhedonia | rating_scale | 11 | I had little interest or pleasure in doing things today | 0 = None of the time<br>10 = All of the time |  | Patient Health Questionnaire (PHQ-2) | Daily | anhedonia, depression, psychopathology |  |
| loneliness | Feeling lonely | rating_scale | 11 | I felt lonely today | 0 = Not at all<br>10 = Extremely |  | UCLA Loneliness Scale | Daily | loneliness, social functioning, negative affect, affect |  |
| left_out | Feeling left out | rating_scale | 11 | I felt left out today | 0 = Not at all<br>10 = Extremely |  | UCLA Loneliness Scale | Daily | loneliness, social functioning, social exclusion |  |
| social_interaction | Social interaction quantity | rating_scale | 11 | How much social interaction did you have today? | 0 = None at all<br>10 = A lot |  |  | Daily | social interaction |  |
| vulnerability | Vulnerable self-disclosure | rating_scale | 11 | I expressed my true feelings to others today | 0 = Not at all<br>5 = A moderate amount<br>10 = Very much so |  |  | Daily | emotional expression, emotion regulation, social behavior |  |
| perceived_responsiveness | Peceived peer responsiveness | rating_scale | 11 | I felt understood/cared for by others today | 0 = Not at all<br>10 = Extremely |  |  | Daily | responsiveness, social support, social connectedness |  |
| covid_anxiety | Covid anxiety | rating_scale | 11 | unclear |  |  |  | Daily | Covid, anxiety |  |

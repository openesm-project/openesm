---
title: "Pronizius (2024)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Pronizius
- **Year:** 2024
- **Paper DOI:** [https://doi.org/10.1038/s41598-024-75261-z](https://doi.org/10.1038/s41598-024-75261-z)
- **Topics:** helping, mood, prosocial behavior, stress, COVID

## Data Characteristics

- **Participants:** 303 (adults experiencing COVID lockdown)
- **Time Points:** 35
- **Days:** 7
- **Beeps per Day:** 5
- **Sampling Scheme:** 4x semi-random, 1 prompt user-initiated before sleep
- **Raw Timestamp:** yes
- **Implicit Missingness:** unclear

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/6n5zj/](https://osf.io/6n5zj/)
- **Link to Codebook:** [https://osf.io/4tpvd](https://osf.io/4tpvd)
- **Link to Code:** [https://osf.io/6n5zj/files/osfstorage](https://osf.io/6n5zj/files/osfstorage)
- **License:** CC-By Attribution 4.0 International

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0050_pronizius")`
- **Python:** `openesm.get_dataset("0050_pronizius")`

## Additional Comments

burst 2 in the paper; more description on EMA variables: https://osf.io/kaf9e and https://osf.io/4tpvd; contains a subset of data from a larger project on Covid (see for example here: https://osf.io/fdnm7/)


## Citation

Pronizius, E., Forbes, P. A. G., Feneberg, A. C., Miculescu, B., Nater, U. M., Piperno, G., Silani, G., Stijovic, A., & Lamm, C. (2024). Everyday helping is associated with enhanced mood but greater stress when it is more effortful. Scientific Reports, 14(1), 24120. https://doi.org/10.1038/s41598-024-75261-z




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| helping_binary | Helping behavior | binary | 2 | Since the last data entry, have you helped or supported someone? | 0 = no<br>1 = yes |  |  | ESM | helping behavior, prosocial behavior, social behavior, big five, agreeableness |  |
| helping_effort | Effort for helping | rating_scale | 100 | How effortful was this helping or support? | 0 = not at all<br>100 = very much |  |  | ESM | helping effort, prosocial behavior, social behavior |  |
| stressed | Stress | rating_scale | 100 | At the moment, I feel stressed | 0 = not at all<br>100 = very much |  |  | ESM | stress, negative affect, affect |  |
| valence_mood | Mood valence | rating_scale | 100 | Mean of two bipolar items: unwell-well and dissatisfied-satisfied | 0 = not at all<br>100 = very much | mean-scored | Adapted multidimensional mood questionnaire | ESM | affect, valence, satisfaction, wellness |  |
| calmness_mood | Mood calmness | rating_scale | 100 | Mean of two bipolar items: tense-relaxed and restless-calm | 0 = not at all<br>100 = very much | mean-scored | Adapted multidimensional mood questionnaire | ESM | affect, calmness, relaxation, restlessness, tenseness |  |
| energy_mood | Mood energy | rating_scale | 100 | Mean of two bipolar items: weak-energetic and tired-awake | 0 = not at all<br>100 = very much | mean-scored | Adapted multidimensional mood questionnaire | ESM | affect, energy, tiredness |  |
| ema_time | Time of EMA prompt | numeric |  | Time of the day in hours since midnight |  |  |  | ESM |  |  |
| freetime | Freetime | binary | 2 |  | 0 = current data entry while working/studying<br>1 = during free time |  |  | ESM | activity, context |  |
| social_binary | Social activity binary | binary | 2 | Were there any social interactions since the last data entry? | 0 = No<br>1 = Yes |  |  | ESM | social interaction |  |
| weekday | Day of the week | categorical | 7 |  |  |  |  | ESM |  |  |

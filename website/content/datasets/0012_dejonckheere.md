---
title: "Dejonckheere (2019)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Dejonckheere
- **Year:** 2019
- **Paper DOI:** [https://doi.org/10.1080/02699931.2018.1524747](https://doi.org/10.1080/02699931.2018.1524747)
- **Topics:** rumination, depression, emotion regulation, afect

## Data Characteristics

- **Participants:** 100 (community sample)
- **Time Points:** 98
- **Days:** 14
- **Beeps per Day:** 7
- **Sampling Scheme:** 7x/day stratified random interval scheme
- **Raw Timestamp:** no
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://figshare.com/articles/dataset/Poor_emotion_regulation_ability_mediates_the_link_between_depressive_symptoms_and_affective_bipolarity/7150664](https://figshare.com/articles/dataset/Poor_emotion_regulation_ability_mediates_the_link_between_depressive_symptoms_and_affective_bipolarity/7150664)
- **Link to Codebook:** [https://osf.io/487eg](https://osf.io/487eg)
- **Link to Code:** [https://www.tandfonline.com/doi/full/10.1080/02699931.2018.1524747#supplemental-material-section](https://www.tandfonline.com/doi/full/10.1080/02699931.2018.1524747#supplemental-material-section)
- **License:** CC-BY 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347569](https://doi.org/10.5281/zenodo.17347569)
- **R:** `openesm::get_dataset("0012_dejonckheere")`
- **Python:** `openesm.get_dataset("0012_dejonckheere")`

## Additional Comments

some participants pre-excluded by the authors due to their compliance; subset of larger data available upon request in the EMOTE database (https://emotedatabase.com/datasets/27)


## Citation

Dejonckheere, E., Kalokerinos, E. K., Bastian, B., & Kuppens, P. (2019). Poor emotion regulation ability mediates the link between depressive symptoms and affective bipolarity. Cognition and Emotion, 33(5), 1076–1083. https://doi.org/10.1080/02699931.2018.1524747




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | numeric |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | numeric |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| happy | Happiness | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | happiness, positive affect, affect |  |
| relaxed | Relaxation | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| sad | Sadness | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | sadness, negative affect, affect |  |
| angry | Angry | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | anger, negative affect, affect |  |
| stressed | Stress | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | stress, negative affect, affect |  |

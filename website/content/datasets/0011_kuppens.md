---
title: "Kuppens (2016)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Kuppens
- **Year:** 2016
- **Paper DOI:** [https://doi.org/10.1177/1073191116645909](https://doi.org/10.1177/1073191116645909)
- **Topics:** neuroticism, affect, emotion

## Data Characteristics

- **Participants:** 95 (undergraduate students)
- **Time Points:** 70
- **Days:** 7
- **Beeps per Day:** 10
- **Sampling Scheme:** 10x/day random 90-minute intervals
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://journals-sagepub-com.ezproxy.ub.uni-marburg.de/doi/10.1177/1073191116645909#supplementary-materials](https://journals-sagepub-com.ezproxy.ub.uni-marburg.de/doi/10.1177/1073191116645909#supplementary-materials)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://journals-sagepub-com.ezproxy.ub.uni-marburg.de/doi/10.1177/1073191116645909#supplementary-materials](https://journals-sagepub-com.ezproxy.ub.uni-marburg.de/doi/10.1177/1073191116645909#supplementary-materials)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347412](https://doi.org/10.5281/zenodo.17347412)
- **R:** `openesm::get_dataset("0011_kuppens")`
- **Python:** `openesm.get_dataset("0011_kuppens")`

## Additional Comments

no day or beep information; dataset 1 in the study; no information on specific item wording; partially implicit missingness; subset of larger dataset available upon request in the EMOTE database (https://emotedatabase.com/datasets/17)


## Citation

Kuppens, P., Champagne, D., & Tuerlinckx, F. (2012). The dynamic interplay between appraisal and core affect in daily life. Frontiers in Psychology, 3, 380. https://doi.org/10.3389/fpsyg.2012.00380



### Additional Reference

Bringmann, L. F., Pe, M. L., Vissers, N., Ceulemans, E., Borsboom, D., Vanpaemel, W., Tuerlinckx, F., & Kuppens, P. (2016). Assessing temporal emotion dynamics using networks. Assessment, 23(4), 425–435. https://doi.org/10.1177/1073191116645909



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  | NA |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | NA |  |  |  | ESM |  |  |
| angry | Angry | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | anger, negative affect, affect |  |
| depressed | Depressed | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| sad | Sad | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | sadness, negative affect, affect |  |
| anxious | Anxious | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| relaxed | Relaxed | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| happy | Happy | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | happiness, positive affect, affect |  |

---
title: "Nestler (2022)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Nestler
- **Year:** 2022
- **Paper DOI:** [https://doi.org/10.1007/s11336-021-09787-w](https://doi.org/10.1007/s11336-021-09787-w)
- **Topics:** personality, affect, motivation

## Data Characteristics

- **Participants:** 85 (unclear)
- **Time Points:** 82
- **Days:** 82
- **Beeps per Day:** 1
- **Sampling Scheme:** 1x/day unclear schedule
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/gmz7e](https://osf.io/gmz7e)
- **Link to Codebook:** [https://osf.io/wjysp/?view_only=cb2bf9adeef14eb488d228ffe2141699](https://osf.io/wjysp/?view_only=cb2bf9adeef14eb488d228ffe2141699)
- **Link to Code:** [https://osf.io/53scf/](https://osf.io/53scf/)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347328](https://doi.org/10.5281/zenodo.17347328)
- **R:** `openesm::get_dataset("0002_nestler")`
- **Python:** `openesm.get_dataset("0002_nestler")`

## Additional Comments

part of the FLIP study


## Citation

Nestler, S., & Humberg, S. (2022). A lasso and a regression tree mixed-effect model with random effects for the level, the residual variance, and the autocorrelation. Psychometrika, 87(2), 506–532. https://doi.org/10.1007/s11336-021-09787-w




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | Daily |  |  |
| day | Day of study | other |  |  |  |  |  | Daily |  |  |
| beep | Beep of the day | other |  |  |  |  |  | Daily |  |  |
| sociable | Sociable | numeric | 6 | Today I was sociable | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | sociability, extraversion, big five |  |
| creative | Creative | numeric | 6 | Today I was creative | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | creativity, openness, big five |  |
| friendly | Friendly | numeric | 6 | Today I was friendly | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | friendliness, agreeableness, big five |  |
| organised | Organised | numeric | 6 | Today I was organised | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | organisation, conscientiousness, big five |  |
| self_esteem | Satisfied with myself | numeric | 6 | Today I was satisfied with myself | 1 = not at all<br>6 = extremely | grand-mean centered | Rosenberg Self-Esteem Scale | Daily | self-esteem, self-concept |  |
| weekday | Day of the week | numeric |  |  |  |  |  | Daily |  |  |
| temp | Temperature | numeric |  |  |  |  |  | Daily |  |  |
| rain | Precipitation Rainfall | numeric |  |  |  |  |  | Daily |  |  |
| nervous | Nervous | rating_scale | 6 | Today I was nervous | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | nervousness, negative affect, affect, neuroticism, big five |  |

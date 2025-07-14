---
title: "Nestler (2022)"
date: 2025-07-14
draft: false
---


## Study Information

- **First Author:** Nestler
- **Year:** 2022
- **DOI:** [https://doi.org/10.1007/s11336-021-09787-w](https://doi.org/10.1007/s11336-021-09787-w)
- **Topics:** personality, affect, motivation

## Data Characteristics

- **Participants:** 85 (unclear)
- **Time Points:** 100
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

## Data Access

- **Zenodo:** not available
- **R:** `openesm::get_dataset("0002_nestler")`
- **Python:** `openesm.get_dataset("0002_nestler")`



## Citation

Nestler, S., & Humberg, S. (2022). A lasso and a regression tree mixed-effect model with random effects for the level, the residual variance, and the autocorrelation. Psychometrika, 87(2), 506–532. https://doi.org/10.1007/s11336-021-09787-w




## Variables

| Name | Type | Answer Categories | Wording | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | categorical |  |  |  |  |  | Daily |  |  |
| day | other |  |  |  |  |  | Daily |  |  |
| beep | other |  |  |  |  |  | Daily |  |  |
| sociable | numeric | 6 | Today I was sociable | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily |  |  |
| creative | numeric | 6 | Today I was creative | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily |  |  |
| friendly | numeric | 6 | Today I was friendly | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily |  |  |
| organised | numeric | 6 | Today I was organised | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily |  |  |
| self_esteem | numeric | 6 | Today I was satisfied with myself | 1 = not at all<br>6 = extremely | grand-mean centered | Rosenberg Self-Esteem Scale | Daily |  |  |
| weekday | numeric |  |  |  |  |  | Daily |  |  |
| temp | numeric |  |  |  |  |  | Daily |  |  |
| rain | numeric |  |  |  |  |  | Daily |  |  |
| nervous | Likert | 6 | Today I was nervous | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily |  |  |

---
title: "Nestler (2022)"
date: 2025-06-04
draft: false
---

# Nestler (2022)

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
- **Link to Data:** [https://osf.io/gmz7e](https://osf.io/gmz7e)
- **Link to Codebook:** [https://osf.io/wjysp/?view_only=cb2bf9adeef14eb488d228ffe2141699](https://osf.io/wjysp/?view_only=cb2bf9adeef14eb488d228ffe2141699)
- **Link to Code:** [https://osf.io/53scf/](https://osf.io/53scf/)

## Data Access

- **Zenodo:** [Download Dataset from Zenodo](https://zenodo.org/record/[RECORD_ID])
- **R:** `openesm::get_dataset("0002_nestler")`
- **Python:** `openesm.get_dataset("0002_nestler")`



## Citation

Nestler, Steffen, Humberg, Sarah (2022). A lasso and a regression tree mixed-effect model with random effects for the level, the residual variance, and the autocorrelation. *Psychometrika*, *87*(2), 506--532. https://doi.org/10.1007/s11336-021-09787-w



## Variables

| Name | Description | Type | Answer Categories | Coding |
|------|-------------|------|------------------|--------|
| id | Participant ID | categorical |  |  |
| day | Day of study | other |  |  |
| beep | Beep of the day | other |  |  |
| gm_sociable | Unsociable (grand-mean centered) | numeric | 6 | ```
Today I was...

1 (not at all) to 6 (extremely)
``` |
| gm_creative | Creative (grand-mean centered) | numeric | 6 | ```
Today I was...

1 (not at all) to 6 (extremely)
``` |
| gm_friendly | Friendly (grand-mean centered) | numeric | 6 | ```
Today I was...

1 (not at all) to 6 (extremely)
``` |
| gm_organised | Organised (grand-mean centered) | numeric | 6 | ```
Today I was...

1 (not at all) to 6 (extremely)
``` |
| gm_se | Satisfied with myself (self-esteem, grand-mean centered) | numeric | 6 | ```
Today I was...

1 (not at all) to 6 (extremely)
``` |
| weekday | Day of the week | numeric |  | ```
0-6
``` |
| temp | Temperature | numeric |  |  |
| rain | Precipitation Rainfall | numeric |  |  |
| nervous | Nervous. (grand-mean centered) | Likert | 6 | ```
Today I was...

1 (not at all) to 6 (extremely)"
``` |


---
title: "Rowland (2020)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Rowland
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.1007/s12671-020-01335-4](https://doi.org/10.1007/s12671-020-01335-4)
- **Topics:** mindfulness, affect, network

## Data Characteristics

- **Participants:** 125 (undergraduate students)
- **Time Points:** 240
- **Days:** 40
- **Beeps per Day:** 6
- **Sampling Scheme:** 6x/day random timing
- **Raw Timestamp:** no
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/jmz2n/](https://osf.io/jmz2n/)
- **Link to Codebook:** [https://osf.io/5t4yg](https://osf.io/5t4yg)
- **Link to Code:** [https://osf.io/jmz2n/](https://osf.io/jmz2n/)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347351](https://doi.org/10.5281/zenodo.17347351)
- **R:** `openesm::get_dataset("0006_rowland")`
- **Python:** `openesm.get_dataset("0006_rowland")`



## Citation

Rowland, Z., & Wenzel, M. (2020). Mindfulness and affect-network density: does mindfulness facilitate disengagement from affective experiences in daily life? Mindfulness, 11(5), 1253–1266. https://doi.org/10.1007/s12671-020-01335-4




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | happiness, positive affect, affect | "We assessed affect in terms of eight common emotional states (e.g., Kuppens et al. 2010), which were based on the affective circumplex model (Russell 2003)." |
| excited | Excited | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | excitement, positive affect, affect, extraversion, big five |  |
| relaxed | Relaxed | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| satisfied | Satisfied | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | satisfaction, positive affect, affect |  |
| angry | Angry | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | anger, negative affect, affect |  |
| anxious | Anxious | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| depressed | Depressed | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| sad | Sad | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | sadness, negative affect, affect |  |

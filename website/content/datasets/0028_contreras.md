---
title: "Contreras (2020)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Contreras
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.3389/fpsyg.2020.544565](https://doi.org/10.3389/fpsyg.2020.544565)
- **Topics:** paranoia, sadness, closeness to others, avoidance

## Data Characteristics

- **Participants:** 23 (participants with above-average paranoid ideation and/or interpersonal sensitivity)
- **Time Points:** 70
- **Days:** 7
- **Beeps per Day:** 10
- **Sampling Scheme:** 10x/day stratified sampling
- **Raw Timestamp:** no
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/7tk4b/](https://osf.io/7tk4b/)
- **Link to Codebook:** [https://osf.io/bkn3y](https://osf.io/bkn3y)
- **Link to Code:** [https://osf.io/mezgw](https://osf.io/mezgw)
- **License:** CC-BY 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347605](https://doi.org/10.5281/zenodo.17347605)
- **R:** `openesm::get_dataset("0028_contreras")`
- **Python:** `openesm.get_dataset("0028_contreras")`



## Citation

Contreras, A., Valiente, C., Heeren, A., & Bentall, R. (2020). A temporal network approach to paranoia: A pilot study. Frontiers in Psychology, 11. https://doi.org/10.3389/fpsyg.2020.544565




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| sad | Sadness | rating_scale | 9 | At this moment, I feel sad |  |  |  | ESM | sadness, negative affect, affect |  |
| useless | Useless | rating_scale | 9 | At this moment, I feel useless |  |  | Rosenberg Self-esteem Scale (RSES) | ESM | worthlessness, negative affect, affect, big five, neuroticism, self-esteem |  |
| manage_well | Manage issues well | rating_scale | 9 | At this moment, I feel I can manage issues well |  |  | Rosenberg Self-esteem Scale (RSES) | ESM | self-efficacy, self-esteem, coping |  |
| no_trust | Cannot trust people | rating_scale | 9 | Since the last “beep”, I have had the <br>impression that I cannot trust people |  |  | Persecutory Ideation Questionnaire (PIQ) | ESM | distrust, paranoia, social cognition, schizophrenia, psychopathology |  |
| harm | Perceived harm intention | rating_scale | 9 | Since the last “beep”, I have had the <br>impression that people have tried to harm <br>me |  |  | Persecutory Ideation Questionnaire (PIQ) | ESM | paranoia, social cognition, schizophrenia, psychopathology |  |
| criticism | Was criticized | rating_scale | 9 | Since the last “beep”, I have had the <br>impression that people have criticized me |  |  | Persecutory Ideation Questionnaire (PIQ) | ESM | criticism, social threat, social cognition |  |
| others | Close to others | rating_scale | 9 | At this moment, I feel close to others |  |  |  | ESM | social connectedness, belongingness, social bonds |  |
| avoid | Experiential avoidance | rating_scale | 9 | Since the last “beep”, I have tried to <br>avoid negative thoughts and feelings |  |  | Acceptance and Action Questionnaire-II | ESM | avoidance, emotion regulation, self-regulation |  |

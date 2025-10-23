---
title: "Hasselhorn (2021)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Hasselhorn
- **Year:** 2021
- **Paper DOI:** [https://doi.org/10.3758/s13428-021-01683-6](https://doi.org/10.3758/s13428-021-01683-6)
- **Topics:** questionnaire length, affect, extraversion, perceived burden

## Data Characteristics

- **Participants:** 282 (university students)
- **Time Points:** 42
- **Days:** 14
- **Beeps per Day:** 3
- **Sampling Scheme:** 3x/day fixed schedule
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/vw3gf/](https://osf.io/vw3gf/)
- **Link to Codebook:** [https://osf.io/23db5?view_only=6e6bf509c6374759b56faac680c55825](https://osf.io/23db5?view_only=6e6bf509c6374759b56faac680c55825)
- **Link to Code:** [https://osf.io/vw3gf/?view_only=b6f9f08a6b5941eb9c17a4951d1d0cd2;](https://osf.io/vw3gf/?view_only=b6f9f08a6b5941eb9c17a4951d1d0cd2;)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347567](https://doi.org/10.5281/zenodo.17347567)
- **R:** `openesm::get_dataset("0025_hasselhorn")`
- **Python:** `openesm.get_dataset("0025_hasselhorn")`

## Additional Comments

no beep information available; study 2 of the cited paper; some variable coding unclear; original english codebook contains mixup of mood variables; also shared under https://osf.io/xt3rf/?view_only=6e6bf509c6374759b56faac680c55825


## Citation

Hasselhorn, K., Ottenstein, C., & Lischetzke, T. (2022). The effects of assessment intensity on participant burden, compliance, within-person variance, and within-person relationships in ambulatory assessment. Behavior Research Methods, 54(4), 1541–1558. https://doi.org/10.3758/s13428-021-01683-6




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | NA |  |  |  | ESM |  |  |
| week | Week of the study | numeric | 2 | Week 1 or 2 |  |  |  | ESM |  |  |
| well | Well | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very unwell<br>7 = very well |  | Mehrdimensionaler Befindlichkeitsfragebogen (MDBF) | ESM | positive affect, affect |  |
| awake | Awake | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very tired<br>7 = very awake |  | Mehrdimensionaler Befindlichkeitsfragebogen (MDBF) | ESM | alertness, energy, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very tense<br>7 = very relaxed |  | Mehrdimensionaler Befindlichkeitsfragebogen (MDBF) | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| pleased | Pleased | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very unpleased<br>7 = very pleased |  | Mehrdimensionaler Befindlichkeitsfragebogen (MDBF) | ESM | pleased, positive affect, affect |  |
| bold | Bold | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Bold | 1 = extremely inaccurate<br>5 = extremely accurate |  | Mini-Markers for Big Five | ESM | boldness, assertiveness, social behavior, extraversion, big five |  |
| energetic | Energetic | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Energetic | 1 = extremely inaccurate<br>5 = extremely accurate |  | Mini-Markers for Big Five | ESM | energy, positive affect, affect, big five, extraversion |  |
| extraverted | Extraverted | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Extraverted | 1 = extremely inaccurate<br>5 = extremely accurate |  | Mini-Markers for Big Five | ESM | social behavior, extraversion, big five |  |
| talkative | Talkative | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Talkative | 1 = extremely inaccurate<br>5 = extremely accurate |  | Mini-Markers for Big Five | ESM | talkativeness, social behavior,  extraversion, big five |  |
| study_burden | Perceived study burden | rating_scale | 5 | How much of a burden was it to participate in the study today? | 1 = not at all<br>5 = very much |  |  | ESM | study burden, participant burden |  |
| study_interfere | Study interference | rating_scale | 5 | How much did participating in the study interfere with your usual activities? | 1 = not at all<br>5 = very much |  |  | ESM | study burden, participant burden |  |
| study_annoy | Study annoyance | rating_scale | 5 | How much were you annoyed with the number of times beeped per day? | 1 = not at all<br>5 = very much |  |  | ESM | study burden, participant burden |  |
| time001 | Time | numeric |  | unclear |  |  |  | ESM |  |  |
| good | Good | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very bad<br>7 = very good | reverse-coded by the authors | Mehrdimensionaler Befindlichkeitsfragebogen (MDBF) | ESM | positive affect, affect |  |
| calm | Calm | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very restless<br>7 = very calm | reverse-coded by the authors | Mehrdimensionaler Befindlichkeitsfragebogen (MDBF) | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| rested | Rested | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very sleepy<br>7 = very rested | reverse-coded by the authors | Mehrdimensionaler Befindlichkeitsfragebogen (MDBF) | ESM | feeling rested, fatigue, positive affect, affect |  |
| happy | Happy | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very unhappy<br>7 = very happy | reverse-coded by the authors | Mehrdimensionaler Befindlichkeitsfragebogen (MDBF) | ESM | happiness, positive affect, affect |  |
| bashful | Bashful | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Talkative | 1 = extremely inaccurate<br>5 = extremely accurate |  | Mini-Markers for Big Five | ESM | social anxiety, social behavior, extraversion, big five |  |
| quiet | Quiet | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Quiet | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | social behavior, extraversion, big five |  |
| shy | Shy | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Shy | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | shyness, social behavior, extraversion, big five |  |
| withdrawn | Withdrawn | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Withdrawn | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | social withdrawal, social behavior, extraversion, big five |  |
| careless | Careless | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Careless | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | carelessness, self-regulation, conscientiousness, big five |  |
| disorganized | Disorganized | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Disorganized | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | conscientiousness, big five |  |
| inefficient | Inefficient | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Inefficient | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | efficiency, self-regulation, conscientiousness, big five |  |
| sloppy | Sloppy | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Sloppy | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | sloppiness, self-regulation, conscientiousness, big five |  |
| uncreative | Uncreative | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Uncreative | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | creativity, intellectual, openness, big five |  |
| unintellectual | Unintellectual | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Unintellectual | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | intellectual, openness, big five |  |
| envious | Envious | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Envious | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | envy, negative affect, affect, big five, agreeableness |  |
| relaxation | Relaxation | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Relaxed | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | relaxation, positive affect, affect, neuroticism, big five | named it "relaxation" to avoid duplication of "relaxed" column name |
| unsympathetic | Unsympathetic | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Unsympathetic | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | empathy, social behavior, agreeableness, big five |  |
| harsh | Harsh | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Harsh | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | harshness, social behavior, agreeableness, big five |  |
| rude | Rude | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Rude | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | rudeness, social behavior, agreeableness, big five |  |
| cold | Cold | rating_scale | 5 | How accurate does each adjective describe your behavior in the last half hour? Cold | 1 = extremely inaccurate<br>5 = extremely accurate | reverse-coded by the authors, backtransformed by us | Mini-Markers for Big Five | ESM | social behavior, agreeableness, big five |  |
| compliance | Compliance | binary | 2 |  | 0 = no<br>1 = yes |  |  | ESM |  |  |
| flag | Flag | binary | 2 | unclear |  |  |  | ESM |  |  |

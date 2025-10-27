---
title: "Wright (2017)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Wright
- **Year:** 2017
- **Paper DOI:** [https://doi.org/10.1037/abn0000286](https://doi.org/10.1037/abn0000286)
- **Topics:** affect, interpersonal disorders, personality pathology, emotions, social interactions

## Data Characteristics

- **Participants:** 222 (outpatients screened for personality
pathology and their romantic
partners)
- **Time Points:** 344
- **Days:** 21
- **Beeps per Day:** event-contingent
- **Sampling Scheme:** event-contingent based on social interactions
- **Raw Timestamp:** no
- **Implicit Missingness:** unclear

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/6ghcx/](https://osf.io/6ghcx/)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://osf.io/6ghcx](https://osf.io/6ghcx)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17348495](https://doi.org/10.5281/zenodo.17348495)
- **R:** `openesm::get_dataset("0064_wright")`
- **Python:** `openesm.get_dataset("0064_wright")`

## Additional Comments

data from original study shared in more detail in Wendt et al. (2020); number of time points based on max. rows in data; variable coding partially unclear


## Citation

Wright, A. G. C., Stepp, S. D., Scott, L. N., Hallquist, M. N., Beeney, J. E., Lazarus, S. A., & Pilkonis, P. A. (2017). The effect of pathological narcissism on interpersonal and affective processes in social interactions. Journal of Abnormal Psychology, 126(7), 898–910. https://doi.org/10.1037/abn0000286



### Additional Reference

Wendt, L. P., Wright, A. G. C., Pilkonis, P. A., Woods, W. C., Denissen, J. J. A., Kühnel, A., & Zimmermann, J. (2020). Indicators of affect dynamics: Structure, reliability, and personality correlates. European Journal of Personality, 34(6), 1060–1072. https://doi.org/10.1002/per.2277



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| pt_num | Participant number | numeric |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| timestamp | Timestamp | numeric |  |  |  |  |  | ESM |  |  |
| date | Date | numeric |  |  |  |  |  | ESM |  |  |
| dyad | Dyad | numeric |  |  |  |  |  | ESM |  |  |
| afraid | Afraid | rating_scale | 5 | Afraid | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | fear, negative affect, affect, neuroticism, big five |  |
| ashamed | Ashamed | rating_scale | 5 | Ashamed | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | shame, negative affect, affect |  |
| distressed | Distressed | rating_scale | 5 | Distressed | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | distress, negative affect, affect |  |
| guilty | Guilty | rating_scale | 5 | Guilty | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | guilt, negative affect, affect |  |
| hostile | Hostile | rating_scale | 5 | Hostile | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | hostility, anger, negative affect, affect |  |
| irritable | Irritable | rating_scale | 5 | Irritable | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | irritability, negative affect, affect, neuroticism, big five |  |
| jittery | Jittery | rating_scale | 5 | Jittery | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| nervous | Nervous | rating_scale | 5 | Nervous | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| scared | Scared | rating_scale | 5 | Scared | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | fear, negative affect, affect, neuroticism, big five |  |
| upset | Upset | rating_scale | 5 | Upset | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | upset, negative affect, affect, neuroticism, big five |  |
| frightened | Frightened | rating_scale | 5 | Frightened | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | fear, negative affect, affect, neuroticism, big five |  |
| shaky | Shaky | rating_scale | 5 | Shaky | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | fear, negative affect, affect, neuroticism, big five |  |
| angry | Angry | rating_scale | 5 | Angry | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | anger, negative affect, affect |  |
| scornful | Scornful | rating_scale | 5 | Scornful | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | anger, negative affect, affect |  |
| disgusted | Disgusted | rating_scale | 5 | Disgusted | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | disgust, negative affect, affect |  |
| loathing | Loathing | rating_scale | 5 | Loathing | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | loathing, negative affect, affect |  |
| sad | Sad | rating_scale | 5 | Sad | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | sadness, negative affect, affect |  |
| blue | Blue | rating_scale | 5 | Blue | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | sadness, negative affect, affect |  |
| downhearted | Downhearted | rating_scale | 5 | Downhearted | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | negative affect, affect |  |
| alone | Alone | rating_scale | 5 | Alone | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | loneliness, social functioning, negative affect, affect |  |
| lonely | Lonely | rating_scale | 5 | Lonely | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | loneliness, social functioning, negative affect, affect |  |
| active | Active | rating_scale | 5 | Active | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | active, energy, positive affect, affect, big five, extraversion |  |
| alert | Alert | rating_scale | 5 | Alert | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | alertness, positive affect, affect, etxraversion, big five |  |
| attentive | Attentive | rating_scale | 5 | Attentive | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | attentiveness, positive affect, affect |  |
| determined | Determined | rating_scale | 5 | Determined | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | determination, positive affect, affect |  |
| enthusiastic | Enthusiastic | rating_scale | 5 | Enthusiastic | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| excited | Excited | rating_scale | 5 | Excited | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | excitement, positive affect, affect, extraversion, big five |  |
| inspired | Inspired | rating_scale | 5 | Inspired | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | inspiration, positive affect, affect |  |
| interested | Interested | rating_scale | 5 | Interested | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | interest, positive affect, affect, big five, openness |  |
| proud | Proud | rating_scale | 5 | Proud | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | pride, positive affect, affect |  |
| strong | Strong | rating_scale | 5 | Strong | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | strength, positive affect, affect |  |

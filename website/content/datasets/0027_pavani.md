---
title: "Pavani (2017)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Pavani
- **Year:** 2017
- **Paper DOI:** [https://doi.org/10.1002/per.2109](https://doi.org/10.1002/per.2109)
- **Topics:** affect regulation, affect, personality

## Data Characteristics

- **Participants:** 78 (non-clinical individuals)
- **Time Points:** 70
- **Days:** 14
- **Beeps per Day:** 5
- **Sampling Scheme:** 5x/day fixed-schedule with personalization
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/s3chz/?view_only=](https://osf.io/s3chz/?view_only=)
- **Link to Codebook:** [https://osf.io/u95vg](https://osf.io/u95vg)
- **Link to Code:** [https://osf.io/s3chz/?view_only=](https://osf.io/s3chz/?view_only=)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0027_pavani")`
- **Python:** `openesm.get_dataset("0027_pavani")`

## Additional Comments

due to lagged variables in the dataset; it's not fully clear to which counter each value corresponds


## Citation

Pavani, J., Le Vigouroux, S., Kop, J., Congard, A., & Dauvier, B. (2017). A network approach to affect regulation dynamics and personality trait–induced variations: Extraversion and neuroticism moderate reciprocal influences between affect and affect regulation strategies. European Journal of Personality, 31(4), 329–346. https://doi.org/10.1002/per.2109




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| reappraisal | Positive reappraisal | rating_scale | 5 | I have seen what positive things a negative event can bring me. | 1 = not at all<br>5 = a lot |  |  | ESM | reappraisal, emotion regulation |  |
| distraction | Distraction | rating_scale | 5 | I have diverted my attention away from my problems. | 1 = not at all<br>5 = a lot |  |  | ESM | distraction, emotion regulation |  |
| suppression | Expressive suppression | rating_scale | 5 | I have tried not to show or express my emotions. | 1 = not at all<br>5 = a lot |  |  | ESM | suppression, emotion regulation |  |
| rumination | Rumination | rating_scale | 5 | I have wasted time thinking of a past event again and again. | 1 = not at all<br>5 = a lot |  |  | ESM | rumination, emotion regulation |  |
| appreciation | Appreciation | rating_scale | 5 | I have taken time to savor a moment of the day. | 1 = not at all<br>5 = a lot |  |  | ESM | savoring, mindfulness, well-being |  |
| sharing_affect | Social affect sharing | rating_scale | 5 |  | 1 = not at all<br>5 = a lot |  |  | ESM | coping, social support, emotion regulation, social behavior |  |
| problem_coping | Problem-focused coping | rating_scale | 5 |  | 1 = not at all<br>5 = a lot |  |  | ESM | coping, emotion regulation |  |
| pa | Positive affect | rating_scale | 5 | Highly activated positive affect: I am full of energy and spirit.<br>Activated positive affect: I am feeling enthusiastic.<br>Neither activated nor deactivated positive affect: I am happy.<br>Deactivated positive affect: I am feeling both happy and calm.<br>Highly deactivated positive affect: My whole body is relaxed. | 1 = not at all<br>5 = a lot | mean-scored | 12-point affect circumplex model | ESM | positive affect, affect |  |
| na | Negative affect | rating_scale | 5 | Highly activated negative affect: I can feel pressure building inside.<br>Activated negative affect: I am feeling irritated.<br>Neither activated nor deactivated negative affect: I am unhappy.<br>Deactivated negative affect: I am feeling sad and in slow motion.<br>Highly deactivated negative affect: I am so bored that everything around me looks drab. | 1 = not at all<br>5 = a lot | mean-scored | 12-point affect circumplex model | ESM | negative affect, affect |  |

---
title: "Grommisch (2020)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Grommisch
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.1037/emo0000669](https://doi.org/10.1037/emo0000669)
- **Topics:** emotion regulation, rumination, well-being

## Data Characteristics

- **Participants:** 179 (adults)
- **Time Points:** 189
- **Days:** 21
- **Beeps per Day:** 9
- **Sampling Scheme:** 9x/day semi-fixed intervals
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/r7jw6/](https://osf.io/r7jw6/)
- **Link to Codebook:** [https://osf.io/b5s97](https://osf.io/b5s97)
- **Link to Code:** [https://osf.io/r7jw6/](https://osf.io/r7jw6/)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0032_grommisch")`
- **Python:** `openesm.get_dataset("0032_grommisch")`

## Additional Comments

no beep information available; variable distraction is missing; data from FEEL project; sliders initialized at 50; subset of larger dataset available upon request in the EMOTE database (https://emotedatabase.com/datasets/21)


## Citation

Grommisch, G., Koval, P., Hinton, J. D. X., Gleeson, J., Hollenstein, T., Kuppens, P., & Lischetzke, T. (2020). Modeling individual differences in emotion regulation repertoire in daily life with multilevel latent profile analysis. Emotion, 20(8), 1462–1474. https://doi.org/10.1037/emo0000669




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | Not available |  |  |  | ESM |  | Not available |
| counter | Counter | other | 101 | Running number of measurement occasion per id |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 | Feeling happy at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | happiness, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 101 | Feeling relaxed at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| confident | Confident | rating_scale | 101 | Feeling confident at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | confidence, self-efficacy, positive affect, affect, big five, extraversion |  |
| sad | Sad | rating_scale | 101 | Feeling sad at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | sadness, negative affect, affect |  |
| stressed | Stressed | rating_scale | 101 | Feeling stressed at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | stress, negative affect, affect |  |
| angry | Angry | rating_scale | 101 | Feeling angry at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | anger, negative affect, affect |  |
| situation_selection | Situation Selection | rating_scale | 101 | Since last survey, I chose which situation to put myself in | 0 = not at all<br>100 = very much |  |  | ESM | situation selection, emotion regulation |  |
| situation_modification | Situation Modification | rating_scale | 101 | Since last survey, I actively changed something in the situation | 0 = not at all<br>100 = very much |  |  | ESM | situation modification, emotion regulation |  |
| reappraisal | Reappraisal | rating_scale | 101 | Mean of two items: <br>Since last survey, I changed the way I was thinking about the situation<br>Since last survey, I took a step back and looked at things from a different perspective. | 0 = not at all<br>100 = very much |  |  | ESM | reappraisal, emotion regulation |  |
| acceptance | Acceptance | rating_scale | 101 | Since last survey, I accepted my emotions as valid and important | 0 = not at all<br>100 = very much |  |  | ESM | acceptance, emotion regulation |  |
| rumination | Rumination | rating_scale | 101 | Since last survey, I thought over and over again about my emotions | 0 = not at all<br>100 = very much |  |  | ESM | rumination, emotion regulation |  |
| social_sharing | Social Sharing | rating_scale | 101 | Since last survey, I talked with someone about my emotions | 0 = not at all<br>100 = very much |  |  | ESM | emotional expression, emotion regulation, social support |  |
| ignoring | Ignoring | rating_scale | 101 | Since last survey, I ignored my emotions | 0 = not at all<br>100 = very much |  |  | ESM | suppression, emotion regulation |  |
| suppression | Suppression | rating_scale | 101 | Since last survey, I was careful not to express my emotions to others | 0 = not at all<br>100 = very much |  |  | ESM | suppression, emotion regulation |  |

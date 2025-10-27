---
title: "Kullar (2023)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Kullar
- **Year:** 2023
- **Paper DOI:** [https://doi.org/10.1037/emo0001245](https://doi.org/10.1037/emo0001245)
- **Topics:** affect, affective chronometry, mood disorders, mind wandering

## Data Characteristics

- **Participants:** 105 (participants with and without mood disorders)
- **Time Points:** 70
- **Days:** 14
- **Beeps per Day:** 5
- **Sampling Scheme:** 5x/day fixed 30-minute interval
- **Raw Timestamp:** unclear
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://github.com/mkullar/DataDrivenEmotionDynamics](https://github.com/mkullar/DataDrivenEmotionDynamics)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://github.com/mkullar/DataDrivenEmotionDynamics](https://github.com/mkullar/DataDrivenEmotionDynamics)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347798](https://doi.org/10.5281/zenodo.17347798)
- **R:** `openesm::get_dataset("0045_kullar")`
- **Python:** `openesm.get_dataset("0045_kullar")`

## Additional Comments

exact question wording unclear


## Citation

Kullar, M., Carter, S., Hitchcock, C., Whittaker, S., Wright, A. G. C., & Dalgleish, T. (2024). Patterns of emotion-network dynamics are orthogonal to mood disorder status: An experience sampling investigation. Emotion, 24, 116–129. https://doi.org/10.1037/emo0001245




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| angry | Angry | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | anger, negative affect, affect |  |
| emotion_chronometry | Emotion duration | numeric |  | Estimate of how long current emotional state lasted in minutes |  |  |  | ESM | affect, time scale |  |
| enthusiastic | Enthusiastic | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| happy | Happy | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | happiness, positive affect, affect |  |
| irritated | Irritated | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | irritability, anxiety, negative affect, affect |  |
| mind_wandering | Mind wandering | binary | 2 | wording unclear, but roughly: Are you thinking about anything else other than what you are currently doing? | 0 = no<br>1 = yes |  |  | ESM | mindfulness, distraction, mindwandering |  |
| nervous | Nervous | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| pleased | Pleased | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | pleased, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | sadness, negative affect, affect |  |
| stressed | Stressed | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | stress, negative affect, affect |  |

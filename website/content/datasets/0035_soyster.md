---
title: "Soyster (2022)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Soyster
- **Year:** 2022
- **Paper DOI:** [https://doi.org/10.1037/adb0000666](https://doi.org/10.1037/adb0000666)
- **Topics:** alcohol consumption, craving, affect, context

## Data Characteristics

- **Participants:** 33 (adult alcohol consumers)
- **Time Points:** 129
- **Days:** 15
- **Beeps per Day:** 8
- **Sampling Scheme:** 8x/day semi-random schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** unclear

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/q7upd/](https://osf.io/q7upd/)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://osf.io/bwkjq](https://osf.io/bwkjq)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347645](https://doi.org/10.5281/zenodo.17347645)
- **R:** `openesm::get_dataset("0035_soyster")`
- **Python:** `openesm.get_dataset("0035_soyster")`

## Additional Comments

no beep information available but there may be information in the original code that can be used to create it; number of max. time points taken as maximum of observations in data


## Citation

Soyster, P. D., Ashlock, L., & Fisher, A. J. (2022). Pooled and person-specific machine learning models for predicting future alcohol consumption, craving, and wanting to drink: A demonstration of parallel utility. Psychology of Addictive Behaviors, 36(3), 296–306. https://doi.org/10.1037/adb0000666




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| creation_time | Creation time | PosixCt |  |  |  |  |  | ESM |  |  |
| completion_time | Completion time | PosixCt |  |  |  |  |  | ESM |  |  |
| drink_number | Number of drinks | numeric |  | Since your last survey; how many alcoholic drinks have you had? |  |  |  | ESM | alcohol, substance use |  |
| comfortable | Comfortable | rating_scale | 101 | I feel comfortable in my current location | 0 = not at all<br>100 = as much as possible |  |  | ESM | comfortable, positive affect, affect, situation, context |  |
| stressed | Stressed | rating_scale | 101 | I feel stressed | 0 = not at all<br>100 = as much as possible |  |  | ESM | stress, negative affect, affect |  |
| depressed | Depressed | rating_scale | 101 | I feel down/depressed | 0 = not at all<br>100 = as much as possible |  |  | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| calm | Calm | rating_scale | 101 | I feel calm/relaxed | 0 = not at all<br>100 = as much as possible |  |  | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| pressure_to_drink | Pressure to drink | rating_scale | 101 | I currently feel pressure to drink | 0 = not at all<br>100 = as much as possible |  |  | ESM | substance use pressure, alcohol, substance use |  |
| enthusiastic | Enthusiastic | rating_scale | 101 | I feel enthusiastic | 0 = not at all<br>100 = as much as possible |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| happy | Happy | rating_scale | 101 | I feel happy | 0 = not at all<br>100 = as much as possible |  |  | ESM | happiness, positive affect, affect |  |
| conflict | Conflict | rating_scale | 101 | I am having conflict/fighting with others | 0 = not at all<br>100 = as much as possible |  |  | ESM | social conflict, social behavior, social stress |  |
| craving | Craving alcohol | rating_scale | 101 | I am craving alcohol | 0 = not at all<br>100 = as much as possible |  |  | ESM | craving, alcohol, substance use |  |
| impulsive | Impulsive | rating_scale | 101 | I am feeling impulsive | 0 = not at all<br>100 = as much as possible |  |  | ESM | impulsivity, self-control |  |
| drink_feel_better | Drink would make feelings better | rating_scale | 101 | A drink would make me feel better right now | 0 = not at all<br>100 = as much as possible |  |  | ESM | substance use expectancy, alcohol, substance use |  |
| perceived_peer_drinking | Perceived peer drinking | rating_scale | 101 | What % of [university] students do you think are drinking alcohol right now? |  |  |  | ESM | substance use norms, alcohol, substance use |  |
| want_to_drink | Wanting to drink | rating_scale | 101 | I would like to drink | 0 = not at all<br>100 = as much as possible |  |  | ESM | substance use desire, alcohol, substance use |  |
| delay_gratification | Delayed gratification | rating_scale | 101 | I feel able to delay gratification | 0 = not at all<br>100 = as much as possible |  |  | ESM | self-control |  |
| angry | Angry | rating_scale | 101 | I feel angry | 0 = not at all<br>100 = as much as possible |  |  | ESM | anger, negative affect, affect |  |
| drinks_today_estimate | Drinks today | numeric |  | How many drinks do you think you'll consume today? |  |  |  | ESM | substance use intention, alcohol, substance use |  |
| restless_sleep | Restless sleep | rating_scale | 101 | Last night, my sleep was restless or unsatisfying | 0 = not at all<br>100 = as much as possible |  |  | ESM | sleep difficulty, sleep quality, sleep |  |
| sleep_difficulty | Sleep difficulty | rating_scale | 101 | Last night, I had difficulty falling or staying asleep | 0 = not at all<br>100 = as much as possible |  |  | ESM | sleep difficulty, sleep quality, sleep |  |
| sleep_duration | Sleep duration in hours | numeric |  | How many hours did you sleep last night? |  |  |  | ESM | sleep duration, sleep |  |

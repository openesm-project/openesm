---
title: "Fisher (2017)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Fisher
- **Year:** 2017
- **Paper DOI:** [https://doi.org/10.1037/abn0000311](https://doi.org/10.1037/abn0000311)
- **Topics:** mood, anxiety, procrastination, depression

## Data Characteristics

- **Participants:** 40 (participants with a diagnosis of MDD and/or GAD)
- **Time Points:** 212
- **Days:** 55
- **Beeps per Day:** 4
- **Sampling Scheme:** 4x/day fixed schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** unclear

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/5ybxt/](https://osf.io/5ybxt/)
- **Link to Codebook:** [https://osf.io/h93f4](https://osf.io/h93f4)
- **Link to Code:** [https://osf.io/m63ks](https://osf.io/m63ks)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17348038](https://doi.org/10.5281/zenodo.17348038)
- **R:** `openesm::get_dataset("0033_fisher")`
- **Python:** `openesm.get_dataset("0033_fisher")`

## Additional Comments

item order was randomized; partially implicit missingness; no beep information; number of max. time points and max. days taken as maximum of observations in data


## Citation

Fisher, A. J., Reeves, J. W., Lawyer, G., Medaglia, J. D., & Rubel, J. A. (2017). Exploring the idiographic dynamics of mood and anxiety via network analysis. Journal of Abnormal Psychology, 126(8), 1044. https://doi.org/10.1037/abn0000311




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | NA |  |  |  | ESM |  |  |
| start | Start time survey | PosixCt |  |  |  |  |  | ESM |  |  |
| finish | Finish time survey | PosixCt |  |  |  |  |  | ESM | task completion, executive functioning, self-regulation |  |
| energetic | Energetic | rating_scale | 101 | To what degree have you felt energetic? | 0 = none at all<br>100 = as much as possible |  |  | ESM | energy, positive affect, affect, big five, extraversion |  |
| enthusiastic | Enthusiastic | rating_scale | 101 | To what degree have you felt enthusiastic? | 0 = none at all<br>100 = as much as possible |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| content | Content | rating_scale | 101 | To what degree have you felt content? | 0 = none at all<br>100 = as much as possible |  |  | ESM | content, positive affect, affect |  |
| irritable | Irritable | rating_scale | 101 | To what degree have you felt irritable? | 0 = none at all<br>100 = as much as possible |  |  | ESM | irritability, negative affect, affect, neuroticism, big five |  |
| restless | Restless | rating_scale | 101 | To what degree have you felt restless? | 0 = none at all<br>100 = as much as possible |  |  | ESM | restlessness, fidgety, anxiety, negative affect, affect |  |
| worried | Worried | rating_scale | 101 | To what degree have you felt worried? | 0 = none at all<br>100 = as much as possible |  |  | ESM | worry, anxiety, negative affect, affect, neuroticism, big five |  |
| guilty | Guilty/Worthless | rating_scale | 101 | To what degree have you felt worthless or guilty? | 0 = none at all<br>100 = as much as possible |  |  | ESM | guilt, negative affect, affect |  |
| afraid | Afraid | rating_scale | 101 | To what degree have you felt frightened or afraid? | 0 = none at all<br>100 = as much as possible |  |  | ESM | fear, negative affect, affect, neuroticism, big five |  |
| anhedonia | Anhedonia | rating_scale | 101 | To what degree have you experienced loss of interest or pleasure? | 0 = none at all<br>100 = as much as possible |  |  | ESM | anhedonia, depression, psychopathology |  |
| angry | Angry | rating_scale | 101 | To what degree have you felt angry? | 0 = none at all<br>100 = as much as possible |  |  | ESM | anger, negative affect, affect |  |
| hopeless | Hopeless | rating_scale | 101 | To what degree have you felt hopeless? | 0 = none at all<br>100 = as much as possible |  |  | ESM | hopelessness, depression, psychopathology |  |
| down | Down/Depressed | rating_scale | 101 | To what degree have you felt down or depressed? | 0 = none at all<br>100 = as much as possible |  |  | ESM | negative affect, affect |  |
| positive | Positive | rating_scale | 101 | To what degree have you felt positive? | 0 = none at all<br>100 = as much as possible |  |  | ESM | positive affect, affect |  |
| fatigue | Fatigue | rating_scale | 101 | To what degree have you felt fatigued? | 0 = none at all<br>100 = as much as possible |  |  | ESM | fatigue, negative affect, affect |  |
| muscle_tension | Muscle tension | rating_scale | 101 | To what degree have you experienced muscle tension? | 0 = none at all<br>100 = as much as possible |  |  | ESM | tensioned muscles, anxiety |  |
| difficulty_concentrating | Concentration problems | rating_scale | 101 | To what degree did you have difficulty concentrating? | 0 = none at all<br>100 = as much as possible |  |  | ESM | concentration, executive functioning, attention |  |
| accepted | Accepted | rating_scale | 101 | unclear |  |  |  | ESM | acceptance, social belonging, social functioning |  |
| threatened | Threatened | rating_scale | 101 | unclear |  |  |  | ESM | threat perception, social cognition |  |
| rumination | Rumination | rating_scale | 101 | unclear, but likely: To what degree have you dwelled on the past? |  |  |  | ESM | rumination, emotion regulation |  |
| avoid_activity | Avoided activities | rating_scale | 101 | To what degree did you avoid activities? | 0 = none at all<br>100 = as much as possible |  |  | ESM | activity avoidance, avoidance |  |
| reassure | Sought reassurance | rating_scale | 101 | To what degree did you seek reassurance? | 0 = none at all<br>100 = as much as possible |  |  | ESM | coping, social support, emotion regulation, social behavior |  |
| procrastination | Procrastinated | rating_scale | 101 | To what degree did you procrastinate? | 0 = none at all<br>100 = as much as possible |  |  | ESM | procrastination, activity |  |
| hours | unclear | numeric |  | unclear |  |  |  | ESM |  |  |
| difficult | unclear | rating_scale | 101 | unclear |  |  |  | ESM |  |  |
| unsatisfy | unclear | rating_scale | 101 | unclear |  |  |  | ESM |  |  |
| avoid_people | Avoided people | rating_scale | 101 | To what degree did you avoid people? | 0 = none at all<br>100 = as much as possible |  |  | ESM | avoidance |  |

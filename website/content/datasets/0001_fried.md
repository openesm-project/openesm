---
title: "Fried (2021)"
date: 2025-09-11
draft: false
---


## Study Information

- **First Author:** Fried
- **Year:** 2021
- **Paper DOI:** [https://doi.org/10.1177/21677026211017839](https://doi.org/10.1177/21677026211017839)
- **Topics:** mental health, social contact, COVID

## Data Characteristics

- **Participants:** 80 (student sample)
- **Time Points:** 56
- **Days:** 14
- **Beeps per Day:** 4
- **Sampling Scheme:** 4x/day fixed schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/mvdpe/](https://osf.io/mvdpe/)
- **Link to Codebook:** [https://osf.io/mx87b](https://osf.io/mx87b)
- **Link to Code:** [https://osf.io/mvdpe/](https://osf.io/mvdpe/)
- **License:** CC-BY4.0

## Data Access

- **Zenodo DOI:** [10.5072/zenodo.308201](https://doi.org/10.5072/zenodo.308201)
- **R:** `openesm::get_dataset("0001_fried")`
- **Python:** `openesm.get_dataset("0001_fried")`

## Additional Comments

some individuals have more than the maximum number of observations due to some prompts being expired


## Citation

Fried, E. I., Papanikolaou, F., & Epskamp, S. (2022). Mental health and social contact during the COVID-19 pandemic: An ecological momentary assessment study. Clinical Psychological Science, 10(2), 340–354. https://doi.org/10.1177/21677026211017839




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| scheduled | Time of beep schedule | PosixCt |  |  |  |  |  | ESM |  |  |
| issued | Time of beep issue | PosixCt |  |  |  |  |  | ESM |  |  |
| response | Time of response | PosixCt |  |  |  |  |  | ESM |  |  |
| duration | Duration of response | other |  |  |  |  |  | ESM |  |  |
| difficulties_relaxing | Difficulties relaxing | rating_scale | 5 | I found it difficult to relax. | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | relaxation, negative affect, affect, neuroticism, big five, psychopathology |  |
| irritable | Irritable | rating_scale | 5 | I felt (very) irritable | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | irritability, negative affect, affect, neuroticism, big five, psychopathology |  |
| worry | Worried | rating_scale | 5 | I was worried about different things | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | worry, negative affect, affect, neuroticism, big five, psychopathology |  |
| nervous | Nervous | rating_scale | 5 | I felt nervous, anxious or on edge | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| nothing_look_forward | Nothing to look forward to | rating_scale | 5 | I felt that I had nothing to look forward | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | depression, psychopathology |  |
| anhedonia | Anhedonia | rating_scale | 5 | I couldn't seem to experience any positive feeling at all | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | anhedonia, depression, psychopathology |  |
| tired | Tired | rating_scale | 5 | I felt tired | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | tiredness, negative affect, affect, biological, psychopathology |  |
| hungry | Hungry | rating_scale | 5 | In the past 3h, I was hungry | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | hunger, biological |  |
| alone | Feeling alone | rating_scale | 5 | I felt like I lack companionship, or that I am not close to people. | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | loneliness, social functioning |  |
| angry | Angry | rating_scale | 5 | I felt angry | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | anger, negative affect, affect |  |
| social_offline | Offline social contacts | rating_scale | 5 | I spent ___ minutes on meaningful, offline, social interaction | 1 = 0 minutes<br>2 = 5-15 min<br>3 = 15-60 min<br>4 = 1-2 hours<br>5 = > 2h |  |  | ESM | offline social interaction, social interaction, activity, context |  |
| social_online | Online social contacs | rating_scale | 5 | I spent __ minutes using social media to kill/pass the time | 1 = 0 minutes<br>2 = 5-15 min<br>3 = 15-60 min<br>4 = 1-2 hours<br>5 = > 2h |  |  | ESM | online social interaction, social interaction, activity, context |  |
| time_music | Time spent listening to music | rating_scale | 5 | I spent __ minutes listening to music | 1 = 0 minutes<br>2 = 5-15 min<br>3 = 15-60 min<br>4 = 1-2 hours<br>5 = > 2h |  |  | ESM | music, activity, context |  |
| procrastinated | Procastination | rating_scale | 5 | To what degree did you postpone working on a task? | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | procrastination, activity |  |
| time_outdoors | Time spent outdoors | rating_scale | 5 | I spent __ minutes outside (outdoors)? | 1 = 0 minutes<br>2 = 5-15 min<br>3 = 15-60 min<br>4 = 1-2 hours<br>5 = > 2h |  |  | ESM | location, context |  |
| covid_occupied | Occupied with COVID | rating_scale | 5 | I spent __ occupied with the coronavirus (e.g. watching news thinking about it talking to friends about it) | 1 = 0 minutes<br>2 = 5-15 min<br>3 = 15-60 min<br>4 = 1-2 hours<br>5 = > 2h |  |  | ESM | Covid |  |
| covid_worry | Worried about COVID | rating_scale | 5 | I spent __ thinking about my own health or that of my close friends and family members regarding the coronavirus | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | Covid |  |
| time_home | Time spent at home | rating_scale | 5 | I spent __ at home (including the home of parents/partner) | 1 = Not at all <br>2 = Slightly<br>3 = Moderately<br>4 = Very<br>5 = Extremly |  |  | ESM | location, context |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | Date |  |  |  |  |  | ESM |  |  |

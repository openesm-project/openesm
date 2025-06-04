---
title: "Fried (2021)"
date: 2025-06-04
draft: false
---

# Fried (2021)

## Study Information

- **First Author:** Fried
- **Year:** 2021
- **DOI:** [https://doi.org/10.1177/21677026211017839](https://doi.org/10.1177/21677026211017839)
- **Topics:** mental health, social contact, COVID

## Data Characteristics

- **Participants:** 80 (student sample)
- **Time Points:** 56
- **Beeps per Day:** 4
- **Sampling Scheme:** 4x/day fixed schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Data:** [https://osf.io/mvdpe/](https://osf.io/mvdpe/)
- **Link to Codebook:** [https://osf.io/mx87b](https://osf.io/mx87b)
- **Link to Code:** [https://osf.io/mvdpe/](https://osf.io/mvdpe/)

## Data Access

- **Zenodo:** [Download Dataset from Zenodo](https://zenodo.org/record/[RECORD_ID])
- **R:** `openesm::get_dataset("0001_fried")`
- **Python:** `openesm.get_dataset("0001_fried")`

## Additional Comments

some individuals have more than the maximum number of observations due to some prompts being expired


## Citation

Fried, Eiko I., Papanikolaou, Faidra, Epskamp, Sacha (2022). Mental health and social contact during the {{COVID-19. *Clinical Psychological Science*, *10*(2), 340--354. https://doi.org/10.1177/21677026211017839



## Variables

| Name | Description | Type | Answer Categories | Coding |
|------|-------------|------|------------------|--------|
| id | Participant ID | categorical |  |  |
| scheduled | Time of beep schedule | PosixCt |  |  |
| issued | Time of beep issue | PosixCt |  |  |
| response | Time of response | PosixCt |  |  |
| duration | Duration of response | other |  |  |
| relax | I found it difficult to relax. | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| irritable | I felt (very) irritable | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| worry | I was worried about different things | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| nervous | I felt nervous, anxious or on edge | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| future | I I felt that I had nothing to look forward | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| anhedonia | I couldn't seem to experience any positive feeling at all | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| tired | I felt tired | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| hungry | In the past 3h, I was hungry | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| alone | I felt like I lack companionship, or that I am not close to people. | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| angry | I felt angry | Likert | 5 | ```
1 = Not at all 
2 = Slightly
3 = Moderately
4 = Very
5 = Extremly
``` |
| social_offline | I spent ___ minutes on meaningful, offline, social interaction | Likert | 5 | ```
1 = 0 minutes
2 = 5-15 min
3 = 15-60 min
4 = 1-2 hours
5 = > 2h
``` |
| social_online | I spent __ minutes using social media to kill/pass the time | Likert | 5 | ```
1 = 0 minutes
2 = 5-15 min
3 = 15-60 min
4 = 1-2 hours
5 = > 2h
``` |
| music | I spent __ minutes listening to music | Likert | 5 | ```
1 = 0 minutes
2 = 5-15 min
3 = 15-60 min
4 = 1-2 hours
5 = > 2h
``` |
| procrastinate | Procastination | Likert | 5 | ```
To what degree did you postpone working on a task?

1 = 0 minutes
2 = 5-15 min
3 = 15-60 min
4 = 1-2 hours
5 = > 2h
``` |
| outdoors | I spent __ minutes outside (outdoors) ? | Likert | 5 | ```
1 = 0 minutes
2 = 5-15 min
3 = 15-60 min
4 = 1-2 hours
5 = > 2h
``` |
| c19_occupied | I spent __ occupied with the coronavirus (e.g. watching news thinking about it talking to friends about it) | Likert | 5 | ```
1 = 0 minutes
2 = 5-15 min
3 = 15-60 min
4 = 1-2 hours
5 = > 2h
``` |
| c19_worry | I spent __ thinking about my own health or that of my close friends and family members regarding the coronavirus | Likert | 5 | ```
1 = 0 minutes
2 = 5-15 min
3 = 15-60 min
4 = 1-2 hours
5 = > 2h
``` |
| home | I spent __ at home (including the home of parents/partner) | Likert | 5 | ```
1 = 0 minutes
2 = 5-15 min
3 = 15-60 min
4 = 1-2 hours
5 = > 2h
``` |
| day | Day of study | other |  |  |
| beep | Beep of the day | other |  |  |
| date | Date | Date |  |  |


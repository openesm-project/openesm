---
title: "van Halem (2020)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** van Halem
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.1002/per.2252](https://doi.org/10.1002/per.2252)
- **Topics:** skin conductance, affect, arousal, situation

## Data Characteristics

- **Participants:** 82 (first-year psychology students in Tilburg)
- **Time Points:** 69
- **Days:** 5
- **Beeps per Day:** partially event-contingent
- **Sampling Scheme:** random triggers and triggers based on skin conductance
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** yes
- **Link to Original Data:** [https://osf.io/v4qh9/](https://osf.io/v4qh9/)
- **Link to Codebook:** [https://osf.io/v8sa7](https://osf.io/v8sa7)
- **Link to Code:** [https://osf.io/v4qh9/](https://osf.io/v4qh9/)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17348032](https://doi.org/10.5281/zenodo.17348032)
- **R:** `openesm::get_dataset("0070_vanhalem")`
- **Python:** `openesm.get_dataset("0070_vanhalem")`

## Additional Comments

more raw sensor data available on OSF; questions originally in Dutch


## Citation

van Halem, S., van Roekel, E., Kroencke, L., Kuper, N., & Denissen, J. (2020). Moments that matter? On the complexity of using triggers based on skin conductance to sample arousing events within an experience sampling framework. European Journal of Personality, 34(5), 794–807. https://doi.org/10.1002/per.2252




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| trigger | Survey trigger type | other |  | Contains information about random trigger type or on reason why the EDA algorithm triggered the survey |  |  |  | ESM |  |  |
| trigger_date | Survey trigger date | PosixCt |  |  |  |  |  | ESM |  |  |
| trigger_time | Survey trigger time | PosixCt |  |  |  |  |  | ESM |  |  |
| form | Type of form | categorical |  |  | Missing<br>ESM_Questions<br>End-Of-Day Questionnaire |  |  | ESM |  |  |
| form_start_date | Form start date | PosixCt |  |  |  |  |  | ESM |  |  |
| form_start_time | Form start time | PosixCt |  |  |  |  |  | ESM |  |  |
| form_finish_date | Form finish date | PosixCt |  |  |  |  |  | ESM |  |  |
| form_finish_time | Form finish time | PosixCt |  |  |  |  |  | ESM |  |  |
| form_upload_date | Form upload date | PosixCt |  |  |  |  |  | ESM |  |  |
| form_upload_time | Form upload time | PosixCt |  |  |  |  |  | ESM |  |  |
| missing | Missing form | categorical |  | Reason for missing form | NA<br>Ignored<br>Dismissed<br>Incomplete<br>Canceled_by_new_alarm |  |  | ESM |  |  |
| company | Company | numeric |  | I am... | 0 = alone<br>1 = friends<br>2 = partner<br>3 = family<br>3a = father<br>3b = mother<br>3c = brother(s)/sister(s)<br>3d = other family<br>4 = housemates-who are not family<br>5 = fellow students or colleagues<br>6 = strangers<br>7 = teammates<br>8 = other, namely |  |  | ESM | social interaction, context |  |
| location | Location | freetext |  | Where are you? |  |  |  | ESM | context, location |  |
| event | Event | freetext |  | What happened at the time of the beep? |  |  |  | ESM | context, activity |  |
| pleasant | Pleasant | rating_scale | 101 | This was unpleasant/pleasant |  |  |  | ESM | situational appraisal, context | referring to the event |
| important | Important | rating_scale | 101 | This was unimportant/important |  |  |  | ESM | situational appraisal, context | referring to the event |
| expected | Expected | rating_scale | 101 | This was unexpected/expected |  |  |  | ESM | situational appraisal, context | referring to the event |
| aroused | Aroused | rating_scale | 101 | I now feel (just before the beep went off)... aroused |  |  |  | ESM | arousal |  |
| enthusiastic | Enthusiastic | rating_scale | 101 | I now feel (just before the beep went off)... enthusiastic |  |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| relaxed | Relaxed | rating_scale | 101 | I now feel (just before the beep went off)... relaxed |  |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| satisfied | Satisfied | rating_scale | 101 | I now feel (just before the beep went off)... satisfied |  |  |  | ESM | satisfaction, positive affect, affect |  |
| irritable | Irritable | rating_scale | 101 | I now feel (just before the beep went off)... irritable |  |  |  | ESM | irritability, negative affect, affect, neuroticism, big five |  |
| energetic | Energetic | rating_scale | 101 | I now feel (just before the beep went off)... energetic |  |  |  | ESM | energy, positive affect, affect, big five, extraversion |  |
| calm | Calm | rating_scale | 101 | I now feel (just before the beep went off)... calm |  |  |  | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| cheerful | Cheerful | rating_scale | 101 | I now feel (just before the beep went off)... cheerful |  |  |  | ESM | cheerfulness, positive affect, affect |  |
| irritated | Irritated | rating_scale | 101 | I now feel (just before the beep went off)... irritated |  |  |  | ESM | irritability, anxiety, negative affect, affect |  |
| bored | Bored | rating_scale | 101 | I now feel (just before the beep went off)... irritated |  |  |  | ESM | boredom, negative affect, affect |  |
| nervous | Nervous | rating_scale | 101 | I now feel (just before the beep went off)... nervous |  |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 101 | I now feel (just before the beep went off)... sad |  |  |  | ESM | sadness, negative affect, affect |  |
| angry | Angry | rating_scale | 101 | I now feel (just before the beep went off)... angry |  |  |  | ESM | anger, negative affect, affect |  |
| gloomy | Gloomy | rating_scale | 101 | I now feel (just before the beep went off)... gloomy |  |  |  | ESM | gloominess, negative affect, affect |  |
| lifeless | Lifeless | rating_scale | 101 | I now feel (just before the beep went off)... lifeless |  |  |  | ESM | low energy, negative affect, affect |  |
| insecure | Insecure | rating_scale | 101 | I now feel (just before the beep went off)... insecure |  |  |  | ESM | insecurity, negative affect, affect, neuroticism, big five |  |
| fearful | Fearful | rating_scale | 101 | I now feel (just before the beep went off)... fearful |  |  |  | ESM | fearfulness, negative affect, affect, neuroticism, big five |  |
| happy | Happy | rating_scale | 101 | I now feel (just before the beep went off)... happy |  |  |  | ESM | happiness, positive affect, affect |  |
| worried | Worried | rating_scale | 101 | I now feel (just before the beep went off)... worried |  |  |  | ESM | worry, anxiety, negative affect, affect, neuroticism, big five |  |
| stressed | Stressed | rating_scale | 101 | I now feel (just before the beep went off)... stressed |  |  |  | ESM | stress, negative affect, affect |  |
| academic | Academic | rating_scale | 101 | The current situation can be described as... academic |  |  | CAPTION | ESM | situational appraisal, context |  |
| tiring | Tiring | rating_scale | 101 | The current situation can be described as... tiring |  |  | CAPTION | ESM | situational appraisal, context |  |
| heartwarming | Heartwarming | rating_scale | 101 | The current situation can be described as... heartwarming |  |  | CAPTION | ESM | situational appraisal, context |  |
| standard | Standard | rating_scale | 101 | The current situation can be described as... standard |  |  | CAPTION | ESM | situational appraisal, context |  |
| productive | Productive | rating_scale | 101 | The current situation can be described as... productive |  |  | CAPTION | ESM | situational appraisal, context |  |
| crazy | Crazy | rating_scale | 101 | The current situation can be described as... crazy |  |  | CAPTION | ESM | situational appraisal, context |  |
| malicious | Malicious | rating_scale | 101 | The current situation can be described as... malicious |  |  | CAPTION | ESM | situational appraisal, context |  |
| learned | Learned | rating_scale | 101 | The current situation can be described as... learned |  |  | CAPTION | ESM | situational appraisal, context | somehwat unclear what "learned" is supposed to mean here |
| stressful | Stressful | rating_scale | 101 | The current situation can be described as... stressful |  |  | CAPTION | ESM | situational appraisal, context |  |
| precious | Precious | rating_scale | 101 | The current situation can be described as... precious |  |  | CAPTION | ESM | situational appraisal, context |  |
| ordinary | Ordinary | rating_scale | 101 | The current situation can be described as... ordinary |  |  | CAPTION | ESM | situational appraisal, context |  |
| useful | Useful | rating_scale | 101 | The current situation can be described as... useful |  |  | CAPTION | ESM | situational appraisal, context |  |
| silly | Silly | rating_scale | 101 | The current situation can be described as... silly |  |  | CAPTION | ESM | situational appraisal, context |  |
| repulsive | Repulsive | rating_scale | 101 | The current situation can be described as... repulsive |  |  | CAPTION | ESM | situational appraisal, context |  |
| event_day | Daily event | freetext | 101 | Describe the main event that took place today |  |  |  | Daily | context, activity |  |
| event_time | Daily event time | PosixCt | 101 | When did this event take place (time)? |  |  |  | Daily | context, activity |  |
| wearing_annoying | Wearing of EDA device annoying | rating_scale | 101 | Wearing the skin conduction band today was annoying |  |  |  | Daily | sensor, usability, skin conductance |  |
| wearing_obstructing | Wearing of EDA device obstructing | rating_scale | 101 | Wearing the skin conductance band today has hampered me in daily tasks |  |  |  | Daily | sensor, usability, skin conductance |  |
| wearing_influence | Wearing of EDA device influence | rating_scale | 101 | Wearing the band made me behave differently today |  |  |  | Daily | sensor, usability, skin conductance |  |

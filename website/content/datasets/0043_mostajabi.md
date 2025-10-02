---
title: "Mostajabi (2024)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Mostajabi
- **Year:** 2024
- **Paper DOI:** [https://doi.org/10.31219/osf.io/3szng](https://doi.org/10.31219/osf.io/3szng)
- **Topics:** personality, affect, personality disorder, interpersonal

## Data Characteristics

- **Participants:** 330 (college students)
- **Time Points:** 50
- **Days:** 10
- **Beeps per Day:** 5
- **Sampling Scheme:** random momentary prompts and scheduled daily diary
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/dcfb5/files/osfstorage](https://osf.io/dcfb5/files/osfstorage)
- **Link to Codebook:** [https://osf.io/dcfb5/files/osfstorage](https://osf.io/dcfb5/files/osfstorage)
- **Link to Code:** [https://osf.io/dcfb5/files/osfstorage](https://osf.io/dcfb5/files/osfstorage)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0043_mostajabi")`
- **Python:** `openesm.get_dataset("0043_mostajabi")`

## Additional Comments

S2 in the paper; no beep information available; some timestamp coding unclear; affect items could relate to feeling at the moment or during the past interaction; https://osf.io/7a5de provides a good overview of previous usage of data


## Citation

Mostajabi, J., & Wright, A. (2024, July 9). An exploratory study on disinhibition and interpersonal outcomes in daily life. https://doi.org/10.31219/osf.io/3szng



### Additional Reference

Vize, C., Scott, L., Wright, A., & Kamarck, T. (2023, February 15). Socio-affective dynamics of psychopathy in daily life. https://doi.org/10.31234/osf.io/m9nxz



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| begin_day_ema | Day of prompt beginning | PosixCt |  |  |  |  |  | ESM |  |  |
| begin_time_ema | Time of Prompt beginning | PosixCt |  |  |  |  |  | ESM |  |  |
| finish_day_ema | Day of EMA finishing | PosixCt |  |  |  |  |  | ESM |  |  |
| finish_time_ema | Time of EMA finishing | PosixCt |  |  |  |  |  | ESM |  |  |
| begin_day_eod | unclear | PosixCt |  | unclear |  |  |  | ESM |  |  |
| begin_time_eod | unclear | PosixCt |  | unclear |  |  |  | ESM |  |  |
| finish_day_eod | unclear | PosixCt |  | unclear |  |  |  | ESM |  |  |
| finish_time_eod | unclear | PosixCt |  | unclear |  |  |  | ESM |  |  |
| duration_ema | Duration of EMA | numeric |  | in seconds |  |  |  | ESM |  |  |
| duration_eod | unclear | numeric |  |  |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 | How happy do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | happiness, positive affect, affect |  |
| ashamed | Ashamed | rating_scale | 101 | How ashamed do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | shame, negative affect, affect |  |
| proud | Proud | rating_scale | 101 | How proud do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | pride, positive affect, affect |  |
| nervous | Nervous | rating_scale | 101 | How nervous do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| confident | Confident | rating_scale | 101 | How confident do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | confidence, self-efficacy, positive affect, affect, big five, extraversion |  |
| hostile | Hostile | rating_scale | 101 | How hostile do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | hostility, anger, negative affect, affect |  |
| sad | Sad | rating_scale | 101 | How sad do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | sadness, negative affect, affect |  |
| excited | Excited | rating_scale | 101 | How excited do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | excitement, positive affect, affect, extraversion, big five |  |
| angry | Angry | rating_scale | 101 | How angry do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | anger, negative affect, affect |  |
| relaxed | Relaxed | rating_scale | 101 | How relaxed do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| interaction | Interaction occurence | binary | 2 | unclear wording, but likely: Did you have any social interactions since your last prompt? | 0 = no<br>1 = yes |  |  | ESM | social interaction |  |
| dom_sub_you | Dominance of interaction behavior | rating_scale | 101 | Please rate your behavior toward the other person during this interaction. | -50 = Accomodating/Submissive/Timid<br>50 = Assertive/Dominant/Controlling |  | Visual Interpersonal Analogue Scale (VIAS) | ESM | interpersonal dominance, social behavior, big five, extraversion |  |
| warm_cold_you | Warmth of interaction behavior | rating_scale | 101 | Please rate your behavior toward the other person during this interaction. | -50 = Cold/Distant/Hostile<br>50 = Warm/Friendly/Caring |  | Visual Interpersonal Analogue Scale (VIAS) | ESM | interpersonal affiliation, social behavior, big five, agreeableness |  |
| happy_interaction | Happy during interaction | rating_scale | 101 | How happy did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | happiness, positive affect, affect, social interaction |  |
| nervous_interaction | Nervous during interaction | rating_scale | 101 | How nervous did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five, social interaction |  |
| sad_interaction | Sad during interaction | rating_scale | 101 | How sad did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | sadness, negative affect, affect, social interaction |  |
| excited_interaction | Excited during interaction | rating_scale | 101 | How excited did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | excitement, positive affect, affect, extraversion, big five, social interaction |  |
| angry_interaction | Angry during interaction | rating_scale | 101 | How angry did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | anger, negative affect, affect, social interaction |  |
| relaxed_interaction | Relaxed during interaction | rating_scale | 101 | How relaxed did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five, social interaction |  |

---
title: "Mostajabi (2024)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Mostajabi
- **Year:** 2024
- **Paper DOI:** [https://doi.org/10.31219/osf.io/3szng](https://doi.org/10.31219/osf.io/3szng)
- **Topics:** personality, affect, personality disorder, interpersonal

## Data Characteristics

- **Participants:** 396 (college students)
- **Time Points:** 42
- **Days:** 7
- **Beeps per Day:** 6
- **Sampling Scheme:** unclear
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/dcfb5](https://osf.io/dcfb5)
- **Link to Codebook:** [https://osf.io/dcfb5/files/agmcx](https://osf.io/dcfb5/files/agmcx)
- **Link to Code:** [https://osf.io/dcfb5](https://osf.io/dcfb5)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17386028](https://doi.org/10.5281/zenodo.17386028)
- **R:** `openesm::get_dataset("0044_mostajabi")`
- **Python:** `openesm.get_dataset("0044_mostajabi")`

## Additional Comments

S3 in the paper; https://osf.io/7a5de provides a good overview of previous usage of data


## Citation

Mostajabi, J., & Wright, A. (2024, July 9). An exploratory study on disinhibition and interpersonal outcomes in daily life. https://doi.org/10.31219/osf.io/3szng




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
| happy | Happy | rating_scale | 101 | How happy do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | happiness, positive affect, affect |  |
| proud | Proud | rating_scale | 101 | How proud do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | pride, positive affect, affect |  |
| content | Content | rating_scale | 101 | How content do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | content, positive affect, affect |  |
| excited | Excited | rating_scale | 101 | How excited do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | excitement, positive affect, affect, extraversion, big five |  |
| relaxed | Relaxed | rating_scale | 101 | How relaxed do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| ashamed | Ashamed | rating_scale | 101 | How ashamed do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | shame, negative affect, affect |  |
| nervous | Nervous | rating_scale | 101 | How nervous do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| hostile | Hostile | rating_scale | 101 | How hostile do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | hostility, anger, negative affect, affect |  |
| sad | Sad | rating_scale | 101 | How sad do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | sadness, negative affect, affect |  |
| angry | Angry | rating_scale | 101 | How angry do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | anger, negative affect, affect |  |
| duration_ema | Duration of EMA | numeric |  | in seconds |  |  |  | ESM |  |  |
| interaction | Interaction occurence | binary | 2 | unclear coding, but likely: Did you have any social interactions since your last prompt? |  |  |  | ESM | social interaction |  |
| dom_sub_you | Dominance of interaction behavior | rating_scale | 101 | Please rate your behavior toward the other person during this interaction. | -50 = Accomodating/Submissive/Timid<br>50 = Assertive/Dominant/Controlling |  | Visual Interpersonal Analogue Scale (VIAS) | ESM | interpersonal dominance, social behavior, big five, extraversion |  |
| warm_cold_you | Warmth of interaction behavior | rating_scale | 101 | Please rate your behavior toward the other person during this interaction. | -50 = Cold/Distant/Hostile<br>50 = Warm/Friendly/Caring |  | Visual Interpersonal Analogue Scale (VIAS) | ESM | interpersonal affiliation, social behavior, big five, agreeableness |  |

---
title: "Blanke (2020)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Blanke
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.1037/emo0000659](https://doi.org/10.1037/emo0000659)
- **Topics:** mindfulness, reflection, affect, well-being, emotion regulation

## Data Characteristics

- **Participants:** 70 (students)
- **Time Points:** 54
- **Days:** 9
- **Beeps per Day:** 6
- **Sampling Scheme:** 6x/day within self-selected 12hr timeframe
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/nvt6a/](https://osf.io/nvt6a/)
- **Link to Codebook:** [https://osf.io/v2am8](https://osf.io/v2am8)
- **Link to Code:** [null](null)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0059_blanke")`
- **Python:** `openesm.get_dataset("0059_blanke")`

## Additional Comments

study 1 in the paper


## Citation

Blanke, E. S., Schmidt, M. J., Riediger, M., & Brose, A. (2020). Thinking mindfully: How mindfulness relates to rumination and reflection in daily life. Emotion, 20(8), 1369–1381. https://doi.org/10.1037/emo0000659




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| miss_status | Missingness status | categorical | 4 | Missingness status of the beep | 0 = missing<br>1 = partial missing<br>2 = completed<br>3 = skipped |  |  | ESM |  |  |
| time | Timestamp | PosixCt | 4 | Beep time |  |  |  | ESM |  |  |
| attention_present | Present-moment attention | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I focused my attention on the present moment. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | acceptance, mindfulness, attention |  |
| opened_up | Open to what was happening | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I opened myself up to what was happening. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | acceptance, mindfulness |  |
| concentrated_present | Concentred on moment | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I concentrated on what I was doing at that moment. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | acceptance, mindfulness, concentration |  |
| nonjudgmental_feelings | Nonjudgmental acceptance of feelings | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I thought some of my thoughts/feelings were slightly off. (Reverse-coded) | 0 = Does not apply at all<br>6 = Applies strongly | Reverse-coded |  | ESM | acceptance, mindfulness |  |
| nonjudgmental_thoughts | Nonjudgmental acceptance of thoughts | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>Things went through my mind that I should not really be engaging myself with. (Reverse-coded) | 0 = Does not apply at all<br>6 = Applies strongly | Reverse-coded |  | ESM | acceptance, mindfulness |  |
| nonjudgmental_behavior | Nondjudgmental acceptance of behahviors | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I thought I could have acted more appropriately at a certain time.  (Reverse-coded) | 0 = Does not apply at all<br>6 = Applies strongly | Reverse-coded |  | ESM | acceptance, mindfulness |  |
| happy | Happy | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Happy? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | happiness, positive affect, affect |  |
| content | Content | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Content? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | content, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Relaxed? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| downhearted | Downhearted | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Downhearted? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | negative affect, affect |  |
| distressed | Distressed | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Distressed? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | distress, negative affect, affect |  |
| nervous | Nervous | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Nervous? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| ruminate_feelings | Rumination about feelings | rating_scale | 7 | How well do the following statements describe how you handled your thoughts and feelings since waking up/ since the last beep?<br>I could not stop thinking about my feelings. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | rumination, emotion regulation |  |
| ruminate_things | Rumination about things | rating_scale | 7 | How well do the following statements describe how you handled your thoughts and feelings since waking up/ since the last beep?<br>I could not stop thinking about certain things. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | rumination, emotion regulation |  |
| relaxed_thoughts_feelings | Relaxed thoughts about feelings | rating_scale | 7 | How well do the following statements describe how you handled your thoughts and feelings since waking up/ since the last beep?<br>I thought about my feelings in a calm and relaxed fashion. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | reflection, emotion regulation |  |
| relaxed_thoughts_things | Relaxed thoghts about things | rating_scale | 7 | How well do the following statements describe how you handled your thoughts and feelings since waking up/ since the last beep?<br>I thought about certain things in a calm and relaxed fashion. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | reflection, emotion regulation |  |

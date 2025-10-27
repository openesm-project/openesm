---
title: "Söderberg (2024)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Söderberg
- **Year:** 2024
- **Paper DOI:** [https://doi.org/10.12688/f1000research.157148.1](https://doi.org/10.12688/f1000research.157148.1)
- **Topics:** schooling, relationships, self-efficacy, emotions, sleep

## Data Characteristics

- **Participants:** 302 (middle and secondary school students)
- **Time Points:** 40
- **Days:** 10
- **Beeps per Day:** 4
- **Sampling Scheme:** 4x/day fixed and random sampling
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://doi.org/10.5281/zenodo.13332148](https://doi.org/10.5281/zenodo.13332148)
- **Link to Codebook:** [https://zenodo.org/records/13332148](https://zenodo.org/records/13332148)
- **Link to Code:** [null](null)
- **License:** CC-BY 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347732](https://doi.org/10.5281/zenodo.17347732)
- **R:** `openesm::get_dataset("0019_soederberg")`
- **Python:** `openesm.get_dataset("0019_soederberg")`

## Additional Comments

inconsistency between notification times and the beep ordering by the authors; contains multiple sampling frequencies; the "stupid" item could also be interpreted as "hostile" in Swedish


## Citation

Mölsä, M., Forsman, A. K., & Söderberg, P. (2024, December 16). A 10-day experience sampling dataset on subjective experiences of middle and upper secondary school students in 2022. https://doi.org/10.12688/f1000research.157148.1




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  |  |  |  |
| day | Day of study | other |  |  |  |  |  |  |  |  |
| beep | Beep of the day | other |  |  |  |  |  |  |  |  |
| notification_time | Time of notification | PosixCt |  |  |  |  |  |  |  |  |
| notification_no | Notification number | numeric |  |  |  |  |  |  |  |  |
| reminder | Reminder | binary | 2 |  | 0 = no<br>1 = yes |  |  |  |  |  |
| session_instance_response_lapse | Response lapse | other |  | Response lapse in minutes:second |  |  |  |  |  |  |
| session_length | Session length | other |  | Session length in minutes:seconds |  |  |  |  |  |  |
| sleep_quality | Sleep quality | rating_scale | 5 | Good morning. Did you sleep well last night? | 1 = Not at all<br>5 = Yes, absolutely |  |  | Daily | sleep quality, sleep |  |
| morning_breakfast | Breakfast eaten | binary | 2 | Have you eaten (or will you eat) breakfast this morning? | 0 = no<br>1 = yes |  |  | Daily | food, activity |  |
| morning_ok | Feeling okay about school | rating_scale | 5 | Do you feel okay about going to school today? | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education |  |
| enjoy_school | Enjoying school | rating_scale | 5 | How do you feel right now?: I enjoy being at school | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | positive affect, affect, school, education |  |
| stressed | Stress | rating_scale | 5 | How do you feel right now?: I feel stressed | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | stress, negative affect, affect |  |
| motivated | Motivated | rating_scale | 5 | How do you feel right now?: I feel motivated | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | motivation |  |
| angry | Angry | rating_scale | 5 | How do you feel right now?: I feel angry | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | anger, negative affect, affect |  |
| liked | Liked | rating_scale | 5 | How do you feel right now?:  I feel liked | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | positive affect, affect |  |
| lonely | Lonely | rating_scale | 5 | How do you feel right now?: I feel lonely | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | loneliness, negative affect, affect |  |
| alert | Alert | rating_scale | 5 | How do you feel right now?: I feel alert | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | alertness, positive affect, affect, etxraversion, big five |  |
| stupid | Stupid | rating_scale | 5 | How do you feel right now?: I feel stupid | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | negative affect, affect | Note: In Swedish, this item was "jag känner mig dum", which could also be interpreted as "hostility". However, it was intended to ask about stupidity |
| lecture_enjoy | Enjoyable lecture | rating_scale | 5 | The most recent lecture: The lesson was enjoyable | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| lecture_difficult | Lecture difficulty | rating_scale | 5 | The most recent lecture: The content was difficult | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| lecture_interesting | Lecture interest | rating_scale | 5 | The most recent lecture: The content was interesting | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| teacher_strict | Teacher strictness | rating_scale | 5 | The most recent lecture: The teacher was strict | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| teacher_fair | Teacher fairness | rating_scale | 5 | The most recent lecture: The teacher was fair | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| teacher_encouraging | Teacher encouraging | rating_scale | 5 | The most recent lecture: The teacher was encouraging | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| peer_relationship | Peer relationships | rating_scale | 5 | Did you have a good time with your classmates during the morning/the afternoon? | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | relationship, social interaction, school |  |
| schoolday_satisfaction | Schoolday satisfaction | rating_scale | 10 | What rating would you give for the overall school day? |  |  |  | Daily | satisfaction, school, education, activity, context |  |

---
title: "Tammilehto (2022)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Tammilehto
- **Year:** 2022
- **Paper DOI:** [https://doi.org/10.1080/02699931.2022.2081534](https://doi.org/10.1080/02699931.2022.2081534)
- **Topics:** emotion regulation, attachment, neuroticism

## Data Characteristics

- **Participants:** 122 (undergraduate students)
- **Time Points:** 49
- **Days:** 7
- **Beeps per Day:** 7
- **Sampling Scheme:** 7x/day semi-random intervals, scheduled in blocks
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/e8423/files/osfstorage](https://osf.io/e8423/files/osfstorage)
- **Link to Codebook:** [https://osf.io/u59nd/files/](https://osf.io/u59nd/files/)
- **Link to Code:** [https://osf.io/u59nd/files/](https://osf.io/u59nd/files/)
- **License:** CC-By Attribution 4.0 International

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0054_tammilehto")`
- **Python:** `openesm.get_dataset("0054_tammilehto")`

## Additional Comments

no day and beep information available


## Citation

Tammilehto, J., Bosmans ,Guy, Kuppens ,Peter, Flykt ,Marjo, Peltonen ,Kirsi, Kerns ,Kathryn A., & Lindblom, J. (2022). Dynamics of attachment and emotion regulation in daily life: Uni- and bidirectional associations. Cognition and Emotion, 36(6), 1109–1131. https://doi.org/10.1080/02699931.2022.2081534




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  | not available |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | not available |  |  |  | ESM |  |  |
| discrete_time | Discrete time since study beginning | numeric | 92 | Discrete time (1 hour and 43 min blocks) | 1= first block<br>92 = last block |  |  | ESM |  |  |
| time_elapsed | Time elapsed | numeric |  | Time of receiving EMA questionnaires in hours from the<br>beginning of the study |  |  |  | ESM |  |  |
| reappraisal | Reappraisal | rating_scale | 5 | I thought about the situation in a more positive way |  |  |  | ESM | reappraisal, emotion regulation |  |
| rumination | Rumination | rating_scale | 5 | I thought over and over again about the negative situation and<br>feelings |  |  |  | ESM | rumination, emotion regulation |  |
| suppression | Suppression | rating_scale | 5 | I avoided showing my situation-elicited negative feelings |  |  |  | ESM | suppression, emotion regulation |  |
| feel_loved | Feeling loved | rating_scale | 7 | I feel loved |  |  | State Adult Attachment Measure | ESM | attachment security, attachment |  |
| rely_on | Rely on someone | rating_scale | 7 | I feel like I have someone to rely on |  |  | State Adult Attachment Measure | ESM | attachment security, attachment, social support |  |
| need_love | Need for love | rating_scale | 7 | I feel a strong need to be unconditionally loved right now |  |  | State Adult Attachment Measure | ESM | attachment anxiety, attachment, social needs |  |
| share_feelings | Wanting to share feelings | rating_scale | 7 | I want to share my feelings with someone |  |  | State Adult Attachment Measure | ESM | attachment anxiety, attachment, social needs |  |
| keep_distance | Keeping distance | rating_scale | 7 | If someone tried to get close to me, I would try to keep my<br>distance |  |  | State Adult Attachment Measure | ESM | attachment avoidance, attachment, social behavior |  |
| closeness_nervous | Emotional closeness makes nervous | rating_scale | 7 | The idea of being emotionally close to someone makes me<br>nervous |  |  | State Adult Attachment Measure | ESM | attachment avoidance, attachment, social anxiety |  |

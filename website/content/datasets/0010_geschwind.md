---
title: "Geschwind (2013)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Geschwind
- **Year:** 2013
- **Paper DOI:** [https://doi.org/10.1371/journal.pone.0060188](https://doi.org/10.1371/journal.pone.0060188)
- **Topics:** depression, neuroticism, mood

## Data Characteristics

- **Participants:** 129 (individuals with residual depressive symptoms)
- **Time Points:** 200
- **Days:** 20
- **Beeps per Day:** 10
- **Sampling Scheme:** 6x/day 90-minute interval
- **Raw Timestamp:** no
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://doi.org/10.1371/journal.pone.0060188.s004](https://doi.org/10.1371/journal.pone.0060188.s004)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://doi.org/10.1371/journal.pone.0060188.s001](https://doi.org/10.1371/journal.pone.0060188.s001)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347473](https://doi.org/10.5281/zenodo.17347473)
- **R:** `openesm::get_dataset("0010_geschwind")`
- **Python:** `openesm.get_dataset("0010_geschwind")`

## Additional Comments

part of an experimental study; contains two study periods, each of the same length; pleasantness is on a different scale and its scale labels are unclear


## Citation

Geschwind, N., Peeters, F., Drukker, M., van Os, J., & Wichers, M. (2011). Mindfulness training increases momentary positive emotions and reward experience in adults vulnerable to depression: A randomized controlled trial. Journal of Consulting and Clinical Psychology, 79(5), 618. https://doi.org/10.1037/a0024595



### Additional Reference

Bringmann, L. F., Vissers, N., Wichers, M., Geschwind, N., Kuppens, P., Peeters, F., Borsboom, D., & Tuerlinckx, F. (2013). A network approach to psychopathology: New insights into clinical longitudinal data. PLoS ONE, 8(4). https://doi.org/10.1371/journal.pone.0060188



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| study_period | Study period | binary | 2 |  | 0 = six-day baseline period before mindfulness therapy (therapy group only)<br>1 = six-day post-baseline period after mindfulness therapy (therapy group only) |  |  | ESM |  |  |
| cheerful | Cheerful | rating_scale | 7 | I feel cheerful | 1 = not at all<br>7 = very |  |  | ESM | cheerfulness, positive affect, affect |  |
| pleasantness | Pleasantness of event | rating_scale | 8 | Pleasantness of the most important event that happened between the current and the previous response | -4 = unclear<br>3 = unclear |  |  | ESM | event pleasantness, daily event,  activity, context | Labels and wording not fully clear, but original article states that "High pleasantness thus reflected high skill, low effort, low preference for doing something else, and high enjoyment of the activity" |
| worried | worried | rating_scale | 7 | I feel worried | 1 = not at all<br>7 = very |  |  | ESM | worry, anxiety, negative affect, affect, neuroticism, big five |  |
| fearful | Fearful | rating_scale | 7 | I feel fearful | 1 = not at all<br>7 = very |  |  | ESM | fearfulness, negative affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 7 | I feel sad | 1 = not at all<br>7 = very |  |  | ESM | sadness, negative affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | I feel relaxed | 1 = not at all<br>7 = very |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |

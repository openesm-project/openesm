---
title: "Koval (2013)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Koval
- **Year:** 2013
- **Paper DOI:** [http://doi.org/10.1037/a0033579](http://doi.org/10.1037/a0033579)
- **Topics:** well-being, affect, depression, affect dynamics

## Data Characteristics

- **Participants:** 95 (undergraduate students)
- **Time Points:** 70
- **Days:** 7
- **Beeps per Day:** 10
- **Sampling Scheme:** 10x/day stratified random interval
- **Raw Timestamp:** no
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/zm6uw](https://osf.io/zm6uw)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://osf.io/x4rne](https://osf.io/x4rne)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347968](https://doi.org/10.5281/zenodo.17347968)
- **R:** `openesm::get_dataset("0031_koval")`
- **Python:** `openesm.get_dataset("0031_koval")`

## Additional Comments

subset of larger dataset available upon request in the EMOTE database (https://emotedatabase.com/datasets/23)


## Citation

Koval, P., Pe, M. L., Meers, K., & Kuppens, P. (2013). Affect dynamics in relation to depressive symptoms: Variable, unstable or inert? Emotion, 13(6), 1132–1141. https://doi.org/10.1037/a0033579



### Additional Reference

Dejonckheere, E., Mestdagh, M., Houben, M., Rutten, I., Sels, L., Kuppens, P., & Tuerlinckx, F. (2019). Complex affect dynamics add limited information to the prediction of psychological well-being. Nature Human Behaviour, 3(5), 478–491. https://doi.org/10.1038/s41562-019-0555-0



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 | Felt happy | 0 = not at all<br>100 = very much |  |  | ESM | happiness, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 101 | Felt relaxed | 0 = not at all<br>100 = very much |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 101 | Felt sad | 0 = not at all<br>100 = very much |  |  | ESM | sadness, negative affect, affect |  |
| angry | Angry | rating_scale | 101 | Felt angry | 0 = not at all<br>100 = very much |  |  | ESM | anger, negative affect, affect |  |
| stressed | Stress | rating_scale | 101 | Felt stressed | 0 = not at all<br>100 = very much |  |  | ESM | stress, negative affect, affect |  |

---
title: "Hoebeke (2022)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Hoebeke
- **Year:** 2022
- **Paper DOI:** [https://doi.org/10.36131/cnfioritieditore20220504](https://doi.org/10.36131/cnfioritieditore20220504)
- **Topics:** rumination, depression, anxiety

## Data Characteristics

- **Participants:** 40 (community sample)
- **Time Points:** 56
- **Days:** 14
- **Beeps per Day:** 4
- **Sampling Scheme:** 4x/day time-contingent equidistant intervals
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/dngyk/](https://osf.io/dngyk/)
- **Link to Codebook:** [https://osf.io/wj6xn](https://osf.io/wj6xn)
- **Link to Code:** [https://osf.io/dngyk/](https://osf.io/dngyk/)
- **License:** CC-BY4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0013_hoebeke")`
- **Python:** `openesm.get_dataset("0013_hoebeke")`

## Additional Comments

some variable codings unclear


## Citation

Hoebeke, Y., Blanchard, M. A., Contreras, A., & Heeren, A. (2022). An experience sampling measure of the key features of rumination. Clinical Neuropsychiatry, 19(5), 288–297. https://doi.org/10.36131/cnfioritieditore20220504




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| created | Time of creation | PosixCt |  |  |  |  |  | ESM |  |  |
| modified | Time of modification | PosixCt |  |  |  |  |  | ESM |  |  |
| ended | Time of ending | PosixCt |  |  |  |  |  | ESM |  |  |
| expired | Time of expiring | PosixCt |  |  |  |  |  | ESM |  |  |
| activity | unclear, likely: Absorption in activity | rating_scale | 101 | unclear |  |  |  | ESM |  |  |
| perseverance | Perseverance | rating_scale | 101 | How much time did you spend thinking of one or more emotional<br>experiences? | 0 = None<br>100 = All the time |  |  | ESM | rumination, emotion regulation |  |
| negativity | Negativity | rating_scale | 101 | To what extent were your thoughts negative? | 0 = Not at all<br>100 = Extremely |  |  | ESM | negative thinking, negativity |  |
| self_criticism | Self-criticism | rating_scale | 101 | To what extent were your thoughts self-critical? | 0 = Not at all<br>100 = Extremely |  |  | ESM | self-critical thinking, criticism |  |
| brooding | Brooding | rating_scale | 101 | How much did you think about the causes and consequences of <br>emotional experiences? | 0 = Not at all<br>100 = Absolutely |  |  | ESM | rumination, emotion-focused reflection |  |
| replaying | Replaying | rating_scale | 101 | To what extent have you mentally replayed emotional experiences that <br>you’ve had? | 0 = Not at all<br>100 = Absolutely |  |  | ESM | rumination, emotion regulation |  |
| att_control | Executive control | rating_scale | 101 | unclear |  |  |  | ESM | executive control |  |

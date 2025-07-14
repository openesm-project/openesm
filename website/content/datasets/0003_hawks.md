---
title: "Hawks (2023)"
date: 2025-07-14
draft: false
---


## Study Information

- **First Author:** Hawks
- **Year:** 2023
- **DOI:** [https://doi.org/10.1016/j.bpsc.2022.12.002](https://doi.org/10.1016/j.bpsc.2022.12.002)
- **Topics:** momentary cognition, context, stress

## Data Characteristics

- **Participants:** 122 (adults)
- **Time Points:** 30
- **Beeps per Day:** 3
- **Sampling Scheme:** 3x/day fixed time windows
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** unclear
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://github.com/zwihawks/PredictingMomentaryCog](https://github.com/zwihawks/PredictingMomentaryCog)
- **Link to Codebook:** [https://pmc.ncbi.nlm.nih.gov/articles/instance/10264553/bin/NIHMS1858073-supplement-1.pdf](https://pmc.ncbi.nlm.nih.gov/articles/instance/10264553/bin/NIHMS1858073-supplement-1.pdf)
- **Link to Code:** [https://github.com/zwihawks/PredictingMomentaryCog](https://github.com/zwihawks/PredictingMomentaryCog)

## Data Access

- **Zenodo:** not available
- **R:** `openesm::get_dataset("0003_hawks")`
- **Python:** `openesm.get_dataset("0003_hawks")`



## Citation

Hawks, Zoë W., Strong, Roger, Jung, Laneé, Beck, Emorie D., Passell, Eliza J., Grinspoon, Elizabeth, Singh, Shifali, Frumkin, Madelyn R., Sliwinski, Martin, Germine, Laura T. (2023). Accurate prediction of momentary cognition from intensive longitudinal data. *Biological Psychiatry: Cognitive Neuroscience and Neuroimaging*, *8*(8), 841--851. https://doi.org/10.1016/j.bpsc.2022.12.002



## Variables

| Name | Type | Answer Categories | Wording | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | categorical |  |  |  |  |  |  |  |  |
| day | other | 10 |  |  |  |  |  |  |  |
| beep | other |  |  |  |  |  |  |  |  |
| sitting_id | numeric |  |  |  |  |  |  |  |  |
| interruptions | binary | 2 |  |  |  |  |  |  |  |
| nervous | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Nervous. |  |  |  |  |  |  |
| afraid | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Afraid |  |  |  |  |  |  |
| enthusiastic | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Enthusiastic |  |  |  |  |  |  |
| distressed | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Distressed |  |  |  |  |  |  |
| excited | Likert | 5 |  |  |  |  |  |  |  |
| scared | Likert | 5 |  |  |  |  |  |  |  |
| upset | Likert | 5 |  |  |  |  |  |  |  |
| alert | Likert | 5 |  |  |  |  |  |  |  |
| determined | Likert | 5 |  |  |  |  |  |  |  |
| inspired | Likert | 5 |  |  |  |  |  |  |  |
| depressed | Likert | 5 |  |  |  |  |  |  |  |
| restless_or_fidgety | Likert | 5 |  |  |  |  |  |  |  |
| so_sad_that_nothing_could_cheer_you_up | Likert | 5 |  |  |  |  |  |  |  |
| worried | Likert | 5 |  |  |  |  |  |  |  |
| hopeless | Likert | 5 |  |  |  |  |  |  |  |
| irritated | Likert | 5 |  |  |  |  |  |  |  |
| that_everything_was_an_effort | Likert | 5 |  |  |  |  |  |  |  |
| argument_stress | Likert | 5 |  |  |  |  |  |  |  |
| let_pass_stress | Likert | 5 |  |  |  |  |  |  |  |
| friend_relative_stress | Likert | 5 |  |  |  |  |  |  |  |
| health_stress | Likert | 5 |  |  |  |  |  |  |  |
| other_stress | Likert | 5 |  |  |  |  |  |  |  |
| covid_stress | Likert | 5 |  |  |  |  |  |  |  |
| socialfunc_interactions | ordinal | 4 |  |  |  |  |  |  |  |
| alert_sleepiness | Likert | 9 |  |  |  |  |  |  |  |
| going_on | ordinal | 4 |  |  |  |  |  |  |  |
| concentrating | ordinal | 4 |  |  |  |  |  |  |  |
| noisy | ordinal | 4 |  |  |  |  |  |  |  |
| finish | ordinal | 5 |  |  |  |  |  |  |  |
| organization | ordinal | 5 |  |  |  |  |  |  |  |
| mentaleffort | ordinal | 5 |  |  |  |  |  |  |  |
| forgetful | ordinal | 5 |  |  |  |  |  |  |  |
| fidgeting | ordinal | 5 |  |  |  |  |  |  |  |
| motor | ordinal | 5 |  |  |  |  |  |  |  |
| study_time | numeric |  |  |  |  |  |  |  |  |
| sleep_dur | numeric |  |  |  |  |  |  |  |  |
| socialfunc_comp | numeric |  |  |  |  |  |  |  |  |
| ds_median_r_tc | numeric |  |  |  |  |  |  |  |  |
| test_position | ordinal | 4 |  |  |  |  |  |  |  |
| crt_median_r_tc | numeric |  |  |  |  |  |  |  |  |
| gcpt_dprime | numeric |  |  |  |  |  |  |  |  |
| mot_percent_correct | numeric |  |  |  |  |  |  |  |  |

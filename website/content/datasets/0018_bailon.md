---
title: "Bailon (2020)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Bailon
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.1038/s41597-020-00700-1](https://doi.org/10.1038/s41597-020-00700-1)
- **Topics:** COVID, affect, pandemic, valence, arousal, context

## Data Characteristics

- **Participants:** 999 (community sample)
- **Time Points:** 444
- **Days:** 86
- **Beeps per Day:** 6
- **Sampling Scheme:** 6x/day pseudo-random one-hour intervals
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [http://doi.org/10.5281/zenodo.3774526](http://doi.org/10.5281/zenodo.3774526)
- **Link to Codebook:** [https://zenodo.org/records/4024141](https://zenodo.org/records/4024141)
- **Link to Code:** [null](null)
- **License:** Creative Commons Attribution 4.0 International

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0018_bailon")`
- **Python:** `openesm.get_dataset("0018_bailon")`

## Additional Comments

no beep information available; number of max. time points taken as maximum of observations in data


## Citation

Bailon, C., Goicoechea, C., Banos, O., Damas, M., Pomares, H., Correa, A., Sanabria, D., & Perakakis, P. (2020). CoVidAffect, real-time monitoring of mood variations following the COVID-19 outbreak in Spain. Scientific Data, 7(1), 365. https://doi.org/10.1038/s41597-020-00700-1




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| timestamp_issued | Timestamp survey issued | PosixCt |  |  |  |  |  | ESM |  |  |
| timestamp_answer | Timestamp survey answered | PosixCt |  |  |  |  |  | ESM |  |  |
| valence | Valence | rating_scale | 101 | How do you feel right now? | -50 = Very bad<br>50 = Very good |  | the Feeling Scale <br>(https://doi.org/10.1123/jsep.11.3.304) | ESM | valence, affect |  |
| arousal | Arousal | rating_scale | 101 | How physically active do you feel right now? | 0 = Not active<br>100 = Active |  | the Felt Arousal Scale<br>(https://doi.org/10.1123/jsep.11.3.304) | ESM | arousal, affect |  |
| valence_slider_initial | Slider initialisation valence | rating_scale | 101 |  |  |  |  | ESM | slider, measurement |  |
| arousal_slider_initial | Slider initialisation arousal | rating_scale | 101 |  |  |  |  | ESM | slider, measurement |  |
| input_method | Survey input method | categorical | 3 |  | One of {‘App’, ‘Web’, ‘Both’} |  |  | ESM |  |  |

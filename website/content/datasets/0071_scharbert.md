---
title: "Scharbert (2023)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Scharbert
- **Year:** 2023
- **Paper DOI:** [https://doi.org/10.1038/s41467-024-44693-6](https://doi.org/10.1038/s41467-024-44693-6)
- **Topics:** affect, well-being, Covid, prejudice

## Data Characteristics

- **Participants:** 2855 (adults)
- **Time Points:** 140
- **Days:** 28
- **Beeps per Day:** 5
- **Sampling Scheme:** 5x/day with 4 randomly-timed surveys between 9am and 6pm and one daily evening survey after 7pm
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/8f3yu](https://osf.io/8f3yu)
- **Link to Codebook:** [https://osf.io/nfkze](https://osf.io/nfkze)
- **Link to Code:** [https://osf.io/z9y5b](https://osf.io/z9y5b)
- **License:** CC-BY 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17348583](https://doi.org/10.5281/zenodo.17348583)
- **R:** `openesm::get_dataset("0071_scharbert")`
- **Python:** `openesm.get_dataset("0071_scharbert")`

## Additional Comments

no beep information available; data from the CoCo project; subset of all data available here; more information about all data and a data request sheet is provided at https://osf.io/bzahp/ and https://coco-study.org/en/; additional data about tweet counts related to the Ukraine war are available on OSF


## Citation

Scharbert, J., Reiter, T., Sakel, S., ter Horst, J., Geukes, K., Gosling, S. D., Harari, G., Kroencke, L., Matz, S., Schoedel, R., Shani, M., Stachl, C., Talaifar, S., Aguilar, N. M. A., Amante, D., Aquino, S. D., Bastias, F., Biesanz, J. C., Bornamanesh, A., … Back, M. D. (2023). A global experience-sampling method study of well-being during times of crisis: The CoCo project. Social and Personality Psychology Compass, 17(10), e12813. https://doi.org/10.1111/spc3.12813



### Additional Reference

Scharbert, J., Humberg, S., Kroencke, L., Reiter, T., Sakel, S., ter Horst, J., Utesch, K., Gosling, S. D., Harari, G., Matz, S. C., Schoedel, R., Stachl, C., Aguilar, N. M. A., Amante, D., Aquino, S. D., Bastias, F., Bornamanesh, A., Bracegirdle, C., Campos, L. A. M., … Back, M. D. (2024). Psychological well-being in Europe after the outbreak of war in Ukraine. Nature Communications, 15(1), 1202. https://doi.org/10.1038/s41467-024-44693-6



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | Date |  |  |  |  |  | ESM |  |  |
| angry | Angry | rating_scale | 6 | I felt angry. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | anger, negative affect, affect |  |
| anxious | Anxious | rating_scale | 6 | I felt anxious. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 6 | I felt sad. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | sadness, negative affect, affect |  |
| happy | Happy | rating_scale | 6 | I felt happy. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | happiness, positive affect, affect |  |
| excited | Excited | rating_scale | 6 | I felt excited. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | excitement, positive affect, affect, extraversion, big five |  |
| relaxed | Relaxed | rating_scale | 6 | I felt relaxed. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| feeling_country | Feeling towards people in country | rating_scale | 10 | How positive or negative have you felt towards people in<br>your country in general today? | 1 = very negative<br>10 very positive |  |  | Daily | social attitude, ingroup, social cognition |  |
| threat_country | Feeling threatened by people in country | rating_scale | 10 | How threatened have you felt by people in your country<br>in general today? | 1 = not at all threatened<br>10 = extremely threatened |  |  | Daily | threat perception, ingroup, social cognition |  |
| similarity_country | Feeling similar to people in country | rating_scale | 10 | How similar have you felt to people in your country in<br>general today? | 1 = not at all similar<br>10 = extremely similar |  |  | Daily | social identity, ingroup, social cognition |  |

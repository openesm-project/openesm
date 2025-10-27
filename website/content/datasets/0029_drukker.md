---
title: "Drukker (2020)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Drukker
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.1016/j.jpsychores.2020.110261](https://doi.org/10.1016/j.jpsychores.2020.110261)
- **Topics:** irritable bowel syndrome, panic disorder, gastrointestinal symptoms, childhood trauma

## Data Characteristics

- **Participants:** 24 (individuals with IBS and panic disorder)
- **Time Points:** 70
- **Days:** 7
- **Beeps per Day:** 10
- **Sampling Scheme:** 10x/day random schedule
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://www.sciencedirect.com/science/article/pii/S0022399920308230?via%3Dihub#s0125](https://www.sciencedirect.com/science/article/pii/S0022399920308230?via%3Dihub#s0125)
- **Link to Codebook:** [https://www.sciencedirect.com/science/article/pii/S0022399920308230?via%3Dihub#s0120](https://www.sciencedirect.com/science/article/pii/S0022399920308230?via%3Dihub#s0120)
- **Link to Code:** [null](null)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347944](https://doi.org/10.5281/zenodo.17347944)
- **R:** `openesm::get_dataset("0029_drukker")`
- **Python:** `openesm.get_dataset("0029_drukker")`



## Citation

Drukker, M., Peters, J. C. H., Vork, L., Mujagic, Z., Rutten, B. P. F., van Os, J., Masclee, A. A. M., Kruimel, J. W., & Leue, C. (2020). Network approach of mood and functional gastrointestinal symptom dynamics in relation to childhood trauma in patients with irritable bowel syndrome and comorbid panic disorder. Journal of Psychosomatic Research, 139, 110261. https://doi.org/10.1016/j.jpsychores.2020.110261




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| enthusiastic | Enthusiastic | rating_scale | 7 | I feel enthusiastic | 1 = not at all<br>7 = extremely |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| down | Feeling down | rating_scale | 7 | I feel down | 1 = not at all<br>7 = extremely |  |  | ESM | negative affect, affect |  |
| irritated | Irritated | rating_scale | 7 | I feel irritated | 1 = not at all<br>7 = extremely |  |  | ESM | irritability, anxiety, negative affect, affect |  |
| rushed | Rushed | rating_scale | 7 | I feel rushed | 1 = not at all<br>7 = extremely |  |  | ESM | negative affect, affect |  |
| happy | Happy | rating_scale | 7 | I feel happy | 1 = not at all<br>7 = extremely |  |  | ESM | happiness, positive affect, affect |  |
| cheerful | Cheerful | rating_scale | 7 | I feel cheerful | 1 = not at all<br>7 = extremely |  |  | ESM | cheerfulness, positive affect, affect |  |
| phy_bloating | Bloating | rating_scale | 7 |  | unclear |  |  | ESM | gastrointestinal, physical health, physical symptom |  |
| phy_abd | Abdominal pain | rating_scale | 7 |  | unclear |  |  | ESM | gastrointestinal, physical health, physical symptom |  |

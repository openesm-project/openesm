---
title: "Merolla (2022)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Merolla
- **Year:** 2022
- **Paper DOI:** [https://doi.org/10.1007/s10902-024-00710-5](https://doi.org/10.1007/s10902-024-00710-5)
- **Topics:** responsiveness, social connection, hope, life satisfaction

## Data Characteristics

- **Participants:** 120 (undergraduate students)
- **Time Points:** 60
- **Days:** 10
- **Beeps per Day:** 6
- **Sampling Scheme:** 6x/day random schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/nts94/](https://osf.io/nts94/)
- **Link to Codebook:** not available
- **Link to Code:** [https://osf.io/nts94](https://osf.io/nts94)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17348441](https://doi.org/10.5281/zenodo.17348441)
- **R:** `openesm::get_dataset("0061_merolla")`
- **Python:** `openesm.get_dataset("0061_merolla")`

## Additional Comments

data collected as part of an intervention project


## Citation

Merolla, A. J., Neubauer, A. B., & Otmar, C. D. (2024). Responsiveness, social connection, hope, and life satisfaction in everyday social interaction: An experience sampling study. Journal of Happiness Studies, 25(1), 7. https://doi.org/10.1007/s10902-024-00710-5




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| time | Time of prompt | PosixCt |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| timestamp | Timestamp in Unix | numeric |  |  |  |  |  | ESM |  |  |
| has_data | Data provided | binary | 2 | Are data available for the timepoint? | FALSE/TRUE |  |  | ESM |  |  |
| first_prompt | First prompt time | numeric |  |  |  |  |  | ESM |  |  |
| time_since_first | Time since first prompt | numeric |  |  |  |  |  | ESM |  |  |
| relationship_level | Relationship level interaction partner | rating_scale | 7 | Nature of the participants' relationship to the person they were communicating with | 1 = No established relationship/stranger; 7 = established relationship |  |  | ESM | social interaction, relationship |  |
| cared_for | Feeling cared for | rating_scale | 7 | If participants were in a social interaction in the last 10 min. of the survey signal: Asked for the degree to which their interaction partner made them feel cared for | 1 = Not at all<br>5 = Extremely |  |  | ESM | responsiveness, social support, social connectedness |  |
| respected | Respected | rating_scale | 7 | If participants were in a social interaction in the last 10 min. of the survey signal: Asked for the degree to which their interaction partner made them feel respected | 1 = Not at all<br>5 = Extremely |  |  | ESM | respect, social support, responsiveness, social interaction |  |
| supported | Supported | rating_scale | 7 | If participants were in a social interaction in the last 10 min. of the survey signal: Asked for the degree to which their interaction partner made them feel supported | 1 = Not at all<br>5 = Extremely |  |  | ESM | social support, responsiveness, social interaction |  |
| connected | Connected | rating_scale | 7 | At this moment, how close and connected do you feel to other people? | 1 = no connection<br>7 = a great deal of connection |  |  | ESM | social connectedness |  |
| interaction_type | Interaction Type | categorical | 5 | Communication channel used for the interaction | Face-to-face, video calls, text messaging/SMS, voice-only phone calls, 0 (no interaction) |  |  | ESM | social interaction, media, communication |  |

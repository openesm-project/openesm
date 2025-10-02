---
title: "Gundogdu (2017)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Gundogdu
- **Year:** 2017
- **Paper DOI:** [https://doi.org/10.1098/rsos.170194](https://doi.org/10.1098/rsos.170194)
- **Topics:** social interactions, personality states, personality

## Data Characteristics

- **Participants:** 54 (employees of research center)
- **Time Points:** 90
- **Days:** 30
- **Beeps per Day:** 3
- **Sampling Scheme:** 3x/day fixed schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** yes
- **Link to Original Data:** [https://doi.org/10.5061/dryad.b88c7](https://doi.org/10.5061/dryad.b88c7)
- **Link to Codebook:** [https://datadryad.org/stash/dataset/doi:10.5061/dryad.b88c7#usage](https://datadryad.org/stash/dataset/doi:10.5061/dryad.b88c7#usage)
- **Link to Code:** [https://github.com/didemgundogdu/RoyalOpenSciencePersonalityDynamics](https://github.com/didemgundogdu/RoyalOpenSciencePersonalityDynamics)
- **License:** Creative Commons Zero v1.0 Universal

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0021_gundogdu")`
- **Python:** `openesm.get_dataset("0021_gundogdu")`

## Additional Comments

no beep information available; six-week duration, but only workdays were included


## Citation

Gundogdu, D., Finnerty, A. N., Staiano, J., Teso, S., Passerini, A., Pianesi, F., & Lepri, B. (2017). Investigating the association between social interactions and personality states dynamics. Royal Society Open Science, 4(9), 170194. https://doi.org/10.1098/rsos.170194




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | PosixCt |  |  |  |  |  | ESM |  |  |
| timestamp | Timestamp | other |  | Timestamp in unix time |  |  |  | ESM |  |  |
| extraversion | Extraversion | rating_scale | 7 | ‘extraverted, enthusiastic’ and ‘reserved, quiet’ (reversed)<br><br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | extraversion, big five |  |
| agreeableness | Agreeableness | rating_scale | 7 | ‘sympathetic, warm’ and ‘critical, quarrelsome’ (reversed)<br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | agreeableness, big five |  |
| conscientiousness | Conscientiousness | rating_scale | 7 | ‘dependable, self-disciplined’ and ‘disorganized, careless’ (reversed)<br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | conscientiousness, big five |  |
| emotional_stability | Emotional stability | rating_scale | 7 | ‘calm, emotionally stable’ and ‘anxious, easily upset’<br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | neuroticism, big five |  |
| openness | Openness to experience | rating_scale | 7 | ‘open to new experiences, complex’ and ‘conventional, uncreative’ (reversed)<br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | openness, big five |  |

---
title: "Fernández (2025)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Fernández
- **Year:** 2025
- **Paper DOI:** [https://doi.org/10.31234/osf.io/uj6df](https://doi.org/10.31234/osf.io/uj6df)
- **Topics:** well-being, smartphone usage, social media

## Data Characteristics

- **Participants:** 225 (young adults (18-25))
- **Time Points:** 50
- **Days:** 10
- **Beeps per Day:** 5
- **Sampling Scheme:** 5x/day semi-random signal contingent
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** yes
- **Link to Original Data:** [https://osf.io/jvms7](https://osf.io/jvms7)
- **Link to Codebook:** [https://osf.io/w3vp5](https://osf.io/w3vp5)
- **Link to Code:** [https://osf.io/95ncg](https://osf.io/95ncg)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347879](https://doi.org/10.5281/zenodo.17347879)
- **R:** `openesm::get_dataset("0026_fernandez")`
- **Python:** `openesm.get_dataset("0026_fernandez")`

## Additional Comments

no beep and day information available; sample 1 of the cited paper; only a subset of days was shared


## Citation

Elmer, T., Fernández, A., Stadel, M., Kas, M. J. H., & Langener, A. M. (2025). Bidirectional associations between smartphone usage and momentary well-being in young adults: Tackling methodological challenges by combining experience sampling methods with passive smartphone data. Emotion, 25(5), 1065–1078. https://doi.org/10.1037/emo0001485




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| affect | Affect | rating_scale | 7 | How do you feel right now? | 1 = Very bad<br>7 = Very good |  |  | ESM | affect |  |
| loneliness | Loneliness | rating_scale | 7 | How lonely do you feel at the moment? | 1 = Not at all<br>7 = Very much |  |  | ESM | loneliness, social functioning, negative affect, affect |  |
| all_smartphone_pre | Total smartphone use (pre) | numeric |  | Minutes of total smartphone use in the hour <br>prior to ESM measurement |  |  |  | Passive | smartphone use |  |
| communication_pre | Communication app use (pre) | numeric |  | Minutes of communication app use in the <br>hour prior to ESM measurement |  |  |  | Passive | smartphone use, communication, app use |  |
| social_media_pre | Social media app use (pre) | numeric |  | Minutes of social media app use in the hour <br>prior to ESM measurement |  |  |  | Passive | smartphone use, social media, app use |  |
| other_pre | Other app use (pre) | numeric |  | Minutes of other app use in the hour prior to <br>ESM measurement |  |  |  | Passive | smartphone use, app use |  |
| all_smartphone_post | Total smartphone use (post) | numeric |  | Minutes of total smartphone use in the hour <br>post ESM measurement |  |  |  | Passive | smartphone use |  |
| communication_post | Communication app use (post) | numeric |  | Minutes of communication app use in the <br>hour post ESM measurement |  |  |  | Passive | smartphone use, communication, app use |  |
| social_media_post | Social media app use (post) | numeric |  | Minutes of social media app use in the hour <br>post ESM measurement |  |  |  | Passive | smartphone use, social media, app use |  |
| other_post | Other app use (post) | numeric |  | Minutes of other app use in the hour post <br>ESM measurement |  |  |  | Passive | smartphone use, app use |  |

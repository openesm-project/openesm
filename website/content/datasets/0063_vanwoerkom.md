---
title: "van Woerkom (2022)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** van Woerkom
- **Year:** 2022
- **Paper DOI:** [https://doi.org/10.1007/s10902-022-00546-x](https://doi.org/10.1007/s10902-022-00546-x)
- **Topics:** happiness, well-being, affect, need for autonomy

## Data Characteristics

- **Participants:** 173 (Dutch working adults)
- **Time Points:** 50
- **Days:** 5
- **Beeps per Day:** 10
- **Sampling Scheme:** 10x/day in 90-minute blocks with 30 to 150 minutes in between
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/k98pt/](https://osf.io/k98pt/)
- **Link to Codebook:** not available
- **Link to Code:** [https://osf.io/k98pt/files/](https://osf.io/k98pt/files/)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17361708](https://doi.org/10.5281/zenodo.17361708)
- **R:** `openesm::get_dataset("0063_vanwoerkom")`
- **Python:** `openesm.get_dataset("0063_vanwoerkom")`

## Additional Comments

no implicit missingness but timepoints seem to be missing for dropouts


## Citation

van Woerkom, M., Constantin, M., Janssens, M., Reijnders, J., Jacobs, N., & Lataster, J. (2022). Networks of happiness: Applying a network approach to well-being in the general population. Journal of Happiness Studies, 23(7), 3215–3231. https://doi.org/10.1007/s10902-022-00546-x




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| weekday | Day of the week | other |  |  |  |  |  | ESM |  |  |
| cheerful | Cheerful | rating_scale | 7 | I feel cheerful | 1 = Not at all<br>7 = Very much |  | PANAS | ESM | cheerfulness, positive affect, affect |  |
| satisfied | Satisfied | rating_scale | 7 | I feel satisfied | 1 = Not at all<br>7 = Very much |  | PANAS | ESM | satisfaction, positive affect, affect |  |
| happy | Happy | rating_scale | 7 | I feel happy | 1 = Not at all<br>7 = Very much |  | PANAS | ESM | happiness, positive affect, affect |  |
| insecure | Insecure | rating_scale | 7 | I feel insecure | 1 = Not at all<br>7 = Very much |  | PANAS | ESM | insecurity, negative affect, affect, neuroticism, big five |  |
| anxious | Anxious | rating_scale | 7 | I feel anxious | 1 = Not at all<br>7 = Very much |  | PANAS | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| down | Down | rating_scale | 7 | I feel down | 1 = Not at all<br>7 = Very much |  | PANAS | ESM | negative affect, affect |  |
| tired | Tired | rating_scale | 7 | I feel tired | 1 = Not at all<br>7 = Very much | the authors originally reverse-coded this item, but we transformed it back to the original scale |  | ESM | tiredness, negative affect, affect, biological |  |
| energetic | Energetic | rating_scale | 7 | I feel energetic | 1 = Not at all<br>7 = Very much |  |  | ESM | energy, positive affect, affect, big five, extraversion |  |
| satisfied_self | Satisfied with self | rating_scale | 7 | I am satisfied with myself | 1 = Not at all<br>7 = Very much |  |  | ESM | self-satisfaction, self-esteem, self-concept |  |
| inspired | Inspired | rating_scale | 7 | I feel inspired | 1 = Not at all<br>7 = Very much |  |  | ESM | inspiration, positive affect, affect |  |
| goal_pursuit | Goal pursuit | rating_scale | 7 | I pursue my goals | 1 = Not at all<br>7 = Very much |  |  | ESM | goal pursuit, motivation, self-regulation, big five, conscientiousness |  |
| feels_like_obligation | Feels like an obligation | rating_scale | 7 | This feels like an obligation | 1 = Not at all<br>7 = Very much | the authors originally reverse-coded this item, but we transformed it back to the original scale |  | ESM | autonomy frustration, motivation, self-determination |  |
| chose_doing | Choose doing this | rating_scale | 7 | I choose to do this myself | 1 = Not at all<br>7 = Very much |  |  | ESM | autonomy satisfaction, motivation, self-determination |  |
| good_at_this | Good at this | rating_scale | 7 | I am good at this | 1 = Not at all<br>7 = Very much |  |  | ESM | competence satisfaction, self-efficacy, motivation |  |
| doubt | Doubting if able to do this | rating_scale | 7 | I doubt that I can do this | 1 = Not at all<br>7 = Very much | the authors originally reverse-coded this item, but we transformed it back to the original scale |  | ESM | competence frustration, self-efficacy, motivation |  |
| appreciated | Appreciated | rating_scale | 7 | I feel appreciated | 1 = Not at all<br>7 = Very much |  |  | ESM | relatedness, social support, social connectedness, motivation |  |
| part_of_company | Feeling part of the company | rating_scale | 7 | I feel part of this company | 1 = Not at all<br>7 = Very much |  |  | ESM | relatedness, belongingness, social connectedness, motivation |  |
| misunderstood | Misunderstood | rating_scale | 7 | I feel misunderstood | 1 = Not at all<br>7 = Very much | the authors originally reverse-coded this item, but we transformed it back to the original scale |  | ESM | relatedness, social connectedness, motivation |  |
| social_company | Social company | categorical | 11 | With whom am I? | Partner<br>Children<br>Parents<br>Brother/Sister<br>Other family (not living in the same place)<br>Friends<br>Colleagues<br>Fellow students<br>Acquaintances<br>Strangers/Others<br>No one - I am alone |  |  | ESM | social interaction, context |  |
| missing_beep | Beep missingness status | binary | 2 |  | 0 = Not missing<br>1 =  Missing |  |  | ESM |  |  |
| datetime | Timestamp | PosixCt |  |  |  |  |  | ESM |  |  |

---
title: "Nepal (2024)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Nepal
- **Year:** 2024
- **Paper DOI:** [https://doi.org/10.1145/3643501](https://doi.org/10.1145/3643501)
- **Topics:** mental health, resilience, behavior, COVID, anxiety, depression, social media

## Data Characteristics

- **Participants:** 218 (undergraduate students)
- **Time Points:** 441
- **Days:** 441
- **Beeps per Day:** 1
- **Sampling Scheme:** irregular
- **Raw Timestamp:** yes
- **Implicit Missingness:** unclear

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** yes
- **Link to Original Data:** [https://www.kaggle.com/datasets/subigyanepal/college-experience-dataset](https://www.kaggle.com/datasets/subigyanepal/college-experience-dataset)
- **Link to Codebook:** [https://www.kaggle.com/datasets/subigyanepal/college-experience-dataset/data](https://www.kaggle.com/datasets/subigyanepal/college-experience-dataset/data)
- **Link to Code:** [null](null)
- **License:** CC BY-NC-SA 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17348144](https://doi.org/10.5281/zenodo.17348144)
- **R:** `openesm::get_dataset("0040_nepal")`
- **Python:** `openesm.get_dataset("0040_nepal")`

## Additional Comments

combined the two EMA datasets in their repository; more sensor data available online; number of max. time points and days taken as maximum of observations in aggregated data; number of participants differs from description in the paper


## Citation

Nepal, S., Liu, W., Pillai, A., Wang, W., Vojdanovski, V., Huckins, J. F., Rogers, C., Meyer, M. L., & Campbell, A. T. (2024). Capturing the college experience: A four-year mobile sensing study of mental health, resilience and behavior of college students during the pandemic. Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 8(1), 1–37.




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | Date |  |  |  |  |  | ESM |  |  |
| affect | Affect | categorical | 16 | Positive Affect Meter (PAM) measure of affect based on images | 1-4: Low arousal, negative valence<br>5-8: High arousal, negative valence<br>9-12: Low arousal, positive valence<br>13-16: High arousal, positive valence |  | Positive Affect Meter (PAM) | ESM | affect | See more here: https://dl.acm.org/doi/10.1145/1978942.1979047 |
| nervous | Nervous | rating_scale | 4 | Over the last 2 weeks, how often have you been bothered by the following problems? Feeling nervous, anxious or on edge | 0 = Not at all<br>1 = Several days<br>2 = More than half the days<br>3 = Nearly every day |  | Patient Health Questionnaire-4 (PHQ) | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| worrying | Worrying | rating_scale | 4 | Over the last 2 weeks, how often have you been bothered by the following problems? Not being able to stop or control worrying | 0 = Not at all<br>1 = Several days<br>2 = More than half the days<br>3 = Nearly every day |  | Patient Health Questionnaire-4 (PHQ) | ESM | depression, affect, negative affect |  |
| depressed | Depressed | rating_scale | 4 | Over the last 2 weeks, how often have you been bothered by the following problems? Feeling down, depressed or hopeless | 0 = Not at all<br>1 = Several days<br>2 = More than half the days<br>3 = Nearly every day |  | Patient Health Questionnaire-4 (PHQ) | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| anhedonia | Anhedonia | rating_scale | 4 | Over the last 2 weeks, how often have you been bothered by the following problems? Little interest or pleasure in doing things | 0 = Not at all<br>1 = Several days<br>2 = More than half the days<br>3 = Nearly every day |  | Patient Health Questionnaire-4 (PHQ) | ESM | anhedonia, depression, psychopathology |  |
| social_level | Level of sociality | rating_scale | 5 | Have you spent most of your time alone or with others today? | 1 = Almost always alone<br>2 = Mostly alone, a little time with others<br>3 = Equal amounts of time alone and with others<br>4 = Mostly with others, a little time alone<br>5 = Almost always with others |  |  | ESM | social interaction, social functioning, loneliness |  |
| perception_worry | Worrry about what other people think | rating_scale | 5 | Right now, I worry about what other people think of me. | 1 = Not at all<br>2 = A little bit<br>3 = Somewhat<br>4 = Very much<br>5 = Extremely |  | State Self-Esteem Scale. | ESM | social anxiety, self-esteem, self-concept, big five, neuroticism |  |
| appearance_pleased | Pleased with appearance | rating_scale | 5 | Right now, I am pleased with my appearance. | 1 = Not at all<br>2 = A little bit<br>3 = Somewhat<br>4 = Very much<br>5 = Extremely |  | State Self-Esteem Scale. | ESM | self-esteem, self-concept |  |
| feel_smart | Feeling smart | rating_scale | 5 | Right now, I feel as smart as others. | 1 = Not at all<br>2 = A little bit<br>3 = Somewhat<br>4 = Very much<br>5 = Extremely |  | State Self-Esteem Scale. | ESM | self-esteem, self-concept |  |
| feel_good | Feeling good about oneself | rating_scale | 5 | Right now, Overall, I feel good about myself. | 1 = Not at all<br>2 = A little bit<br>3 = Somewhat<br>4 = Very much<br>5 = Extremely |  | State Self-Esteem Scale. | ESM | self-esteem, self-concept |  |
| stressed | Stressed | rating_scale | 5 | Are you feeling stressed now? | 1 = Not at all<br>2 = A little bit<br>3 = Somewhat<br>4 = Very much<br>5 = Extremely |  |  | ESM | stress, negative affect, affect |  |
| avg_ema_rt | Average EMA response time | numeric |  | Average time spent on the EMA (in seconds) |  |  |  | ESM | reaction time |  |
| covid_concern_general | General COVID concern | rating_scale | 7 | How concerned are you about COVID-19? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid, worry |  |
| covid_daily_activities | COVID impact on activities of daily life | rating_scale | 7 | How much has the COVID-19 situation impacted your day to day activities in the last week? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid |  |
| covid_behavior_change | COVID behavior change | rating_scale | 7 | How much have you changed your behaviors in response to the COVID-19 situation in the last week? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid, health behavior |  |
| covid_concern_self | COVID concern oneself | rating_scale | 7 | How concerned are you for yourself regarding COVID-19? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid, worry |  |
| covid_concern_classmates | COVID concern classmates | rating_scale | 7 | How concerned are you for your classmates regarding COVID-19? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid, worry |  |
| covid_concern_family | COVID concern family | rating_scale | 7 | How concerned are you for your family regarding COVID-19? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid, worry |  |
| covid_concern_supplies | COVID concern supplies | rating_scale | 7 | How concerned are you about obtaining food, supplies, etc.? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid, worry |  |
| covid_felt_support | COVID felt supported | rating_scale | 7 | How supported do you feel? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid, social support |  |
| covid_support_others | COVID supported others | rating_scale | 7 | How much have you supported others? | 1 = Not at all<br>4 = Somewhat<br>7 = Extremely |  |  | ESM | Covid, social support |  |
| social_media_use | Social media usage | rating_scale | 7 | Is your social media usage: | 1 = Much less than normal<br>4 = Normal<br>7 = Much more than normal |  |  | ESM | social media, app use |  |

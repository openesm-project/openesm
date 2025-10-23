---
title: "Johannes (2021)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Johannes
- **Year:** 2021
- **Paper DOI:** [https://doi.org/10.1080/15213269.2020.1768122](https://doi.org/10.1080/15213269.2020.1768122)
- **Topics:** online vigilance, affect, wellbeing, smartphone, social interactions

## Data Characteristics

- **Participants:** 75 (Dutch undergraduate students using social media)
- **Time Points:** 40
- **Days:** 5
- **Beeps per Day:** 8
- **Sampling Scheme:** 8x semi-random with at least 45 minutes between surveys
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** yes
- **Link to Original Data:** [https://osf.io/ps3rk/files](https://osf.io/ps3rk/files)
- **Link to Codebook:** [https://osf.io/xf2pq/](https://osf.io/xf2pq/)
- **Link to Code:** [https://osf.io/ps3rk/files](https://osf.io/ps3rk/files)
- **License:** CC-BY 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17348348](https://doi.org/10.5281/zenodo.17348348)
- **R:** `openesm::get_dataset("0051_johannes")`
- **Python:** `openesm.get_dataset("0051_johannes")`

## Additional Comments

some participants pre-excluded due to compliance by authors


## Citation

Johannes, N., Meier, A., Reinecke, L., Ehlert, S., Setiawan, D. N., Walasek, N., Dienlin, T., Buijzen, M., & Veling, H. (2021). The relationship between online vigilance and affective well-being in everyday life: Combining smartphone logging with experience sampling. Media Psychology, 24(5), 581–605. https://doi.org/10.1080/15213269.2020.1768122




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | Date |  |  |  |  |  | ESM |  |  |
| time_prompt | Time of the prompt | PosixCt |  | Time when the prompt was received |  |  |  | ESM |  |  |
| survey_taken | Survey taken | binary | 2 | 0 = No<br>1 = Yes |  |  |  | ESM |  |  |
| time_survey | Time of the survey | PosixCt |  | Likely (not clear): Time when survey was filled in |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| number_days_total | Total number of days | numeric |  | On how many days did participant receive probes |  |  |  | ESM |  |  |
| prompt_id | Identifier variable for the prompt | numeric |  |  |  |  |  | ESM |  |  |
| fraction_of_days_with_notification | Fraction of days with notification | numeric |  | What proportion of the total days participants received probes did the app log at least one notification |  |  |  | ESM |  |  |
| prompt_duration | Duration of filling in prompt | numeric |  | How long participants took to fill out a probe (in seconds) |  |  |  | ESM | response time, reaction time |  |
| phone_use | Phone use duration | numeric |  | The total time the phone was used in the 30 minutes before the probe was opened (in seconds) |  |  |  | ESM |  |  |
| social_media_use | Social media use duration | numeric |  | The total time social apps were used in the 30 minutes before the survey was opened, regardless of whether the social app use was preceded by a notification (in seconds) |  |  |  | ESM |  |  |
| social_media_use_no_notification | Social media use without notification duration | numeric |  | The total time social apps were used in the 30 minutes before the survey was opened. Social app use only counted when it was not preceded by a notification from that same social app (in seconds) |  |  |  | ESM |  |  |
| reactibility_survey | Survey time reactibility | numeric |  | The time between receiving the survey and opening the survey (in seconds) |  |  |  | ESM | reaction time |  |
| reactibility_notification_avg | Average notification reactibility | numeric |  | The average time between receiving a notification and unlocking the screen in the 30 minutes before the survey was opened (in seconds). Receiving a notification while the screen was unlocked does not count. |  |  |  | ESM |  |  |
| reactibility_notification_sd | Variability notifcation reactibility | numeric |  | The standard deviation of the time between receiving a notification and unlocking the screen in the 30 minutes before the survey was opened (in seconds). Receiving a notification while the screen was unlocked does not count. |  |  |  | ESM |  |  |
| reactibility_social_notification_avg | Average social media notification reactibility | numeric |  | The average time between receiving a notification from a social app and opening that social app in the 30 minutes before the survey was opened (in seconds) |  |  |  | ESM |  |  |
| reactibility_social_notification_sd | Variability social media notification reactibility | numeric |  | The standard deviation of the time between receiving a notification from a social app and opening that social app in the 30 minutes before the survey was opened (in seconds) |  |  |  | ESM |  |  |
| awake | Awake | rating_scale | 7 | At this moment, I feel... | 1 = Tired<br>7 = Awake |  | Wilhelm Schoebi Short-scale to measure three basic dimensions of mood | ESM | alertness, energy, positive affect, affect |  |
| discontent | Discontent | rating_scale | 7 | At this moment, I feel... | 1 = Content<br>7 = Discontent |  | Wilhelm Schoebi Short-scale to measure three basic dimensions of mood | ESM | discontent, negative affect, affect |  |
| calm | Calm | rating_scale | 7 | At this moment, I feel... | 1 = Agitated<br>7 = Calm |  | Wilhelm Schoebi Short-scale to measure three basic dimensions of mood | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| without_energy | Without energy | rating_scale | 7 | At this moment, I feel... | 1 = Full of energy<br>7 = Without energy |  | Wilhelm Schoebi Short-scale to measure three basic dimensions of mood | ESM | low energy, negative affect, affect |  |
| well | Well | rating_scale | 7 | At this moment, I feel... | 1 = Unwell<br>7 = Well |  | Wilhelm Schoebi Short-scale to measure three basic dimensions of mood | ESM | positive affect, affect |  |
| tense | Tense | rating_scale | 7 | At this moment, I feel... | 1 = Relaxed<br>7 = Tense |  | Wilhelm Schoebi Short-scale to measure three basic dimensions of mood | ESM | tense, negative affect, affect, neuroticism, big five |  |
| happy | Happy | rating_scale | 7 | At this moment, I feel... | 1 = Depressed<br>7 = Happy |  |  | ESM | happiness, positive affect, affect |  |
| stressed | Stress | rating_scale | 7 | How much stress are you experiencing right now? | 1 = Not at all<br>7 = Very stressed |  |  | ESM | stress, negative affect, affect |  |
| vigilance_salience_mediated | Situational salience mediated interactions | rating_scale | 7 | In the last half an hour, how much were you thinking about mediated interactions (e.g., phone calls, WhatsApp messages, Facebook likes, Instagram posts etc.)? | 1 = Not at all<br>7 = A lot |  |  | ESM | social interaction, smartphone use, communication, app use, social media |  |
| salience_ft_f | Salience face-to-face interactions | rating_scale | 7 | In the last half an hour, how much were you thinking about face-to-face interactions? | 1 = Not at all<br>7 = A lot |  |  | ESM | social interaction, communication |  |
| valence_mediated | Valence of thoughts on mediated interactions | rating_scale | 7 | How pleasant were those thoughts about mediated interactions? | 1 = Unpleasant<br>7 = Pleasant |  |  | ESM | social interaction |  |
| valence_ft_f | Valence of thoughts on face-to-face interactions | rating_scale | 7 | How pleasant were those thoughts about face-to-face interactions? | 1 = Unpleasant<br>7 = Pleasant |  |  | ESM | social interaction |  |
| valence_activity | Valence current activity | rating_scale | 7 | How pleasant was what you were doing in the last half an hour? | 1 = Unpleasant<br>7 = Pleasant |  |  | ESM | situational appraisal, activity, context |  |
| concentrated_activity_binary | Engagement in activity that required concentration | binary | 2 | In the last half an hour, I was engaged in a performance-related activity (e.g., an activity for which I had to concentrate). | 0 = No<br>1 = Yes |  |  | ESM | performance |  |
| concentration_extent | Extent of concentration during activity | rating_scale | 7 | The activity required all my mental capacities. | 1 = Strongly disagree<br>7 = Strongly agree |  |  | ESM | cognitive load, mental effort |  |
| concentrated_activity_alone | Concentrated activity company | categorical | 2 | Did you engage in the activity alone or with others? | Alone<br>With others |  |  | ESM | activity, context |  |
| vigilance_reactibility | Vigilance reactibility | rating_scale | 7 | In the last half an hour, when I received an online message, I immediately gave it my full attention. | 1 = Strongly disagree<br>7 = Strongly agree |  |  | ESM | attention, media, communication |  |
| vigilance_monitoring | Vigilance monitoring | rating_scale | 7 | In the last half an hour, I was constantly monitoring what was happening online. | 1 = Strongly disagree<br>7 = Strongly agree |  |  | ESM | attention, media, communication |  |
| social_pressure_phone | Social pressure to be available via phone | rating_scale | 7 | In the last half an hour, I felt a social obligation to be available for mediated interactions. | 1 = Strongly disagree<br>7 = Strongly agree |  |  | ESM | social pressure, attention, media, communication |  |
| extracted_scheduled_times | Time the prompt was scheduled | PosixCt |  |  |  |  |  | ESM |  |  |

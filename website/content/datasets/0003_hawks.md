---
title: "Hawks (2023)"
date: 2025-08-12
draft: false
---


## Study Information

- **First Author:** Hawks
- **Year:** 2023
- **Paper DOI:** [https://doi.org/10.1016/j.bpsc.2022.12.002](https://doi.org/10.1016/j.bpsc.2022.12.002)
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
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0003_hawks")`
- **Python:** `openesm.get_dataset("0003_hawks")`



## Citation

Hawks, Z. W., Strong, R., Jung, L., Beck, E. D., Passell, E. J., Grinspoon, E., Singh, S., Frumkin, M. R., Sliwinski, M., & Germine, L. T. (2023). Accurate prediction of momentary cognition from intensive longitudinal data. Biological Psychiatry: Cognitive Neuroscience and Neuroimaging, 8(8), 841–851. https://doi.org/10.1016/j.bpsc.2022.12.002




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Wording | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other | 10 | Days elapsed in study |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| sitting_id | Study session id | numeric |  |  |  |  |  | ESM |  |  |
| interruptions | Did anything interrupt<br>you during this<br>assessment? | binary | 2 |  | 0 = no<br>1 = yes |  |  | ESM |  |  |
| nervous | Nervous | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Nervous. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| afraid | Afraid | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Afraid | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | fear, negative affect, affect, neuroticism, big five |  |
| enthusiastic | Enthusiastic | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Enthusiastic | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| distressed | Distressed | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Distressed | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | distress, negative affect, affect, neuroticism, big five |  |
| excited | Excited | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Excited | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | excitement, positive affect, affect, extraversion, big five |  |
| scared | Scared | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Scared | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | fear, negative affect, affect, neuroticism, big five |  |
| upset | Upset | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Upset | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | upset, negative affect, affect, neuroticism, big five |  |
| alert | Alert | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Alert | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | alertness, positive affect, affect, etxraversion, big five |  |
| determined | Determined | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Determined | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | determination, positive affect, affect |  |
| inspired | Inspired | Likert | 5 | Indicate to what extent you felt this way right<br>before you started this survey: Inspired | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  | PANAS Short Form | ESM | inspiration, positive affect, affect |  |
| depressed | Depressed | Likert | 5 | Since the last survey, how often have you felt depressed? | 1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |  | Anxiety & Depression Scale | ESM | depression, negative affect, affect, neuroticism, big five |  |
| restless_or_fidgety | Restless or fidgety | Likert | 5 | Since the last survey, how often have you felt restless or fidgety? | 1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |  | Anxiety & Depression Scale | ESM | restlessness, |  |
| so_sad_that_nothing_could_cheer_you_up | So sad that nothing could cheer you up | Likert | 5 | Since the last survey, how often have you felt so sad that nothing could cheer you up? | 1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |  | Anxiety & Depression Scale | ESM | depression |  |
| worried | Worried | Likert | 5 | Since the last survey, how often have you felt worried? | 1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |  | Anxiety & Depression Scale | ESM | anxiety |  |
| hopeless | Hopeless | Likert | 5 | Since the last survey, how often have you felt hopeless? | 1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |  | Anxiety & Depression Scale | ESM | depression |  |
| irritated | Irritated | Likert | 5 | Since the last survey, how often have you felt irritated? | 1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |  | Anxiety & Depression Scale | ESM | anxiety |  |
| that_everything_was_an_effort | That everything was an effort | Likert | 5 | Since the last survey, how often have you felt that everything was an effort? | 1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |  | Anxiety & Depression Scale | ESM | depression |  |
| argument_stress | Stressfulness of argument | Likert | 5 | Since the last survey, did you have an argument or disagreement with someone?<br>If yes, how stressul was this experience? | 1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |  | Daily Inventory of Stressful Events | ESM | stress, relationship |  |
| let_pass_stress | Stressfulness of letting something pass | Likert | 5 | Since the last survey, did anything else happen that you could have argued or disagreed about, but you let it pass?<br>If yes, how stressul was this experience? | 1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |  | Daily Inventory of Stressful Events | ESM | stress, regulation |  |
| friend_relative_stress | Stressfulness of something happening to a friend/relative | Likert | 5 | Since the last survey, did anything happen to a close friend or relative that turned out to be stressful for you?<br>If yes, how stressul was this experience? | 1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |  | Daily Inventory of Stressful Events | ESM | stress, relationship |  |
| health_stress | Stressfulness of personal health even | Likert | 5 | Since the last survey, did anything stressful happen regarding your personal health?<br>If yes, how stressul was this experience? | 1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |  | Daily Inventory of Stressful Events | ESM | stress, physical health |  |
| other_stress | Stressfulness of any other event | Likert | 5 | Since the last survey, did anything else happen that most people would consider stressful?<br>If yes, how stressul was this experience? | 1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |  | Daily Inventory of Stressful Events | ESM | stress |  |
| covid_stress | Stressfulness of thinking about COVID-19 | Likert | 5 | Since the last survey, how much time did you spend thinking about coronavirus/COVID-19?<br>If yes, how stressul was this experience? | 1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |  | Daily Inventory of Stressful Events | ESM | stress, Covid |  |
| socialfunc_interactions | Number of social interactions | ordinal | 4 | Since the last survey, about how many times did you talk or communicate with someone<br>else? | 1 = 0 interactions<br>2 = 1 interaction<br>3 = 2 or 3 interactions<br>4 = 4 or more interactions |  | Social Functioning Scale | ESM | social functioning, social, social interaction |  |
| alert_sleepiness | Sleepiness | Likert | 9 | Please indicate your sleepiness during the 5 minutes before this<br>survey by choosing the appropriate description. | 1 = extemely alert<br>9 = very sleepy, great effort to keep awake, fighting sleep |  |  | ESM | alertness, sleep |  |
| going_on | A lot going on | ordinal | 4 | There is a lot going on<br>around me right now | 1 = not at all true<br>2 = a little bit true<br>3 = somewhat true<br>4 = very true |  |  | ESM | context |  |
| concentrating | Troubles concentrating | ordinal | 4 | I am having trouble concentrating right now. | 1 = not at all true<br>2 = a little bit true<br>3 = somewhat true<br>4 = very true |  |  | ESM | concentration |  |
| noisy | Noisy context | ordinal | 4 | I am in a very noisy place right now. | 1 = not at all true<br>2 = a little bit true<br>3 = somewhat true<br>4 = very true |  |  | ESM | context |  |
| finish | Failing to finish things | ordinal | 5 | To what extent are you currently having difficulty with following through on instructions and failing to finish things? | 1 = not having difficulty at all<br>5 = extreme difficulty |  |  | ESM | attention |  |
| organization | Difficulty with organization | ordinal | 5 | To what extent are you currently having difficulty with organization? | 1 = not having difficulty at all<br>5 = extreme difficulty |  |  | ESM | attention |  |
| mentaleffort | Avoiding, disliking, reluctantly doing things that require a lot of mental effort | ordinal | 5 | To what extent are you currently having difficulty with avoiding, disliking, or reluctantly doing things that require a lot of mental effort? | 1 = not having difficulty at all<br>5 = extreme difficulty |  |  | ESM | attention |  |
| forgetful | Forgetful | ordinal | 5 | To what extent are you currently having difficulty with being forgetful? | 1 = not having difficulty at all<br>5 = extreme difficulty |  |  | ESM | attention |  |
| fidgeting | Fidgeting | ordinal | 5 | To what extent are you currently having difficulty fidgeting with your hands or feet or squirming in seat? | 1 = not having difficulty at all<br>5 = extreme difficulty |  |  | ESM | attention |  |
| motor | Acting as if driven by a motor | ordinal | 5 | To what extent are you currently having difficulty with feeling “on the go” or acting as if you are “driven by a motor”? | 1 = not having difficulty at all<br>5 = extreme difficulty |  |  | ESM | attention |  |
| study_time | Time assessment was completed | numeric |  | 24 hour clock in local time zone |  |  |  | ESM |  |  |
| sleep_duration | Typical sleep duration | numeric |  | Time between typical bed and wake up time |  |  |  | ESM | sleep |  |
| social_functioning_composite | Social functioning composite score | numeric | 8 | Mean of three social functioning items on a 0-7 scale |  |  |  | ESM | social functioning |  |
| ds_median_r_tc | Digit-Symbol Matching (DS) | numeric |  | Median reaction time on correct responses of Digit-Symbol Matching |  |  | Digit-Symbol Matching (DS) | ESM | cognition, processing speed |  |
| test_position | Position of test within battery | ordinal | 4 |  |  |  |  | ESM |  |  |
| crt_median_r_tc | Choice Reaction Time (CRT) | numeric |  | Median reaction time on correct responses for Choice Reaction Time (CRT) |  |  | Choice Reaction Time (CRT) | ESM | cognition |  |
| gcpt_dprime | Gradual Onset Continuous Performance Test (GCPT) | numeric |  | Accuracy computed as d-prime for Gradual Onset Continuous Performance Test (GCPT) |  |  | Gradual Onset Continuous Performance Test (GCPT) | ESM | cognition, attention, cognitive control |  |
| mot_percent_correct | Multiple Object Tracking (MOT) | numeric |  | Proportion of correct targets in Multiple Object Tracking (MOT) task |  |  | Multiple Object Tracking (MOT) | ESM | cognition |  |

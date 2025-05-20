---
title: "Hawks (2023)"
date: 2025-05-20
draft: false
---

# Hawks (2023)

## Dataset Information

- **First Author:** Hawks
- **Year:** 2023
- **DOI:** [https://doi.org/10.1016/j.bpsc.2022.12.002](https://doi.org/10.1016/j.bpsc.2022.12.002)
- **Topics:** momentary cognition, context, stress
- **Participants:** 122
- **Time Points:** 30
- **Beeps per Day:** 3
- **Sampling Scheme:** 3x/day fixed time windows
- **Link to Data:** [https://github.com/zwihawks/PredictingMomentaryCog](https://github.com/zwihawks/PredictingMomentaryCog)
- **Link to Code:** [https://github.com/zwihawks/PredictingMomentaryCog](https://github.com/zwihawks/PredictingMomentaryCog)

## Data Access

TODO this needs to be updated with the correct links
- **Zenodo:** [Download Dataset from Zenodo](https://zenodo.org/record/[RECORD_ID])
- **R:** `openesm::get_dataset("0003_hawks")`
- **Python:** `openesm.get_dataset("0003_hawks")`

## Variables

| Name | Description | Type | Coding | Answer Categories |
|------|-------------|------|------------------|--------|
| id | Participant ID | categorical |  | | 
| day | Day of study | other | Days elapsed in study |10 | 
| beep | Beep of the day | other |  | | 
| sitting_id | Study session id | numeric |  | | 
| interruptions | Did anything interrupt
you during this
assessment? | binary | 0 = no<br>1 = yes |2 | 
| nervous | Nervous | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| afraid | Afraid | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| enthusiastic | Enthusiastic | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| distressed | Distressed | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| excited | Excited | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| scared | Scared | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| upset | Upset | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| alert | Alert | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| determined | Determined | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| inspired | Inspired | Likert | Indicate to what extent you felt this way right<br>before you started this survey.<br><br>1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |5 | 
| depressed | Depressed | Likert | Since the last survey, how often have you felt...<br><br>1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |5 | 
| restless_or_fidgety | Restless or fidgety | Likert | Since the last survey, how often have you felt...<br><br>1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |5 | 
| so_sad_that_nothing_could_cheer_you_up | So sad that nothing could cheer you up | Likert | Since the last survey, how often have you felt...<br><br>1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |5 | 
| worried | Worried | Likert | "Since the last survey, how often have you felt...<br><br>1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time" |5 | 
| hopeless | Hopeless | Likert | Since the last survey, how often have you felt...<br><br>1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |5 | 
| irritated | Irritated | Likert | Since the last survey, how often have you felt...<br><br>1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |5 | 
| that_everything_was_an_effort | That everything was an effort | Likert | Since the last survey, how often have you felt...<br><br>1 = none of the time<br>2 = a little of the time<br>3 = some of the time<br>4 = most of the time<br>5 = all the time |5 | 
| argument_stress | Stressfulness of argument | Likert | Since the last survey, did you have an argument or disagreement with someone?<br>If yes, how stressul was this experience?<br><br>1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |5 | 
| let_pass_stress | Stressfulness of letting something pass | Likert | Since the last survey, did anything else happen that you could have argued or disagreed about, but you let it pass?<br>If yes, how stressul was this experience?<br><br>1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |5 | 
| friend_relative_stress | Stressfulness of something happening to a friend/relative | Likert | Since the last survey, did anything happen to a close friend or relative that turned out to be stressful for you?<br>If yes, how stressul was this experience?<br><br>1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |5 | 
| health_stress | Stressfulness of personal health even | Likert | Since the last survey, did anything stressful happen regarding your personal health?<br>If yes, how stressul was this experience?<br><br>1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |5 | 
| other_stress | Stressfulness of any other event | Likert | Since the last survey, did anything else happen that most people would consider stressful?<br>If yes, how stressul was this experience?<br><br>1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |5 | 
| covid_stress | Stressfulness of thinking about COVID-19 | Likert | Since the last survey, how much time did you spend thinking about coronavirus/COVID-19?<br>If yes, how stressul was this experience?<br><br>1 = not endorsed<br>2 = not at all stressful<br>3 = a little bit stressful<br>4 = somewhat stressful<br>5 = very stressful |5 | 
| socialfunc_interactions | Number of social interactions | ordinal | Since the last survey, about how many times did you talk or communicate with someone<br>else?<br><br>1 = 0 interactions<br>2 = 1 interaction<br>3 = 2 or 3 interactions<br>4 = 4 or more interactions |4 | 
| alert_sleepiness | Sleepiness | Likert | Please indicate your<br>sleepiness during the 5<br>minutes before this<br>survey by choosing the<br>appropriate description.<br><br>1 = extemely alert<br>9 = very sleepy, great effort to keep awake, fighting sleep |9 | 
| going_on | A lot going on | ordinal | There is a lot going on<br>around me right now<br><br>1 = not at all true<br>2 = a little bit true<br>3 = somewhat true<br>4 = very true |4 | 
| concentrating | Troubles concentrating | ordinal | I am having trouble concentrating right now. <br><br><br>1 = not at all true<br>2 = a little bit true<br>3 = somewhat true<br>4 = very true |4 | 
| noisy | Noisy context | ordinal | I am in a very noisy place right now. <br><br>1 = not at all true<br>2 = a little bit true<br>3 = somewhat true<br>4 = very true" |4 | 
| finish | Failing to finish things | ordinal | To what extent are you currently having difficulty with following through on instructions and failing to finish things?<br><br>1 = not having difficulty at all<br>5 = extreme difficulty |5 | 
| organization | Difficulty with organization | ordinal | To what extent are you currently having difficulty with organization?<br><br>1 = not having difficulty at all<br>5 = extreme difficulty |5 | 
| mentaleffort | Avoiding, disliking, reluctantly doing things that require a lot of mental effort | ordinal | To what extent are you currently having difficulty with avoiding, disliking, or reluctantly doing things that require a lot of mental effort?<br><br>1 = not having difficulty at all<br>5 = extreme difficulty |5 | 
| forgetful | Forgetful | ordinal | To what extent are you currently having difficulty with being forgetful?<br><br>1 = not having difficulty at all<br>5 = extreme difficulty |5 | 
| fidgeting | Fidgeting | ordinal | To what extent are you currently having difficulty fidgeting with your hands or feet or squirming in seat?<br><br>1 = not having difficulty at all<br>5 = extreme difficulty |5 | 
| motor | Acting as if driven by a motor | ordinal | To what extent are you currently having difficulty with feeling “on the go” or acting as if you are “driven by a motor”?<br><br>1 = not having difficulty at all<br>5 = extreme difficulty |5 | 
| study_time | Time assessment was completed | numeric | 24 hour clock in local time zone | | 
| sleep_dur | Typical sleep duration | numeric | Time between typical bed and wake up time | | 
| socialfunc_comp | Social functioning composite score | numeric | Mean of three social functioning items on a 0-7 scale | | 
| ds_median_r_tc | Digit-Symbol Matching (DS) | numeric | Median reaction time on correct responses | | 
| test_position | Position of test within battery | ordinal |  |4 | 
| crt_median_r_tc | Choice Reaction Time (CRT) | numeric | Median reaction time on correct responses | | 
| gcpt_dprime | Gradual Onset Continuous Performance Test (GCPT) | numeric | Accuracy computed as d-prime | | 
| mot_percent_correct | Multiple Object Tracking (MOT) | numeric | Proportion of correct targets | | 


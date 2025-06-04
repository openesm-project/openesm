---
title: "Hawks (2023)"
date: 2025-06-04
draft: false
---

# Hawks (2023)

## Study Information

- **First Author:** Hawks
- **Year:** 2023
- **DOI:** [https://doi.org/10.1016/j.bpsc.2022.12.002](https://doi.org/10.1016/j.bpsc.2022.12.002)
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
- **Link to Data:** [https://github.com/zwihawks/PredictingMomentaryCog](https://github.com/zwihawks/PredictingMomentaryCog)
- **Link to Codebook:** [https://pmc.ncbi.nlm.nih.gov/articles/instance/10264553/bin/NIHMS1858073-supplement-1.pdf](https://pmc.ncbi.nlm.nih.gov/articles/instance/10264553/bin/NIHMS1858073-supplement-1.pdf)
- **Link to Code:** [https://github.com/zwihawks/PredictingMomentaryCog](https://github.com/zwihawks/PredictingMomentaryCog)

## Data Access

- **Zenodo:** [Download Dataset from Zenodo](https://zenodo.org/record/[RECORD_ID])
- **R:** `openesm::get_dataset("0003_hawks")`
- **Python:** `openesm.get_dataset("0003_hawks")`



## Citation

Hawks, Zoë W., Strong, Roger, Jung, Laneé, Beck, Emorie D., Passell, Eliza J., Grinspoon, Elizabeth, Singh, Shifali, Frumkin, Madelyn R., Sliwinski, Martin, Germine, Laura T. (2023). Accurate prediction of momentary cognition from intensive longitudinal data. *Biological Psychiatry: Cognitive Neuroscience and Neuroimaging*, *8*(8), 841--851. https://doi.org/10.1016/j.bpsc.2022.12.002



## Variables

| Name | Description | Type | Answer Categories | Coding |
|------|-------------|------|------------------|--------|
| id | Participant ID | categorical |  |  |
| day | Day of study | other | 10 | ```
Days elapsed in study
``` |
| beep | Beep of the day | other |  |  |
| sitting_id | Study session id | numeric |  |  |
| interruptions | Did anything interrupt
you during this
assessment? | binary | 2 | ```
0 = no
1 = yes
``` |
| nervous | Nervous | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| afraid | Afraid | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| enthusiastic | Enthusiastic | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| distressed | Distressed | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| excited | Excited | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| scared | Scared | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| upset | Upset | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| alert | Alert | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| determined | Determined | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| inspired | Inspired | Likert | 5 | ```
Indicate to what extent you felt this way right
before you started this survey.

1 = very slightly or not at all
2 = a little
3 = moderately
4 = quite a bit
5 = extremely
``` |
| depressed | Depressed | Likert | 5 | ```
Since the last survey, how often have you felt...

1 = none of the time
2 = a little of the time
3 = some of the time
4 = most of the time
5 = all the time
``` |
| restless_or_fidgety | Restless or fidgety | Likert | 5 | ```
Since the last survey, how often have you felt...

1 = none of the time
2 = a little of the time
3 = some of the time
4 = most of the time
5 = all the time
``` |
| so_sad_that_nothing_could_cheer_you_up | So sad that nothing could cheer you up | Likert | 5 | ```
Since the last survey, how often have you felt...

1 = none of the time
2 = a little of the time
3 = some of the time
4 = most of the time
5 = all the time
``` |
| worried | Worried | Likert | 5 | ```
"Since the last survey, how often have you felt...

1 = none of the time
2 = a little of the time
3 = some of the time
4 = most of the time
5 = all the time"
``` |
| hopeless | Hopeless | Likert | 5 | ```
Since the last survey, how often have you felt...

1 = none of the time
2 = a little of the time
3 = some of the time
4 = most of the time
5 = all the time
``` |
| irritated | Irritated | Likert | 5 | ```
Since the last survey, how often have you felt...

1 = none of the time
2 = a little of the time
3 = some of the time
4 = most of the time
5 = all the time
``` |
| that_everything_was_an_effort | That everything was an effort | Likert | 5 | ```
Since the last survey, how often have you felt...

1 = none of the time
2 = a little of the time
3 = some of the time
4 = most of the time
5 = all the time
``` |
| argument_stress | Stressfulness of argument | Likert | 5 | ```
Since the last survey, did you have an argument or disagreement with someone?
If yes, how stressul was this experience?

1 = not endorsed
2 = not at all stressful
3 = a little bit stressful
4 = somewhat stressful
5 = very stressful
``` |
| let_pass_stress | Stressfulness of letting something pass | Likert | 5 | ```
Since the last survey, did anything else happen that you could have argued or disagreed about, but you let it pass?
If yes, how stressul was this experience?

1 = not endorsed
2 = not at all stressful
3 = a little bit stressful
4 = somewhat stressful
5 = very stressful
``` |
| friend_relative_stress | Stressfulness of something happening to a friend/relative | Likert | 5 | ```
Since the last survey, did anything happen to a close friend or relative that turned out to be stressful for you?
If yes, how stressul was this experience?

1 = not endorsed
2 = not at all stressful
3 = a little bit stressful
4 = somewhat stressful
5 = very stressful
``` |
| health_stress | Stressfulness of personal health even | Likert | 5 | ```
Since the last survey, did anything stressful happen regarding your personal health?
If yes, how stressul was this experience?

1 = not endorsed
2 = not at all stressful
3 = a little bit stressful
4 = somewhat stressful
5 = very stressful
``` |
| other_stress | Stressfulness of any other event | Likert | 5 | ```
Since the last survey, did anything else happen that most people would consider stressful?
If yes, how stressul was this experience?

1 = not endorsed
2 = not at all stressful
3 = a little bit stressful
4 = somewhat stressful
5 = very stressful
``` |
| covid_stress | Stressfulness of thinking about COVID-19 | Likert | 5 | ```
Since the last survey, how much time did you spend thinking about coronavirus/COVID-19?
If yes, how stressul was this experience?

1 = not endorsed
2 = not at all stressful
3 = a little bit stressful
4 = somewhat stressful
5 = very stressful
``` |
| socialfunc_interactions | Number of social interactions | ordinal | 4 | ```
Since the last survey, about how many times did you talk or communicate with someone
else?

1 = 0 interactions
2 = 1 interaction
3 = 2 or 3 interactions
4 = 4 or more interactions
``` |
| alert_sleepiness | Sleepiness | Likert | 9 | ```
Please indicate your
sleepiness during the 5
minutes before this
survey by choosing the
appropriate description.

1 = extemely alert
9 = very sleepy, great effort to keep awake, fighting sleep
``` |
| going_on | A lot going on | ordinal | 4 | ```
There is a lot going on
around me right now

1 = not at all true
2 = a little bit true
3 = somewhat true
4 = very true
``` |
| concentrating | Troubles concentrating | ordinal | 4 | ```
I am having trouble concentrating right now. 


1 = not at all true
2 = a little bit true
3 = somewhat true
4 = very true
``` |
| noisy | Noisy context | ordinal | 4 | ```
I am in a very noisy place right now. 

1 = not at all true
2 = a little bit true
3 = somewhat true
4 = very true"
``` |
| finish | Failing to finish things | ordinal | 5 | ```
To what extent are you currently having difficulty with following through on instructions and failing to finish things?

1 = not having difficulty at all
5 = extreme difficulty
``` |
| organization | Difficulty with organization | ordinal | 5 | ```
To what extent are you currently having difficulty with organization?

1 = not having difficulty at all
5 = extreme difficulty
``` |
| mentaleffort | Avoiding, disliking, reluctantly doing things that require a lot of mental effort | ordinal | 5 | ```
To what extent are you currently having difficulty with avoiding, disliking, or reluctantly doing things that require a lot of mental effort?

1 = not having difficulty at all
5 = extreme difficulty
``` |
| forgetful | Forgetful | ordinal | 5 | ```
To what extent are you currently having difficulty with being forgetful?

1 = not having difficulty at all
5 = extreme difficulty
``` |
| fidgeting | Fidgeting | ordinal | 5 | ```
To what extent are you currently having difficulty fidgeting with your hands or feet or squirming in seat?

1 = not having difficulty at all
5 = extreme difficulty
``` |
| motor | Acting as if driven by a motor | ordinal | 5 | ```
To what extent are you currently having difficulty with feeling “on the go” or acting as if you are “driven by a motor”?

1 = not having difficulty at all
5 = extreme difficulty
``` |
| study_time | Time assessment was completed | numeric |  | ```
24 hour clock in local time zone
``` |
| sleep_dur | Typical sleep duration | numeric |  | ```
Time between typical bed and wake up time
``` |
| socialfunc_comp | Social functioning composite score | numeric |  | ```
Mean of three social functioning items on a 0-7 scale
``` |
| ds_median_r_tc | Digit-Symbol Matching (DS) | numeric |  | ```
Median reaction time on correct responses
``` |
| test_position | Position of test within battery | ordinal | 4 |  |
| crt_median_r_tc | Choice Reaction Time (CRT) | numeric |  | ```
Median reaction time on correct responses
``` |
| gcpt_dprime | Gradual Onset Continuous Performance Test (GCPT) | numeric |  | ```
Accuracy computed as d-prime
``` |
| mot_percent_correct | Multiple Object Tracking (MOT) | numeric |  | ```
Proportion of correct targets
``` |


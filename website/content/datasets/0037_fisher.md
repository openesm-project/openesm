---
title: "Fisher (2019)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Fisher
- **Year:** 2019
- **Paper DOI:** [https://doi.org/10.31234/osf.io/e24v6](https://doi.org/10.31234/osf.io/e24v6)
- **Topics:** Smoking, affect, substance abuse

## Data Characteristics

- **Participants:** 70 (regular smokers)
- **Time Points:** 128
- **Days:** 34
- **Beeps per Day:** 4
- **Sampling Scheme:** 4x/day random schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** unclear

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/nkemg/](https://osf.io/nkemg/)
- **Link to Codebook:** [https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0217150#sec004](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0217150#sec004)
- **Link to Code:** [https://osf.io/nkemg/](https://osf.io/nkemg/)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0037_fisher")`
- **Python:** `openesm.get_dataset("0037_fisher")`

## Additional Comments

some variables with unclear coding; some variables morning-only; number of max. time points and days taken as maximum of observations in data


## Citation

Fisher, A. J., & Soyster, P. (2019, March 28). Generating accurate personalized predictions of future behavior: A smoking exemplar. https://doi.org/10.31234/osf.io/e24v6




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| start_time | Start time | PosixCt |  |  |  |  |  | ESM |  |  |
| finish_time | Finish time | PosixCt |  |  |  |  |  | ESM |  |  |
| cigs | Number of cigarettes | rating_scale |  | Number of cigarettes smoked since the previous survey |  |  |  | ESM |  |  |
| angry | Angry | rating_scale | 101 | I feel angry | 0 = not at all<br>100 = as much as possible |  |  | ESM | anger, negative affect, affect |  |
| hungry | Hungry | rating_scale | 101 | I feel hungry | 0 = not at all<br>100 = as much as possible |  |  | ESM | hunger, biological |  |
| restless | Restless | rating_scale | 101 | I feel restless | 0 = not at all<br>100 = as much as possible |  |  | ESM | restlessness, fidgety, anxiety, negative affect, affect, psychopathology |  |
| down | Down | rating_scale | 101 | I feel down or depressed | 0 = not at all<br>100 = as much as possible |  |  | ESM | negative affect, affect |  |
| bored | Bored | rating_scale | 101 | I feel bored | 0 = not at all<br>100 = as much as possible |  |  | ESM | boredom, negative affect, affect |  |
| stressed | Stressed | rating_scale | 101 | I feel stressed | 0 = not at all<br>100 = as much as possible |  |  | ESM | stress, negative affect, affect |  |
| motivated_quit_smoking | Motivated quitting smoking | rating_scale | 101 | I am motivated to quit smoking | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking cessation, smoking, substance use, health behavior |  |
| want_quit | Smoking quitting intention | rating_scale | 101 | I want to quit smoking | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking cessation, smoking, substance use, health behavior |  |
| impulsive | Impulsive | rating_scale | 101 | I feel impulsive | 0 = not at all<br>100 = as much as possible |  |  | ESM | impulsivity, self-control |  |
| sleep_difficulty | Sleep difficulty | rating_scale | 101 | unclear, but likely: Difficulty falling or staying asleep (morning only) | 0 = not at all<br>100 = as much as possible |  |  | Daily | sleep difficulty, sleep quality, sleep |  |
| sleep_duration | Sleep duration in hours | numeric |  | unclear, but likely: How many hours did you sleep last night? (morning only) |  |  |  | Daily | sleep duration, sleep |  |
| craving_smoking | Smoking craving | rating_scale | 101 | How strong is your urge/craving to smoke right now? | 0 = not at all<br>100 = as much as possible |  |  | ESM | craving, smoking, substance use |  |
| enjoy_last | Enjoyed cigarette | rating_scale | 101 | I enjoyed my last cigarette | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking, substance use |  |
| trigger | Smoking triggers | rating_scale | 101 | People or situations are triggering me to smoke | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking, substance use |  |
| irritable | Irritable | rating_scale | 101 | I feel irritable | 0 = not at all<br>100 = as much as possible |  |  | ESM | irritability, negative affect, affect, neuroticism, big five, psychopathology |  |
| concentrate | unclear, but likely: Difficulty concentrating | rating_scale | 101 | unclear, but likely: I am having difficulty concentrating | 0 = not at all<br>100 = as much as possible |  |  | ESM | concentration, cognitive functioning, nonmotor symptoms, parkinson disease, |  |
| calm | Calm | rating_scale | 101 | I feel calm | 0 = not at all<br>100 = as much as possible |  |  | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| happy | Happy | rating_scale | 101 | I feel happy | 0 = not at all<br>100 = as much as possible |  |  | ESM | happiness, positive affect, affect |  |
| enthusiastic | Enthusiastic | rating_scale | 101 | I feel enthusiastic | 0 = not at all<br>100 = as much as possible |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| nervous | Nervous | rating_scale | 101 | I feel nervous | 0 = not at all<br>100 = as much as possible |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| tired | Tired | rating_scale | 101 | I feel tired | 0 = not at all<br>100 = as much as possible |  |  | ESM | tiredness, negative affect, affect, biological, psychopathology |  |
| hurt_health | Smoking hurts health | rating_scale | 101 | My smoking is hurting my health | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking, substance use, physical health, health belief |  |
| pos_expect | Positive smoking expectations | rating_scale | 101 | A cigarette would improve my mood or make me feel <br>better | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking, substance use |  |
| ashamed_smoking | Ashamed of smoking | rating_scale | 101 | I am embarassed/ashamed that I am a smoker | 0 = not at all<br>100 = as much as possible |  |  | ESM | shame, smoking, substance use |  |
| agency | Smoking agency | rating_scale | 101 | Unclear, but likely: The amount I smoke is within my own control | 0 = not at all<br>100 = as much as possible |  |  | ESM | self-control, self-efficacy, smoking, substance use |  |
| could_quit | Smoking-related self efficacy | rating_scale | 101 | If I tried to quit smoking right now I would be successful | 0 = not at all<br>100 = as much as possible |  |  | ESM | self-control, self-efficacy, smoking, substance use |  |
| delay_gratification | Delayed gratification | rating_scale | 101 | I can delay gratification | 0 = not at all<br>100 = as much as possible |  |  | ESM | self-control |  |
| health_belief | Smoking health belief | rating_scale | 101 | unclear, but likely: My health would improve if I would quit smoking | 0 = not at all<br>100 = as much as possible |  |  | ESM | health belief, smoking, substance use, physical health |  |
| comfortable | Comfortable situation | rating_scale | 101 | I feel comfortable in my current location/situation | 0 = not at all<br>100 = as much as possible |  |  | ESM | comfortable, positive affect, affect, situation, context |  |
| frustrated | Frustrated | rating_scale | 101 | I feel frustrated | 0 = not at all<br>100 = as much as possible |  |  | ESM | frustration, negative affect, affect |  |
| pos_social | Positive social interactions | rating_scale | 101 | I am enjoying my interactions with other people | 0 = not at all<br>100 = as much as possible |  |  | ESM | social interaction |  |
| cig_predict | Cigarette number prediction | numeric |  | How many cigarettes do you think you’ll smoke today (morning only) |  |  |  | ESM | smoking, substance use |  |

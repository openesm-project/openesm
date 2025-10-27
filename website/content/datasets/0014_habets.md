---
title: "Habets (2020)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Habets
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.2196/15628](https://doi.org/10.2196/15628)
- **Topics:** Parkinson, affect, motor symptoms, context

## Data Characteristics

- **Participants:** 20 (patients with Parkinson disease)
- **Time Points:** 98
- **Days:** 14
- **Beeps per Day:** 7
- **Sampling Scheme:** 7x/day semi-random
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** yes
- **Link to Original Data:** [https://doi.org/10.34894/5HHK8H](https://doi.org/10.34894/5HHK8H)
- **Link to Codebook:** [https://dataverse.nl/file.xhtml?fileId=36289&version=2.0](https://dataverse.nl/file.xhtml?fileId=36289&version=2.0)
- **Link to Code:** [https://github.com/jgvhabets/sensor_EMA_PD_monitoring](https://github.com/jgvhabets/sensor_EMA_PD_monitoring)
- **License:** CC0 1.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347440](https://doi.org/10.5281/zenodo.17347440)
- **R:** `openesm::get_dataset("0014_habets")`
- **Python:** `openesm.get_dataset("0014_habets")`

## Additional Comments

some variables only morning/evening; no beep information available


## Citation

Habets, J., Heijmans, M., Herff, C., Simons, C., Leentjens, A. F., Temel, Y., Kuijf, M., & Kubben, P. (2020). Mobile health daily life monitoring for parkinson disease: Development and validation of ecological momentary assessments. JMIR mHealth and uHealth, 8(5), e15628. https://doi.org/10.2196/15628




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  |  |  |  |
| day | Day of study | other |  |  |  |  |  |  |  |  |
| beep | Beep of the day | other |  |  |  |  |  |  |  |  |
| beep_start | Timestamp start | PosixCt |  |  |  |  |  |  |  |  |
| beep_end | Timestamp completion | PosixCt |  |  |  |  |  |  |  |  |
| well | Well | rating_scale | 7 | I feel well | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | positive affect, affect |  |
| down | Down | rating_scale | 7 | I feel down | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | negative affect, affect |  |
| frightened | Frightened | rating_scale | 7 | I feel frightened | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | fear, negative affect, affect, neuroticism, big five |  |
| tense | Tense | rating_scale | 7 | I feel tense | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | tense, negative affect, affect, neuroticism, big five |  |
| sleepy | Sleepy | rating_scale | 7 | I feel sleepy | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | fatigue, negative affect, affect |  |
| tired | Tired | rating_scale | 7 | I am tired | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | tiredness, negative affect, affect, biological, psychopathology |  |
| cheerful | Cheerful | rating_scale | 7 | I feel cheerful | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | cheerfulness, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | I feel relaxed | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| concentrate | Concentration | rating_scale | 7 | I can concentrate well | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | concentration, cognitive functioning, nonmotor symptoms, parkinson disease, |  |
| hallucinations | Experiencing hallucinations | rating_scale | 7 | I experience hallucinations | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | hallucinations, nonmotor symptoms, parkinson disease |  |
| loc_where | Location | categorical | 7 | I am at... | 10 = Home<br>20 = Family's<br>25 = Friends<br>30 = Work<br>55 = A public place<br>70 = Traveling<br>90 = Somewhere else |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | location, context |  |
| soc_who | Social company | categorical | 6 | I am with... | 00 = Nobody<br>10 = Partner<br>27 = Family<br>30 = Friends<br>40 = Colleagues<br>50 = Strangers |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | interaction partner, social interaction, context |  |
| soc_who02 | Social company 2 | categorical | 6 | I am with... | 00 = Nobody<br>10 = Partner<br>27 = Family<br>30 = Friends<br>40 = Colleagues<br>50 = Strangers |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | interaction partner, social interaction, context |  |
| soc_who03 | Social company 3 | categorical | 6 | I am with... | 00 = Nobody<br>10 = Partner<br>27 = Family<br>30 = Friends<br>40 = Colleagues<br>50 = Strangers |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | interaction partner, social interaction, context |  |
| act_what | Activity | categorical | 7 | What was I doing (just before the beep)? | 01 = resting<br>10 = working<br>20 = housekeeping or house jobs<br>40 = leisure<br>41 = sports<br>89 = something else<br>00 = nothing |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | activity, context |  |
| act_what02 | Activity 2 | categorical | 7 | What was I doing (just before the beep)? | 01 = resting<br>10 = working<br>20 = housekeeping or house jobs<br>40 = leisure<br>41 = sports<br>89 = something else<br>00 = nothing |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | activity, context |  |
| act_what03 | Activity 3 | categorical | 7 | What was I doing (just before the beep)? | 01 = resting<br>10 = working<br>20 = housekeeping or house jobs<br>40 = leisure<br>41 = sports<br>89 = something else<br>00 = nothing |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | activity, context |  |
| act_problemless | Activity without problems | rating_scale | 7 | I can do this (my current activity) without hinder | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | activity interference, general motor function |  |
| mobility_well | Comfortable mobility | rating_scale | 7 | I am comfortable walking and standing | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | walking and standing comfort, general motor function |  |
| sit_still | Sitting still easily | rating_scale | 7 | I can sit or stand still easily | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | ability to stay still, general motor function |  |
| speech_well | Speaking easily | rating_scale | 7 | I can speak easily | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | speech ability, general motor function |  |
| walk_well | Walking easily | rating_scale | 7 | I can walk easily | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | walking ability,  general motor function |  |
| tremor | Tremor | rating_scale | 7 | I experience tremor | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | tremor, motor symptoms, parkinson disease |  |
| slowness | Slowness | rating_scale | 7 | I experience slowness | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | slowness, motor symptoms, parkinson disease |  |
| stiffness | Stiffness | rating_scale | 7 | I experience stiffness | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | stiffness, motor symptoms, parkinson disease |  |
| muscle_tension | Muscle tension | rating_scale | 7 | I experience tensioned muscles | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | tensioned muscles, motor symptoms, parkinson disease |  |
| dyskinesia | Dyskinesia | rating_scale | 7 | I experience dyskinesia | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | dyskinesia, motor symptoms, parkinson disease |  |
| parkinson_onoff | Parkinson state | categorical | 4 | Currently, I feel... | 1 = Off<br>2 = Changing from off towards on<br>3 = On<br>4 = Changing from on to off |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | ON/OFF state, medication effect, mediation, parkinson disease |  |
| parkinson_medication | Parkinson medication taken | categorical | 3 | I took Parkinson medication since the last beep | 1 = Yes<br>2 = No<br>3 = I don't know |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | parkinson medication, medication, parkinson disease |  |
| beep_disturbing | Beep disturbance | rating_scale | 7 | This beep was disturbing | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | ESM | ESM disturbance, reactivity |  |
| mor_slept_well | Slept well | rating_scale | 7 | I slept well<br>Morning only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | sleep quality, sleep |  |
| mor_often_awake | Waking up often | rating_scale | 7 | I woke up often<br>Morning only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | sleep continuity, sleep quality, sleep |  |
| mor_rested | Feeling rested | rating_scale | 7 | I feel rested<br>Morning only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | feeling rested, sleep quality, sleep |  |
| mor_tired_phys | Physically tired | rating_scale | 7 | I feel physicaly tired<br>Morning only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | phyiscal fatigue, fatigue, biological |  |
| mor_tired_ment | Mentally tired | rating_scale | 7 | I feel mentally tired<br>Morning only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | mental fatigue, fatigue, negative affect, affect |  |
| eve_many_offs | Many off-periods | rating_scale | 7 | I had many off-periods today<br>Evening only | 1 = not at all<br>7 = very | off-moment severity during the day is calculated as the average of eve_many_offs and eve_long_offs | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | off-period frequency, medication effect, medication, parkinson disease |  |
| eve_long_offs | Long off-periods | rating_scale | 7 | I had long off-periods today<br>Evening only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | off-period frequency, medication effect, medication, parkinson disease |  |
| eve_walk_well | Walking well | rating_scale | 7 | Walkig went well today<br>Evening only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | walking ability,  general motor function |  |
| eve_clothing | Changing clothes well | rating_scale | 7 | Chaning clothes went well today<br>Evening only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | dressing ability, general motor function |  |
| eve_eat_well | Eating well | rating_scale | 7 | Eating went well today<br>Evening only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | eating ability, general motor function |  |
| eve_personalcare | Personal care well | rating_scale | 7 | Doing my personal care went well today<br>Evening only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | personal care ability, general motor function |  |
| eve_household | Household activities well | rating_scale | 7 | Doing household activities went well today<br>Evening only | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | ability to do chores, general motor function |  |
| eve_tired | Tired today | rating_scale | 7 |  | 1 = not at all<br>7 = very |  | Parkinson Disease Ecological Momentary Assessment Questionnaire | Daily | tiredness, fatigue, negative affect, affect |  |

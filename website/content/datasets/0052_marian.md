---
title: "Marian (2022)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Marian
- **Year:** 2022
- **Paper DOI:** [https://doi.org/10.1007/s10862-022-10014-8](https://doi.org/10.1007/s10862-022-10014-8)
- **Topics:** depression, anxiety, COVID

## Data Characteristics

- **Participants:** 140 (undergraduate students)
- **Time Points:** 63
- **Days:** 21
- **Beeps per Day:** 3
- **Sampling Scheme:** 4x/day 4 hour intervals based on individual wake-up time
- **Raw Timestamp:** no
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/pt9dk/files/osfstorage](https://osf.io/pt9dk/files/osfstorage)
- **Link to Codebook:** [https://osf.io/r85q6](https://osf.io/r85q6)
- **Link to Code:** [https://osf.io/pt9dk/files/osfstorage](https://osf.io/pt9dk/files/osfstorage)
- **License:** CC-By Attribution 4.0 International

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0052_marian")`
- **Python:** `openesm.get_dataset("0052_marian")`

## Additional Comments

some participants pre-excluded due to compliance by authors; some collected symptoms strongly overlap and were combined in the original article; exact translation of some GAD/PHQ questions to EMA wording unclear - for example; about frequency of sleep issues


## Citation

Marian, S., Costantini, G., Macsinga, I., & Sava, F. A. (2023). The dynamic interplay of anxious and depressive symptoms in a sample of undergraduate students. Journal of Psychopathology and Behavioral Assessment, 45(1), 150–159. https://doi.org/10.1007/s10862-022-10014-8




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| start_time | Prompt start | PosixCt |  |  |  |  |  | ESM |  |  |
| end_time | Prompt end | PosixCt |  |  |  |  |  | ESM |  |  |
| status | Prompt Status | categorical |  |  | 1 = complete row, 2 = incomplete row, 99 = empty row (participants skipped/missed the beep) |  |  | ESM |  |  |
| completion_time | Completion time | numeric |  | Completion time for prompt in seconds |  |  |  | ESM |  |  |
| worry | Excessive worry | rating_scale | 4 | Experienced excessive worry | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Generalised Anxiety Disorder Questionnaire-IV | ESM | worry, negative affect, affect, neuroticism, big five, psychopathology |  |
| difficulty_control_worry | Difficulties controllingy worry | rating_scale | 4 | Found difficult to control worry once it started | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Generalised Anxiety Disorder Questionnaire-IV | ESM | worry, control,  negative affect, affect, neuroticism, big five, psychopathology |  |
| restless | Restlessness | rating_scale | 4 | Felt restless, keyed up or on edge | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Generalised Anxiety Disorder Questionnaire-IV | ESM | restlessness, fidgety, anxiety, negative affect, affect, psychopathology |  |
| fatiguability | Fatiguability | rating_scale | 4 | Were easily fatigued | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Generalised Anxiety Disorder Questionnaire-IV | ESM | fatigue, negative affect, affect, psychopathology |  |
| difficulty_concentrating | Difficulty concentrating | rating_scale | 4 | Had difficulties concentrating or mind going blank | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Generalised Anxiety Disorder Questionnaire-IV | ESM | concentration, executive functioning, attention, psychopathology |  |
| irritable | Irritable | rating_scale | 4 | Were irritable | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Generalised Anxiety Disorder Questionnaire-IV | ESM | irritability, negative affect, affect, neuroticism, big five, psychopathology |  |
| muscle_tension | Muscle tension | rating_scale | 4 | Felt muscle tension | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Generalised Anxiety Disorder Questionnaire-IV | ESM | tensioned muscles, motor symptoms, anxiety, psychopathology |  |
| sleep_difficulty | Sleep difficulties | rating_scale | 4 | Last night, you had trouble falling asleep or didn't feel rested after sleep. | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Generalised Anxiety Disorder Questionnaire-IV | ESM | sleep difficulty, sleep quality, sleep |  |
| anhedonia | Anhedonia | rating_scale | 4 | Little interest or pleasure in doing things | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | anhedonia, depression, psychopathology |  |
| depressed | Depressed | rating_scale | 4 | Feeling down, depressed, or hopeless | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| sleep_problems | Sleep problems | rating_scale | 4 | Trouble falling or staying asleep or sleeping too much. | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | sleep continuity, sleep quality, sleep, depression, psychopathology |  |
| tired | Tired | rating_scale | 4 | Feeling tired or having little energy. | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | tiredness, negative affect, affect, biological, depression, psychopathology |  |
| appetite_change | Appetite change | rating_scale | 4 | Poor appetite or overeating | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | appetite, physical symptom, depression, psychopathology |  |
| worthlessness | Feelings of worthlessness | rating_scale | 4 | Negative feelings about yourself - or that you are a failure or have let yourself or your family down | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | negative self-evaluation, self-worth, self-esteem, depression, psychopathology |  |
| concentration_trouble | Concentration troubles | rating_scale | 4 | Trouble concentrating on things, such as reading the newspaper or watching television | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | concentration, executive functionng, attention, depression, psychopathology |  |
| psychomotor_change | Psychomotor changes | rating_scale | 4 | Moving or speaking so slowly that other people could have noticed. Or the opposite being so fidgety or restless that you have been moving around a lot more than usual | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | speech ability, moving ability, general motor function, depression, psychopathology |  |
| suicidal_ideation | Suicidal ideation | rating_scale | 4 | Thoughts that you would be better off dead or of hurting yourself | 1 = Never<br>2 = Once<br>3 = Several times<br>4 = Many times |  | Patient Health Questionnaire (PHQ-9) | ESM | suicidal ideation, self-harm, depression, psychopathology |  |
| something_wrong | Something wrong with me | rating_scale | 4 | There's something wrong with me. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | self-worth, self-esteem |  |
| cant_go_on | Can not go on like this | rating_scale | 4 | I don't think I can go on like this. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | emotional distress, suicidal ideation, self-harm, psychopathology |  |
| dont_like_self | Do not like myself | rating_scale | 4 | I don't like myself. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | negative self-evaluation, self-worth, self-esteem, depression, psychopathology |  |
| no_good | I'm no good | rating_scale | 4 | I’m no good. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | negative self-evaluation, self-worth, self-esteem, depression, psychopathology |  |
| nobody_likes | Nobody likes me | rating_scale | 4 | Nobody likes me. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | negative self-evaluation, self-worth, self-esteem, social functioning, depression, psychopathology |  |
| alone | Feeling alone | rating_scale | 4 | I am alone. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | loneliness, social functioning, negative affect, affect |  |
| fear_sickness | Fear of sickness | rating_scale | 4 | What if I get sick? | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | fear of sickness, worry, health anxiety |  |
| awful_happen | Fear of aweful event | rating_scale | 4 | Something awful is going to happen. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | catastrophic thinking, worry, anxiety, psychopathology |  |
| life_not_worth | Life is not worth living | rating_scale | 4 | Life isn’t worth living. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | hopelessness, depression, suicidality, psychopathology |  |
| nobody_cares | Nobody cares about me | rating_scale | 4 | Nobody cares about me. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | perceived isolation, loneliness, psychopathology |  |
| cant_stand | Can not stand it anymore | rating_scale | 4 | I can't stand it anymore. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | distress, hopelessness, suicidality, psychopathology |  |
| never_make_it | I will never make it | rating_scale | 4 | I will never make it. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | hopelessness, depression, suicidality, psychopathology |  |
| need_change | Something has to change | rating_scale | 4 | Something has to change. | 1 = Not at all<br>2 = A short time<br>3 = A long time<br>4 = Most of the time |  |  | ESM | coping |  |

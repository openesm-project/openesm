---
title: "Neubauer (2024)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Neubauer
- **Year:** 2024
- **Paper DOI:** [https://doi.org/10.1007/s11618-023-01182-8](https://doi.org/10.1007/s11618-023-01182-8)
- **Topics:** timescales, COVID, academic achievement, study demands

## Data Characteristics

- **Participants:** 321 (undergraduate students)
- **Time Points:** 84
- **Days:** 14
- **Beeps per Day:** 6
- **Sampling Scheme:** 6x/day semi-random schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/bhq3p](https://osf.io/bhq3p)
- **Link to Codebook:** [https://osf.io/csfwg](https://osf.io/csfwg)
- **Link to Code:** [https://osf.io/84kdr/files](https://osf.io/84kdr/files)
- **License:** CC-BY 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347974](https://doi.org/10.5281/zenodo.17347974)
- **R:** `openesm::get_dataset("0062_neubauer")`
- **Python:** `openesm.get_dataset("0062_neubauer")`

## Additional Comments

part of the STECCO project; number of participants higher than that included in the paper; more panel datasets available on OSF; some variables use "-1" for "not applicable"


## Citation

Neubauer, A. B., & Schmiedek, F. (2024). Approaching academic adjustment on multiple time scales. Zeitschrift Für Erziehungswissenschaft, 27(1), 147–168. https://doi.org/10.1007/s11618-023-01182-8




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| question_nr | Type of the questionnaire | categorical |  |  |  |  |  | ESM |  |  |
| start_time | Time when participant started prompt | PosixCt |  |  |  |  |  | ESM |  |  |
| timestamp | Unix time stamp | numeric |  |  |  |  |  | ESM |  |  |
| location | Location | categorical | 8 | Where are you right now? | 1 = At home<br>2 = With friends<br>3 = At my university<br>4 = On the bus, in the train, in the car 5 = Shopping / running errands<br>6 = Outside (walking, doing sports, ...) 7 = At my workplace<br>8 = Elsewhere, namely: |  |  | ESM | context, location |  |
| number_of_company | Number of companions selected | numeric |  |  |  |  |  | ESM | social interaction, context |  |
| no_company | Alone | binary | 2 | alone | FALSE = not selected TRUE = selected |  |  | ESM | social interaction, context, loneliness |  |
| with_partner | With partner | binary | 2 | with partner | FALSE = not selected TRUE = selected |  |  | ESM | social interaction, context |  |
| with_parents | With parents | binary | 2 | with my parents | FALSE = not selected TRUE = selected |  |  | ESM | social interaction, context |  |
| with_relatives | With relatives | binary | 2 | with other relative | FALSE = not selected TRUE = selected |  |  | ESM | social interaction, context |  |
| with_friends | With friends | binary | 2 | with friends | FALSE = not selected TRUE = selected |  |  | ESM | social interaction, context |  |
| with_fellow_students | With fellow students | binary | 2 | with fellow students/ colleagues | FALSE = not selected TRUE = selected |  |  | ESM | social interaction, context |  |
| with_strangers | With strangers | binary | 2 | with strangers | FALSE = not selected TRUE = selected |  |  | ESM | social interaction, context |  |
| happy | Happy | rating_scale | 7 | Right now, I feel happy. | 1= not at all  <br>7= very |  | affect circumplex | ESM | happiness, positive affect, affect |  |
| afraid | Afraid | rating_scale | 7 | Right now, I feel afraid. | 1= not at all  <br>7= very |  | affect circumplex | ESM | fear, negative affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 7 | Right now, I feel sad. | 1= not at all  <br>7= very |  | affect circumplex | ESM | sadness, negative affect, affect |  |
| balanced | Balanced | rating_scale | 7 | Right now, I feel balanced. | 1= not at all  <br>7= very |  | affect circumplex | ESM | positive affect, affect |  |
| exhausted | Exhausted | rating_scale | 7 | Right now, I feel exhausted. | 1= not at all  <br>7= very |  | affect circumplex | ESM | fatigue, negative affect, affect |  |
| cheerful | Cheerful | rating_scale | 7 | Right now, I feel cheerful. | 1= not at all  <br>7= very |  | affect circumplex | ESM | cheerfulness, positive affect, affect |  |
| worried | Worried | rating_scale | 7 | Right now, I feel worried. | 1= not at all  <br>7= very |  | affect circumplex | ESM | worry, anxiety, negative affect, affect, neuroticism, big five |  |
| lively | Lively | rating_scale | 7 | Right now, I feel lively. | 1= not at all  <br>7= very |  | affect circumplex | ESM | energy, positive affect, affect |  |
| angry | Angry | rating_scale | 7 | Right now, I feel angry. | 1= not at all  <br>7= very |  | affect circumplex | ESM | anger, negative affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | Right now, I feel relaxed. | 1= not at all  <br>7= very |  | affect circumplex | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| studied | Studied | binary | 2 | Have you worked for your studies since getting up / since the last survey?<br>Think of all possible study- related tasks (e.g., attending lectures, working on exercises, reading or researching literature, ...). | 1 = yes 2 = no |  |  | ESM | study, academic, activity, context |  |
| number_study_activities | Number of study activities | numeric |  |  |  |  |  | ESM | study, academic, activity, context |  |
| attended_lecture_seminar | Attended lecture/seminar | binary | 2 | Attended a lecture, seminar or lab | FALSE = not selected TRUE = selected |  |  | ESM | study, academic, activity, context |  |
| held_presentation | Held presentation | binary | 2 | Held a presentation in one of my classes | FALSE = not selected TRUE = selected |  |  | ESM | study, academic, activity, context |  |
| group_work | Group work | binary | 2 | Worked in a group as part of an exercise, laboratory, etc. | FALSE = not selected TRUE = selected |  |  | ESM | study, academic, activity, context |  |
| assignments | Assignments | binary | 2 | Worked on assignments | FALSE = not selected TRUE = selected |  |  | ESM | study, academic, activity, context |  |
| study_reading | Study reading | binary | 2 | Read texts | FALSE = not selected TRUE = selected |  |  | ESM | study, academic, activity, context |  |
| preparation_follow_up | Study preparation or follow-up | binary | 2 | Preparation or follow-up | FALSE = not selected TRUE = selected |  |  | ESM | study, academic, activity, context |  |
| other_study_activities | Other study activities | binary | 2 | other, namely: | FALSE = not selected TRUE = selected |  |  | ESM | study, academic, activity, context |  |
| time_spent_studying | Time spent studying | categorical | 5 | How long have you worked for your studies since getting up/ sincethe last survey? | 1 = Less than half an hour <br>2 = Half an hour to an hour <br>3 = One hour to two hours <br>4 = Two to three hours <br>5 = More than three hours |  |  | ESM | study, academic, activity, context |  |
| number_other_activities | Number of other activities | numeric |  |  |  |  |  | ESM | activity, context |  |
| part_time_job | Part-time job | binary | 2 | worked for my part-time job | FALSE = not selected <br>TRUE = selected |  |  | ESM | work, activity, context |  |
| care_taking | Care-taking of children / other family members | binary | 2 | took care of children / other family members | FALSE = not selected <br>TRUE = selected |  |  | ESM | caretaking, activity, context |  |
| time_with_friends | Time with friends | binary | 2 | spent time with friends | FALSE = not selected <br>TRUE = selected |  |  | ESM | friends, social interaction, activity, context |  |
| on_social_media | On social media | binary | 2 | on social media | FALSE = not selected <br>TRUE = selected |  |  | ESM | social media, activity, context |  |
| tv_video_games | TV, video games | binary | 2 | watched TV, played video games | FALSE = not selected <br>TRUE = selected |  |  | ESM | tv, video games, activity, context |  |
| listened_music | Listening to music | binary | 2 | listened to music | FALSE = not selected <br>TRUE = selected |  |  | ESM | music, activity, context |  |
| sports | Sports | binary | 2 | played sports | FALSE = not selected <br>TRUE = selected |  |  | ESM | sports, physical activity, exercise, activity, context |  |
| walking | Going for a walk | binary | 2 | went for a walk | FALSE = not selected <br>TRUE = selected |  |  | ESM | physical activity, activity, context |  |
| prayer_meditation | Prayer / Meditation | binary | 2 | prayed / meditated | FALSE = not selected <br>TRUE = selected |  |  | ESM | religion, meditation, activity, context |  |
| reading | Reading | binary | 2 | read | FALSE = not selected <br>TRUE = selected |  |  | ESM | reading, activity, context |  |
| other_activities | Other activities | binary | 2 | other, namely | FALSE = not selected <br>TRUE = selected |  |  | ESM | activity, context |  |
| supposed_to_study | Supposed to study | binary | 2 | Were you supposed to have been working for your studies since getting up / since the last survey? | 1 = No, I was at leisure time. <br>2 = Yes, but I decided against it. |  |  | ESM | procrastination, conscientiousness, big five |  |
| study_motivation_others_disappointed | Study motivation by other's disappointment | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because others would have been disappointed in me if I had not done so | 1 = completely disagree <br>7 = completely agree |  |  | ESM | academic motivation, motivation, study |  |
| study_motivation_felt_bad | Study motivation by bad feelings | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I would have felt bad if I had not done this. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | academic motivation, motivation, study |  |
| study_motivation_important | Study motivation by personal importance | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because the work I did was personally important to me | 1 = completely disagree <br>7 = completely agree |  |  | ESM | academic motivation, motivation, study |  |
| study_motivation_interesting | Study motivation by interest | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I found the work interesting | 1 = completely disagree <br>7 = completely agree |  |  | ESM | academic motivation, motivation, study, interest |  |
| study_motivation_compulsory | Study motivation by obligation | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I had to (e.g. because of a compulsory course, or as a prerequisite for a seminar). | 1 = completely disagree <br>7 = completely agree |  |  | ESM | academic motivation, motivation, study |  |
| study_motivation_proving | Study motivation by proving onself | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I wanted to prove to myself or others that I can do something well. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | academic motivation, motivation, study |  |
| study_motivation_understanding | Study motivation by understanding | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I wanted to understand the contents of my studies better. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | academic motivation, motivation, study |  |
| study_motivation_enjoyment | Study motivation by enjoyment | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I enjoyed the work. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | enjoyment, motivation, activity |  |
| activity_motivation_others_disappointed | Activity motivation by other's disappointment | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because others would have been disappointed in me if I had not done so | 1 = completely disagree <br>7 = completely agree |  |  | ESM | academic motivation, motivation, study |  |
| activity_motivation_felt_bad | Activity motivation by bad feelings | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I would have felt bad if I had not done this. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | motivation, activity |  |
| activity_motivation_important | Activity motivation by personal importance | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because the activity I did was personally important to me | 1 = completely disagree <br>7 = completely agree |  |  | ESM | motivation, activity |  |
| activity_motivation_interesting | Activity motivation by interest | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I found the activity interesting | 1 = completely disagree <br>7 = completely agree |  |  | ESM | interest, motivation, activity |  |
| activity_motivation_compulsory | Activity motivation by obligation | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I had to. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | motivation, activity |  |
| activity_motivation_proving | Activity motivation by proving onself | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I wanted to prove to myself or others that I can do something well. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | motivation, activity |  |
| activity_motivation_understanding | Activity motivation by understanding | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I wanted to understand it better. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | motivation, activity |  |
| activity_motivation_enjoyment | Activity motivation by enjoyment | rating_scale | 7 | I have worked for my studies since getting up / since the last survey because I enjoyed the activity. | 1 = completely disagree <br>7 = completely agree |  |  | ESM | enjoyment, motivation, activity |  |
| see_good_in_bad | See good in bad | rating_scale | 8 | I have tried to see the good aspects in a bad situation as well. | 1 = not at all<br>7 = very<br>-1 = not applicable |  |  | ESM | reappraisal, reframing, emotion regulation |  |
| focus_on_good | Focus on the good | rating_scale | 8 | I focused on the good aspects of my situation to feel better. | 1 = not at all<br>7 = very<br>-1 = not applicable |  |  | ESM | reappraisal, reframing, emotion regulation |  |
| suppression | Suppression | rating_scale | 8 | I suppressed my feelings. | 1 = not at all<br>7 = very<br>-1 = not applicable |  |  | ESM | suppression, emotion regulation |  |
| changed_feeling | Change feelings | rating_scale | 8 | I changed my feelings by thinking differently about my current situation. | 1 = not at all<br>7 = very<br>-1 = not applicable |  |  | ESM | emotion regulation |  |
| rumination | Rumination | rating_scale | 8 | I have thought about my feelings or situation over and over again. | 1 = not at all<br>7 = very<br>-1 = not applicable |  |  | ESM | rumination, emotion regulation |  |
| end_time | Last update to prompt | PosixCt |  |  |  |  |  | ESM |  |  |
| finished | Prompt finished | binary | 2 | Variable indicating whether the participant reached the goodbye page or not | FALSE = Did not reach good-bye-page<br>TRUE = Reached good-by page |  |  | ESM |  |  |
| last_page | The page most recently answered (and sent via the next button) by the participant | numeric |  |  |  |  |  | ESM |  |  |
| max_page | The greatest number of any page answered by the participant. | numeric |  |  |  |  |  | ESM |  |  |
| too_late | Answered ESM too late | binary | 2 | Variable indicating if participants had answered parts of the questionnaire later than intended (i.e., later than the time point when the questionnaire was officially closed). Responses given later than inetnded were set to missing. | 0 = all responses given within acceptable time frame<br>1 = (parts of the) responses given later than intended |  |  | ESM |  |  |
| noncompliance_esm | Noncompliance ESM | categorical | 3 | Variable coding if a participant has completed less than 5 beeps per week or has participated only 1 day within a week. Evaluated separately for both study weeks | 0 = more than 5 beeps and more than 1 day of data collection<br>1 = at least 5 beeps but not more than 1 day of data collection<br>2 = less than 5 beeps but more than 1 day of data collection |  |  | ESM |  |  |
| case | Number of the interview | numeric |  |  |  |  |  | ESM |  |  |
| source | Source of data | Date |  | esm = ESM data |  |  |  | ESM |  |  |
| date | Date on which the questionnaire was sent out to participants | Date |  |  |  |  |  | ESM |  |  |
| contact_with_people | Contact with people | rating_scale | 7 | How far you agree to the statement, referring to today? ....contact with people who care for me... | 1 = completely disagree <br>7 = completely agree |  |  | Daily | relatedness, social connectedness | mistake in codebook (says it refers to last week, but refers to the day) |
| excluded_ostracized | Excluded or ostracized | rating_scale | 7 | How far you agree to the statement, referring to today? ...excluded or ostracized | 1 = completely disagree <br>7 = completely agree |  |  | Daily | social exclusion |  |
| failure | Failure | rating_scale | 7 | How far you agree to the statement, referring to today? ...failure | 1 = completely disagree <br>7 = completely agree |  |  | Daily | failure, frustration |  |
| own_way | Own way | rating_scale | 7 | How far you agree to the statement, referring to today? ...things my own way | 1 = completely disagree <br>7 = completely agree |  |  | Daily | autonomy, self-determination |  |
| completed_difficult_project | Completed difficult project | rating_scale | 7 | How far you agree to the statement, referring to today? ...completed difficult project | 1 = completely disagree <br>7 = completely agree |  |  | Daily | accomplishment, success |  |
| true_self | True self | rating_scale | 7 | How far you agree to the statement, referring to today? ...true self | 1 = completely disagree <br>7 = completely agree |  |  | Daily | authenticity, autonomy, self-determination |  |
| connected | Connected | rating_scale | 7 | How far you agree to the statement, referring to today? ...close and connected... | 1 = completely disagree <br>7 = completely agree |  |  | Daily | social connectedness |  |
| mastered_challenges | Mastered challenges | rating_scale | 7 | How far you agree to the statement, referring to today? ...mastered hard challenges | 1 = completely disagree <br>7 = completely agree |  |  | Daily | competence, mastery, achievement |  |
| intimacy | Sense of intimacy | rating_scale | 7 | How far you agree to the statement, referring to today? ...strong sense of intimacy... | 1 = completely disagree <br>7 = completely agree |  |  | Daily | intimacy ,relatedness, social connectedness |  |
| pressure | Pressure | rating_scale | 7 | How far you agree to the statement, referring to today? ...pressure ... | 1 = completely disagree <br>7 = completely agree |  |  | Daily | autonomy, stress |  |
| told_what_to_do | Told what to do | rating_scale | 7 | How far you agree to the statement, referring to today? ...people telling me... | 1 = completely disagree <br>7 = completely agree |  |  | Daily | autonomy, social pressure |  |
| unappreciated | Unappreciated | rating_scale | 7 | How far you agree to the statement, referring to today? ...unappreciated... | 1 = completely disagree <br>7 = completely agree |  |  | Daily | relatedness, frustration |  |
| disagreements_conflicts | Disagreements | rating_scale | 7 | How far you agree to the statement, referring to today? ...disagreements or conflicts... | 1 = completely disagree <br>7 = completely agree |  |  | Daily | social conflict, social stress |  |
| even_hard_things | Even at hard things | rating_scale | 7 | How far you agree to the statement, referring to today? ...even at the hard things. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | competence, mastery, self-efficacy |  |
| against_own_will | Against own will | rating_scale | 7 | How far you agree to the statement, referring to today? ...things against my will. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | autonomy, coercion |  |
| did_stupid | Did something stupid | rating_scale | 7 | How far you agree to the statement, referring to today? I did something stupid. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | self-criticism |  |
| struggled | Struggled | rating_scale | 7 | How far you agree to the statement, referring to today? ...struggled doing something... | 1 = completely disagree <br>7 = completely agree |  |  | Daily | competence, challenge |  |
| did_interesting | Did something interesting | rating_scale | 7 | How far you agree to the statement, referring to today? ...doing what interests me. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | interest, autonomy, self-determination |  |
| happy_daily | Happy today | rating_scale | 7 | Today, I felt happy | 1 = completely disagree <br>7 = completely agree |  |  | Daily | happiness, positive affect, affect |  |
| afraid_daily | Afraid today | rating_scale | 7 | Today, I felt afraid | 1 = completely disagree <br>7 = completely agree |  |  | Daily | fear, negative affect, affect, neuroticism, big five |  |
| sad_daily | Sad today | rating_scale | 7 | Today, I felt sad | 1 = completely disagree <br>7 = completely agree |  |  | Daily | sadness, negative affect, affect |  |
| balanced_daily | Balanced today | rating_scale | 7 | Today, I felt balanced | 1 = completely disagree <br>7 = completely agree |  |  | Daily | positive affect, affect |  |
| exhausted_daily | Exhausted today | rating_scale | 7 | Today, I felt exhausted | 1 = completely disagree <br>7 = completely agree |  |  | Daily | fatigue, negative affect, affect |  |
| cheerful_daily | Cheerful today | rating_scale | 7 | Today, I felt cheerful | 1 = completely disagree <br>7 = completely agree |  |  | Daily | cheerfulness, positive affect, affect |  |
| worried_daily | Worried today | rating_scale | 7 | Today, I felt worried | 1 = completely disagree <br>7 = completely agree |  |  | Daily | worry, anxiety, psychopathology, negative affect, affect, neuroticism, big five |  |
| lively_daily | Lively today | rating_scale | 7 | Today, I felt lively | 1 = completely disagree <br>7 = completely agree |  |  | Daily | energy, positive affect, affect |  |
| angry_daily | Angry today | rating_scale | 7 | Today, I felt angry | 1 = completely disagree <br>7 = completely agree |  |  | Daily | anger, negative affect, affect |  |
| relaxed_daily | Relaxed today | rating_scale | 7 | Today, I felt relaxed | 1 = completely disagree <br>7 = completely agree |  |  | Daily | relaxation, positive affect, affect, neuroticism, big five |  |
| number_study_formats | Number of course formats | numeric |  |  | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic, context |  |
| study_in_person | In person | binary | 2 | Course format: in person | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic, context |  |
| study_virtual | Virtual | binary | 2 | Course format: virtual | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic, context |  |
| study_hybrid | Hybrid | binary | 2 | Course format: hybrid | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic, context |  |
| no_class | No class | binary | 2 | Course format: I did not have a class today | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic, context |  |
| hours_studying | Hours studying | numeric |  | Hours studying | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic |  |
| minutes_studying | ... and Minutes | numeric |  | Minutes studying (above integer hours) | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic |  |
| study_enjoy | Enjoyed studying | rating_scale | 7 | Today I really enjoyed the subject I am studying. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | enjoyment, study, academic |  |
| study_wearing_down | Study wore me down | rating_scale | 7 | Today my course of study was wearing me down. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | exhaustion, study, academic |  |
| study_satisfied | Satisfied with study | rating_scale | 7 | On the whole I was satisfied with my current course of study today. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | satisfaction, study, academic |  |
| study_difficult_reconcile | Difficult to reconcile study with other obligations | rating_scale | 7 | Today it was very difficult for me to reconcile my course of study with other obligations. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | work-life-balance, study, academic |  |
| study_interesting | Study was interesting | rating_scale | 7 | Today I found my course of study really interesting. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | interest, study, academic |  |
| study_exhausted | Study was exhausting | rating_scale | 7 | Today my course of study made me feel tired and exhausted. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | exhaustion, study, academic |  |
| study_only_necessary | Studied only necessary | rating_scale | 7 | Today I no longer did anything more for my studies than that which was absolutely necessary. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | motivation, study, academic |  |
| study_energy | Invested energy in study | rating_scale | 7 | Today I invested a lot of energy in being successful in my degree course. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | energy, motivation, study, academic |  |
| study_identification | Identification with program | rating_scale | 7 | Today I could fully identify with my degree program. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | identification, study, academic |  |
| study_expectations | Meeting expectations | rating_scale | 7 | Today the expectations I had of my degree program were met. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic |  |
| study_consider_quitting | Considered quitting | rating_scale | 7 | Today I seriously considered changing my major subject or giving up my course of study entirely. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | study, academic |  |
| time_mother_hours | Hours spent with mother | numeric |  | How much time did you spend with your mother today? Hours |  |  |  | Daily | mother, parents, family, social interaction |  |
| time_mother_minutes | and minutes spent with mother | numeric |  | How much time did you spend with your mother today? Minutes above integer hours |  |  |  | Daily | mother, parents, family, social interaction |  |
| time_father_hours | Hours spent with father | numeric |  | How much time did you spend with your father today? Hours |  |  |  | Daily | father, parents, family, social interaction |  |
| time_father_minutes | and minutes spent with father | numeric |  | How much time did you spend with your father today? Minutes above integer hours |  |  |  | Daily | father, parents, family, social interaction |  |
| mother_autonomy | Autonomy from mother | rating_scale | 8 | Today my mother allowed me to make choices of my own. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | mother, parents, family, parental autonomy, parenting |  |
| mother_own_decisions | Mother allowed own decisions | rating_scale | 8 | Today my mother allowed me to decide things for myself. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | mother, parents, family, parental autonomy, parenting |  |
| mother_asked_opinion | Mother asked opinion | rating_scale | 8 | Today my mother deliberately asked my opinion about some things. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | mother, parents, family, parental autonomy, parenting |  |
| mother_interrupted | Interrupted by mother | rating_scale | 8 | Today my mother interrupted me during a conversation. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | mother, parents, family, parental autonomy, parenting |  |
| mother_point_of_view | Mother considering from my point of view | rating_scale | 8 | Today my mother was willing to consider things from my point of view. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | mother, parents, family, parental autonomy, parenting |  |
| mother_guilty | Mother made me guilty | rating_scale | 8 | Today my mother made me feel guilty about something. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | mother, parents, family, parental autonomy, parenting |  |
| mother_tried_change | Mother tried to change my feeling | rating_scale | 8 | Today my mother tried to change how I feel or think about things. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | mother, parents, family, parental autonomy, parenting |  |
| mother_disapproved | Disapproval of mother | rating_scale | 8 | Today my mother was less friendly with me because I did something she disapproved. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | mother, parents, family, parental autonomy, parenting |  |
| father_autonomy | Autonomy from father | rating_scale | 8 | Today my father allowed me to make choices of my own. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | father, parents, family, parental autonomy, parenting |  |
| father_own_decisions | Father allowed making own decisions | rating_scale | 8 | Today my father allowed me to decide things for myself. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | father, parents, family, parental autonomy, parenting |  |
| father_asked_opinion | Father asked opinion | rating_scale | 8 | Today my father deliberately asked my opinion about some things. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | father, parents, family, parental autonomy, parenting |  |
| father_interrupted | Interrupted by Father | rating_scale | 8 | Today my father interrupted me during a conversation. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | father, parents, family, parental autonomy, parenting |  |
| father_point_of_view | Father considering from my point of view | rating_scale | 8 | Today my father was willing to consider things from my point of view. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | father, parents, family, parental autonomy, parenting |  |
| father_guilty | Father made me guilty | rating_scale | 8 | Today my father made me feel guilty about something. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | father, parents, family, parental autonomy, parenting |  |
| father_tried_change | Father tried to change my feeling | rating_scale | 8 | Today my father tried to change how I feel or think about things. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | father, parents, family, parental autonomy, parenting |  |
| father_disapproved | Disapproval of father | rating_scale | 8 | Today my father was less friendly with me because I did something he disapproved. | 1= completely disagree<br>7= completely agree<br>-1 = not applicable (no contact today) |  |  | Daily | father, parents, family, parental autonomy, parenting |  |
| noncompliance_daily | Noncompliance daily questionnaire | binary | 2 | Variable coding if a participant has participated only 1 day within a week | 0 = more than 1 day of data collection<br>1 = only 1 day of data collection |  |  | ESM |  |  |

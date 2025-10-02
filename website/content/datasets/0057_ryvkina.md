---
title: "Ryvkina (2023)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Ryvkina
- **Year:** 2023
- **Paper DOI:** [https://doi.org/10.5334/jopd.83](https://doi.org/10.5334/jopd.83)
- **Topics:** COVID, personality, emotions, affect, interaction, activities

## Data Characteristics

- **Participants:** 2272 (general population)
- **Time Points:** 84
- **Days:** 14
- **Beeps per Day:** 6
- **Sampling Scheme:** 6x/day at random times within the bounds of every participant's individually preferred time window, with at least 40 min. time lags between surveys
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/6kzx3/](https://osf.io/6kzx3/)
- **Link to Codebook:** [https://osf.io/6kzx3/](https://osf.io/6kzx3/)
- **Link to Code:** [https://osf.io/6kzx3/](https://osf.io/6kzx3/)
- **License:** CC-By Attribution 4.0 International

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0057_ryvkina")`
- **Python:** `openesm.get_dataset("0057_ryvkina")`

## Additional Comments

sample 2 in the paper; EMOTIONS project; subset of data used in a publication is available at https://osf.io/nxyh3/files/osfstorage; no beep information available; original dataset contains additional careless responding indices that could be recomputed from the data;  the original authors would be thankful if researchers planning to re-use their data could fill in this form: https://forms.gle/MDj6WceMcioq5eUt9


## Citation

Ryvkina, E., Kroencke, L., Geukes, K., Scharbert, J., & Back, M. D. (2023). Understanding psychological responses to the COVID-19 pandemic through ESM data: The EMOTIONS project. Journal of Open Psychology Data, 11(1). https://doi.org/10.5334/jopd.83



### Additional Reference

Kroencke, L., Kuper, N., Mota, S., Geukes, K., Zeigler-Hill, V., & Back, M. D. (2023). Narcissistic status pursuit in everyday social life: A within-person process approach to the behavioral and emotional dynamics of narcissism. Journal of Personality and Social Psychology, 125(6), 1519–1541. https://doi.org/10.1037/pspp0000467



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| wave | Study wave | other | 3 |  |  |  |  | ESM |  |  |
| dataset | Dataset | other | 2 |  |  |  |  | ESM |  |  |
| created_esm | Creation time of ESM prompt | PosixCt |  |  |  |  |  | ESM |  |  |
| ended_esm | Ending time of ESM prompt | PosixCt |  |  |  |  |  | ESM |  |  |
| interaction | Interaction | binary | 2 | Since the last survey, I (at least) had one social <br>interaction that lasted longer than 5 minutes. | 1 = Yes<br>2 = No |  |  | ESM | social interaction |  |
| type_interaction | Interaction type | categorical | 3 | If Interaction = Yes, the following questions (until int_activity) are posed.<br>Now please answer a few questions about your last social interaction, i.e. the last situation lasting at least 5 minutes in which you interacted with one or more other people.<br>During what type of activity did the interaction take place? | 1 = job-related task/chore<br>2 = private task/chore<br>3 = leisure activity |  |  | ESM | social interaction |  |
| communication | Communication type | binary | 2 | The interaction evaluated here took place as follows: | 1 = directly/in person<br>2 = via phone/chat |  |  | ESM | social interaction, communication |  |
| no_interactionpartner | Number of interaction partners | numeric | 5 | How many people other than you were involved in the interaction? Please enter 5 if you interacted with more than 5 people. In this case, please refer below to the five people with whom you interacted the most. | Answer options = 1-5 |  |  | ESM | interaction partner, social interaction, context |  |
| interaction_partner1 | Interaction partner 1 | categorical | 11 | This interaction partner in the situation has the following relationship to me: | 1 (Supervisor); 2 (My employee); 3 (Co-worker); 4 (Customer client patient); 5 (Friend / acquaintance); 6 (Partner); 7 (My child); 8 (Parent); 9 (Sibling); 10 (other relatives); 11 (other persons) |  |  | ESM | interaction partner, social interaction, context |  |
| interaction_partner2 | Interaction partner 2 | categorical | 11 | This interaction partner in the situation has the following relationship to me: | 1 (Supervisor); 2 (My employee); 3 (Co-worker); 4 (Customer client patient); 5 (Friend / acquaintance); 6 (Partner); 7 (My child); 8 (Parent); 9 (Sibling); 10 (other relatives); 11 (other persons) |  |  | ESM | interaction partner, social interaction, context |  |
| interaction_partner3 | Interaction partner 3 | categorical | 11 | This interaction partner in the situation has the following relationship to me: | 1 (Supervisor); 2 (My employee); 3 (Co-worker); 4 (Customer client patient); 5 (Friend / acquaintance); 6 (Partner); 7 (My child); 8 (Parent); 9 (Sibling); 10 (other relatives); 11 (other persons) |  |  | ESM | interaction partner, social interaction, context |  |
| interaction_partner4 | Interaction partner 4 | categorical | 11 | This interaction partner in the situation has the following relationship to me: | 1 (Supervisor); 2 (My employee); 3 (Co-worker); 4 (Customer client patient); 5 (Friend / acquaintance); 6 (Partner); 7 (My child); 8 (Parent); 9 (Sibling); 10 (other relatives); 11 (other persons) |  |  | ESM | interaction partner, social interaction, context |  |
| interaction_partner5 | Interaction partner 5 | categorical | 11 | This interaction partner in the situation has the following relationship to me: | 1 (Supervisor); 2 (My employee); 3 (Co-worker); 4 (Customer client patient); 5 (Friend / acquaintance); 6 (Partner); 7 (My child); 8 (Parent); 9 (Sibling); 10 (other relatives); 11 (other persons) |  |  | ESM | interaction partner, social interaction, context |  |
| beh_leadership | Interaction behavior leadership | rating_scale | 6 | During the interaction, I exhibited the following behavior: I took the lead. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | assertiveness, social behavior, extraversion, big five |  |
| beh_criticism | Interaction behavior criticism | rating_scale | 6 | During the interaction, I exhibited the following behavior: I criticised others. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | criticism, social behavior, social interaction |  |
| beh_uninvolved | Interaction behavior uninvolved | rating_scale | 6 | During the interaction, I exhibited the following behavior: I did not get involved. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | social withdrawal, social behavior, extraversion, big five, social interaction |  |
| beh_selfesteem | Interaction self-esteem | rating_scale | 6 | During the interaction, I exhibited the following behavior: I was self-assured. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | self-esteem, self-concept, social interaction |  |
| beh_unfriendly | Interaction unfriendly | rating_scale | 6 | During the interaction, I exhibited the following behavior: I was unfriendly. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | friendliness, agreeableness, big five, social interaction |  |
| beh_reserved | Interaction reserved | rating_scale | 6 | During the interaction, I exhibited the following behavior: I was reserved. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | reservedness, social behavior, social interaction, extraversion, big five |  |
| beh_corona | Interaction about Covid | rating_scale | 6 | During the interaction, I exhibited the following behavior: I raised the topic of the coronavirus. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | Covid, social interaction |  |
| beh_help | Interaction helped others | rating_scale | 6 | During the interaction, I exhibited the following behavior: I helped others. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | helping behavior, prosocial behavior, social behavior, big five, agreeableness |  |
| status_admired | Interaction admired | rating_scale | 6 | During the interaction I perceived the following: I was admired. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | admiration, social behavior, social interaction |  |
| status_criticised | Interaction criticised | rating_scale | 6 | During the interaction I perceived the following: I was criticised. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | criticism, social behavior, social interaction |  |
| status_ignored | Interaction ignored | rating_scale | 6 | During the interaction I perceived the following: I was ignored. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | rejection, social behavior, social interaction |  |
| status_respected | Interaction respected | rating_scale | 6 | During the interaction I perceived the following: I was respected. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | respect, social support, social interaction |  |
| status_upstaged | Interaction upstaged | rating_scale | 6 | During the interaction I perceived the following: Others tried to steal the show from me. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | social behavior, social interaction |  |
| status_sidelined | Interaction sidelined | rating_scale | 6 | During the interaction I perceived the following: I was sidelined. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | exclusion, social behavior, social interaction |  |
| corona_asked | Interaction asked about Covid | rating_scale | 6 | During the interaction I perceived the following: I was asked about the coronavirus. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | Covid, social interaction |  |
| comfort | Interaction comfort | rating_scale | 6 | During the interaction I perceived the following: I experienced understanding and a feeling of security from others. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | social connectedness, social interaction |  |
| int_proud | Proud after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Proud | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | pride, positive affect, affect, social interaction |  |
| int_success | Succesfull after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Successful | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | successful, positive affect, affect, social interaction |  |
| int_superior | Feeling superior after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Superior | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | superiority, narcissism |  |
| int_angry | Angry after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Angry | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | anger, negative affect, affect, social interaction |  |
| int_excluded | Socially excluded after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Socially excluded | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | social exclusion, social interaction |  |
| int_envious | Envious after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Envious | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | envy, negative affect, affect, big five, agreeableness, social interaction |  |
| int_resentful | Resentful after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Resentful | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | resentment, anger, negative affect, affect, social interaction |  |
| int_ashamed | Ashamed after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Ashamed | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | shame, negative affect, affect |  |
| int_insecure | Insecure after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Insecure | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | insecurity, negative affect, affect, neuroticism, big five, social interaction |  |
| int_enthusiastic | Enthusiastic after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Enthusiastic | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five, social interaction |  |
| int_relaxed | Relaxed after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Relaxed | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five, social interaction |  |
| int_anxious | Anxious after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Anxious | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | anxiety, negative affect, affect, neuroticism, big five, social interaction |  |
| int_sad | Sad after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Sad | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | sadness, negative affect, affect, social interaction |  |
| int_lonely | Lonely after interaction | rating_scale | 6 | How did you feel immediately after the interaction? Lonely | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | loneliness, negative affect, affect, social interaction |  |
| int_pleasure | Satisfaction with interaction | rating_scale | 101 | Please use the following sliders to indicate how dissatisfied vs. satisfied you felt overall |  |  |  | ESM | satisfaction, positive affect, affect, social interaction |  |
| int_activity | Activatedness after interaction | rating_scale | 101 | Please use the following sliders to indicate how calm vs. activated you felt overall |  |  |  | ESM | active, energy, positive affect, affect, big five, extraversion, social interaction |  |
| type_activity | Type of non-interaction activity | categorical | 3 | If no interaction took place, the following questions (until occup_activity) are posed. <br>Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others.<br>What kind of activity was it? | 1 = job-related task/chore<br>2 = private task/chore<br>3 = leisure activity |  |  | ESM | activity, context |  |
| digital | Digital activity | binary | 2 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. | 1 = on the computer/laptop/tablet/cell phone<br>2 = not on the computer/laptop/tablet/cell phone |  |  | ESM | activity, context |  |
| corona_research | Coronavirus research | binary | 2 | The activity related to: Researching the coronavirus | 1 = Yes<br>2 = No |  |  | ESM | Covid |  |
| corona_reading | Coronavirus reading | binary | 2 | The activity related to: Reading news about the coronavirus | 1 = Yes<br>2 = No |  |  | ESM | Covid |  |
| pleasant | Pleasant activity | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I found the activity pleasant. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | situational appraisal, activity, context |  |
| fun | Fun activity | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I had fun. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | situational appraisal, activity, context |  |
| done | Did tasks assigned by others | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I did tasks that others assigned to me. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | task assignment, work behavior, activity, context |  |
| intellectual | Intellectual activity | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I was intellectually/mentally stimulated. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | intellectual, openness, big five, activity, context |  |
| overwhelmed | Overwhelming activity | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I was overwhelmed. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | negative affect, affect, activity, context |  |
| bored | Bored during activity | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I was bored. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | boredom, negative affect, affect |  |
| concentrated | Concentrated during activity | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I was concentrated. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | concentration, attention, activity, context |  |
| motivated | Motivated during activity | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I was motivated. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | motivation, activity, context |  |
| corona_thinking | Thinking about Covid during activity | rating_scale | 6 | Now please answer a few questions about your last completed activity, i.e. the last situation lasting at least 5 minutes in which you did not interact with others. During the activity, I perceived the following: I thought about the coronavirus. | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | Covid |  |
| occup_proud | Proud after activity | rating_scale | 6 | How did you feel immediately after the activity? Proud | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | pride, positive affect, affect, activity, context |  |
| occup_success | Successful after activity | rating_scale | 6 | How did you feel immediately after the activity? Succesful | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | successful, positive affect, affect, activity, context |  |
| occup_superior | Feeling superior after activity | rating_scale | 6 | How did you feel immediately after the activity? Superior | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | superiority, narcissism, activity, context |  |
| occup_angry | Angry after activity | rating_scale | 6 | How did you feel immediately after the activity? Angry | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | anger, negative affect, affect, activity, context |  |
| occup_excluded | Excluded after activity | rating_scale | 6 | How did you feel immediately after the activity? Socially excluded | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | social exclusion, activity, context |  |
| occup_envious | Envious after activity | rating_scale | 6 | How did you feel immediately after the activity? Envious | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | envy, negative affect, affect, big five, agreeableness, activity, context |  |
| occup_resentful | Resentful after activity | rating_scale | 6 | How did you feel immediately after the activity? Resentful | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | resentment, anger, negative affect, affect, activity, context |  |
| occup_ashamed | Ashamed after activity | rating_scale | 6 | How did you feel immediately after the activity? Ashamed | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | shame, negative affect, affect, activity, context |  |
| occup_insecure | Insecure after activity | rating_scale | 6 | How did you feel immediately after the activity? Insecure | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | insecurity, negative affect, affect, neuroticism, big five, activity, context |  |
| occup_enthusiastic | Enthusiastic after activity | rating_scale | 6 | How did you feel immediately after the activity? Enthusiastic | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five, activity, context |  |
| occup_relaxed | Relaxed after activity | rating_scale | 6 | How did you feel immediately after the activity? Relaxed | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five, activity, context |  |
| occup_anxious | Anxious after activity | rating_scale | 6 | How did you feel immediately after the activity? Anxious | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | anxiety, negative affect, affect, neuroticism, big five, activity, context |  |
| occup_sad | Sad after activity | rating_scale | 6 | How did you feel immediately after the activity? Sad | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | sadness, negative affect, affect, activity, context |  |
| occup_lonely | Lonely after activity | rating_scale | 6 | How did you feel immediately after the activity? Lonely | 1 = Does not apply at all<br>6 = Applies completely |  |  | ESM | loneliness, negative affect, affect, activity, context |  |
| occup_pleasure | Satsifaction with activity | rating_scale | 101 | Please use the following sliders to indicate how dissatisfied vs. satisfied you felt overall |  |  |  | ESM | satisfaction, positive affect, affect, activity, context |  |
| occup_activity | Activatedness after activity | rating_scale | 101 | Please use the following sliders to indicate how calm vs. activated you felt overall |  |  |  | ESM | active, energy, positive affect, affect, big five, extraversion, activity, context |  |
| worry_ownhealth | Covid own health worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my health. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid |  |
| worry_ownsoclife | Covid own social life worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my social life. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid |  |
| worry_ownstudies | Covid own university studies worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my university studies. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid |  |
| worry_healthsystem | Covid health system worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about the healthcare system in Germany. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid |  |
| worry_soclife | Covid social cohesion worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about the social cohesion in Germany. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid |  |
| worry_economy | Covid economy worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about the economy/working life in Germany. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid |  |
| worry_cullife | Covid cultural life worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about the cultural life in Germany. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid |  |
| worry_parentshealth | Covid parents health worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my parents health. If a question does not apply, it can be omitted. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid, family |  |
| worry_grandparentshealth | Covid grandparents health worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my grandparents health. If a question does not apply, it can be omitted. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid, family |  |
| worry_siblingshealth | Covid siblings health worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my siblings' health. If a question does not apply, it can be omitted. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid, family |  |
| worry_childrenhealth | Covid children health worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my children's health. If a question does not apply, it can be omitted. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid, family |  |
| worry_partnerhealth | Covid partners health worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my partners' health. If a question does not apply, it can be omitted. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid, family |  |
| worry_friendshealth | Covid friends health worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about my close friends' health. If a question does not apply, it can be omitted. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid, family |  |
| worry_peoplehealth | Covid wider social environment health worries | rating_scale | 6 | Due to the coronavirus outbreak, I am worried about he health of my wider social environment (fellow university students, other acquaintances). If a question does not apply, it can be omitted. | 1 = Very little<br>6 = Very much |  |  | ESM | worry, health anxiety, Covid, family |  |

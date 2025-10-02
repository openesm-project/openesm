---
title: "Neubauer (2020)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Neubauer
- **Year:** 2020
- **Paper DOI:** [https://doi.org/10.1111/cdev.13515](https://doi.org/10.1111/cdev.13515)
- **Topics:** COVID, schooling, adolescents, family

## Data Characteristics

- **Participants:** 562 (adults living in a household with a schoolchild)
- **Time Points:** 21
- **Days:** 21
- **Beeps per Day:** 1
- **Sampling Scheme:** 1x/day at 7pm completed until 5am
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/wcerj/files/osfstorage](https://osf.io/wcerj/files/osfstorage)
- **Link to Codebook:** [https://osf.io/tyc32](https://osf.io/tyc32)
- **Link to Code:** [https://osf.io/et869](https://osf.io/et869)
- **License:** CC-By Attribution 4.0 International

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0072_neubauer")`
- **Python:** `openesm.get_dataset("0072_neubauer")`

## Additional Comments

data from the PACO project; for some Likert questions, -1 indicates that the question could not be answered


## Citation

Neubauer, A. B., Schmidt, A., Kramer, A. C., & Schmiedek, F. (2021). A little autonomy support goes a long way: Daily autonomy-supportive parenting, child well-being, parental need fulfillment, and change in child, family, and parent adjustment across the adaptation to the COVID-19 pandemic. Child Development, 92(5), 1679–1697. https://doi.org/10.1111/cdev.13515




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | Daily |  |  |
| day | Day of study | other |  |  |  |  |  | Daily |  |  |
| beep | Beep of the day | other |  |  |  |  |  | Daily |  |  |
| date | Date | Date |  |  |  |  |  | Daily |  |  |
| start_time | Prompt start time | PosixCt |  |  |  |  |  | Daily |  |  |
| last_update | Last update to prompt | PosixCt |  |  |  |  |  | Daily |  |  |
| sleep_quality | Sleep quality | rating_scale | 7 | How did you sleep last night? | 1= very poorly <br>7= very well |  |  | Daily | sleep quality, sleep |  |
| school_new_material | New material in school | categorical | 3 | Did your child receive learning materials or tasks from school today? | 1= yes  <br>2= no <br>3= don’t know |  |  | Daily | school, education |  |
| school_work_today | Child worked on school material | categorical | 3 | Has your child worked on materials or tasks today for school? This either refers to tasks designed for this particular day, or tasks that can be worked on over several days. | 1= yes  <br>2= no  <br>3= don’t know |  |  | Daily | school, education |  |
| difficulty_school_work | School work difficulty | rating_scale | 8 | My child thought the learning material or tasks for today were... | 1= too easy<br>7= too difficult  <br>-1= I cannot say today |  |  | Daily | school, education |  |
| volume_school_work | School work volume | rating_scale | 8 | My child thought the learning material or tasks for today were... | 1= too little<br>7= too much<br>-1= I cannot say today |  |  | Daily | school, education |  |
| school_work_hours | Hours spent on school work | numeric |  | approximately... hours and |  |  |  | Daily | school, education |  |
| school_work_minutes | Minutes spent on school work | numeric |  | ... minutes |  |  |  | Daily | school, education |  |
| school_work_comprehensible | School work comprehensibility | rating_scale | 8 | My child thought today's learning material or tasks were easy to understand. | 1= completely disagree <br>7= completely agree <br>-1= I cannot say today |  |  | Daily | school, education |  |
| school_work_independent | Child worked independently | rating_scale | 8 | My child worked on the learning material or tasks without problem today, on his/her own. | 1= completely disagree <br>7= completely agree <br>-1= I cannot say today |  |  | Daily | school, education |  |
| school_work_needed_support | Child needed support | rating_scale | 8 | My child needed a lot of support while working on the learning material or tasks today. | 1= completely disagree <br>7= completely agree <br>-1= I cannot say today |  |  | Daily | school, education |  |
| school_work_joy | Child enjoyed school work | rating_scale | 8 | My child really enjoyed working on the learning material or tasks today. | 1= completely disagree <br>7= completely agree <br>-1= I cannot say today |  |  | Daily | enjoy, positive affect, affect, school, education |  |
| school_work_effort | Child school work effort | rating_scale | 8 | My child invested a lot of effort in working on the learning material or tasks today. | 1= completely disagree <br>7= completely agree <br>-1= I cannot say today |  |  | Daily | school, education |  |
| time_with_child_hours | Time with child hours | numeric |  | Today, I spent about. |  |  |  | Daily | parenting, child |  |
| time_with_child_minutes | Time with child minutes | numeric |  | and ... minutes with my child. |  |  |  | Daily | parenting, child |  |
| parenting_fun | Parent-child fun | rating_scale | 7 | My child and I had fun together today. | 1= completely disagree <br>7= completely agree |  |  | Daily | parenting, family, child |  |
| parenting_talked_worries | Talked about worries | rating_scale | 7 | I talked to my child about his / her thoughts and worries today. | 1= completely disagree <br>7= completely agree |  |  | Daily | parenting, family, child |  |
| parenting_assert_difficult | Hard to assert against child | rating_scale | 7 | I found it hard to assert myself with respect to my child today. | 1= completely disagree <br>7= completely agree |  |  | Daily | parenting, family, child |  |
| parenting_drained_energy | Parenting drained energy | rating_scale | 7 | Looking after my child cost me a lot of energy today. | 1= completely disagree <br>7= completely agree |  |  | Daily | parenting, family, child |  |
| parenting_disagreements | Parent-child disagreements | rating_scale | 7 | My child and I had some disagreement today. | 1= completely disagree <br>7= completely agree |  |  | Daily | parenting, family conflict, family, child |  |
| parenting_child_decide | Let child decide | rating_scale | 7 | As far as possible, I let my child decide today what he / she wanted to do. | 1= completely disagree <br>7= completely agree |  |  | Daily | parental autonomy, parenting, family, child |  |
| parenting_child_liked | Child did what it liked | rating_scale | 7 | As far as possible, my child was able to do what he or she liked today. | 1= completely disagree <br>7= completely agree |  |  | Daily | parental autonomy, parenting, family, child |  |
| parenting_told_what_to_do | Told child what to do | rating_scale | 7 | I told my child several times today what he or she was supposed to do. | 1= completely disagree <br>7= completely agree |  |  | Daily | parental autonomy, parenting, family, child |  |
| parenting_explained_why | Explained why child should do | rating_scale | 7 | I explained to my child today why he or she should do certain things. | 1= completely disagree <br>7= completely agree |  |  | Daily | parental autonomy, parenting, family, child |  |
| parenting_explained_why_not | Explained why child should not do | rating_scale | 7 | I explained to my child today why he or she should not do certain things. | 1= completely disagree <br>7= completely agree |  |  | Daily | parental autonomy, parenting, family, child |  |
| child_happy | Child happy | rating_scale | 7 | Today my child was happy | 1= not at all <br>7= very |  |  | Daily | happiness, positive affect, affect, child, external rating |  |
| child_afraid | Child afraid | rating_scale | 7 | Today my child was afraid | 1= not at all <br>7= very |  |  | Daily | fear, negative affect, affect, neuroticism, big five, child, external rating |  |
| child_sad | Child sad | rating_scale | 7 | Today my child was sad | 1= not at all <br>7= very |  |  | Daily | sadness, negative affect, affect, child, external rating |  |
| child_balanced | Child balanced | rating_scale | 7 | Today my child was balanced | 1= not at all <br>7= very |  |  | Daily | positive affect, affect, child, external rating |  |
| child_exhausted | Child exhausted | rating_scale | 7 | Today my child was exhausted | 1= not at all <br>7= very |  |  | Daily | fatigue, negative affect, affect, child, external rating |  |
| child_cheerful | Child cheerful | rating_scale | 7 | Today my child was cheerful | 1= not at all <br>7= very |  |  | Daily | cheerfulness, positive affect, affect, child, external rating |  |
| child_worried | Child worried | rating_scale | 7 | Today my child was worried | 1= not at all <br>7= very |  |  | Daily | worry, anxiety, negative affect, affect, neuroticism, big five, child, external rating |  |
| child_lively | Child lively | rating_scale | 7 | Today my child was lively | 1= not at all <br>7= very |  |  | Daily | energy, positive affect, affect, child, external rating |  |
| child_angry | Child angry | rating_scale | 7 | Today my child was angry | 1= not at all <br>7= very |  |  | Daily | anger, negative affect, affect, child, external rating |  |
| child_relaxed | Child relaxed | rating_scale | 7 | Today my child was relaxed | 1= not at all <br>7= very |  |  | Daily | relaxation, positive affect, affect, neuroticism, big five, child, external rating |  |
| activities_total | Total activities | numeric |  | You will find a list of activities below. Please mark the activities you pursued today. Please state the duration of pursuit for the activity, too. You can state half or quarter hours as well (e.g., 0.5 or 5.25). |  |  |  | Daily | activity, context |  |
| activity_work | Professional work | binary | 2 | Work (professional) | FALSE = not selected <br>TRUE = selected |  |  | Daily | work, activity, context |  |
| activity_work_hours | Hours spent on professional work | numeric |  | ... Hours |  |  |  | Daily | work, activity, context |  |
| activity_household | Household chores | binary | 2 | Household chores | FALSE = not selected <br>TRUE = selected |  |  | Daily | housework, activity, context |  |
| activity_household_hours | Hours spent on household chores | numeric |  | ... Hours |  |  |  | Daily | housework, activity, context |  |
| activity_learning_with_child | Learning with child | binary | 2 | Learning with child(ren), supervising homework | FALSE = not selected <br>TRUE = selected |  |  | Daily | homework, parenting, activity, context |  |
| activity_learning_hours | Hours spent on learning | numeric |  | ... Hours |  |  |  | Daily | homework, parenting, activity, context |  |
| activity_playing_with_child | Playing with child | binary | 2 | Playing with child(ren) | FALSE = not selected <br>TRUE = selected |  |  | Daily | parenting, activity, context |  |
| activity_playing_hours | Hours spent on playing | numeric |  | ... Hours |  |  |  | Daily | parenting, activity, context |  |
| activity_communicating_friends | Communicating friends/family | binary | 2 | Communicating with friends or family, in person, via phone, chat... | FALSE = not selected <br>TRUE = selected |  |  | Daily | communication, social interaction, activity, context |  |
| activity_communicating_hours | Hours spent on communicating | numeric |  | ... Hours |  |  |  | Daily | communication, social interaction, activity, context |  |
| activity_walking | Walking | binary | 2 | Going for a walk | FALSE = not selected <br>TRUE = selected |  |  | Daily | walking, physical activity, activity |  |
| activity_walking_hours | Hours spent on walking | numeric |  | ... Hours |  |  |  | Daily | walking, physical activity, activity |  |
| activity_sports | Sports | binary | 2 | Sports | FALSE = not selected <br>TRUE = selected |  |  | Daily | sports, physical activity, exercise, activity, context |  |
| activity_sports_hours | Hours spent on sports | numeric |  | ... Hours |  |  |  | Daily | sports, physical activity, exercise, activity, context |  |
| activity_shopping | Shopping | binary | 2 | Shopping | FALSE = not selected <br>TRUE = selected |  |  | Daily | activity, context |  |
| activity_shopping_hours | Hours spent on shopping | numeric |  | ... Hours |  |  |  | Daily | activity, context |  |
| activity_gardening | Gardening | binary | 2 | Gardening | FALSE = not selected <br>TRUE = selected |  |  | Daily | activity, context |  |
| activity_gardening_hours | Hours spent on gardening | numeric |  | ... Hours |  |  |  | Daily | activity, context |  |
| activity_praying_meditating | Praying/meditating | binary | 2 | Praying / Meditating | FALSE = not selected <br>TRUE = selected |  |  | Daily | religion, meditation, activity, context |  |
| activity_praying_hours | Hours spent on praying | numeric |  | ... Hours |  |  |  | Daily | religion, meditation, activity, context |  |
| activity_media | Media usage | binary | 2 | Media usage (TV, video, private internet usage) | FALSE = not selected <br>TRUE = selected |  |  | Daily | media, activity, context |  |
| activity_media_hours | Hours spent on media | numeric |  | ... Hours |  |  |  | Daily | media, activity, context |  |
| activity_reading_me_time | Reading/me-time | binary | 2 | Reading or other hobbies on my own; me-time | FALSE = not selected <br>TRUE = selected |  |  | Daily | reading, activity, context |  |
| activity_reading_hours | Hours spent on reading | numeric |  | ... Hours |  |  |  | Daily | reading, activity, context |  |
| activity_other | Other activities | binary | 2 | Other activity, that is | FALSE = not selected <br>TRUE = selected |  |  | Daily | activity, context |  |
| activity_other_hours | Hours spent on other activities | numeric |  | ... Hours |  |  |  | Daily | activity, context |  |
| time_outside_hours | Hours spent outside | numeric |  | Today, I spent about ... hours and |  |  |  | Daily | outdoor activity, activity, context |  |
| time_outside_minutes | Minutes spent outside | numeric |  | ... minutes outside my home. |  |  |  | Daily | outdoor activity, activity, context |  |
| stressor_argument | Stressor argument | binary | 2 | Did you experience a conflict or disagreement with someone today? | 1= no  <br>2= yes | recoded from (2,1) to (1,0) |  | Daily | social conflict, argument, social stress, daily stressors |  |
| stressor_friend_relative | Stressor friend/relative | binary | 2 | Did a family member or friend experience something negative that upset or irritated you? | 1= no  <br>2= yes | recoded from (2,1) to (1,0) |  | Daily | social stress, daily stressors |  |
| stressor_health | Stressor health | binary | 2 | Did something negative happen to you today regarding health that upset or irritated you? | 1= no  <br>2= yes | recoded from (2,1) to (1,0) |  | Daily | physical health, daily stressors |  |
| stressor_work | Stressor work | binary | 2 | Did something happen at work today that upset or irritated you? | 1= no  <br>2= yes | recoded from (2,1) to (1,0) |  | Daily | work stress, work, daily stressors |  |
| stressor_household | Stressor household | binary | 2 | Did something negative happen in your household that upset or irritated you? | 1= no  <br>2= yes | recoded from (2,1) to (1,0) |  | Daily | daily stressors |  |
| stressor_leisure | Stressor leisure | binary | 2 | Did something negative happen in your leisure time that upset or irritated you? | 1= no  <br>2= yes | recoded from (2,1) to (1,0) |  | Daily | leisure, daily stressors |  |
| stressor_financial | Stressor financial | binary | 2 | Was there something important with respect to finances, e.g. shortage of money? | 1= no  <br>2= yes | recoded from (2,1) to (1,0) |  | Daily | financial, daily stressors |  |
| stressor_other | Stressor other | binary | 2 | Did something else happen that most people would consider to be irritating or upsetting? | 1= no  <br>2= yes | recoded from (2,1) to (1,0) |  | Daily | daily stressors |  |
| contact_with_people | Contact with caring people | rating_scale | 7 | ...contact with people who care for me... | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | relatedness, social connectedness |  |
| excluded_ostracized | Excluded/ostracized | rating_scale | 7 | ...excluded or ostracized. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | social exclusion |  |
| failure | Feeling like a failure | rating_scale | 7 | ...failure. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | failure, frustration |  |
| own_way | Doing things on own way | rating_scale | 7 | ...things my own way. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | autonomy, self-determination |  |
| completed_difficult_project | Completed difficult project | rating_scale | 7 | ...completed difficult project. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | accomplishment, success |  |
| true_self | Feeling like true self | rating_scale | 7 | ...true self. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | authenticity, autonomy, self-determination |  |
| connected | Feeling close and connected | rating_scale | 7 | ...close and connected. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | social connectedness |  |
| mastered_challenges | Mastered challenges | rating_scale | 7 | ...mastered hard challenges. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | competence, mastery, achievement |  |
| intimacy | Strong sense of intimacy | rating_scale | 7 | ...strong sense of intimacy... | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | intimacy ,relatedness, social connectedness |  |
| pressure | Under pressure | rating_scale | 7 | ...pressure... | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | autonomy, stress |  |
| told_what_to_do | People telling me what to do | rating_scale | 7 | ...people telling me... | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | autonomy, social pressure |  |
| unappreciated | Unappreciated | rating_scale | 7 | ...unappreciated... | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | relatedness, frustration |  |
| disagreements_conflicts | Disagreements/conflicts | rating_scale | 7 | ...disagreements or conflicts... | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | social conflict, social stress |  |
| even_hard_things | Capable of doing hard things | rating_scale | 7 | ...even at the hard things. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | competence, mastery, self-efficacy |  |
| against_own_will | Doing things against will | rating_scale | 7 | ...things against my will. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | autonomy, coercion |  |
| did_stupid | Did something stupid | rating_scale | 7 | I did something stupid... | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | self-criticism |  |
| struggled | Struggled doing something | rating_scale | 7 | ...struggled doing something... | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | competence, challenge |  |
| did_interesting | Doing what interests me | rating_scale | 7 | ...doing what interests me. | 1= completely disagree <br>7= completely agree |  | Balanced Measure of Psychological Needs Scale | Daily | interest, autonomy, self-determination |  |
| parent_happy | Parent happy | rating_scale | 7 | Today I was happy | 1 = not at all<br>7 = very |  |  | Daily | happiness, positive affect, affect |  |
| parent_afraid | Parent afraid | rating_scale | 7 | Today I was afraid | 1 = not at all<br>7 = very |  |  | Daily | fear, negative affect, affect, neuroticism, big five |  |
| parent_sad | Parent sad | rating_scale | 7 | Today I was sad | 1 = not at all<br>7 = very |  |  | Daily | sadness, negative affect, affect |  |
| parent_balanced | Parent balanced | rating_scale | 7 | Today I was balanced | 1 = not at all<br>7 = very |  |  | Daily | positive affect, affect, child, external rating |  |
| parent_exhausted | Parent exhausted | rating_scale | 7 | Today I was exhausted | 1 = not at all<br>7 = very |  |  | Daily | fatigue, negative affect, affect, child, external rating |  |
| parent_cheerful | Parent cheerful | rating_scale | 7 | Today I was cheerful | 1 = not at all<br>7 = very |  |  | Daily | cheerfulness, positive affect, affect, child, external rating |  |
| parent_worried | Parent worried | rating_scale | 7 | Today I was worried | 1 = not at all<br>7 = very |  |  | Daily | worry, anxiety, negative affect, affect, neuroticism, big five, child, external rating |  |
| parent_lively | Parent lively | rating_scale | 7 | Today I was lively | 1 = not at all<br>7 = very |  |  | Daily | energy, positive affect, affect, child, external rating |  |
| parent_angry | Parent angry | rating_scale | 7 | Today I was angry | 1 = not at all<br>7 = very |  |  | Daily | anger, negative affect, affect, child, external rating |  |
| parent_relaxed | Parent relaxed | rating_scale | 7 | Today I was relaxed | 1 = not at all<br>7 = very |  |  | Daily | relaxation, positive affect, affect, neuroticism, big five, child, external rating |  |
| worry_many_things | Worried many things | rating_scale | 7 | Today, I was worried about a lot of things. | 1 = completely disagree <br>7 = completely agree |  | Ambulatory Worry Scale | Daily | worry, negative affect, affect, neuroticism, big five |  |
| worry_bothered | Worries bothered me | rating_scale | 7 | Today, my worries really bothered me. | 1 = completely disagree <br>7 = completely agree |  | Ambulatory Worry Scale | Daily | worry, negative affect, affect, neuroticism, big five |  |
| worry_might_happen | Worried might happen | rating_scale | 7 | Today, I worried about things that might happen. | 1 = completely disagree <br>7 = completely agree |  | Ambulatory Worry Scale | Daily | worry, negative affect, affect, neuroticism, big five |  |
| worry_cant_get_out_head | Worries stuck in head | rating_scale | 7 | Today, I couldn’t get my worries out of my head. | 1 = completely disagree <br>7 = completely agree |  | Ambulatory Worry Scale | Daily | worry, rumination, negative affect, affect, neuroticism, big five |  |
| worry_wrapped_up | Wrapped up in worries | rating_scale | 7 | Today, I was wrapped up in my worries. | 1 = completely disagree <br>7 = completely agree |  | Ambulatory Worry Scale | Daily | worry, rumination, negative affect, affect, neuroticism, big five |  |
| mindfulness_open_to_happening | Open to happening | rating_scale | 7 | I opened myself up today to what was happening. | 1 = completely disagree <br>7 = completely agree |  | Multidimensional State Mindfulness Questionnaire (MSMQ) | Daily | acceptance, mindfulness |  |
| mindfulness_inappropriate | Felt inappropriate | rating_scale | 7 | Several times today I felt that what I was thinking, feeling or doing was slightly off. | 1 = not at all<br>7 = very |  | Multidimensional State Mindfulness Questionnaire (MSMQ) | Daily | mindfulness |  |
| mindfulness_present_moment | Present moment focus | rating_scale | 7 | I focused my attention on the present moment today. | 1 = not at all<br>7 = very |  | Multidimensional State Mindfulness Questionnaire (MSMQ) | Daily | mindfulness, attention |  |
| mindfulness_could_act_better | Could act better | rating_scale | 7 | I sometimes thought today that I could have acted more appropriately at a certain time. | 1 = not at all<br>7 = very |  | Multidimensional State Mindfulness Questionnaire (MSMQ) | Daily | mindfulness, self-critical thinking |  |
| corona_info_update | Corona info updates | rating_scale | 5 | How often did you update yourself about the corona pandemic today (e. | 1= not at all <br>2= rarely<br> 3= sometimes <br>4= often <br>5= very often |  |  | Daily | Covid |  |
| corona_talk_friends_family | Corona talk friends/family | rating_scale | 5 | How often did you talk /exchange information viewpoints to friends or family about the corona pandemic today? | 1= not at all <br>2= rarely <br>3= sometimes <br>4= often <br>5= very often |  |  | Daily | Covid |  |
| corona_social_media_check | Corona social media checking | rating_scale | 5 | How often did you check up on posts, articles, images, comments regarding the corona pandemic on social media today? | 1= not at all <br>2= rarely<br> 3= sometimes <br>4= often <br>5= very often |  |  | Daily | Covid, social media |  |
| corona_social_media_create | Corona social media creating | rating_scale | 5 | How often did you create or share posts, images or comments about the corona pandemic on social media today? | 1= not at all <br>2= rarely<br> 3= sometimes <br>4= often <br>5= very often |  |  | Daily | Covid, social media |  |
| corona_thinking_about | Corona thinking about | rating_scale | 7 | Today, I spent a lot of time thinking about the corona pandemic. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | Covid |  |
| corona_worries | Corona worries | rating_scale | 7 | Today, I worried about the corona pandemic and its effects on myself and my family. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | Covid, worry |  |
| corona_acceptance | Corona acceptance | rating_scale | 7 | Today, I accepted that the current situation aggravates our lives and brings along problems. | 1 = completely disagree <br>7 = completely agree |  |  | Daily | Covid, acceptance |  |

---
title: "Menghini (2023)"
date: 2025-10-23
draft: false
---


## Study Information

- **First Author:** Menghini
- **Year:** 2023
- **Paper DOI:** [https://doi.org/10.1027/1015-5759/a000725](https://doi.org/10.1027/1015-5759/a000725)
- **Topics:** workplace stress, mood

## Data Characteristics

- **Participants:** 139 (full-time office workers)
- **Time Points:** 21
- **Days:** 3
- **Beeps per Day:** 7
- **Sampling Scheme:** 7x/day random schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://github.com/Luca-Menghini/ESMscales-workplaceStress](https://github.com/Luca-Menghini/ESMscales-workplaceStress)
- **Link to Codebook:** [https://osf.io/87a9p/files/osfstorage](https://osf.io/87a9p/files/osfstorage)
- **Link to Code:** [https://github.com/Luca-Menghini/ESMscales-workplaceStress/tree/main/S3_dataAnalysis](https://github.com/Luca-Menghini/ESMscales-workplaceStress/tree/main/S3_dataAnalysis)
- **License:** GPL-3.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17347537](https://doi.org/10.5281/zenodo.17347537)
- **R:** `openesm::get_dataset("0022_menghini")`
- **Python:** `openesm.get_dataset("0022_menghini")`



## Citation

Menghini, L., Pastore, M., & Balducci, C. (2023). Workplace stress in real time. European Journal of Psychological Assessment, 39(6), 424–432. https://doi.org/10.1027/1015-5759/a000725




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| os | Operating system | categorical | 2 | iOS or Android |  |  |  | ESM |  |  |
| day_of_week | Weekday | categorical | 3 | 1 = Monday<br>3 = Wednesday<br>5 = Friday |  |  |  | Daily |  |  |
| survey_type | Survey type | categorical | 2 | Baseline or work |  |  |  | ESM |  |  |
| run_timestamp | Questionnaire initiation | PosixCt |  | Initiation time of questionnair |  |  |  | ESM |  |  |
| submission_timestamp | Questionnaire submission | PosixCt |  | Submission time of questionnair |  |  |  | ESM |  |  |
| well | Feeling well | rating_scale | 7 | How do you feel at this moment? | 1 = Very unwell<br>7 = Very well |  | Multidimensional Mood Questionnaire | ESM | positive affect, affect |  |
| discontent | Discontent | rating_scale | 7 | How do you feel at this moment? | 1 = Very content<br>7 = Very discontent |  | Multidimensional Mood Questionnaire | ESM | discontent, negative affect, affect |  |
| state | Positive state | rating_scale | 7 | How do you feel at this moment? | 1 = In a very negative<br>7 = In a very positive state |  |  | ESM | positive affect, affect |  |
| tense | Tense | rating_scale | 7 | How do you feel at this moment? | 1 = Very relaxed<br>7 = Very tense |  | Multidimensional Mood Questionnaire | ESM | tense, negative affect, affect, neuroticism, big five |  |
| calm | Calm | rating_scale | 7 | How do you feel at this moment? | 1 = Very agitated<br>7 = Very calm |  | Multidimensional Mood Questionnaire | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| placid | Placid | rating_scale | 7 | How do you feel at this moment? | 1 = Very nervous<br>7 = Very placid |  |  | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| awake | Awake | rating_scale | 7 | How do you feel at this moment? | 1 = Very tired<br>7 = Very awake |  | Multidimensional Mood Questionnaire | ESM | alertness, energy, positive affect, affect |  |
| energyless | Without Energy | rating_scale | 7 | How do you feel at this moment? | 1 = Very full of energy<br>7 = Very without energy |  | Multidimensional Mood Questionnaire | ESM | energy, negative affect, affect, big five, extraversion |  |
| rested | Rested | rating_scale | 7 | How do you feel at this moment? | 1 = Very fatigued<br>7 = Very rested |  |  | ESM | feeling rested, fatigue, positive affect, affect |  |
| what | Work task | other |  | Think about the main work activity performed in the last 10 minutes. What kind of activity was it? | (long list of potential responses) |  | https://doi.org/10.1002/hfm.20186 | ESM | work task, work, context | Should be categorical? |
| how | Means of work | other |  | How were you doing the work activity? | Face-to-face<br>On the computer<br>Videocall (e.g., Skype)<br>Smartphone/table<br>On the phone<br>With paper documents<br>Other |  | https://doi.org/10.1002/hfm.20186 | ESM | work task, work, context | Should be categorical? |
| whom | People involved in task | other |  | Who was doing the activity with you? | Anyone<br>Coworkers<br>Supervisors<br>Subordinates<br>Customers/users<br>Suppliers/external collaborators<br>Family members/friends<br>Other |  | https://doi.org/10.1002/hfm.20186 | ESM | work task, work, social interaction, colleagues, context | Should be categorical? |
| n_people | Number of people in task | numeric |  | How many people were present, aside from you? |  |  |  | ESM | work task, work, context |  |
| too_much | Too much work | rating_scale | 7 | In relation with the work activity, I had to do too much | 1 = Not at all<br>7 = Very much |  | Quantitative Workload Inventory | ESM | workload, work, job demands |  |
| work_fast | Work very fast | rating_scale | 7 | In relation with the work activity, the activity required me to work very fast | 1 = Not at all<br>7 = Very much |  | Quantitative Workload Inventory | ESM | workload, work, job demands |  |
| multitasking | Multiple things at once | rating_scale | 7 | In relation with the work activity, I did multiple things at once | 1 = Not at all<br>7 = Very much |  |  | ESM | multitasking, work, job demands |  |
| hard_work | Work very hard | rating_scale | 7 | In relation with the work activity, I had to work very hard | 1 = Not at all<br>7 = Very much |  | Quantitative Workload Inventory | ESM | workload, work, job demands |  |
| change_task | Task change possible | rating_scale | 7 | I could change task if I chose to | 1 = Not at all<br>7 = Very much |  | Diary for the Ambulatory Behavioral States | ESM | work autonomy, work |  |
| decide_task | Decide how to perform task | rating_scale | 7 | I could decide how to perform the task | 1 = Not at all<br>7 = Very much |  | Diary for the Ambulatory Behavioral States | ESM | work autonomy, work |  |
| schedule_task | Schedule time of task | rating_scale | 7 | I could schedule the time of the task | 1 = Not at all<br>7 = Very much |  | Diary for the Ambulatory Behavioral States | ESM | work autonomy, work |  |

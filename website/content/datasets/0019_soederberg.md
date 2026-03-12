---
title: "Söderberg (2024)"
date: 2026-03-12
draft: false
dataset_id: "0019_soederberg"
first_author: "Söderberg"
year: 2024
paper_doi: "https://doi.org/10.12688/f1000research.157148.1"
zenodo_doi: "10.5281/zenodo.17347732"
license: "CC-BY 4.0"
n_participants: 302
n_time_points: 40
n_days: "10"
topics: "schooling, relationships, self-efficacy, emotions, sleep"
sampling_scheme: "4x/day fixed and random sampling"
participants: "middle and secondary school students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347732">10.5281/zenodo.17347732</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0019_soederberg")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0019_soederberg")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Söderberg</li>
<li><strong>Year:</strong> 2024</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.12688/f1000research.157148.1">https://doi.org/10.12688/f1000research.157148.1</a></li>
<li><strong>Topics:</strong> schooling, relationships, self-efficacy, emotions, sleep</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 302 (middle and secondary school students)</li>
<li><strong>Time Points:</strong> 40</li>
<li><strong>Days:</strong> 10</li>
<li><strong>Beeps per Day:</strong> 4</li>
<li><strong>Sampling Scheme:</strong> 4x/day fixed and random sampling</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC-BY 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347732">10.5281/zenodo.17347732</a></p>
<p><strong>Original Source Data:</strong> <a href="https://doi.org/10.5281/zenodo.13332148">https://doi.org/10.5281/zenodo.13332148</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://zenodo.org/records/13332148">https://zenodo.org/records/13332148</a></p>

</div>

## Additional Comments

inconsistency between notification times and the beep ordering by the authors; contains multiple sampling frequencies; the "stupid" item could also be interpreted as "hostile" in Swedish


## Citation

Mölsä, M., Forsman, A. K., & Söderberg, P. (2024, December 16). A 10-day experience sampling dataset on subjective experiences of middle and upper secondary school students in 2022. https://doi.org/10.12688/f1000research.157148.1




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  |  |  |  |
| day | Day of study | other |  |  |  |  |  |  |  |  |
| beep | Beep of the day | other |  |  |  |  |  |  |  |  |
| notification_time | Time of notification | PosixCt |  |  |  |  |  |  |  |  |
| notification_no | Notification number | numeric |  |  |  |  |  |  |  |  |
| reminder | Reminder | binary | 2 |  | 0 = no<br>1 = yes |  |  |  |  |  |
| session_instance_response_lapse | Response lapse | other |  | Response lapse in minutes:second |  |  |  |  |  |  |
| session_length | Session length | other |  | Session length in minutes:seconds |  |  |  |  |  |  |
| sleep_quality | Sleep quality | rating_scale | 5 | Good morning. Did you sleep well last night? | 1 = Not at all<br>5 = Yes, absolutely |  |  | Daily | sleep quality, sleep |  |
| morning_breakfast | Breakfast eaten | binary | 2 | Have you eaten (or will you eat) breakfast this morning? | 0 = no<br>1 = yes |  |  | Daily | food, activity |  |
| morning_ok | Feeling okay about school | rating_scale | 5 | Do you feel okay about going to school today? | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education |  |
| enjoy_school | Enjoying school | rating_scale | 5 | How do you feel right now?: I enjoy being at school | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | positive affect, affect, school, education |  |
| stressed | Stress | rating_scale | 5 | How do you feel right now?: I feel stressed | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | stress, negative affect, affect |  |
| motivated | Motivated | rating_scale | 5 | How do you feel right now?: I feel motivated | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | motivation |  |
| angry | Angry | rating_scale | 5 | How do you feel right now?: I feel angry | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | anger, negative affect, affect |  |
| liked | Liked | rating_scale | 5 | How do you feel right now?:  I feel liked | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | positive affect, affect |  |
| lonely | Lonely | rating_scale | 5 | How do you feel right now?: I feel lonely | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | loneliness, negative affect, affect |  |
| alert | Alert | rating_scale | 5 | How do you feel right now?: I feel alert | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | alertness, positive affect, affect, etxraversion, big five |  |
| stupid | Stupid | rating_scale | 5 | How do you feel right now?: I feel stupid | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | negative affect, affect | Note: In Swedish, this item was "jag känner mig dum", which could also be interpreted as "hostility". However, it was intended to ask about stupidity |
| lecture_enjoy | Enjoyable lecture | rating_scale | 5 | The most recent lecture: The lesson was enjoyable | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| lecture_difficult | Lecture difficulty | rating_scale | 5 | The most recent lecture: The content was difficult | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| lecture_interesting | Lecture interest | rating_scale | 5 | The most recent lecture: The content was interesting | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| teacher_strict | Teacher strictness | rating_scale | 5 | The most recent lecture: The teacher was strict | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| teacher_fair | Teacher fairness | rating_scale | 5 | The most recent lecture: The teacher was fair | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| teacher_encouraging | Teacher encouraging | rating_scale | 5 | The most recent lecture: The teacher was encouraging | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | school, education, activity, context |  |
| peer_relationship | Peer relationships | rating_scale | 5 | Did you have a good time with your classmates during the morning/the afternoon? | 1 = No, not at all<br>5 = Yes, absolutely |  |  | ESM | relationship, social interaction, school |  |
| schoolday_satisfaction | Schoolday satisfaction | rating_scale | 10 | What rating would you give for the overall school day? |  |  |  | Daily | satisfaction, school, education, activity, context |  |

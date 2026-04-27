---
title: "Kuczynski (2021)"
date: 2026-04-27
draft: false
dataset_id: "0039_kuczynski"
first_author: "Kuczynski"
year: 2021
paper_doi: "https://doi.org/10.1177/02654075211045717"
zenodo_doi: "10.5281/zenodo.17347657"
license: "CC BY-NC 4.0"
n_participants: 515
n_time_points: 75
n_days: "75"
topics: "loneliness, depression, affect, social interaction"
sampling_scheme: "1x/day in the evening"
participants: "adults"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347657">10.5281/zenodo.17347657</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0039_kuczynski")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0039_kuczynski")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Kuczynski</li>
<li><strong>Year:</strong> 2021</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1177/02654075211045717">https://doi.org/10.1177/02654075211045717</a></li>
<li><strong>Topics:</strong> loneliness, depression, affect, social interaction</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 515 (adults)</li>
<li><strong>Time Points:</strong> 75</li>
<li><strong>Days:</strong> 75</li>
<li><strong>Beeps per Day:</strong> 1</li>
<li><strong>Sampling Scheme:</strong> 1x/day in the evening</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347657">10.5281/zenodo.17347657</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/huz67">https://osf.io/huz67</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>

<p><strong>Code:</strong> <a href="https://osf.io/wtbx8/">https://osf.io/wtbx8/</a></p>
</div>

## Additional Comments

variable coding partially unclear; 1.0.1: changed publication year to 2021


## Citation

Kuczynski, A. M., Halvorson, M. A., Slater, L. R., & Kanter, J. W. (2022). The effect of social interaction quantity and quality on depressed mood and loneliness: A daily diary study. Journal of Social and Personal Relationships, 39(3), 734–756. https://doi.org/10.1177/02654075211045717




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | Daily |  |  |
| day | Day of study | other |  |  |  |  |  | Daily |  |  |
| beep | Beep of the day | other | 1 | only 1 beep ber day |  |  |  | Daily |  |  |
| date | Date | Date |  | Date of data collection |  |  |  | Daily |  |  |
| depressed | Depressed | rating_scale | 11 | I felt down, depressed, or hopeless today | 0 = None of the time<br>10 = All of the time |  | Patient Health Questionnaire (PHQ-2) | Daily | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| anhedonia | Anhedonia | rating_scale | 11 | I had little interest or pleasure in doing things today | 0 = None of the time<br>10 = All of the time |  | Patient Health Questionnaire (PHQ-2) | Daily | anhedonia, depression, psychopathology |  |
| loneliness | Feeling lonely | rating_scale | 11 | I felt lonely today | 0 = Not at all<br>10 = Extremely |  | UCLA Loneliness Scale | Daily | loneliness, social functioning, negative affect, affect |  |
| left_out | Feeling left out | rating_scale | 11 | I felt left out today | 0 = Not at all<br>10 = Extremely |  | UCLA Loneliness Scale | Daily | loneliness, social functioning, social exclusion |  |
| social_interaction | Social interaction quantity | rating_scale | 11 | How much social interaction did you have today? | 0 = None at all<br>10 = A lot |  |  | Daily | social interaction |  |
| vulnerability | Vulnerable self-disclosure | rating_scale | 11 | I expressed my true feelings to others today | 0 = Not at all<br>5 = A moderate amount<br>10 = Very much so |  |  | Daily | emotional expression, emotion regulation, social behavior |  |
| perceived_responsiveness | Peceived peer responsiveness | rating_scale | 11 | I felt understood/cared for by others today | 0 = Not at all<br>10 = Extremely |  |  | Daily | responsiveness, social support, social connectedness |  |
| covid_anxiety | Covid anxiety | rating_scale | 11 | unclear |  |  |  | Daily | Covid, anxiety |  |

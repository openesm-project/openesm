---
title: "Pronizius (2024)"
date: 2026-03-12
draft: false
dataset_id: "0050_pronizius"
first_author: "Pronizius"
year: 2024
paper_doi: "https://doi.org/10.1038/s41598-024-75261-z"
zenodo_doi: "10.5281/zenodo.17347819"
license: "CC-BY 4.0"
n_participants: 303
n_time_points: 35
n_days: "7"
topics: "helping, mood, prosocial behavior, stress, COVID"
sampling_scheme: "4x semi-random, 1 prompt user-initiated before sleep"
participants: "adults experiencing COVID lockdown"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347819">10.5281/zenodo.17347819</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0050_pronizius")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0050_pronizius")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Pronizius</li>
<li><strong>Year:</strong> 2024</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1038/s41598-024-75261-z">https://doi.org/10.1038/s41598-024-75261-z</a></li>
<li><strong>Topics:</strong> helping, mood, prosocial behavior, stress, COVID</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 303 (adults experiencing COVID lockdown)</li>
<li><strong>Time Points:</strong> 35</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 5</li>
<li><strong>Sampling Scheme:</strong> 4x semi-random, 1 prompt user-initiated before sleep</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> unclear</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC-BY 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347819">10.5281/zenodo.17347819</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/6n5zj/">https://osf.io/6n5zj/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/4tpvd">https://osf.io/4tpvd</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/6n5zj">https://osf.io/6n5zj</a></p>
</div>

## Additional Comments

burst 2 in the paper; more description on EMA variables: https://osf.io/kaf9e and https://osf.io/4tpvd; contains a subset of data from a larger project on Covid (see for example here: https://osf.io/fdnm7/)


## Citation

Pronizius, E., Forbes, P. A. G., Feneberg, A. C., Miculescu, B., Nater, U. M., Piperno, G., Silani, G., Stijovic, A., & Lamm, C. (2024). Everyday helping is associated with enhanced mood but greater stress when it is more effortful. Scientific Reports, 14(1), 24120. https://doi.org/10.1038/s41598-024-75261-z




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| helping_binary | Helping behavior | binary | 2 | Since the last data entry, have you helped or supported someone? | 0 = no<br>1 = yes |  |  | ESM | helping behavior, prosocial behavior, social behavior, big five, agreeableness |  |
| helping_effort | Effort for helping | rating_scale | 100 | How effortful was this helping or support? | 0 = not at all<br>100 = very much |  |  | ESM | helping effort, prosocial behavior, social behavior |  |
| stressed | Stress | rating_scale | 100 | At the moment, I feel stressed | 0 = not at all<br>100 = very much |  |  | ESM | stress, negative affect, affect |  |
| valence_mood | Mood valence | rating_scale | 100 | Mean of two bipolar items: unwell-well and dissatisfied-satisfied | 0 = not at all<br>100 = very much | mean-scored | Adapted multidimensional mood questionnaire | ESM | affect, valence, satisfaction, wellness |  |
| calmness_mood | Mood calmness | rating_scale | 100 | Mean of two bipolar items: tense-relaxed and restless-calm | 0 = not at all<br>100 = very much | mean-scored | Adapted multidimensional mood questionnaire | ESM | affect, calmness, relaxation, restlessness, tenseness |  |
| energy_mood | Mood energy | rating_scale | 100 | Mean of two bipolar items: weak-energetic and tired-awake | 0 = not at all<br>100 = very much | mean-scored | Adapted multidimensional mood questionnaire | ESM | affect, energy, tiredness |  |
| ema_time | Time of EMA prompt | numeric |  | Time of the day in hours since midnight |  |  |  | ESM |  |  |
| freetime | Freetime | binary | 2 |  | 0 = current data entry while working/studying<br>1 = during free time |  |  | ESM | activity, context |  |
| social_binary | Social activity binary | binary | 2 | Were there any social interactions since the last data entry? | 0 = No<br>1 = Yes |  |  | ESM | social interaction |  |
| weekday | Day of the week | categorical | 7 |  |  |  |  | ESM |  |  |

---
title: "Wright (2017)"
date: 2026-04-27
draft: false
dataset_id: "0064_wright"
first_author: "Wright"
year: 2017
paper_doi: "https://doi.org/10.1037/abn0000286"
zenodo_doi: "10.5281/zenodo.17348495"
license: "CC BY-NC 4.0"
n_participants: 222
n_time_points: 344
n_days: "21"
topics: "affect, interpersonal disorders, personality pathology, emotions, social interactions"
sampling_scheme: "event-contingent based on social interactions"
participants: "outpatients screened for personality pathology and their romantic partners"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348495">10.5281/zenodo.17348495</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0064_wright")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0064_wright")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Wright</li>
<li><strong>Year:</strong> 2017</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1037/abn0000286">https://doi.org/10.1037/abn0000286</a></li>
<li><strong>Topics:</strong> affect, interpersonal disorders, personality pathology, emotions, social interactions</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 222 (outpatients screened for personality
pathology and their romantic
partners)</li>
<li><strong>Time Points:</strong> 344</li>
<li><strong>Days:</strong> 21</li>
<li><strong>Beeps per Day:</strong> event-contingent</li>
<li><strong>Sampling Scheme:</strong> event-contingent based on social interactions</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> unclear</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348495">10.5281/zenodo.17348495</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/6ghcx/">https://osf.io/6ghcx/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>

<p><strong>Code:</strong> <a href="https://osf.io/6ghcx">https://osf.io/6ghcx</a></p>
</div>

## Additional Comments

data from original study shared in more detail in Wendt et al. (2020); number of time points based on max. rows in data; variable coding partially unclear


## Citation

Wright, A. G. C., Stepp, S. D., Scott, L. N., Hallquist, M. N., Beeney, J. E., Lazarus, S. A., & Pilkonis, P. A. (2017). The effect of pathological narcissism on interpersonal and affective processes in social interactions. Journal of Abnormal Psychology, 126(7), 898–910. https://doi.org/10.1037/abn0000286



### Additional Reference

Wendt, L. P., Wright, A. G. C., Pilkonis, P. A., Woods, W. C., Denissen, J. J. A., Kühnel, A., & Zimmermann, J. (2020). Indicators of affect dynamics: Structure, reliability, and personality correlates. European Journal of Personality, 34(6), 1060–1072. https://doi.org/10.1002/per.2277



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| pt_num | Participant number | numeric |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| timestamp | Timestamp | numeric |  |  |  |  |  | ESM |  |  |
| date | Date | numeric |  |  |  |  |  | ESM |  |  |
| dyad | Dyad | numeric |  |  |  |  |  | ESM |  |  |
| afraid | Afraid | rating_scale | 5 | Afraid | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | fear, negative affect, affect, neuroticism, big five |  |
| ashamed | Ashamed | rating_scale | 5 | Ashamed | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | shame, negative affect, affect |  |
| distressed | Distressed | rating_scale | 5 | Distressed | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | distress, negative affect, affect |  |
| guilty | Guilty | rating_scale | 5 | Guilty | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | guilt, negative affect, affect |  |
| hostile | Hostile | rating_scale | 5 | Hostile | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | hostility, anger, negative affect, affect |  |
| irritable | Irritable | rating_scale | 5 | Irritable | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | irritability, negative affect, affect, neuroticism, big five |  |
| jittery | Jittery | rating_scale | 5 | Jittery | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| nervous | Nervous | rating_scale | 5 | Nervous | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| scared | Scared | rating_scale | 5 | Scared | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | fear, negative affect, affect, neuroticism, big five |  |
| upset | Upset | rating_scale | 5 | Upset | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | upset, negative affect, affect, neuroticism, big five |  |
| frightened | Frightened | rating_scale | 5 | Frightened | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | fear, negative affect, affect, neuroticism, big five |  |
| shaky | Shaky | rating_scale | 5 | Shaky | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | fear, negative affect, affect, neuroticism, big five |  |
| angry | Angry | rating_scale | 5 | Angry | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | anger, negative affect, affect |  |
| scornful | Scornful | rating_scale | 5 | Scornful | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | anger, negative affect, affect |  |
| disgusted | Disgusted | rating_scale | 5 | Disgusted | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | disgust, negative affect, affect |  |
| loathing | Loathing | rating_scale | 5 | Loathing | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | loathing, negative affect, affect |  |
| sad | Sad | rating_scale | 5 | Sad | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | sadness, negative affect, affect |  |
| blue | Blue | rating_scale | 5 | Blue | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | sadness, negative affect, affect |  |
| downhearted | Downhearted | rating_scale | 5 | Downhearted | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | negative affect, affect |  |
| alone | Alone | rating_scale | 5 | Alone | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | loneliness, social functioning, negative affect, affect |  |
| lonely | Lonely | rating_scale | 5 | Lonely | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | loneliness, social functioning, negative affect, affect |  |
| active | Active | rating_scale | 5 | Active | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | active, energy, positive affect, affect, big five, extraversion |  |
| alert | Alert | rating_scale | 5 | Alert | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | alertness, positive affect, affect, extraversion, big five |  |
| attentive | Attentive | rating_scale | 5 | Attentive | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | attentiveness, positive affect, affect |  |
| determined | Determined | rating_scale | 5 | Determined | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | determination, positive affect, affect |  |
| enthusiastic | Enthusiastic | rating_scale | 5 | Enthusiastic | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| excited | Excited | rating_scale | 5 | Excited | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | excitement, positive affect, affect, extraversion, big five |  |
| inspired | Inspired | rating_scale | 5 | Inspired | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | inspiration, positive affect, affect |  |
| interested | Interested | rating_scale | 5 | Interested | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | interest, positive affect, affect, big five, openness |  |
| proud | Proud | rating_scale | 5 | Proud | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | pride, positive affect, affect |  |
| strong | Strong | rating_scale | 5 | Strong | 1 = very slightly or not at all<br>5 = extremely |  | PANAS-X | ESM | strength, positive affect, affect |  |

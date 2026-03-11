---
title: "Kullar (2023)"
date: 2026-03-11
draft: false
dataset_id: "0045_kullar"
first_author: "Kullar"
year: 2023
paper_doi: "https://doi.org/10.1037/emo0001245"
zenodo_doi: "10.5281/zenodo.17347798"
license: "CC BY-NC 4.0"
n_participants: 105
n_time_points: 70
n_days: "14"
topics: "affect, affective chronometry, mood disorders, mind wandering"
sampling_scheme: "5x/day fixed 30-minute interval"
participants: "participants with and without mood disorders"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347798">10.5281/zenodo.17347798</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0045_kullar")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0045_kullar")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Kullar</li>
<li><strong>Year:</strong> 2023</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1037/emo0001245">https://doi.org/10.1037/emo0001245</a></li>
<li><strong>Topics:</strong> affect, affective chronometry, mood disorders, mind wandering</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 105 (participants with and without mood disorders)</li>
<li><strong>Time Points:</strong> 70</li>
<li><strong>Days:</strong> 14</li>
<li><strong>Beeps per Day:</strong> 5</li>
<li><strong>Sampling Scheme:</strong> 5x/day fixed 30-minute interval</li>
<li><strong>Raw Timestamp:</strong> unclear</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347798">10.5281/zenodo.17347798</a></p>
<p><strong>Original Source Data:</strong> <a href="https://github.com/mkullar/DataDrivenEmotionDynamics">https://github.com/mkullar/DataDrivenEmotionDynamics</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="-">-</a></p>
<p><strong>Code:</strong> <a href="https://github.com/mkullar/DataDrivenEmotionDynamics">https://github.com/mkullar/DataDrivenEmotionDynamics</a></p>
</div>

## Additional Comments

exact question wording unclear


## Citation

Kullar, M., Carter, S., Hitchcock, C., Whittaker, S., Wright, A. G. C., & Dalgleish, T. (2024). Patterns of emotion-network dynamics are orthogonal to mood disorder status: An experience sampling investigation. Emotion, 24, 116–129. https://doi.org/10.1037/emo0001245




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| angry | Angry | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | anger, negative affect, affect |  |
| emotion_chronometry | Emotion duration | numeric |  | Estimate of how long current emotional state lasted in minutes |  |  |  | ESM | affect, time scale |  |
| enthusiastic | Enthusiastic | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| happy | Happy | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | happiness, positive affect, affect |  |
| irritated | Irritated | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | irritability, anxiety, negative affect, affect |  |
| mind_wandering | Mind wandering | binary | 2 | wording unclear, but roughly: Are you thinking about anything else other than what you are currently doing? | 0 = no<br>1 = yes |  |  | ESM | mindfulness, distraction, mindwandering |  |
| nervous | Nervous | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| pleased | Pleased | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | pleased, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | sadness, negative affect, affect |  |
| stressed | Stressed | rating_scale | 7 | Wording unclear, but rating of present intensity of emotion | 1 = not at all<br>7 = extremely |  |  | ESM | stress, negative affect, affect |  |

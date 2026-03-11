---
title: "Dejonckheere (2019)"
date: 2026-03-11
draft: false
dataset_id: "0012_dejonckheere"
first_author: "Dejonckheere"
year: 2019
paper_doi: "https://doi.org/10.1080/02699931.2018.1524747"
zenodo_doi: "10.5281/zenodo.17347569"
license: "CC-BY 4.0"
n_participants: 100
n_time_points: 98
n_days: "14"
topics: "rumination, depression, emotion regulation, afect"
sampling_scheme: "7x/day stratified random interval scheme"
participants: "community sample"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347569">10.5281/zenodo.17347569</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0012_dejonckheere")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0012_dejonckheere")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Dejonckheere</li>
<li><strong>Year:</strong> 2019</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1080/02699931.2018.1524747">https://doi.org/10.1080/02699931.2018.1524747</a></li>
<li><strong>Topics:</strong> rumination, depression, emotion regulation, afect</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 100 (community sample)</li>
<li><strong>Time Points:</strong> 98</li>
<li><strong>Days:</strong> 14</li>
<li><strong>Beeps per Day:</strong> 7</li>
<li><strong>Sampling Scheme:</strong> 7x/day stratified random interval scheme</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC-BY 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347569">10.5281/zenodo.17347569</a></p>
<p><strong>Original Source Data:</strong> <a href="https://figshare.com/articles/dataset/Poor_emotion_regulation_ability_mediates_the_link_between_depressive_symptoms_and_affective_bipolarity/7150664">https://figshare.com/articles/dataset/Poor_emotion_regulation_ability_mediates_the_link_between_depressive_symptoms_and_affective_bipolarity/7150664</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/487eg">https://osf.io/487eg</a></p>
<p><strong>Code:</strong> <a href="https://www.tandfonline.com/doi/full/10.1080/02699931.2018.1524747#supplemental-material-section">https://www.tandfonline.com/doi/full/10.1080/02699931.2018.1524747#supplemental-material-section</a></p>
</div>

## Additional Comments

some participants pre-excluded by the authors due to their compliance; subset of larger data available upon request in the EMOTE database (https://emotedatabase.com/datasets/27)


## Citation

Dejonckheere, E., Kalokerinos, E. K., Bastian, B., & Kuppens, P. (2019). Poor emotion regulation ability mediates the link between depressive symptoms and affective bipolarity. Cognition and Emotion, 33(5), 1076–1083. https://doi.org/10.1080/02699931.2018.1524747




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | numeric |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | numeric |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| happy | Happiness | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | happiness, positive affect, affect |  |
| relaxed | Relaxation | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| sad | Sadness | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | sadness, negative affect, affect |  |
| angry | Angry | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | anger, negative affect, affect |  |
| stressed | Stress | rating_scale | 101 |  | 0 = not at all<br>100 = very much |  |  | ESM | stress, negative affect, affect |  |

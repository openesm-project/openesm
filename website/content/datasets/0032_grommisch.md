---
title: "Grommisch (2020)"
date: 2026-04-27
draft: false
dataset_id: "0032_grommisch"
first_author: "Grommisch"
year: 2020
paper_doi: "https://doi.org/10.1037/emo0000669"
zenodo_doi: "10.5281/zenodo.17347621"
license: "CC BY-NC 4.0"
n_participants: 179
n_time_points: 189
n_days: "21"
topics: "emotion regulation, rumination, well-being"
sampling_scheme: "9x/day semi-fixed intervals"
participants: "adults"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347621">10.5281/zenodo.17347621</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0032_grommisch")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0032_grommisch")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Grommisch</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1037/emo0000669">https://doi.org/10.1037/emo0000669</a></li>
<li><strong>Topics:</strong> emotion regulation, rumination, well-being</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 179 (adults)</li>
<li><strong>Time Points:</strong> 189</li>
<li><strong>Days:</strong> 21</li>
<li><strong>Beeps per Day:</strong> 9</li>
<li><strong>Sampling Scheme:</strong> 9x/day semi-fixed intervals</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347621">10.5281/zenodo.17347621</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/r7jw6/">https://osf.io/r7jw6/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/b5s97">https://osf.io/b5s97</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/r7jw6/">https://osf.io/r7jw6/</a></p>
</div>

## Additional Comments

no beep information available; variable distraction is missing; data from FEEL project; sliders initialized at 50; subset of larger dataset available upon request in the EMOTE database (https://emotedatabase.com/datasets/21)


## Citation

Grommisch, G., Koval, P., Hinton, J. D. X., Gleeson, J., Hollenstein, T., Kuppens, P., & Lischetzke, T. (2020). Modeling individual differences in emotion regulation repertoire in daily life with multilevel latent profile analysis. Emotion, 20(8), 1462–1474. https://doi.org/10.1037/emo0000669




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | Not available |  |  |  | ESM |  | Not available |
| counter | Counter | other | 101 | Running number of measurement occasion per id |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 | Feeling happy at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | happiness, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 101 | Feeling relaxed at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| confident | Confident | rating_scale | 101 | Feeling confident at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | confidence, self-efficacy, positive affect, affect, big five, extraversion |  |
| sad | Sad | rating_scale | 101 | Feeling sad at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | sadness, negative affect, affect |  |
| stressed | Stressed | rating_scale | 101 | Feeling stressed at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | stress, negative affect, affect |  |
| angry | Angry | rating_scale | 101 | Feeling angry at moment of prompt | 0 = not at all<br>100 = very much |  |  | ESM | anger, negative affect, affect |  |
| situation_selection | Situation Selection | rating_scale | 101 | Since last survey, I chose which situation to put myself in | 0 = not at all<br>100 = very much |  |  | ESM | situation selection, emotion regulation |  |
| situation_modification | Situation Modification | rating_scale | 101 | Since last survey, I actively changed something in the situation | 0 = not at all<br>100 = very much |  |  | ESM | situation modification, emotion regulation |  |
| reappraisal | Reappraisal | rating_scale | 101 | Mean of two items: <br>Since last survey, I changed the way I was thinking about the situation<br>Since last survey, I took a step back and looked at things from a different perspective. | 0 = not at all<br>100 = very much |  |  | ESM | reappraisal, emotion regulation |  |
| acceptance | Acceptance | rating_scale | 101 | Since last survey, I accepted my emotions as valid and important | 0 = not at all<br>100 = very much |  |  | ESM | acceptance, emotion regulation |  |
| rumination | Rumination | rating_scale | 101 | Since last survey, I thought over and over again about my emotions | 0 = not at all<br>100 = very much |  |  | ESM | rumination, emotion regulation |  |
| social_sharing | Social Sharing | rating_scale | 101 | Since last survey, I talked with someone about my emotions | 0 = not at all<br>100 = very much |  |  | ESM | emotional expression, emotion regulation, social support |  |
| ignoring | Ignoring | rating_scale | 101 | Since last survey, I ignored my emotions | 0 = not at all<br>100 = very much |  |  | ESM | suppression, emotion regulation |  |
| suppression | Suppression | rating_scale | 101 | Since last survey, I was careful not to express my emotions to others | 0 = not at all<br>100 = very much |  |  | ESM | suppression, emotion regulation |  |

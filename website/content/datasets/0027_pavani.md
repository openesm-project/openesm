---
title: "Pavani (2017)"
date: 2026-04-27
draft: false
dataset_id: "0027_pavani"
first_author: "Pavani"
year: 2017
paper_doi: "https://doi.org/10.1002/per.2109"
zenodo_doi: "10.5281/zenodo.17347892"
license: "CC BY-NC 4.0"
n_participants: 78
n_time_points: 70
n_days: "14"
topics: "affect regulation, affect, personality"
sampling_scheme: "5x/day fixed-schedule with personalization"
participants: "non-clinical individuals"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347892">10.5281/zenodo.17347892</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0027_pavani")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0027_pavani")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Pavani</li>
<li><strong>Year:</strong> 2017</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1002/per.2109">https://doi.org/10.1002/per.2109</a></li>
<li><strong>Topics:</strong> affect regulation, affect, personality</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 78 (non-clinical individuals)</li>
<li><strong>Time Points:</strong> 70</li>
<li><strong>Days:</strong> 14</li>
<li><strong>Beeps per Day:</strong> 5</li>
<li><strong>Sampling Scheme:</strong> 5x/day fixed-schedule with personalization</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347892">10.5281/zenodo.17347892</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/s3chz/?view_only=">https://osf.io/s3chz/?view_only=</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/u95vg">https://osf.io/u95vg</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/s3chz/?view_only=">https://osf.io/s3chz/?view_only=</a></p>
</div>

## Additional Comments

due to lagged variables in the dataset; it's not fully clear to which counter each value corresponds


## Citation

Pavani, J., Le Vigouroux, S., Kop, J., Congard, A., & Dauvier, B. (2017). A network approach to affect regulation dynamics and personality trait–induced variations: Extraversion and neuroticism moderate reciprocal influences between affect and affect regulation strategies. European Journal of Personality, 31(4), 329–346. https://doi.org/10.1002/per.2109




## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| reappraisal | Positive reappraisal | rating_scale | 5 | I have seen what positive things a negative event can bring me. | 1 = not at all<br>5 = a lot |  |  | ESM | reappraisal, emotion regulation |  |
| distraction | Distraction | rating_scale | 5 | I have diverted my attention away from my problems. | 1 = not at all<br>5 = a lot |  |  | ESM | distraction, emotion regulation |  |
| suppression | Expressive suppression | rating_scale | 5 | I have tried not to show or express my emotions. | 1 = not at all<br>5 = a lot |  |  | ESM | suppression, emotion regulation |  |
| rumination | Rumination | rating_scale | 5 | I have wasted time thinking of a past event again and again. | 1 = not at all<br>5 = a lot |  |  | ESM | rumination, emotion regulation |  |
| appreciation | Appreciation | rating_scale | 5 | I have taken time to savor a moment of the day. | 1 = not at all<br>5 = a lot |  |  | ESM | savoring, mindfulness, well-being |  |
| sharing_affect | Social affect sharing | rating_scale | 5 |  | 1 = not at all<br>5 = a lot |  |  | ESM | coping, social support, emotion regulation, social behavior |  |
| problem_coping | Problem-focused coping | rating_scale | 5 |  | 1 = not at all<br>5 = a lot |  |  | ESM | coping, emotion regulation |  |
| pa | Positive affect | rating_scale | 5 | Highly activated positive affect: I am full of energy and spirit.<br>Activated positive affect: I am feeling enthusiastic.<br>Neither activated nor deactivated positive affect: I am happy.<br>Deactivated positive affect: I am feeling both happy and calm.<br>Highly deactivated positive affect: My whole body is relaxed. | 1 = not at all<br>5 = a lot | mean-scored | 12-point affect circumplex model | ESM | positive affect, affect |  |
| na | Negative affect | rating_scale | 5 | Highly activated negative affect: I can feel pressure building inside.<br>Activated negative affect: I am feeling irritated.<br>Neither activated nor deactivated negative affect: I am unhappy.<br>Deactivated negative affect: I am feeling sad and in slow motion.<br>Highly deactivated negative affect: I am so bored that everything around me looks drab. | 1 = not at all<br>5 = a lot | mean-scored | 12-point affect circumplex model | ESM | negative affect, affect |  |

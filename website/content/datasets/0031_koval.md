---
title: "Koval (2013)"
date: 2026-04-27
draft: false
dataset_id: "0031_koval"
first_author: "Koval"
year: 2013
paper_doi: "http://doi.org/10.1037/a0033579"
zenodo_doi: "10.5281/zenodo.17347968"
license: "CC BY-NC 4.0"
n_participants: 95
n_time_points: 70
n_days: "7"
topics: "well-being, affect, depression, affect dynamics"
sampling_scheme: "10x/day stratified random interval"
participants: "undergraduate students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347968">10.5281/zenodo.17347968</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0031_koval")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0031_koval")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Koval</li>
<li><strong>Year:</strong> 2013</li>
<li><strong>Paper DOI:</strong> <a href="http://doi.org/10.1037/a0033579">http://doi.org/10.1037/a0033579</a></li>
<li><strong>Topics:</strong> well-being, affect, depression, affect dynamics</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 95 (undergraduate students)</li>
<li><strong>Time Points:</strong> 70</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 10</li>
<li><strong>Sampling Scheme:</strong> 10x/day stratified random interval</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347968">10.5281/zenodo.17347968</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/zm6uw">https://osf.io/zm6uw</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>

<p><strong>Code:</strong> <a href="https://osf.io/x4rne">https://osf.io/x4rne</a></p>
</div>

## Additional Comments

subset of larger dataset available upon request in the EMOTE database (https://emotedatabase.com/datasets/23)


## Citation

Koval, P., Pe, M. L., Meers, K., & Kuppens, P. (2013). Affect dynamics in relation to depressive symptoms: Variable, unstable or inert? Emotion, 13(6), 1132–1141. https://doi.org/10.1037/a0033579



### Additional Reference

Dejonckheere, E., Mestdagh, M., Houben, M., Rutten, I., Sels, L., Kuppens, P., & Tuerlinckx, F. (2019). Complex affect dynamics add limited information to the prediction of psychological well-being. Nature Human Behaviour, 3(5), 478–491. https://doi.org/10.1038/s41562-019-0555-0



## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 | Felt happy | 0 = not at all<br>100 = very much |  |  | ESM | happiness, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 101 | Felt relaxed | 0 = not at all<br>100 = very much |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 101 | Felt sad | 0 = not at all<br>100 = very much |  |  | ESM | sadness, negative affect, affect |  |
| angry | Angry | rating_scale | 101 | Felt angry | 0 = not at all<br>100 = very much |  |  | ESM | anger, negative affect, affect |  |
| stressed | Stress | rating_scale | 101 | Felt stressed | 0 = not at all<br>100 = very much |  |  | ESM | stress, negative affect, affect |  |

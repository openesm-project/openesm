---
title: "Kuppens (2016)"
date: 2026-03-11
draft: false
dataset_id: "0011_kuppens"
first_author: "Kuppens"
year: 2016
paper_doi: "https://doi.org/10.1177/1073191116645909"
zenodo_doi: "10.5281/zenodo.17347412"
license: "CC BY-NC 4.0"
n_participants: 95
n_time_points: 70
n_days: "7"
topics: "neuroticism, affect, emotion"
sampling_scheme: "10x/day random 90-minute intervals"
participants: "undergraduate students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347412">10.5281/zenodo.17347412</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0011_kuppens")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0011_kuppens")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Kuppens</li>
<li><strong>Year:</strong> 2016</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1177/1073191116645909">https://doi.org/10.1177/1073191116645909</a></li>
<li><strong>Topics:</strong> neuroticism, affect, emotion</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 95 (undergraduate students)</li>
<li><strong>Time Points:</strong> 70</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 10</li>
<li><strong>Sampling Scheme:</strong> 10x/day random 90-minute intervals</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347412">10.5281/zenodo.17347412</a></p>
<p><strong>Original Source Data:</strong> <a href="https://journals-sagepub-com.ezproxy.ub.uni-marburg.de/doi/10.1177/1073191116645909#supplementary-materials">https://journals-sagepub-com.ezproxy.ub.uni-marburg.de/doi/10.1177/1073191116645909#supplementary-materials</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="-">-</a></p>
<p><strong>Code:</strong> <a href="https://journals-sagepub-com.ezproxy.ub.uni-marburg.de/doi/10.1177/1073191116645909#supplementary-materials">https://journals-sagepub-com.ezproxy.ub.uni-marburg.de/doi/10.1177/1073191116645909#supplementary-materials</a></p>
</div>

## Additional Comments

no day or beep information; dataset 1 in the study; no information on specific item wording; partially implicit missingness; subset of larger dataset available upon request in the EMOTE database (https://emotedatabase.com/datasets/17)


## Citation

Kuppens, P., Champagne, D., & Tuerlinckx, F. (2012). The dynamic interplay between appraisal and core affect in daily life. Frontiers in Psychology, 3, 380. https://doi.org/10.3389/fpsyg.2012.00380



### Additional Reference

Bringmann, L. F., Pe, M. L., Vissers, N., Ceulemans, E., Borsboom, D., Vanpaemel, W., Tuerlinckx, F., & Kuppens, P. (2016). Assessing temporal emotion dynamics using networks. Assessment, 23(4), 425–435. https://doi.org/10.1177/1073191116645909



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  | NA |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | NA |  |  |  | ESM |  |  |
| angry | Angry | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | anger, negative affect, affect |  |
| depressed | Depressed | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| sad | Sad | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | sadness, negative affect, affect |  |
| anxious | Anxious | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| relaxed | Relaxed | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| happy | Happy | rating_scale | 100 | NA | 1 = not at all<br>100 = very |  |  | ESM | happiness, positive affect, affect |  |

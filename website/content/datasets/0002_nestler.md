---
title: "Nestler (2022)"
date: 2026-04-27
draft: false
dataset_id: "0002_nestler"
first_author: "Nestler"
year: 2022
paper_doi: "https://doi.org/10.1007/s11336-021-09787-w"
zenodo_doi: "10.5281/zenodo.17347328"
license: "CC BY-NC 4.0"
n_participants: 85
n_time_points: 82
n_days: "82"
topics: "personality, affect, motivation"
sampling_scheme: "1x/day unclear schedule"
participants: "unclear"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347328">10.5281/zenodo.17347328</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0002_nestler")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0002_nestler")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Nestler</li>
<li><strong>Year:</strong> 2022</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1007/s11336-021-09787-w">https://doi.org/10.1007/s11336-021-09787-w</a></li>
<li><strong>Topics:</strong> personality, affect, motivation</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 85 (unclear)</li>
<li><strong>Time Points:</strong> 82</li>
<li><strong>Days:</strong> 82</li>
<li><strong>Beeps per Day:</strong> 1</li>
<li><strong>Sampling Scheme:</strong> 1x/day unclear schedule</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347328">10.5281/zenodo.17347328</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/gmz7e">https://osf.io/gmz7e</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/wjysp/?view_only=cb2bf9adeef14eb488d228ffe2141699">https://osf.io/wjysp/?view_only=cb2bf9adeef14eb488d228ffe2141699</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/53scf/">https://osf.io/53scf/</a></p>
</div>

## Additional Comments

part of the FLIP study


## Citation

Nestler, S., & Humberg, S. (2022). A lasso and a regression tree mixed-effect model with random effects for the level, the residual variance, and the autocorrelation. Psychometrika, 87(2), 506–532. https://doi.org/10.1007/s11336-021-09787-w




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | Daily |  |  |
| day | Day of study | other |  |  |  |  |  | Daily |  |  |
| beep | Beep of the day | other |  |  |  |  |  | Daily |  |  |
| sociable | Sociable | rating_scale | 6 | Today I was sociable | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | sociability, extraversion, big five |  |
| creative | Creative | rating_scale | 6 | Today I was creative | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | creativity, openness, big five |  |
| friendly | Friendly | rating_scale | 6 | Today I was friendly | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | friendliness, agreeableness, big five |  |
| organised | Organised | rating_scale | 6 | Today I was organised | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | organisation, conscientiousness, big five |  |
| self_esteem | Satisfied with myself | rating_scale | 6 | Today I was satisfied with myself | 1 = not at all<br>6 = extremely | grand-mean centered | Rosenberg Self-Esteem Scale | Daily | self-esteem, self-concept |  |
| weekday | Day of the week | numeric |  |  |  |  |  | Daily |  |  |
| temp | Temperature | numeric |  |  |  |  |  | Daily |  |  |
| rain | Precipitation Rainfall | numeric |  |  |  |  |  | Daily |  |  |
| nervous | Nervous | rating_scale | 6 | Today I was nervous | 1 = not at all<br>6 = extremely | grand-mean centered |  | Daily | nervousness, negative affect, affect, neuroticism, big five |  |

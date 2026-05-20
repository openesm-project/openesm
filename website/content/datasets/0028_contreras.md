---
title: "Contreras (2020)"
date: 2026-04-27
draft: false
dataset_id: "0028_contreras"
first_author: "Contreras"
year: 2020
paper_doi: "https://doi.org/10.3389/fpsyg.2020.544565"
zenodo_doi: "10.5281/zenodo.17347605"
license: "CC-BY 4.0"
n_participants: 23
n_time_points: 70
n_days: "7"
topics: "paranoia, sadness, closeness to others, avoidance"
sampling_scheme: "10x/day stratified sampling"
participants: "participants with above-average paranoid ideation and/or interpersonal sensitivity"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347605">10.5281/zenodo.17347605</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0028_contreras")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0028_contreras")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Contreras</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.3389/fpsyg.2020.544565">https://doi.org/10.3389/fpsyg.2020.544565</a></li>
<li><strong>Topics:</strong> paranoia, sadness, closeness to others, avoidance</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 23 (participants with above-average paranoid ideation and/or interpersonal sensitivity)</li>
<li><strong>Time Points:</strong> 70</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 10</li>
<li><strong>Sampling Scheme:</strong> 10x/day stratified sampling</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **License:** CC-BY 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347605">10.5281/zenodo.17347605</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/7tk4b/">https://osf.io/7tk4b/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/bkn3y">https://osf.io/bkn3y</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/mezgw">https://osf.io/mezgw</a></p>
</div>

## Additional Comments

[object Object]


## Citation

Contreras, A., Valiente, C., Heeren, A., & Bentall, R. (2020). A temporal network approach to paranoia: A pilot study. Frontiers in Psychology, 11. https://doi.org/10.3389/fpsyg.2020.544565




## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| sad | Sadness | rating_scale | 9 | At this moment, I feel sad |  |  |  | ESM | sadness, negative affect, affect |  |
| useless | Useless | rating_scale | 9 | At this moment, I feel useless |  |  | Rosenberg Self-esteem Scale (RSES) | ESM | worthlessness, negative affect, affect, big five, neuroticism, self-esteem |  |
| manage_well | Manage issues well | rating_scale | 9 | At this moment, I feel I can manage issues well |  |  | Rosenberg Self-esteem Scale (RSES) | ESM | self-efficacy, self-esteem, coping |  |
| no_trust | Cannot trust people | rating_scale | 9 | Since the last “beep”, I have had the <br>impression that I cannot trust people |  |  | Persecutory Ideation Questionnaire (PIQ) | ESM | distrust, paranoia, social cognition, schizophrenia, psychopathology |  |
| harm | Perceived harm intention | rating_scale | 9 | Since the last “beep”, I have had the <br>impression that people have tried to harm <br>me |  |  | Persecutory Ideation Questionnaire (PIQ) | ESM | paranoia, social cognition, schizophrenia, psychopathology |  |
| criticism | Was criticized | rating_scale | 9 | Since the last “beep”, I have had the <br>impression that people have criticized me |  |  | Persecutory Ideation Questionnaire (PIQ) | ESM | criticism, social threat, social cognition |  |
| others | Close to others | rating_scale | 9 | At this moment, I feel close to others |  |  |  | ESM | social connectedness, belongingness, social bonds |  |
| avoid | Experiential avoidance | rating_scale | 9 | Since the last “beep”, I have tried to <br>avoid negative thoughts and feelings |  |  | Acceptance and Action Questionnaire-II | ESM | avoidance, emotion regulation, self-regulation |  |

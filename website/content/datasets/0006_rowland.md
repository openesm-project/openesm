---
title: "Rowland (2020)"
date: 2026-04-27
draft: false
dataset_id: "0006_rowland"
first_author: "Rowland"
year: 2020
paper_doi: "https://doi.org/10.1007/s12671-020-01335-4"
zenodo_doi: "10.5281/zenodo.17347351"
license: "CC BY-NC 4.0"
n_participants: 125
n_time_points: 240
n_days: "40"
topics: "mindfulness, affect, network"
sampling_scheme: "6x/day random timing"
participants: "undergraduate students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347351">10.5281/zenodo.17347351</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0006_rowland")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0006_rowland")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Rowland</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1007/s12671-020-01335-4">https://doi.org/10.1007/s12671-020-01335-4</a></li>
<li><strong>Topics:</strong> mindfulness, affect, network</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 125 (undergraduate students)</li>
<li><strong>Time Points:</strong> 240</li>
<li><strong>Days:</strong> 40</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> 6x/day random timing</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347351">10.5281/zenodo.17347351</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/jmz2n/">https://osf.io/jmz2n/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/5t4yg">https://osf.io/5t4yg</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/jmz2n/">https://osf.io/jmz2n/</a></p>
</div>



## Citation

Rowland, Z., & Wenzel, M. (2020). Mindfulness and affect-network density: does mindfulness facilitate disengagement from affective experiences in daily life? Mindfulness, 11(5), 1253–1266. https://doi.org/10.1007/s12671-020-01335-4




## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | happiness, positive affect, affect | "We assessed affect in terms of eight common emotional states (e.g., Kuppens et al. 2010), which were based on the affective circumplex model (Russell 2003)." |
| excited | Excited | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | excitement, positive affect, affect, extraversion, big five |  |
| relaxed | Relaxed | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| satisfied | Satisfied | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | satisfaction, positive affect, affect |  |
| angry | Angry | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | anger, negative affect, affect |  |
| anxious | Anxious | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| depressed | Depressed | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| sad | Sad | rating_scale | 101 |  | 0 (not at all) to 100 (very much) | within-person centered |  | ESM | sadness, negative affect, affect |  |

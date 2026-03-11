---
title: "Ringwald (2024)"
date: 2026-03-11
draft: false
dataset_id: "0046_ringwald"
first_author: "Ringwald"
year: 2024
paper_doi: "https://doi.org/10.31234/osf.io/g7n4a_v3"
zenodo_doi: "10.5281/zenodo.17348284"
license: "CC BY-NC 4.0"
n_participants: 526
n_time_points: 145
n_days: "15"
topics: "empathy, affect, interpersonal, congruence, social perception"
sampling_scheme: "event-contingent based on social interactions"
participants: "adults (18-50)"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348284">10.5281/zenodo.17348284</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0046_ringwald")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0046_ringwald")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Ringwald</li>
<li><strong>Year:</strong> 2024</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.31234/osf.io/g7n4a_v3">https://doi.org/10.31234/osf.io/g7n4a_v3</a></li>
<li><strong>Topics:</strong> empathy, affect, interpersonal, congruence, social perception</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 526 (adults (18-50))</li>
<li><strong>Time Points:</strong> 145</li>
<li><strong>Days:</strong> 15</li>
<li><strong>Beeps per Day:</strong> event-contingent</li>
<li><strong>Sampling Scheme:</strong> event-contingent based on social interactions</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348284">10.5281/zenodo.17348284</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/unvp8">https://osf.io/unvp8</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>

<p><strong>Code:</strong> <a href="https://osf.io/unvp8">https://osf.io/unvp8</a></p>
</div>

## Additional Comments

ILIADD study; randomly initiated ESM surveys not available in this dataset; number of max. time points taken as maximum of observations in data; day and beep information missing


## Citation

Ringwald, W., Vize, C., & Wright, A. (2025, March 9). Do you feel what I feel? The relation between congruence of perceived affect and self-reported empathy in daily life social situations. https://doi.org/10.31234/osf.io/g7n4a_v3




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| empathy_global | Global empathy | rating_scale | 11 | Mean of other two empathy categories (3 items) and additional item:<br>"When the person(s) I interacted with showed emotions, I <br>felt their emotions inside of me." |  | Mean-scored and likely person-mean centered |  | ESM | empathy |  |
| empathy_cog | Cognitive empathy | rating_scale | 11 | Mean of two items:<br>"I considered what the person(s) I interacted with was <br>thinking." and "I considered what the person(s) I interacted with was feeling." |  | Mean-scored and likely person-mean centered |  | ESM | cognitive empathy, empathy |  |
| empathy_aff | Affective empathy | rating_scale | 11 | When the person(s) I interacted with showed emotions, I <br>felt their emotions inside of me. |  | Mean-scored and likely person-mean centered |  | ESM | affective empathy, empathy |  |
| pa_self | Positive affect self | rating_scale | 11 | How positive did you feel during the interaction? |  | Likely person-mean centered |  | ESM | positive affect, affect, interaction |  |
| pa_other | Positive affect other | rating_scale | 11 | How positive were their emotions during the interaction? |  | Likely person-mean centered |  | ESM | positive affect, affect, interaction, external rating |  |
| na_self | Negative affect self | rating_scale | 11 | How negative did you feel during the interaction? |  | Likely person-mean centered |  | ESM | negative affect, affect |  |
| na_other | Negative affect other | rating_scale | 11 | How negative were their emotions during the interaction? |  | Likely person-mean centered |  | ESM | negative affect, affect, external rating |  |

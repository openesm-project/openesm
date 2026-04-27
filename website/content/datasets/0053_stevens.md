---
title: "Stevens (2020)"
date: 2026-04-27
draft: false
dataset_id: "0053_stevens"
first_author: "Stevens"
year: 2020
paper_doi: "https://doi.org/10.1016/j.bodyim.2020.09.003"
zenodo_doi: "10.5281/zenodo.17347854"
license: "CC BY-NC 4.0"
n_participants: 133
n_time_points: 42
n_days: "7"
topics: "body positivity, social media, affect, body satisfaction, fitspiration"
sampling_scheme: "6x/day semi-random intervals with anchor times and 40 minute period around them"
participants: "undergraduate students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347854">10.5281/zenodo.17347854</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0053_stevens")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0053_stevens")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Stevens</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1016/j.bodyim.2020.09.003">https://doi.org/10.1016/j.bodyim.2020.09.003</a></li>
<li><strong>Topics:</strong> body positivity, social media, affect, body satisfaction, fitspiration</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 133 (undergraduate students)</li>
<li><strong>Time Points:</strong> 42</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> 6x/day semi-random intervals with anchor times and 40 minute period around them</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347854">10.5281/zenodo.17347854</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/qy9uj/files/">https://osf.io/qy9uj/files/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>

<p><strong>Code:</strong> <a href="https://osf.io/qy9uj/files/">https://osf.io/qy9uj/files/</a></p>
</div>

## Additional Comments

no day and beep information available; some variable coding unclear


## Citation

Stevens, A., & Griffiths, S. (2020). Body Positivity (#BoPo) in everyday life: An ecological momentary assessment study showing potential benefits to individuals’ body image and emotional wellbeing. Body Image, 35, 181–191. https://doi.org/10.1016/j.bodyim.2020.09.003




## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| hour | Hour of the day | numeric |  |  |  |  |  | ESM |  |  |
| weekend | Weekend | binary | 2 |  | 0 = no<br>1 = yes |  |  | ESM |  |  |
| response_lag | Response lag | numeric |  | Survey response time (in minutes, max. 45 minutes) |  |  |  | ESM | response time |  |
| response_time | Survey completion time | numeric |  | Survey completion time (in minutes) |  |  |  | ESM | response time |  |
| responded_fixed | Responded | binary | 2 | Meaning not fully clear, either whether participants completed the survey at all or whether they experienced some of the content stated below | 0 = no<br>1 = yes |  |  | ESM |  |  |
| thins_exposure | Unique exposure to thinspiration | binary | 2 | Have you seen thinspiration since the last questionnaire? | 0 = No exposure<br>1 = Thinspiration exposure only |  | Recoded by the authors to indicate unique exposure | ESM | thinspiration, media exposure, body image |  |
| fits_exposure | Unique exposure to fitspiration | binary | 2 | Have you seen fitspiration since the last questionnaire? | 0 = No exposure<br>1 = Fitspiration exposure only |  | Recoded by the authors to indicate unique exposure | ESM | fitspiration, media exposure, body image |  |
| bo_po_exposure | Unique exposure to body positivity | binary | 2 | Have you seen body positivity since the last questionnaire? | 0 = No exposure<br>1 = Body positivity exposure only |  | Recoded by the authors to indicate unique exposure | ESM | body positivity, media exposure, body image |  |
| dual_thin_fits | Dual exposure to thinspiration and fitspiration | binary | 2 | Have you seen thinspiration/fitspiration since the last questionnaire? | 0 = No exposure<br>1 = Thinspiration and fitspiration exposure |  | Recoded by the authors to indicate double exposure | ESM | thinspiration, fitspiration, media exposure, body image |  |
| dual_thin_bo_po | Dual exposure to thinspiration and body positivity | binary | 2 | Have you seen thinspiration/body positivity since the last questionnaire? | 0 = No exposure<br>1 = Thinspiration and body positivity exposure |  | Recoded by the authors to indicate double exposure | ESM | thinspiration, body positivity, media exposure, body image |  |
| triple_exposure | Triple exposure to thinspiration, fitspiration, and body positivity | binary | 2 | Have you seen thinspiration/fitspiration/body positivity since the last questionnaire? | 0 = No exposure<br>1 = Thinspiration, fitspiration, and body positivity exposure |  | Recoded by the authors to indicate triple exposure | ESM | thinspiration, fitspiration, body positivity, media exposure, body image |  |
| weight_satisfaction | Weight satisfaction | rating_scale | 101 | How satisfied with your weight are you right now? | 0 = extremely dissatisfied<br>100 = extremely satisfied |  |  | ESM | weight satisfaction, body satisfaction, body image, self-concept |  |
| appearance_satisfaction | Appearance satisfaction | rating_scale | 101 | How satisfied with your appearance are you right now? | 0 = extremely dissatisfied<br>100 = extremely satisfied |  |  | ESM | appearance satisfaction, body satisfaction, body image, self-concept |  |
| shape_satisfaction | Shape satisfaction | rating_scale | 101 | How satisfied with your shape are you right now? | 0 = extremely dissatisfied<br>100 = extremely satisfied |  |  | ESM | shape satisfaction, body satisfaction, body image, self-concept |  |
| anxious | Anxious | rating_scale | 101 | How anxious are you right now? | 0 = not at all<br>100 = extremely |  |  | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| guilty | Guilty | rating_scale | 101 | How guilty are you right now? | 0 = not at all<br>100 = extremely |  |  | ESM | guilt, negative affect, affect |  |
| depressed | Depressed | rating_scale | 101 | How depressed are you right now? Wording not fully clear here, as the article states "upset" instead of depressed | 0 = not at all<br>100 = extremely |  |  | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| confident | Confident | rating_scale | 101 | How confident are you right now? | 0 = not at all<br>100 = extremely |  |  | ESM | confidence, self-efficacy, positive affect, affect, big five, extraversion |  |
| happy | Happy | rating_scale | 101 | How happy are you right now? | 0 = not at all<br>100 = extremely |  |  | ESM | happiness, positive affect, affect |  |
| inspired | Inspired | rating_scale | 101 | How inspired are you right now? | 0 = not at all<br>100 = extremely |  |  | ESM | inspiration, positive affect, affect |  |

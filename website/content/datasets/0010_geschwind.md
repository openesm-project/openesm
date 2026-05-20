---
title: "Geschwind (2013)"
date: 2026-04-27
draft: false
dataset_id: "0010_geschwind"
first_author: "Geschwind"
year: 2013
paper_doi: "https://doi.org/10.1371/journal.pone.0060188"
zenodo_doi: "10.5281/zenodo.17347473"
license: "CC BY-NC 4.0"
n_participants: 129
n_time_points: 200
n_days: "20"
topics: "depression, neuroticism, mood"
sampling_scheme: "10x/day 90-minute interval"
participants: "individuals with residual depressive symptoms"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347473">10.5281/zenodo.17347473</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0010_geschwind")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0010_geschwind")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Geschwind</li>
<li><strong>Year:</strong> 2013</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1371/journal.pone.0060188">https://doi.org/10.1371/journal.pone.0060188</a></li>
<li><strong>Topics:</strong> depression, neuroticism, mood</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 129 (individuals with residual depressive symptoms)</li>
<li><strong>Time Points:</strong> 200</li>
<li><strong>Days:</strong> 20</li>
<li><strong>Beeps per Day:</strong> 10</li>
<li><strong>Sampling Scheme:</strong> 10x/day 90-minute interval</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347473">10.5281/zenodo.17347473</a></p>
<p><strong>Original Source Data:</strong> <a href="https://doi.org/10.1371/journal.pone.0060188.s004">https://doi.org/10.1371/journal.pone.0060188.s004</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>

<p><strong>Code:</strong> <a href="https://doi.org/10.1371/journal.pone.0060188.s001">https://doi.org/10.1371/journal.pone.0060188.s001</a></p>
</div>

## Additional Comments

part of an experimental study; contains two study periods, each of the same length; pleasantness is on a different scale and its scale labels are unclear


## Citation

Geschwind, N., Peeters, F., Drukker, M., van Os, J., & Wichers, M. (2011). Mindfulness training increases momentary positive emotions and reward experience in adults vulnerable to depression: A randomized controlled trial. Journal of Consulting and Clinical Psychology, 79(5), 618. https://doi.org/10.1037/a0024595



### Additional Reference

Bringmann, L. F., Vissers, N., Wichers, M., Geschwind, N., Kuppens, P., Peeters, F., Borsboom, D., & Tuerlinckx, F. (2013). A network approach to psychopathology: New insights into clinical longitudinal data. PLoS ONE, 8(4). https://doi.org/10.1371/journal.pone.0060188



## Changelog

- **2026-04-27** (1.0.0) *metadata change*: Fix information about sampling scheme.
- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| study_period | Study period | binary | 2 |  | 0 = six-day baseline period before mindfulness therapy (therapy group only)<br>1 = six-day post-baseline period after mindfulness therapy (therapy group only) |  |  | ESM |  |  |
| cheerful | Cheerful | rating_scale | 7 | I feel cheerful | 1 = not at all<br>7 = very |  |  | ESM | cheerfulness, positive affect, affect |  |
| pleasantness | Pleasantness of event | rating_scale | 8 | Pleasantness of the most important event that happened between the current and the previous response | -4 = unclear<br>3 = unclear |  |  | ESM | event pleasantness, daily event,  activity, context | Labels and wording not fully clear, but original article states that "High pleasantness thus reflected high skill, low effort, low preference for doing something else, and high enjoyment of the activity" |
| worried | worried | rating_scale | 7 | I feel worried | 1 = not at all<br>7 = very |  |  | ESM | worry, anxiety, negative affect, affect, neuroticism, big five |  |
| fearful | Fearful | rating_scale | 7 | I feel fearful | 1 = not at all<br>7 = very |  |  | ESM | fearfulness, negative affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 7 | I feel sad | 1 = not at all<br>7 = very |  |  | ESM | sadness, negative affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | I feel relaxed | 1 = not at all<br>7 = very |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |

---
title: "Hoebeke (2022)"
date: 2026-03-11
draft: false
dataset_id: "0013_hoebeke"
first_author: "Hoebeke"
year: 2022
paper_doi: "https://doi.org/10.36131/cnfioritieditore20220504"
zenodo_doi: "10.5281/zenodo.17347619"
license: "CC-BY 4.0"
n_participants: 40
n_time_points: 56
n_days: "14"
topics: "rumination, depression, anxiety"
sampling_scheme: "4x/day time-contingent equidistant intervals"
participants: "community sample"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347619">10.5281/zenodo.17347619</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0013_hoebeke")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0013_hoebeke")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Hoebeke</li>
<li><strong>Year:</strong> 2022</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.36131/cnfioritieditore20220504">https://doi.org/10.36131/cnfioritieditore20220504</a></li>
<li><strong>Topics:</strong> rumination, depression, anxiety</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 40 (community sample)</li>
<li><strong>Time Points:</strong> 56</li>
<li><strong>Days:</strong> 14</li>
<li><strong>Beeps per Day:</strong> 4</li>
<li><strong>Sampling Scheme:</strong> 4x/day time-contingent equidistant intervals</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC-BY 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347619">10.5281/zenodo.17347619</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/dngyk/">https://osf.io/dngyk/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/wj6xn">https://osf.io/wj6xn</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/dngyk/">https://osf.io/dngyk/</a></p>
</div>

## Additional Comments

some variable codings unclear


## Citation

Hoebeke, Y., Blanchard, M. A., Contreras, A., & Heeren, A. (2022). An experience sampling measure of the key features of rumination. Clinical Neuropsychiatry, 19(5), 288–297. https://doi.org/10.36131/cnfioritieditore20220504




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| created | Time of creation | PosixCt |  |  |  |  |  | ESM |  |  |
| modified | Time of modification | PosixCt |  |  |  |  |  | ESM |  |  |
| ended | Time of ending | PosixCt |  |  |  |  |  | ESM |  |  |
| expired | Time of expiring | PosixCt |  |  |  |  |  | ESM |  |  |
| activity | unclear, likely: Absorption in activity | rating_scale | 101 | unclear |  |  |  | ESM |  |  |
| perseverance | Perseverance | rating_scale | 101 | How much time did you spend thinking of one or more emotional<br>experiences? | 0 = None<br>100 = All the time |  |  | ESM | rumination, emotion regulation |  |
| negativity | Negativity | rating_scale | 101 | To what extent were your thoughts negative? | 0 = Not at all<br>100 = Extremely |  |  | ESM | negative thinking, negativity |  |
| self_criticism | Self-criticism | rating_scale | 101 | To what extent were your thoughts self-critical? | 0 = Not at all<br>100 = Extremely |  |  | ESM | self-critical thinking, criticism |  |
| brooding | Brooding | rating_scale | 101 | How much did you think about the causes and consequences of <br>emotional experiences? | 0 = Not at all<br>100 = Absolutely |  |  | ESM | rumination, emotion-focused reflection |  |
| replaying | Replaying | rating_scale | 101 | To what extent have you mentally replayed emotional experiences that <br>you’ve had? | 0 = Not at all<br>100 = Absolutely |  |  | ESM | rumination, emotion regulation |  |
| att_control | Executive control | rating_scale | 101 | unclear |  |  |  | ESM | executive control |  |

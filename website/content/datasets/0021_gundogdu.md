---
title: "Gundogdu (2017)"
date: 2026-03-12
draft: false
dataset_id: "0021_gundogdu"
first_author: "Gundogdu"
year: 2017
paper_doi: "https://doi.org/10.1098/rsos.170194"
zenodo_doi: "10.5281/zenodo.17347760"
license: "CC0 1.0"
n_participants: 54
n_time_points: 90
n_days: "30"
topics: "social interactions, personality states, personality"
sampling_scheme: "3x/day fixed schedule"
participants: "employees of research center"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347760">10.5281/zenodo.17347760</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0021_gundogdu")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0021_gundogdu")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Gundogdu</li>
<li><strong>Year:</strong> 2017</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1098/rsos.170194">https://doi.org/10.1098/rsos.170194</a></li>
<li><strong>Topics:</strong> social interactions, personality states, personality</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 54 (employees of research center)</li>
<li><strong>Time Points:</strong> 90</li>
<li><strong>Days:</strong> 30</li>
<li><strong>Beeps per Day:</strong> 3</li>
<li><strong>Sampling Scheme:</strong> 3x/day fixed schedule</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** yes
- **License:** CC0 1.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347760">10.5281/zenodo.17347760</a></p>
<p><strong>Original Source Data:</strong> <a href="https://doi.org/10.5061/dryad.b88c7">https://doi.org/10.5061/dryad.b88c7</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://datadryad.org/stash/dataset/doi:10.5061/dryad.b88c7#usage">https://datadryad.org/stash/dataset/doi:10.5061/dryad.b88c7#usage</a></p>
<p><strong>Code:</strong> <a href="https://github.com/didemgundogdu/RoyalOpenSciencePersonalityDynamics">https://github.com/didemgundogdu/RoyalOpenSciencePersonalityDynamics</a></p>
</div>

## Additional Comments

no beep information available; six-week duration, but only workdays were included


## Citation

Gundogdu, D., Finnerty, A. N., Staiano, J., Teso, S., Passerini, A., Pianesi, F., & Lepri, B. (2017). Investigating the association between social interactions and personality states dynamics. Royal Society Open Science, 4(9), 170194. https://doi.org/10.1098/rsos.170194




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | PosixCt |  |  |  |  |  | ESM |  |  |
| timestamp | Timestamp | other |  | Timestamp in unix time |  |  |  | ESM |  |  |
| extraversion | Extraversion | rating_scale | 7 | ‘extraverted, enthusiastic’ and ‘reserved, quiet’ (reversed)<br><br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | extraversion, big five |  |
| agreeableness | Agreeableness | rating_scale | 7 | ‘sympathetic, warm’ and ‘critical, quarrelsome’ (reversed)<br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | agreeableness, big five |  |
| conscientiousness | Conscientiousness | rating_scale | 7 | ‘dependable, self-disciplined’ and ‘disorganized, careless’ (reversed)<br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | conscientiousness, big five |  |
| emotional_stability | Emotional stability | rating_scale | 7 | ‘calm, emotionally stable’ and ‘anxious, easily upset’<br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | neuroticism, big five |  |
| openness | Openness to experience | rating_scale | 7 | ‘open to new experiences, complex’ and ‘conventional, uncreative’ (reversed)<br>During the last half hour, how ... have you been? | 1 = Strongly disagree<br>7 = Strongly agree | mean-scored | Ten-Item Personality Inventory | ESM | openness, big five |  |

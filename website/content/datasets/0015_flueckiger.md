---
title: "Flueckiger (2014)"
date: 2026-03-12
draft: false
dataset_id: "0015_flueckiger"
first_author: "Flueckiger"
year: 2014
paper_doi: "https://doi.org/10.1371/journal.pone.0111080"
zenodo_doi: "10.5281/zenodo.17347647"
license: "CC0 1.0"
n_participants: 72
n_time_points: 32
n_days: "32"
topics: "health behavior, depression, academic performance, affect"
sampling_scheme: "1x/day at 5pm"
participants: "first-year psychology students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347647">10.5281/zenodo.17347647</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0015_flueckiger")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0015_flueckiger")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Flueckiger</li>
<li><strong>Year:</strong> 2014</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1371/journal.pone.0111080">https://doi.org/10.1371/journal.pone.0111080</a></li>
<li><strong>Topics:</strong> health behavior, depression, academic performance, affect</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 72 (first-year psychology students)</li>
<li><strong>Time Points:</strong> 32</li>
<li><strong>Days:</strong> 32</li>
<li><strong>Beeps per Day:</strong> 1</li>
<li><strong>Sampling Scheme:</strong> 1x/day at 5pm</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC0 1.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347647">10.5281/zenodo.17347647</a></p>
<p><strong>Original Source Data:</strong> <a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/27388">https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/27388</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://doi.org/10.7910/DVN/27388/U8IPJZ">https://doi.org/10.7910/DVN/27388/U8IPJZ</a></p>

</div>



## Citation

Flueckiger, L., Lieb, R., Meyer, A. H., & Mata, J. (2014). How health behaviors relate to academic performance via affect: An intensive longitudinal study. PLOS ONE, 9(10), e111080. https://doi.org/10.1371/journal.pone.0111080




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | Daily |  |  |
| day | Day of study | other |  |  |  |  |  | Daily |  |  |
| beep | Beep of the day | other |  |  |  |  |  | Daily |  |  |
| sleep_quality | Sleep quality | rating_scale | 4 |  | 1 = very bad<br>4 = very good |  | Pittsburgh Sleep Quality Index (German version) | Daily | sleep quality, sleep |  |
| physical_activity | Physical activity | numerical |  | Number of minutes engaged in mild, moderate and strenuous exercise weighted by metabolic equivalents and then summed to produce a total daily leisure activity score |  |  | Godin Leisure-Time Exercise Questionnaire | Daily | exercise, physical activity, activity |  |
| pa | Positive affect | rating_scale | 7 | Happy, content, cheerful | 1 = not at all<br>7 = extremely | mean-scored | Pleasentness scale (German version) | Daily | positive affect, affect |  |
| na | Negative affect | rating_scale | 7 | Sad, downhearted, frustrated | 1 = not at all<br>7 = extremely | mean-scored | Pleasentness scale (German version) | Daily | negative affect, affect |  |
| learning_goal_achievement | Learning goal achievement | rating_scale | 5 | Did you achieve the learning goals you set for yourself in the last 24 hours? (paraphrasd after item description in the paper) | 0 = not at all<br>4 = completely |  |  | Daily | learning, academic |  |

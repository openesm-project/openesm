---
title: "Scharbert (2023)"
date: 2026-03-12
draft: false
dataset_id: "0071_scharbert"
first_author: "Scharbert"
year: 2023
paper_doi: "https://doi.org/10.1038/s41467-024-44693-6"
zenodo_doi: "10.5281/zenodo.17348583"
license: "CC-BY 4.0"
n_participants: 2855
n_time_points: 140
n_days: "28"
topics: "affect, well-being, Covid, prejudice"
sampling_scheme: "5x/day with 4 randomly-timed surveys between 9am and 6pm and one daily evening survey after 7pm"
participants: "adults"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348583">10.5281/zenodo.17348583</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0071_scharbert")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0071_scharbert")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Scharbert</li>
<li><strong>Year:</strong> 2023</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1038/s41467-024-44693-6">https://doi.org/10.1038/s41467-024-44693-6</a></li>
<li><strong>Topics:</strong> affect, well-being, Covid, prejudice</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 2855 (adults)</li>
<li><strong>Time Points:</strong> 140</li>
<li><strong>Days:</strong> 28</li>
<li><strong>Beeps per Day:</strong> 5</li>
<li><strong>Sampling Scheme:</strong> 5x/day with 4 randomly-timed surveys between 9am and 6pm and one daily evening survey after 7pm</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC-BY 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348583">10.5281/zenodo.17348583</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/8f3yu">https://osf.io/8f3yu</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/nfkze">https://osf.io/nfkze</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/z9y5b">https://osf.io/z9y5b</a></p>
</div>

## Additional Comments

no beep information available; data from the CoCo project; subset of all data available here; more information about all data and a data request sheet is provided at https://osf.io/bzahp/ and https://coco-study.org/en/; additional data about tweet counts related to the Ukraine war are available on OSF


## Citation

Scharbert, J., Reiter, T., Sakel, S., ter Horst, J., Geukes, K., Gosling, S. D., Harari, G., Kroencke, L., Matz, S., Schoedel, R., Shani, M., Stachl, C., Talaifar, S., Aguilar, N. M. A., Amante, D., Aquino, S. D., Bastias, F., Biesanz, J. C., Bornamanesh, A., … Back, M. D. (2023). A global experience-sampling method study of well-being during times of crisis: The CoCo project. Social and Personality Psychology Compass, 17(10), e12813. https://doi.org/10.1111/spc3.12813



### Additional Reference

Scharbert, J., Humberg, S., Kroencke, L., Reiter, T., Sakel, S., ter Horst, J., Utesch, K., Gosling, S. D., Harari, G., Matz, S. C., Schoedel, R., Stachl, C., Aguilar, N. M. A., Amante, D., Aquino, S. D., Bastias, F., Bornamanesh, A., Bracegirdle, C., Campos, L. A. M., … Back, M. D. (2024). Psychological well-being in Europe after the outbreak of war in Ukraine. Nature Communications, 15(1), 1202. https://doi.org/10.1038/s41467-024-44693-6



## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | Date |  |  |  |  |  | ESM |  |  |
| angry | Angry | rating_scale | 6 | I felt angry. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | anger, negative affect, affect |  |
| anxious | Anxious | rating_scale | 6 | I felt anxious. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| sad | Sad | rating_scale | 6 | I felt sad. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | sadness, negative affect, affect |  |
| happy | Happy | rating_scale | 6 | I felt happy. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | happiness, positive affect, affect |  |
| excited | Excited | rating_scale | 6 | I felt excited. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | excitement, positive affect, affect, extraversion, big five |  |
| relaxed | Relaxed | rating_scale | 6 | I felt relaxed. | 1 = not agree at all<br>2 = disagree<br>3 = somewhat disagree<br>4 = somewhat agree<br>5 = agree<br>6 = agree completely |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| feeling_country | Feeling towards people in country | rating_scale | 10 | How positive or negative have you felt towards people in<br>your country in general today? | 1 = very negative<br>10 very positive |  |  | Daily | social attitude, ingroup, social cognition |  |
| threat_country | Feeling threatened by people in country | rating_scale | 10 | How threatened have you felt by people in your country<br>in general today? | 1 = not at all threatened<br>10 = extremely threatened |  |  | Daily | threat perception, ingroup, social cognition |  |
| similarity_country | Feeling similar to people in country | rating_scale | 10 | How similar have you felt to people in your country in<br>general today? | 1 = not at all similar<br>10 = extremely similar |  |  | Daily | social identity, ingroup, social cognition |  |

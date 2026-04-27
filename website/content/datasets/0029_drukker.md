---
title: "Drukker (2020)"
date: 2026-04-27
draft: false
dataset_id: "0029_drukker"
first_author: "Drukker"
year: 2020
paper_doi: "https://doi.org/10.1016/j.jpsychores.2020.110261"
zenodo_doi: "10.5281/zenodo.17347944"
license: "CC BY-NC 4.0"
n_participants: 24
n_time_points: 70
n_days: "7"
topics: "irritable bowel syndrome, panic disorder, gastrointestinal symptoms, childhood trauma"
sampling_scheme: "10x/day random schedule"
participants: "individuals with IBS and panic disorder"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347944">10.5281/zenodo.17347944</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0029_drukker")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0029_drukker")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Drukker</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1016/j.jpsychores.2020.110261">https://doi.org/10.1016/j.jpsychores.2020.110261</a></li>
<li><strong>Topics:</strong> irritable bowel syndrome, panic disorder, gastrointestinal symptoms, childhood trauma</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 24 (individuals with IBS and panic disorder)</li>
<li><strong>Time Points:</strong> 70</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 10</li>
<li><strong>Sampling Scheme:</strong> 10x/day random schedule</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347944">10.5281/zenodo.17347944</a></p>
<p><strong>Original Source Data:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0022399920308230?via%3Dihub#s0125">https://www.sciencedirect.com/science/article/pii/S0022399920308230?via%3Dihub#s0125</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0022399920308230?via%3Dihub#s0120">https://www.sciencedirect.com/science/article/pii/S0022399920308230?via%3Dihub#s0120</a></p>

</div>

## Additional Comments

[object Object]


## Citation

Drukker, M., Peters, J. C. H., Vork, L., Mujagic, Z., Rutten, B. P. F., van Os, J., Masclee, A. A. M., Kruimel, J. W., & Leue, C. (2020). Network approach of mood and functional gastrointestinal symptom dynamics in relation to childhood trauma in patients with irritable bowel syndrome and comorbid panic disorder. Journal of Psychosomatic Research, 139, 110261. https://doi.org/10.1016/j.jpsychores.2020.110261




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| enthusiastic | Enthusiastic | rating_scale | 7 | I feel enthusiastic | 1 = not at all<br>7 = extremely |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| down | Feeling down | rating_scale | 7 | I feel down | 1 = not at all<br>7 = extremely |  |  | ESM | negative affect, affect |  |
| irritated | Irritated | rating_scale | 7 | I feel irritated | 1 = not at all<br>7 = extremely |  |  | ESM | irritability, anxiety, negative affect, affect |  |
| rushed | Rushed | rating_scale | 7 | I feel rushed | 1 = not at all<br>7 = extremely |  |  | ESM | negative affect, affect |  |
| happy | Happy | rating_scale | 7 | I feel happy | 1 = not at all<br>7 = extremely |  |  | ESM | happiness, positive affect, affect |  |
| cheerful | Cheerful | rating_scale | 7 | I feel cheerful | 1 = not at all<br>7 = extremely |  |  | ESM | cheerfulness, positive affect, affect |  |
| phy_bloating | Bloating | rating_scale | 7 |  | unclear |  |  | ESM | gastrointestinal, physical health, physical symptom |  |
| phy_abd | Abdominal pain | rating_scale | 7 |  | unclear |  |  | ESM | gastrointestinal, physical health, physical symptom |  |

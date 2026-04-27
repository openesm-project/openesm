---
title: "Fernández (2025)"
date: 2026-04-27
draft: false
dataset_id: "0026_fernandez"
first_author: "Fernández"
year: 2025
paper_doi: "https://doi.org/10.31234/osf.io/uj6df"
zenodo_doi: "10.5281/zenodo.17347879"
license: "CC BY-NC 4.0"
n_participants: 225
n_time_points: 50
n_days: "10"
topics: "well-being, smartphone usage, social media"
sampling_scheme: "5x/day semi-random signal contingent"
participants: "young adults (18-25)"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347879">10.5281/zenodo.17347879</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0026_fernandez")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0026_fernandez")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Fernández</li>
<li><strong>Year:</strong> 2025</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.31234/osf.io/uj6df">https://doi.org/10.31234/osf.io/uj6df</a></li>
<li><strong>Topics:</strong> well-being, smartphone usage, social media</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 225 (young adults (18-25))</li>
<li><strong>Time Points:</strong> 50</li>
<li><strong>Days:</strong> 10</li>
<li><strong>Beeps per Day:</strong> 5</li>
<li><strong>Sampling Scheme:</strong> 5x/day semi-random signal contingent</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** yes
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347879">10.5281/zenodo.17347879</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/jvms7">https://osf.io/jvms7</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/w3vp5">https://osf.io/w3vp5</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/95ncg">https://osf.io/95ncg</a></p>
</div>

## Additional Comments

no beep and day information available; sample 1 of the cited paper; only a subset of days was shared


## Citation

Elmer, T., Fernández, A., Stadel, M., Kas, M. J. H., & Langener, A. M. (2025). Bidirectional associations between smartphone usage and momentary well-being in young adults: Tackling methodological challenges by combining experience sampling methods with passive smartphone data. Emotion, 25(5), 1065–1078. https://doi.org/10.1037/emo0001485




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| affect | Affect | rating_scale | 7 | How do you feel right now? | 1 = Very bad<br>7 = Very good |  |  | ESM | affect |  |
| loneliness | Loneliness | rating_scale | 7 | How lonely do you feel at the moment? | 1 = Not at all<br>7 = Very much |  |  | ESM | loneliness, social functioning, negative affect, affect |  |
| all_smartphone_pre | Total smartphone use (pre) | numeric |  | Minutes of total smartphone use in the hour <br>prior to ESM measurement |  |  |  | Passive | smartphone use |  |
| communication_pre | Communication app use (pre) | numeric |  | Minutes of communication app use in the <br>hour prior to ESM measurement |  |  |  | Passive | smartphone use, communication, app use |  |
| social_media_pre | Social media app use (pre) | numeric |  | Minutes of social media app use in the hour <br>prior to ESM measurement |  |  |  | Passive | smartphone use, social media, app use |  |
| other_pre | Other app use (pre) | numeric |  | Minutes of other app use in the hour prior to <br>ESM measurement |  |  |  | Passive | smartphone use, app use |  |
| all_smartphone_post | Total smartphone use (post) | numeric |  | Minutes of total smartphone use in the hour <br>post ESM measurement |  |  |  | Passive | smartphone use |  |
| communication_post | Communication app use (post) | numeric |  | Minutes of communication app use in the <br>hour post ESM measurement |  |  |  | Passive | smartphone use, communication, app use |  |
| social_media_post | Social media app use (post) | numeric |  | Minutes of social media app use in the hour <br>post ESM measurement |  |  |  | Passive | smartphone use, social media, app use |  |
| other_post | Other app use (post) | numeric |  | Minutes of other app use in the hour post <br>ESM measurement |  |  |  | Passive | smartphone use, app use |  |

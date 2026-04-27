---
title: "Tammilehto (2022)"
date: 2026-04-27
draft: false
dataset_id: "0054_tammilehto"
first_author: "Tammilehto"
year: 2022
paper_doi: "https://doi.org/10.1080/02699931.2022.2081534"
zenodo_doi: "10.5281/zenodo.17361509"
license: "CC-BY 4.0"
n_participants: 122
n_time_points: 49
n_days: "7"
topics: "emotion regulation, attachment, neuroticism"
sampling_scheme: "7x/day semi-random intervals, scheduled in blocks"
participants: "undergraduate students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17361509">10.5281/zenodo.17361509</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0054_tammilehto")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0054_tammilehto")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Tammilehto</li>
<li><strong>Year:</strong> 2022</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1080/02699931.2022.2081534">https://doi.org/10.1080/02699931.2022.2081534</a></li>
<li><strong>Topics:</strong> emotion regulation, attachment, neuroticism</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 122 (undergraduate students)</li>
<li><strong>Time Points:</strong> 49</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 7</li>
<li><strong>Sampling Scheme:</strong> 7x/day semi-random intervals, scheduled in blocks</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17361509">10.5281/zenodo.17361509</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/e8423">https://osf.io/e8423</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/u59nd/files/">https://osf.io/u59nd/files/</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/u59nd/files/">https://osf.io/u59nd/files/</a></p>
</div>

## Additional Comments

no day and beep information available


## Citation

Tammilehto, J., Bosmans ,Guy, Kuppens ,Peter, Flykt ,Marjo, Peltonen ,Kirsi, Kerns ,Kathryn A., & Lindblom, J. (2022). Dynamics of attachment and emotion regulation in daily life: Uni- and bidirectional associations. Cognition and Emotion, 36(6), 1109–1131. https://doi.org/10.1080/02699931.2022.2081534




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  | not available |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | not available |  |  |  | ESM |  |  |
| discrete_time | Discrete time since study beginning | numeric | 92 | Discrete time (1 hour and 43 min blocks) | 1= first block<br>92 = last block |  |  | ESM |  |  |
| time_elapsed | Time elapsed | numeric |  | Time of receiving EMA questionnaires in hours from the<br>beginning of the study |  |  |  | ESM |  |  |
| reappraisal | Reappraisal | rating_scale | 5 | I thought about the situation in a more positive way |  |  |  | ESM | reappraisal, emotion regulation |  |
| rumination | Rumination | rating_scale | 5 | I thought over and over again about the negative situation and<br>feelings |  |  |  | ESM | rumination, emotion regulation |  |
| suppression | Suppression | rating_scale | 5 | I avoided showing my situation-elicited negative feelings |  |  |  | ESM | suppression, emotion regulation |  |
| feel_loved | Feeling loved | rating_scale | 7 | I feel loved |  |  | State Adult Attachment Measure | ESM | attachment security, attachment |  |
| rely_on | Rely on someone | rating_scale | 7 | I feel like I have someone to rely on |  |  | State Adult Attachment Measure | ESM | attachment security, attachment, social support |  |
| need_love | Need for love | rating_scale | 7 | I feel a strong need to be unconditionally loved right now |  |  | State Adult Attachment Measure | ESM | attachment anxiety, attachment, social needs |  |
| share_feelings | Wanting to share feelings | rating_scale | 7 | I want to share my feelings with someone |  |  | State Adult Attachment Measure | ESM | attachment anxiety, attachment, social needs |  |
| keep_distance | Keeping distance | rating_scale | 7 | If someone tried to get close to me, I would try to keep my<br>distance |  |  | State Adult Attachment Measure | ESM | attachment avoidance, attachment, social behavior |  |
| closeness_nervous | Emotional closeness makes nervous | rating_scale | 7 | The idea of being emotionally close to someone makes me<br>nervous |  |  | State Adult Attachment Measure | ESM | attachment avoidance, attachment, social anxiety |  |

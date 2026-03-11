---
title: "Merolla (2022)"
date: 2026-03-11
draft: false
dataset_id: "0061_merolla"
first_author: "Merolla"
year: 2022
paper_doi: "https://doi.org/10.1007/s10902-024-00710-5"
zenodo_doi: "10.5281/zenodo.17348441"
license: "CC BY-NC 4.0"
n_participants: 120
n_time_points: 60
n_days: "10"
topics: "responsiveness, social connection, hope, life satisfaction"
sampling_scheme: "6x/day random schedule"
participants: "undergraduate students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348441">10.5281/zenodo.17348441</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0061_merolla")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0061_merolla")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Merolla</li>
<li><strong>Year:</strong> 2022</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1007/s10902-024-00710-5">https://doi.org/10.1007/s10902-024-00710-5</a></li>
<li><strong>Topics:</strong> responsiveness, social connection, hope, life satisfaction</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 120 (undergraduate students)</li>
<li><strong>Time Points:</strong> 60</li>
<li><strong>Days:</strong> 10</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> 6x/day random schedule</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348441">10.5281/zenodo.17348441</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/nts94/">https://osf.io/nts94/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>

<p><strong>Code:</strong> <a href="https://osf.io/nts94">https://osf.io/nts94</a></p>
</div>

## Additional Comments

data collected as part of an intervention project


## Citation

Merolla, A. J., Neubauer, A. B., & Otmar, C. D. (2024). Responsiveness, social connection, hope, and life satisfaction in everyday social interaction: An experience sampling study. Journal of Happiness Studies, 25(1), 7. https://doi.org/10.1007/s10902-024-00710-5




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| time | Time of prompt | PosixCt |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| timestamp | Timestamp in Unix | numeric |  |  |  |  |  | ESM |  |  |
| has_data | Data provided | binary | 2 | Are data available for the timepoint? | FALSE/TRUE |  |  | ESM |  |  |
| first_prompt | First prompt time | numeric |  |  |  |  |  | ESM |  |  |
| time_since_first | Time since first prompt | numeric |  |  |  |  |  | ESM |  |  |
| relationship_level | Relationship level interaction partner | rating_scale | 7 | Nature of the participants' relationship to the person they were communicating with | 1 = No established relationship/stranger; 7 = established relationship |  |  | ESM | social interaction, relationship |  |
| cared_for | Feeling cared for | rating_scale | 7 | If participants were in a social interaction in the last 10 min. of the survey signal: Asked for the degree to which their interaction partner made them feel cared for | 1 = Not at all<br>5 = Extremely |  |  | ESM | responsiveness, social support, social connectedness |  |
| respected | Respected | rating_scale | 7 | If participants were in a social interaction in the last 10 min. of the survey signal: Asked for the degree to which their interaction partner made them feel respected | 1 = Not at all<br>5 = Extremely |  |  | ESM | respect, social support, responsiveness, social interaction |  |
| supported | Supported | rating_scale | 7 | If participants were in a social interaction in the last 10 min. of the survey signal: Asked for the degree to which their interaction partner made them feel supported | 1 = Not at all<br>5 = Extremely |  |  | ESM | social support, responsiveness, social interaction |  |
| connected | Connected | rating_scale | 7 | At this moment, how close and connected do you feel to other people? | 1 = no connection<br>7 = a great deal of connection |  |  | ESM | social connectedness |  |
| interaction_type | Interaction Type | categorical | 5 | Communication channel used for the interaction | Face-to-face, video calls, text messaging/SMS, voice-only phone calls, 0 (no interaction) |  |  | ESM | social interaction, media, communication |  |

---
title: "Mostajabi (2024)"
date: 2026-03-11
draft: false
dataset_id: "0044_mostajabi"
first_author: "Mostajabi"
year: 2024
paper_doi: "https://doi.org/10.31219/osf.io/3szng"
zenodo_doi: "10.5281/zenodo.17386028"
license: "CC BY-NC 4.0"
n_participants: 396
n_time_points: 42
n_days: "7"
topics: "personality, affect, personality disorder, interpersonal"
sampling_scheme: "unclear"
participants: "college students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17386028">10.5281/zenodo.17386028</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0044_mostajabi")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0044_mostajabi")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Mostajabi</li>
<li><strong>Year:</strong> 2024</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.31219/osf.io/3szng">https://doi.org/10.31219/osf.io/3szng</a></li>
<li><strong>Topics:</strong> personality, affect, personality disorder, interpersonal</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 396 (college students)</li>
<li><strong>Time Points:</strong> 42</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> unclear</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17386028">10.5281/zenodo.17386028</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/dcfb5">https://osf.io/dcfb5</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/dcfb5/files/agmcx">https://osf.io/dcfb5/files/agmcx</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/dcfb5">https://osf.io/dcfb5</a></p>
</div>

## Additional Comments

S3 in the paper; https://osf.io/7a5de provides a good overview of previous usage of data


## Citation

Mostajabi, J., & Wright, A. (2024, July 9). An exploratory study on disinhibition and interpersonal outcomes in daily life. https://doi.org/10.31219/osf.io/3szng




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| begin_day_ema | Day of prompt beginning | PosixCt |  |  |  |  |  | ESM |  |  |
| begin_time_ema | Time of Prompt beginning | PosixCt |  |  |  |  |  | ESM |  |  |
| finish_day_ema | Day of EMA finishing | PosixCt |  |  |  |  |  | ESM |  |  |
| finish_time_ema | Time of EMA finishing | PosixCt |  |  |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 | How happy do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | happiness, positive affect, affect |  |
| proud | Proud | rating_scale | 101 | How proud do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | pride, positive affect, affect |  |
| content | Content | rating_scale | 101 | How content do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | content, positive affect, affect |  |
| excited | Excited | rating_scale | 101 | How excited do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | excitement, positive affect, affect, extraversion, big five |  |
| relaxed | Relaxed | rating_scale | 101 | How relaxed do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| ashamed | Ashamed | rating_scale | 101 | How ashamed do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | shame, negative affect, affect |  |
| nervous | Nervous | rating_scale | 101 | How nervous do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| hostile | Hostile | rating_scale | 101 | How hostile do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | hostility, anger, negative affect, affect |  |
| sad | Sad | rating_scale | 101 | How sad do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | sadness, negative affect, affect |  |
| angry | Angry | rating_scale | 101 | How angry do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | anger, negative affect, affect |  |
| duration_ema | Duration of EMA | numeric |  | in seconds |  |  |  | ESM |  |  |
| interaction | Interaction occurence | binary | 2 | unclear coding, but likely: Did you have any social interactions since your last prompt? |  |  |  | ESM | social interaction |  |
| dom_sub_you | Dominance of interaction behavior | rating_scale | 101 | Please rate your behavior toward the other person during this interaction. | -50 = Accomodating/Submissive/Timid<br>50 = Assertive/Dominant/Controlling |  | Visual Interpersonal Analogue Scale (VIAS) | ESM | interpersonal dominance, social behavior, big five, extraversion |  |
| warm_cold_you | Warmth of interaction behavior | rating_scale | 101 | Please rate your behavior toward the other person during this interaction. | -50 = Cold/Distant/Hostile<br>50 = Warm/Friendly/Caring |  | Visual Interpersonal Analogue Scale (VIAS) | ESM | interpersonal affiliation, social behavior, big five, agreeableness |  |

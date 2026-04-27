---
title: "Mostajabi (2024)"
date: 2026-04-27
draft: false
dataset_id: "0042_mostajabi"
first_author: "Mostajabi"
year: 2024
paper_doi: "https://doi.org/10.31219/osf.io/3szng"
zenodo_doi: "10.5281/zenodo.17347765"
license: "CC BY-NC 4.0"
n_participants: 342
n_time_points: 70
n_days: "10"
topics: "personality, affect, personality disorder, interpersonal"
sampling_scheme: "random momentary prompts and scheduled daily diary"
participants: "community participants (excluding undergraduates)"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347765">10.5281/zenodo.17347765</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0042_mostajabi")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0042_mostajabi")</code></div>
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
<li><strong>Participants:</strong> 342 (community participants (excluding undergraduates))</li>
<li><strong>Time Points:</strong> 70</li>
<li><strong>Days:</strong> 10</li>
<li><strong>Beeps per Day:</strong> 7</li>
<li><strong>Sampling Scheme:</strong> random momentary prompts and scheduled daily diary</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347765">10.5281/zenodo.17347765</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/dcfb5/">https://osf.io/dcfb5/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/dcfb5/files/agmcx">https://osf.io/dcfb5/files/agmcx</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/dcfb5">https://osf.io/dcfb5</a></p>
</div>

## Additional Comments

S1 in the paper; no beep information available; some timestamp coding unclear; https://osf.io/7a5de provides a good overview of previous usage of data


## Citation

Mostajabi, J., & Wright, A. (2024, July 9). An exploratory study on disinhibition and interpersonal outcomes in daily life. https://doi.org/10.31219/osf.io/3szng



### Additional Reference

Vize, C., Scott, L., Wright, A., & Kamarck, T. (2023, February 15). Socio-affective dynamics of psychopathy in daily life. https://doi.org/10.31234/osf.io/m9nxz



## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  | NA |  |  |  | ESM |  |  |
| begin_day_ema | Day of prompt beginning | PosixCt |  |  |  |  |  | ESM |  |  |
| begin_time_ema | Time of Prompt beginning | PosixCt |  |  |  |  |  | ESM |  |  |
| finish_day_ema | Day of EMA finishing | PosixCt |  |  |  |  |  | ESM |  |  |
| finish_time_ema | Time of EMA finishing | PosixCt |  |  |  |  |  | ESM |  |  |
| begin_day_eod | unclear | PosixCt |  | unclear, likely beginning day of end-of-day survey |  |  |  | ESM |  |  |
| begin_time_eod | unclear | PosixCt |  | unclear, likely beginning time of end-of-day survey |  |  |  | ESM |  |  |
| finish_day_eod | unclear | PosixCt |  | unclear, likely finish day of end-of-day survey |  |  |  | ESM |  |  |
| finish_time_eod | unclear | PosixCt |  | unclear, likely finish time of end-of-day survey |  |  |  | ESM |  |  |
| duration_ema | Duration of EMA | numeric |  | in seconds |  |  |  | ESM |  |  |
| happy | Happy | rating_scale | 101 | How happy do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | happiness, positive affect, affect |  |
| ashamed | Ashamed | rating_scale | 101 | How ashamed do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | shame, negative affect, affect |  |
| proud | Proud | rating_scale | 101 | How proud do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | pride, positive affect, affect |  |
| nervous | Nervous | rating_scale | 101 | How nervous do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| confident | Confident | rating_scale | 101 | How confident do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | confidence, self-efficacy, positive affect, affect, big five, extraversion |  |
| hostile | Hostile | rating_scale | 101 | How hostile do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | hostility, anger, negative affect, affect |  |
| sad | Sad | rating_scale | 101 | How sad do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | sadness, negative affect, affect |  |
| excited | Excited | rating_scale | 101 | How excited do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | excitement, positive affect, affect, extraversion, big five |  |
| angry | Angry | rating_scale | 101 | How angry do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | anger, negative affect, affect |  |
| relaxed | Relaxed | rating_scale | 101 | How relaxed do you feel right now? | 0 = Not at all<br>100 = Extremely |  | PANAS | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| interaction | Interaction occurence | binary | 2 | unclear wording, but likely: Did you have any social interactions since your last prompt? | 0 = no<br>1 = yes |  |  | ESM | social interaction |  |
| dom_sub_you | Dominance of interaction behavior | rating_scale | 101 | Please rate your behavior toward the other person during this interaction. | 0 = Accomodating/Submissive/Timid<br>50 = Assertive/Dominant/Controlling |  | Visual Interpersonal Analogue Scale (VIAS) | ESM | interpersonal dominance, social behavior, big five, extraversion |  |
| warm_cold_you | Warmth of interaction behavior | rating_scale | 101 | Please rate your behavior toward the other person during this interaction. | 0 = Cold/Distant/Hostile<br>50 = Warm/Friendly/Caring |  | Visual Interpersonal Analogue Scale (VIAS) | ESM | interpersonal affiliation, social behavior, big five, agreeableness |  |
| happy_interaction | Happy during interaction | rating_scale | 101 | How happy did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | happiness, positive affect, affect, social interaction |  |
| nervous_interaction | Nervous during interaction | rating_scale | 101 | How nervous did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five, social interaction |  |
| sad_interaction | Sad during interaction | rating_scale | 101 | How sad did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | sadness, negative affect, affect, social interaction |  |
| excited_interaction | Excited during interaction | rating_scale | 101 | How excited did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | excitement, positive affect, affect, extraversion, big five, social interaction |  |
| angry_interaction | Angry during interaction | rating_scale | 101 | How angry did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | anger, negative affect, affect, social interaction |  |
| relaxed_interaction | Relaxed during interaction | rating_scale | 101 | How relaxed did you feel during the interaction? | 0 = Not at all<br>100 = Extremely |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five, social interaction |  |

---
title: "Blanke (2020)"
date: 2026-04-27
draft: false
dataset_id: "0059_blanke"
first_author: "Blanke"
year: 2020
paper_doi: "https://doi.org/10.1037/emo0000659"
zenodo_doi: "10.5281/zenodo.17347911"
license: "CC BY-NC 4.0"
n_participants: 70
n_time_points: 54
n_days: "9"
topics: "mindfulness, reflection, affect, well-being, emotion regulation"
sampling_scheme: "6x/day within self-selected 12hr timeframe"
participants: "students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347911">10.5281/zenodo.17347911</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0059_blanke")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0059_blanke")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Blanke</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1037/emo0000659">https://doi.org/10.1037/emo0000659</a></li>
<li><strong>Topics:</strong> mindfulness, reflection, affect, well-being, emotion regulation</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 70 (students)</li>
<li><strong>Time Points:</strong> 54</li>
<li><strong>Days:</strong> 9</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> 6x/day within self-selected 12hr timeframe</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347911">10.5281/zenodo.17347911</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/nvt6a/">https://osf.io/nvt6a/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/v2am8">https://osf.io/v2am8</a></p>

</div>

## Additional Comments

study 1 in the paper


## Citation

Blanke, E. S., Schmidt, M. J., Riediger, M., & Brose, A. (2020). Thinking mindfully: How mindfulness relates to rumination and reflection in daily life. Emotion, 20(8), 1369–1381. https://doi.org/10.1037/emo0000659




## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| miss_status | Missingness status | categorical | 4 | Missingness status of the beep | 0 = missing<br>1 = partial missing<br>2 = completed<br>3 = skipped |  |  | ESM |  |  |
| time | Timestamp | PosixCt | 4 | Beep time |  |  |  | ESM |  |  |
| attention_present | Present-moment attention | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I focused my attention on the present moment. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | acceptance, mindfulness, attention |  |
| opened_up | Open to what was happening | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I opened myself up to what was happening. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | acceptance, mindfulness |  |
| concentrated_present | Concentred on moment | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I concentrated on what I was doing at that moment. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | acceptance, mindfulness, concentration |  |
| nonjudgmental_feelings | Nonjudgmental acceptance of feelings | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I thought some of my thoughts/feelings were slightly off. (Reverse-coded) | 0 = Does not apply at all<br>6 = Applies strongly | Reverse-coded |  | ESM | acceptance, mindfulness |  |
| nonjudgmental_thoughts | Nonjudgmental acceptance of thoughts | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>Things went through my mind that I should not really be engaging myself with. (Reverse-coded) | 0 = Does not apply at all<br>6 = Applies strongly | Reverse-coded |  | ESM | acceptance, mindfulness |  |
| nonjudgmental_behavior | Nondjudgmental acceptance of behahviors | rating_scale | 7 | Please recall the period since the last measurement/since you woke up: How did you behave, what did you think and feel? That is what the following questions are about.<br>I thought I could have acted more appropriately at a certain time.  (Reverse-coded) | 0 = Does not apply at all<br>6 = Applies strongly | Reverse-coded |  | ESM | acceptance, mindfulness |  |
| happy | Happy | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Happy? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | happiness, positive affect, affect |  |
| content | Content | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Content? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | content, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Relaxed? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| downhearted | Downhearted | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Downhearted? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | negative affect, affect |  |
| distressed | Distressed | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Distressed? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | distress, negative affect, affect |  |
| nervous | Nervous | rating_scale | 7 | How did you feel since waking up/ since the last beep? Please indicate how well the following affective items describe your feelings during this time.<br>Nervous? | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| ruminate_feelings | Rumination about feelings | rating_scale | 7 | How well do the following statements describe how you handled your thoughts and feelings since waking up/ since the last beep?<br>I could not stop thinking about my feelings. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | rumination, emotion regulation |  |
| ruminate_things | Rumination about things | rating_scale | 7 | How well do the following statements describe how you handled your thoughts and feelings since waking up/ since the last beep?<br>I could not stop thinking about certain things. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | rumination, emotion regulation |  |
| relaxed_thoughts_feelings | Relaxed thoughts about feelings | rating_scale | 7 | How well do the following statements describe how you handled your thoughts and feelings since waking up/ since the last beep?<br>I thought about my feelings in a calm and relaxed fashion. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | reflection, emotion regulation |  |
| relaxed_thoughts_things | Relaxed thoghts about things | rating_scale | 7 | How well do the following statements describe how you handled your thoughts and feelings since waking up/ since the last beep?<br>I thought about certain things in a calm and relaxed fashion. | 0 = Does not apply at all<br>6 = Applies strongly |  |  | ESM | reflection, emotion regulation |  |

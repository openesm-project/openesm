---
title: "Gainey (2023)"
date: 2026-04-27
draft: false
dataset_id: "0058_gainey"
first_author: "Gainey"
year: 2023
paper_doi: "https://doi.org/10.1177/21677026221147262"
zenodo_doi: "10.5281/zenodo.17348369"
license: "CC BY-NC 4.0"
n_participants: 356
n_time_points: 42
n_days: "7"
topics: "awareness, mindfulness, emotion, cognitive fusion, well-being"
sampling_scheme: "6x/day pseudo-random intervals with minimum interval between prompts"
participants: "adults, oversampled for people in treatment or seeking treatment"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348369">10.5281/zenodo.17348369</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0058_gainey")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0058_gainey")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Gainey</li>
<li><strong>Year:</strong> 2023</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1177/21677026221147262">https://doi.org/10.1177/21677026221147262</a></li>
<li><strong>Topics:</strong> awareness, mindfulness, emotion, cognitive fusion, well-being</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 356 (adults, oversampled for people in treatment or seeking treatment)</li>
<li><strong>Time Points:</strong> 42</li>
<li><strong>Days:</strong> 7</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> 6x/day pseudo-random intervals with minimum interval between prompts</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348369">10.5281/zenodo.17348369</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/gct7x/">https://osf.io/gct7x/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/gct7x">https://osf.io/gct7x</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/gct7x/files/osfstorage">https://osf.io/gct7x/files/osfstorage</a></p>
</div>

## Additional Comments

11 participants participated in baseline but not ESM


## Citation

Naragon-Gainey, K., DeMarree, K. G., Kyron, M. J., McMahon, T. P., Park, J., & Biehler, K. M. (2023). Decentering from emotions in daily life: Dynamic associations with affect, symptoms, and well-being. Clinical Psychological Science, 11(5), 841–862. https://doi.org/10.1177/21677026221147262




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| counter_all | Counter of all participants | numeric |  |  |  |  |  | ESM |  |  |
| time_since_start | Time since first survey | numeric |  |  |  |  |  | ESM |  |  |
| active | Active | rating_scale | 5 | Recently, I have felt active | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | active, energy, positive affect, affect, big five, extraversion |  |
| interested | Interested | rating_scale | 5 | Recently, I have felt interested | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | interest, positive affect, affect, big five, openness |  |
| excited | Excited | rating_scale | 5 | Recently, I have felt excited | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | excitement, positive affect, affect, extraversion, big five |  |
| strong | Strong | rating_scale | 5 | Recently, I have felt strong | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | strength, positive affect, affect |  |
| irritable | Irritable | rating_scale | 5 | Recently, I have felt irritable | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | irritability, negative affect, affect, neuroticism, big five |  |
| upset | Upset | rating_scale | 5 | Recently, I have felt upset | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | upset, negative affect, affect, neuroticism, big five |  |
| afraid_anxious | Afraid/anxious | rating_scale | 5 | Recently, I have felt afraid or anxoius | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | fear, anxiety, negative affect, affect |  |
| sad | Sad | rating_scale | 5 | Recently, I have felt sad | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | sadness, negative affect, affect |  |
| meaning | Meaning in life | rating_scale | 5 | How much meaning have you felt in your life recently? | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | meaning, well-being |  |
| vitality | Vitality | rating_scale | 5 | To what extent have you felt alive and vital recently? | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | vitality, well-being, positive affect, affect |  |
| observe_thoughts_feelings | Observe thoughts/feelings | rating_scale | 5 | Recently, I have been able to observe my thoughts and feelings without being drawn<br>in. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | decentering, mindfulness, emotion regulation |  |
| struggled_thoughts_feelings | Struggle with thoughts/feelings | rating_scale | 5 | Recently, I have struggled with my thoughts and feelings. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | emotion regulation, decentering |  |
| detached_thoughts_feelings | Thoughts/feelings separate from self | rating_scale | 5 | Recently, I have experienced my thoughts and feelings as separate from myself. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | decentering, mindfulness, emotion regulation |  |
| caught_up_thoughts | Caught up with thoughts/feelings | rating_scale | 5 | Recently, I have been caught up in my thoughts. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | cognitive fusion, emotion regulation, rumination |  |
| mindful | Mindful | rating_scale | 5 | Recently, I have been focused on what was happening in the present moment. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | mindfulness, attention |  |
| meta_aware | Meta-awareness | rating_scale | 5 | Recently, I have noticed my feelings and thoughts. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | emotion regulation, awareness |  |
| reappraisal | Reappraisal | rating_scale | 5 | Recently, I  changed the way I thought about what caused my feelings. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | reappraisal, emotion regulation |  |
| distract | Distract | rating_scale | 5 | Recently, I did something or thought about something to distract myself from my<br>feelings. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | distraction, emotion regulation |  |
| brooding | Brooding | rating_scale | 5 | Recently, I kept thinking about the causes or consequences of my negative feelings,<br>how bad I felt. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | rumination, emotion-focused reflection |  |
| savoring | Savoring | rating_scale | 5 | Recently, I kept thinking about how happy and strong I felt. | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | well-being |  |
| resist_temptation | Resist temptation | rating_scale | 5 | Recently, how much willpower have you had to resist temptations? | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | self-control, willpower, big five, conscientiousness |  |
| getting_done | Getting things done | rating_scale | 5 | Recently, how much willpower have you had to get things done? | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | self-control, willpower, big five, conscientiousness |  |
| mental_exhaust | Mentally exhausted | rating_scale | 5 | How mentally exhausted have you been recently? | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | self-control, willpower, fatigue |  |
| symptom_experience | Idiosyncractic symptom experience | rating_scale | 5 | To what extent have you experienced [insert personal major concern that was predefined by the participant] recently? | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | worry, personal concern |  |
| symptom_interfere | Idiosyncractic symptom interference | rating_scale | 5 | To what extent has [insert personal major concern that was predefined by the participant] interfered with your ability to accomplish things recently? | 1 = very slightly or not at all<br>2 = a little<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | functional impairment, daily functioning |  |
| depressed | Depressed | rating_scale | 5 | To what extent does each statement describe how you have felt recently? I felt depressed | 1 = not at all<br>2 = a little bit<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| anhedonia | Anhedonia | rating_scale | 5 | To what extent does each statement describe how you have felt recently? I had little interest in my usual hobbies and activities | 1 = not at all<br>2 = a little bit<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | anhedonia, depression, psychopathology |  |
| inadequate | Feeling inadequate | rating_scale | 5 | To what extent does each statement describe how you have felt recently? I felt inadequate | 1 = not at all<br>2 = a little bit<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | dysphoria, self-esteem, big five, neuroticism |  |
| discouraged | Discouraged | rating_scale | 5 | To what extent does each statement describe how you have felt recently? I felt discouraged about things | 1 = not at all<br>2 = a little bit<br>3 = moderately<br>4 = quite a bit<br>5 = extremely |  |  | ESM | dysphoria, negative affect, affect |  |

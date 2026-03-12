---
title: "Reeves (2020)"
date: 2026-03-12
draft: false
dataset_id: "0034_reeves"
first_author: "Reeves"
year: 2020
paper_doi: "https://doi.org/10.1002/jts.22491"
zenodo_doi: "10.5281/zenodo.17348019"
license: "CC BY-NC 4.0"
n_participants: 20
n_time_points: 168
n_days: "43"
topics: "PTSD, emotions, sleep, physical symptoms"
sampling_scheme: "4x/day fixed schedule"
participants: "participants with PTSD"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348019">10.5281/zenodo.17348019</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0034_reeves")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0034_reeves")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Reeves</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1002/jts.22491">https://doi.org/10.1002/jts.22491</a></li>
<li><strong>Topics:</strong> PTSD, emotions, sleep, physical symptoms</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 20 (participants with PTSD)</li>
<li><strong>Time Points:</strong> 168</li>
<li><strong>Days:</strong> 43</li>
<li><strong>Beeps per Day:</strong> 4</li>
<li><strong>Sampling Scheme:</strong> 4x/day fixed schedule</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> unclear</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348019">10.5281/zenodo.17348019</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/6vxhf/">https://osf.io/6vxhf/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/juksb">https://osf.io/juksb</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/gv37j">https://osf.io/gv37j</a></p>
</div>

## Additional Comments

no beep information available; number of max. observations and days taken from maximum observations in data


## Citation

Reeves, J. W., & Fisher, A. J. (2020). An examination of idiographic networks of posttraumatic stress disorder symptoms. Journal of Traumatic Stress, 33(1), 84–95. https://doi.org/10.1002/jts.22491




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| felt_enthusiastic | Enthusiastic | rating_scale | 101 | Felt enthusiastic | 0 = not at all<br>100 = as much as possible |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| hypervigilant | Hypervigilant | rating_scale | 101 | Felt extremely alert, watchful, or on guard | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | hypervigilance, PTSD, psychopathology |  |
| aggressive | Aggressive | rating_scale | 101 | Felt irritable, had angry outbursts, or acted aggressively | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | irritability, aggressivity, PTSD, psychopathology |  |
| afraid | Afraid | rating_scale | 101 | Felt afraid | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | fear, negative affect, affect, neuroticism, big five, PTSD, psychopathology |  |
| neg_thoughts_self | Negative thoughts about self | rating_scale | 101 | Had strong negative thoughts about yourself | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | self-concept, PTSD, psychopathology |  |
| avoidance | Avoidance | rating_scale | 101 | Avoided thoughts and/or feelings related to the traumatic event | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | avoidance, PTSD, psychopathology |  |
| reliving | Reliving | rating_scale | 101 | Felt like you were reliving the traumatic event | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | re-experiencing, PTSD, psychopathology |  |
| unpleasant_dreams | Unpleasant dreams | rating_scale | 101 | Had unpleasant dreams about the trauamtic event | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | Daily | nightmare, PTSD, psychopathology |  |
| intrusions | Intrusions | rating_scale | 101 | Had stressful, unwanted memories of the traumatic event | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | intrusions, PTSD, psychopathology |  |
| sleep_duration | Sleep duration | numeric |  | Total sleep time from previous night in hours |  |  |  | Daily | sleep duration, sleep |  |
| restless_sleep | Restless sleep | rating_scale | 101 | Experienced restless or unsatisfying sleep | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | Daily | sleep difficulty, sleep quality, sleep, PTSD, psychopathology |  |
| sleep_troubles | Sleep troubles | rating_scale | 101 | Had trouble falling or staying asleep | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | Daily | sleep difficulty, sleep quality, sleep, PTSD, psychopathology |  |
| horrified | Horrified | rating_scale | 101 | Felt horrified | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | horror, PTSD, psychopathology |  |
| angry | Angry | rating_scale | 101 | Felt angry | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | anger, negative affect, affect, PTSD, psychopathology |  |
| guilty | Guilty | rating_scale | 101 | Felt guilty | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | guilt, negative affect, affect, PTSD, psychopathology |  |
| ashamed | Ashamed | rating_scale | 101 | Felt ashamed | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | shame, negative affect, affect, PTSD, psychopathology |  |
| neg_thoughts_others | Negative thoughts about others | rating_scale | 101 | Had strong negative thoughts about others | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | social cognition, PTSD, psychopathology |  |
| neg_thoughts_world | Negative thoughts about world | rating_scale | 101 | Had strong negative thoughts about the world | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | social cognition, PTSD, psychopathology |  |
| self_blame | Blame self | rating_scale | 101 | Blamed yourself for the traumatic event or its consequences | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | blame, PTSD, psychopathology |  |
| others_blame | Blame others | rating_scale | 101 | Blamed others for the traumatic event or its consequences | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | blame, PTSD, psychopathology |  |
| avoid_places | Avoid places | rating_scale | 101 | Avoided places related to the traumatic event | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | avoidance, PTSD, psychopathology |  |
| upset | Upset | rating_scale | 101 | Felt upset when reminded of the traumatic event | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | upset, negative affect, affect, PTSD, psychopathology |  |
| physical_reactions | Physical reactions | rating_scale | 101 | Had physical reactions when reminded of the traumatic event | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | physical symptom, PTSD, psychopathology |  |
| amnesia | Amnesia | rating_scale | 101 | Had difficulty remembering the details of the traumatic event | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | memory, PTSD, psychopathology |  |
| anhedonia | Anhedonia | rating_scale | 101 | Felt less interested or participated less in your usual activities | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | anhedonia, depression, psychopathology |  |
| distant | Distant | rating_scale | 101 | Felt distant or cut off from others | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | numbing, PTSD, psychopathology |  |
| difficulty_positive | Difficulty feeling positive | rating_scale | 101 | Had difficulty feeling positive | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | anhedonia, depression, PTSD, psychopathology |  |
| reckless | Reckless | rating_scale | 101 | Acted reckless or self-destructive | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | recklessness, PTSD, psychopathology |  |
| startled | Easily startled | rating_scale | 101 | Felt jumpy or easily startled | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | anxiety, PTSD, psychopathology |  |
| difficulty_concentrating | Concentration difficulties | rating_scale | 101 | Had difficulty concentrating | 0 = not at all<br>100 = as much as possible |  | PCL-5 (Blevins et al.,2015) | ESM | concentration, executive functioning, attention, PTSD, psychopathology |  |
| sleepy | Sleepy | rating_scale | 101 | Felt sleepy | 0 = not at all<br>100 = as much as possible |  |  | ESM | fatigue, negative affect, affect |  |
| positive | Positive | rating_scale | 101 | Felt positive | 0 = not at all<br>100 = as much as possible |  |  | ESM | positive affect, affect |  |
| happy | Happy | rating_scale | 101 | Felt happy | 0 = not at all<br>100 = as much as possible |  |  | ESM | happiness, positive affect, affect |  |
| content | Content | rating_scale | 101 | Felt content | 0 = not at all<br>100 = as much as possible |  |  | ESM | content, positive affect, affect |  |
| calm | Calm | rating_scale | 101 | Felt calm | 0 = not at all<br>100 = as much as possible |  |  | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| fatigued | Fatigued | rating_scale | 101 | Felt fatigued | 0 = not at all<br>100 = as much as possible |  |  | ESM | fatigue, negative affect, affect |  |
| muscle_tension | Muscle tension | rating_scale | 101 | Not reported | 0 = not at all<br>100 = as much as possible |  |  | ESM | tensioned muscles, motor symptoms, parkinson disease |  |

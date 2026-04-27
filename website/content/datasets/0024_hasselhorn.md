---
title: "Hasselhorn (2021)"
date: 2026-04-27
draft: false
dataset_id: "0024_hasselhorn"
first_author: "Hasselhorn"
year: 2021
paper_doi: "https://doi.org/10.3758/s13428-021-01683-6"
zenodo_doi: "10.5281/zenodo.17347856"
license: "CC BY-NC 4.0"
n_participants: 313
n_time_points: 84
n_days: "14"
topics: "sampling frequency, affect, compliance, extraversion, perceived burden"
sampling_scheme: "9x/day or 3x/day subject-specific schedule"
participants: "university students"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347856">10.5281/zenodo.17347856</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0024_hasselhorn")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0024_hasselhorn")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Hasselhorn</li>
<li><strong>Year:</strong> 2021</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.3758/s13428-021-01683-6">https://doi.org/10.3758/s13428-021-01683-6</a></li>
<li><strong>Topics:</strong> sampling frequency, affect, compliance, extraversion, perceived burden</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 313 (university students)</li>
<li><strong>Time Points:</strong> 84</li>
<li><strong>Days:</strong> 14</li>
<li><strong>Beeps per Day:</strong> 3 or 9</li>
<li><strong>Sampling Scheme:</strong> 9x/day or 3x/day subject-specific schedule</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> unclear</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347856">10.5281/zenodo.17347856</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/vw3gf/?view_only=b6f9f08a6b5941eb9c17a4951d1d0cd2;">https://osf.io/vw3gf/?view_only=b6f9f08a6b5941eb9c17a4951d1d0cd2;</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/ze9wn">https://osf.io/ze9wn</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/vw3gf/?view_only=b6f9f08a6b5941eb9c17a4951d1d0cd2;">https://osf.io/vw3gf/?view_only=b6f9f08a6b5941eb9c17a4951d1d0cd2;</a></p>
</div>

## Additional Comments

no beep information available; study 1 of the cited paper; two ESM phases with different number of questionnaires per day; maximum number of observations for both study phases


## Citation

Hasselhorn, K., Ottenstein, C., & Lischetzke, T. (2022). The effects of assessment intensity on participant burden, compliance, within-person variance, and within-person relationships in ambulatory assessment. Behavior Research Methods, 54(4), 1541–1558. https://doi.org/10.3758/s13428-021-01683-6




## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| treatment | Beep treatment | categorical | 2 |  |  |  |  | ESM |  |  |
| week | Week of the study | numeric | 2 |  |  |  |  | ESM |  |  |
| burden_high | High burden | binary | 2 |  |  |  |  | ESM |  |  |
| compliance | Compliance | binary | 2 |  |  |  |  | ESM |  |  |
| form | Questionnaire type | categorical |  |  |  |  |  | ESM |  |  |
| missing | Missingness reason | categorical |  |  |  |  |  | ESM |  |  |
| well | Well | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very unwell<br>7 = very well |  | the Multidimensional Mood State Questionnaire (MDBF) | ESM | positive affect, affect |  |
| awake | Awake | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very tired<br>7 = very awake |  | the Multidimensional Mood State Questionnaire (MDBF) | ESM | alertness, energy, positive affect, affect |  |
| relaxed | Relaxed | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very tense<br>7 = very relaxed |  | the Multidimensional Mood State Questionnaire (MDBF) | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| good | Good | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very bad<br>7 = very good<br><br>(originally reverse-coded) |  | the Multidimensional Mood State Questionnaire (MDBF) | ESM | positive affect, affect |  |
| rested | Rested | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very sleepy<br>7 = very rested<br><br>(originally reverse-coded) |  | the Multidimensional Mood State Questionnaire (MDBF) | ESM | feeling rested, fatigue, positive affect, affect |  |
| pleased | Pleased | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very unpleased<br>7 = very pleased |  | the Multidimensional Mood State Questionnaire (MDBF) | ESM | pleased, positive affect, affect |  |
| calm | Calm | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very restless<br>7 = very calm<br><br>(originally reverse-coded) |  | the Multidimensional Mood State Questionnaire (MDBF) | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| happy | Happy | rating_scale | 7 | How do you feel at this moment? I feel... | 1 = very unhappy<br>7 = very happy<br><br>(originally reverse-coded) |  | the Multidimensional Mood State Questionnaire (MDBF) | ESM | happiness, positive affect, affect |  |
| organized | Organized | rating_scale | 7 | How did you behave in the last 30 minutes? If the listed behaviours do not apply choose the "not applicable" option | 1 = Very disorganized/unsystematic<br>7 = Very organized/systematic |  | adapted version based on McCabe, K. O., & Fleeson, W. (2016). Are traits useful? Explaining trait manifestations as tools in the pursuit of goals. Journal of Personality and Social Psychology, 110(2), 287–301. doi: 10.1037/a0039490 | ESM | organized, conscientiousness, big five |  |
| talkative | Talkative | rating_scale | 7 | How did you behave in the last 30 minutes? If the listed behaviours do not apply choose the "not applicable" option | 1 = Very quiet<br>7 = Very talkative<br><br>(originally reverse-coded) |  | adapted version based on McCabe, K. O., & Fleeson, W. (2016). Are traits useful? Explaining trait manifestations as tools in the pursuit of goals. Journal of Personality and Social Psychology, 110(2), 287–301. doi: 10.1037/a0039490 | ESM | talkativeness, social behavior, extraversion, big five |  |
| persistent | Persistent | rating_scale | 7 | How did you behave in the last 30 minutes? If the listed behaviours do not apply choose the "not applicable" option | 1 = Very lazy<br>7 = Very persistent/purposeful |  | adapted version based on McCabe, K. O., & Fleeson, W. (2016). Are traits useful? Explaining trait manifestations as tools in the pursuit of goals. Journal of Personality and Social Psychology, 110(2), 287–301. doi: 10.1037/a0039490 | ESM | goal pursuit, conscientiousness, big five |  |
| outgoing | Outgoing | rating_scale | 7 | How did you behave in the last 30 minutes? If the listed behaviours do not apply choose the "not applicable" option | 1 = Very unsociable<br>7 = Very outgoing<br><br>(originally reverse-coded) |  | adapted version based on McCabe, K. O., & Fleeson, W. (2016). Are traits useful? Explaining trait manifestations as tools in the pursuit of goals. Journal of Personality and Social Psychology, 110(2), 287–301. doi: 10.1037/a0039490 | ESM | social behavior, extraversion, big five |  |
| assertive | Assertive | rating_scale | 7 | How did you behave in the last 30 minutes? If the listed behaviours do not apply choose the "not applicable" option | 1 = Very unassertive<br>7 = Very assertive |  | adapted version based on McCabe, K. O., & Fleeson, W. (2016). Are traits useful? Explaining trait manifestations as tools in the pursuit of goals. Journal of Personality and Social Psychology, 110(2), 287–301. doi: 10.1037/a0039490 | ESM | assertive, social behavior,  extraversion, big five |  |
| study_burden | Perceived study burden | rating_scale | 5 | How much of a burden was it to participate in the study today? | 1 = not at all<br>5 = very much |  | cf. Stone, A. A., Broderick, J. E., Schwartz, J. E., Shiffman, S., Litcher-Kelly, L., & Calvanese, P. (2003). Intensive momentary reporting of pain with an electronic diary: Reactivity, compliance, and patient satisfaction: Pain, 104(1), 343–351. doi: 10.1016/S0304-3959(03)00040-X (table 3) - adapted time span | ESM | study burden, participant burden |  |
| study_interfere | Study interference | rating_scale | 5 | How much did participating in the study interfere with your usual activities? | 1 = not at all<br>5 = very much |  | cf. Stone, A. A., Broderick, J. E., Schwartz, J. E., Shiffman, S., Litcher-Kelly, L., & Calvanese, P. (2003). Intensive momentary reporting of pain with an electronic diary: Reactivity, compliance, and patient satisfaction: Pain, 104(1), 343–351. doi: 10.1016/S0304-3959(03)00040-X (table 3) - adapted time span | ESM | study burden, participant burden |  |
| study_annoy | Study annoyance | rating_scale | 5 | How much were you annoyed with the number of times beeped per day? | 1 = not at all<br>5 = very much |  | cf. Stone, A. A., Broderick, J. E., Schwartz, J. E., Shiffman, S., Litcher-Kelly, L., & Calvanese, P. (2003). Intensive momentary reporting of pain with an electronic diary: Reactivity, compliance, and patient satisfaction: Pain, 104(1), 343–351. doi: 10.1016/S0304-3959(03)00040-X (table 3) - adapted time span | ESM | study burden, participant burden |  |
| report_easy | Easiness of mood reporting | rating_scale | 7 | How easy or difficult was it for you to report your momentary mood? | 1 = very difficult<br>7 = very easy |  |  | ESM | emotional clarity, introspective ability, metacognitive awareness |  |
| report_sure | Certainty of mood reporting | rating_scale | 7 | How sure or unsure were you regading your reports of your momentary mood? | 1 = very unsure<br>7 = very sure<br><br>(originally reverse-coded) |  |  | ESM | emotional clarity, introspective ability, metacognitive awareness |  |
| rt_mdbf5_8 | Reaction time last four mood items | numeric |  |  |  |  |  | ESM | reaction time |  |
| rt_pers1_3 | Reaction time first three personality items | numeric |  |  |  |  |  | ESM | reaction time |  |
| rt_pers4_5 | Reaction time last two personality items | numeric |  |  |  |  |  | ESM | reaction time |  |

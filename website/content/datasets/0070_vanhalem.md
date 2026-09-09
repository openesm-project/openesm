---
title: "van Halem (2020)"
date: 2026-09-09
draft: false
dataset_id: "0070_vanhalem"
first_author: "van Halem"
year: 2020
paper_doi: "https://doi.org/10.1002/per.2252"
zenodo_doi: "10.5281/zenodo.17348032"
license: "CC BY-NC 4.0"
n_participants: 82
n_time_points: 69
n_days: "5"
topics: "skin conductance, affect, arousal, situation"
sampling_scheme: "random triggers and triggers based on skin conductance"
participants: "first-year psychology students in Tilburg"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348032">10.5281/zenodo.17348032</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0070_vanhalem")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0070_vanhalem")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> van Halem</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1002/per.2252">https://doi.org/10.1002/per.2252</a></li>
<li><strong>Topics:</strong> skin conductance, affect, arousal, situation</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 82 (first-year psychology students in Tilburg)</li>
<li><strong>Time Points:</strong> 69</li>
<li><strong>Days:</strong> 5</li>
<li><strong>Beeps per Day:</strong> partially event-contingent</li>
<li><strong>Sampling Scheme:</strong> random triggers and triggers based on skin conductance</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

<div class="dataset-meta-card">
<h2>Data Availability</h2>
<ul>
<li><strong>Cross-sectional Data:</strong> yes</li>
<li><strong>Passive Sensor Data:</strong> yes</li>
<li><strong>License:</strong> CC BY-NC 4.0</li>
</ul>
<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348032">10.5281/zenodo.17348032</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/v4qh9/">https://osf.io/v4qh9/</a> <span class="dataset-link-note">(not harmonized, for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/v8sa7">https://osf.io/v8sa7</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/v4qh9/">https://osf.io/v4qh9/</a></p>
</div>
</div>

## Additional Comments

more raw sensor data available on OSF; questions originally in Dutch


## Citation

van Halem, S., van Roekel, E., Kroencke, L., Kuper, N., & Denissen, J. (2020). Moments that matter? On the complexity of using triggers based on skin conductance to sample arousing events within an experience sampling framework. European Journal of Personality, 34(5), 794–807. https://doi.org/10.1002/per.2252




## Changelog

- **2026-09-03** (2.0.0) *data change*: Remove some open text data.
- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

<p class="dataset-note">Linked variable names point to item-level distributional statistics on the <a href="{{< relref "/descriptives/" >}}">Descriptives</a> page.</p>

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |
| trigger | Survey trigger type | other |  | Contains information about random trigger type or on reason why the EDA algorithm triggered the survey |  |  |  | ESM |  |  |
| trigger_date | Survey trigger date | PosixCt |  |  |  |  |  | ESM |  |  |
| trigger_time | Survey trigger time | PosixCt |  |  |  |  |  | ESM |  |  |
| form | Type of form | categorical |  |  | Missing<br>ESM_Questions<br>End-Of-Day Questionnaire |  |  | ESM |  |  |
| form_start_date | Form start date | PosixCt |  |  |  |  |  | ESM |  |  |
| form_start_time | Form start time | PosixCt |  |  |  |  |  | ESM |  |  |
| form_finish_date | Form finish date | PosixCt |  |  |  |  |  | ESM |  |  |
| form_finish_time | Form finish time | PosixCt |  |  |  |  |  | ESM |  |  |
| form_upload_date | Form upload date | PosixCt |  |  |  |  |  | ESM |  |  |
| form_upload_time | Form upload time | PosixCt |  |  |  |  |  | ESM |  |  |
| missing | Missing form | categorical |  | Reason for missing form | NA<br>Ignored<br>Dismissed<br>Incomplete<br>Canceled_by_new_alarm |  |  | ESM |  |  |
| company | Company | numeric |  | I am... | 0 = alone<br>1 = friends<br>2 = partner<br>3 = family<br>3a = father<br>3b = mother<br>3c = brother(s)/sister(s)<br>3d = other family<br>4 = housemates-who are not family<br>5 = fellow students or colleagues<br>6 = strangers<br>7 = teammates<br>8 = other, namely |  |  | ESM | social interaction, context |  |
| [pleasant]({{< relref "/descriptives/" >}}?dataset=0070&item=pleasant) | Pleasant | rating_scale | 101 | This was unpleasant/pleasant |  |  |  | ESM | situational appraisal, context | referring to the event |
| [important]({{< relref "/descriptives/" >}}?dataset=0070&item=important) | Important | rating_scale | 101 | This was unimportant/important |  |  |  | ESM | situational appraisal, context | referring to the event |
| [expected]({{< relref "/descriptives/" >}}?dataset=0070&item=expected) | Expected | rating_scale | 101 | This was unexpected/expected |  |  |  | ESM | situational appraisal, context | referring to the event |
| [aroused]({{< relref "/descriptives/" >}}?dataset=0070&item=aroused) | Aroused | rating_scale | 101 | I now feel (just before the beep went off)... aroused |  |  |  | ESM | arousal |  |
| [enthusiastic]({{< relref "/descriptives/" >}}?dataset=0070&item=enthusiastic) | Enthusiastic | rating_scale | 101 | I now feel (just before the beep went off)... enthusiastic |  |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| [relaxed]({{< relref "/descriptives/" >}}?dataset=0070&item=relaxed) | Relaxed | rating_scale | 101 | I now feel (just before the beep went off)... relaxed |  |  |  | ESM | relaxation, positive affect, affect, neuroticism, big five |  |
| [satisfied]({{< relref "/descriptives/" >}}?dataset=0070&item=satisfied) | Satisfied | rating_scale | 101 | I now feel (just before the beep went off)... satisfied |  |  |  | ESM | satisfaction, positive affect, affect |  |
| [irritable]({{< relref "/descriptives/" >}}?dataset=0070&item=irritable) | Irritable | rating_scale | 101 | I now feel (just before the beep went off)... irritable |  |  |  | ESM | irritability, negative affect, affect, neuroticism, big five |  |
| [energetic]({{< relref "/descriptives/" >}}?dataset=0070&item=energetic) | Energetic | rating_scale | 101 | I now feel (just before the beep went off)... energetic |  |  |  | ESM | energy, positive affect, affect, big five, extraversion |  |
| [calm]({{< relref "/descriptives/" >}}?dataset=0070&item=calm) | Calm | rating_scale | 101 | I now feel (just before the beep went off)... calm |  |  |  | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| [cheerful]({{< relref "/descriptives/" >}}?dataset=0070&item=cheerful) | Cheerful | rating_scale | 101 | I now feel (just before the beep went off)... cheerful |  |  |  | ESM | cheerfulness, positive affect, affect |  |
| [irritated]({{< relref "/descriptives/" >}}?dataset=0070&item=irritated) | Irritated | rating_scale | 101 | I now feel (just before the beep went off)... irritated |  |  |  | ESM | irritability, anxiety, negative affect, affect |  |
| [bored]({{< relref "/descriptives/" >}}?dataset=0070&item=bored) | Bored | rating_scale | 101 | I now feel (just before the beep went off)... irritated |  |  |  | ESM | boredom, negative affect, affect |  |
| [nervous]({{< relref "/descriptives/" >}}?dataset=0070&item=nervous) | Nervous | rating_scale | 101 | I now feel (just before the beep went off)... nervous |  |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| [sad]({{< relref "/descriptives/" >}}?dataset=0070&item=sad) | Sad | rating_scale | 101 | I now feel (just before the beep went off)... sad |  |  |  | ESM | sadness, negative affect, affect |  |
| [angry]({{< relref "/descriptives/" >}}?dataset=0070&item=angry) | Angry | rating_scale | 101 | I now feel (just before the beep went off)... angry |  |  |  | ESM | anger, negative affect, affect |  |
| [gloomy]({{< relref "/descriptives/" >}}?dataset=0070&item=gloomy) | Gloomy | rating_scale | 101 | I now feel (just before the beep went off)... gloomy |  |  |  | ESM | gloominess, negative affect, affect |  |
| [lifeless]({{< relref "/descriptives/" >}}?dataset=0070&item=lifeless) | Lifeless | rating_scale | 101 | I now feel (just before the beep went off)... lifeless |  |  |  | ESM | low energy, negative affect, affect |  |
| [insecure]({{< relref "/descriptives/" >}}?dataset=0070&item=insecure) | Insecure | rating_scale | 101 | I now feel (just before the beep went off)... insecure |  |  |  | ESM | insecurity, negative affect, affect, neuroticism, big five |  |
| [fearful]({{< relref "/descriptives/" >}}?dataset=0070&item=fearful) | Fearful | rating_scale | 101 | I now feel (just before the beep went off)... fearful |  |  |  | ESM | fearfulness, negative affect, affect, neuroticism, big five |  |
| [happy]({{< relref "/descriptives/" >}}?dataset=0070&item=happy) | Happy | rating_scale | 101 | I now feel (just before the beep went off)... happy |  |  |  | ESM | happiness, positive affect, affect |  |
| [worried]({{< relref "/descriptives/" >}}?dataset=0070&item=worried) | Worried | rating_scale | 101 | I now feel (just before the beep went off)... worried |  |  |  | ESM | worry, anxiety, negative affect, affect, neuroticism, big five |  |
| [stressed]({{< relref "/descriptives/" >}}?dataset=0070&item=stressed) | Stressed | rating_scale | 101 | I now feel (just before the beep went off)... stressed |  |  |  | ESM | stress, negative affect, affect |  |
| [academic]({{< relref "/descriptives/" >}}?dataset=0070&item=academic) | Academic | rating_scale | 101 | The current situation can be described as... academic |  |  | CAPTION | ESM | situational appraisal, context |  |
| [tiring]({{< relref "/descriptives/" >}}?dataset=0070&item=tiring) | Tiring | rating_scale | 101 | The current situation can be described as... tiring |  |  | CAPTION | ESM | situational appraisal, context |  |
| [heartwarming]({{< relref "/descriptives/" >}}?dataset=0070&item=heartwarming) | Heartwarming | rating_scale | 101 | The current situation can be described as... heartwarming |  |  | CAPTION | ESM | situational appraisal, context |  |
| [standard]({{< relref "/descriptives/" >}}?dataset=0070&item=standard) | Standard | rating_scale | 101 | The current situation can be described as... standard |  |  | CAPTION | ESM | situational appraisal, context |  |
| [productive]({{< relref "/descriptives/" >}}?dataset=0070&item=productive) | Productive | rating_scale | 101 | The current situation can be described as... productive |  |  | CAPTION | ESM | situational appraisal, context |  |
| [crazy]({{< relref "/descriptives/" >}}?dataset=0070&item=crazy) | Crazy | rating_scale | 101 | The current situation can be described as... crazy |  |  | CAPTION | ESM | situational appraisal, context |  |
| [malicious]({{< relref "/descriptives/" >}}?dataset=0070&item=malicious) | Malicious | rating_scale | 101 | The current situation can be described as... malicious |  |  | CAPTION | ESM | situational appraisal, context |  |
| [learned]({{< relref "/descriptives/" >}}?dataset=0070&item=learned) | Learned | rating_scale | 101 | The current situation can be described as... learned |  |  | CAPTION | ESM | situational appraisal, context | somehwat unclear what "learned" is supposed to mean here |
| [stressful]({{< relref "/descriptives/" >}}?dataset=0070&item=stressful) | Stressful | rating_scale | 101 | The current situation can be described as... stressful |  |  | CAPTION | ESM | situational appraisal, context |  |
| [precious]({{< relref "/descriptives/" >}}?dataset=0070&item=precious) | Precious | rating_scale | 101 | The current situation can be described as... precious |  |  | CAPTION | ESM | situational appraisal, context |  |
| [ordinary]({{< relref "/descriptives/" >}}?dataset=0070&item=ordinary) | Ordinary | rating_scale | 101 | The current situation can be described as... ordinary |  |  | CAPTION | ESM | situational appraisal, context |  |
| [useful]({{< relref "/descriptives/" >}}?dataset=0070&item=useful) | Useful | rating_scale | 101 | The current situation can be described as... useful |  |  | CAPTION | ESM | situational appraisal, context |  |
| [silly]({{< relref "/descriptives/" >}}?dataset=0070&item=silly) | Silly | rating_scale | 101 | The current situation can be described as... silly |  |  | CAPTION | ESM | situational appraisal, context |  |
| [repulsive]({{< relref "/descriptives/" >}}?dataset=0070&item=repulsive) | Repulsive | rating_scale | 101 | The current situation can be described as... repulsive |  |  | CAPTION | ESM | situational appraisal, context |  |
| event_day | Daily event | freetext | 101 | Describe the main event that took place today |  |  |  | Daily | context, activity |  |
| event_time | Daily event time | PosixCt | 101 | When did this event take place (time)? |  |  |  | Daily | context, activity |  |
| [wearing_annoying]({{< relref "/descriptives/" >}}?dataset=0070&item=wearing_annoying) | Wearing of EDA device annoying | rating_scale | 101 | Wearing the skin conduction band today was annoying |  |  |  | Daily | sensor, usability, skin conductance |  |
| [wearing_obstructing]({{< relref "/descriptives/" >}}?dataset=0070&item=wearing_obstructing) | Wearing of EDA device obstructing | rating_scale | 101 | Wearing the skin conductance band today has hampered me in daily tasks |  |  |  | Daily | sensor, usability, skin conductance |  |
| [wearing_influence]({{< relref "/descriptives/" >}}?dataset=0070&item=wearing_influence) | Wearing of EDA device influence | rating_scale | 101 | Wearing the band made me behave differently today |  |  |  | Daily | sensor, usability, skin conductance |  |

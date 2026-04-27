---
title: "Fisher (2019)"
date: 2026-04-27
draft: false
dataset_id: "0037_fisher"
first_author: "Fisher"
year: 2019
paper_doi: "https://doi.org/10.31234/osf.io/e24v6"
zenodo_doi: "10.5281/zenodo.17348069"
license: "CC BY-NC 4.0"
n_participants: 70
n_time_points: 128
n_days: "34"
topics: "Smoking, affect, substance abuse"
sampling_scheme: "4x/day random schedule"
participants: "regular smokers"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348069">10.5281/zenodo.17348069</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0037_fisher")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0037_fisher")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Fisher</li>
<li><strong>Year:</strong> 2019</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.31234/osf.io/e24v6">https://doi.org/10.31234/osf.io/e24v6</a></li>
<li><strong>Topics:</strong> Smoking, affect, substance abuse</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 70 (regular smokers)</li>
<li><strong>Time Points:</strong> 128</li>
<li><strong>Days:</strong> 34</li>
<li><strong>Beeps per Day:</strong> 4</li>
<li><strong>Sampling Scheme:</strong> 4x/day random schedule</li>
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
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348069">10.5281/zenodo.17348069</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/nkemg/">https://osf.io/nkemg/</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0217150#sec004">https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0217150#sec004</a></p>
<p><strong>Code:</strong> <a href="https://osf.io/nkemg/">https://osf.io/nkemg/</a></p>
</div>

## Additional Comments

some variables with unclear coding; some variables morning-only; number of max. time points and days taken as maximum of observations in data


## Citation

Fisher, A. J., & Soyster, P. (2019, March 28). Generating accurate personalized predictions of future behavior: A smoking exemplar. https://doi.org/10.31234/osf.io/e24v6




## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| start_time | Start time | PosixCt |  |  |  |  |  | ESM |  |  |
| finish_time | Finish time | PosixCt |  |  |  |  |  | ESM |  |  |
| cigs | Number of cigarettes | rating_scale |  | Number of cigarettes smoked since the previous survey |  |  |  | ESM |  |  |
| angry | Angry | rating_scale | 101 | I feel angry | 0 = not at all<br>100 = as much as possible |  |  | ESM | anger, negative affect, affect |  |
| hungry | Hungry | rating_scale | 101 | I feel hungry | 0 = not at all<br>100 = as much as possible |  |  | ESM | hunger, biological |  |
| restless | Restless | rating_scale | 101 | I feel restless | 0 = not at all<br>100 = as much as possible |  |  | ESM | restlessness, fidgety, anxiety, negative affect, affect |  |
| down | Down | rating_scale | 101 | I feel down or depressed | 0 = not at all<br>100 = as much as possible |  |  | ESM | negative affect, affect |  |
| bored | Bored | rating_scale | 101 | I feel bored | 0 = not at all<br>100 = as much as possible |  |  | ESM | boredom, negative affect, affect |  |
| stressed | Stressed | rating_scale | 101 | I feel stressed | 0 = not at all<br>100 = as much as possible |  |  | ESM | stress, negative affect, affect |  |
| motivated_quit_smoking | Motivated quitting smoking | rating_scale | 101 | I am motivated to quit smoking | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking cessation, smoking, substance use, health behavior |  |
| want_quit | Smoking quitting intention | rating_scale | 101 | I want to quit smoking | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking cessation, smoking, substance use, health behavior |  |
| impulsive | Impulsive | rating_scale | 101 | I feel impulsive | 0 = not at all<br>100 = as much as possible |  |  | ESM | impulsivity, self-control |  |
| sleep_difficulty | Sleep difficulty | rating_scale | 101 | unclear, but likely: Difficulty falling or staying asleep (morning only) | 0 = not at all<br>100 = as much as possible |  |  | Daily | sleep difficulty, sleep quality, sleep |  |
| sleep_duration | Sleep duration in hours | numeric |  | unclear, but likely: How many hours did you sleep last night? (morning only) |  |  |  | Daily | sleep duration, sleep |  |
| craving_smoking | Smoking craving | rating_scale | 101 | How strong is your urge/craving to smoke right now? | 0 = not at all<br>100 = as much as possible |  |  | ESM | craving, smoking, substance use |  |
| enjoy_last | Enjoyed cigarette | rating_scale | 101 | I enjoyed my last cigarette | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking, substance use |  |
| trigger | Smoking triggers | rating_scale | 101 | People or situations are triggering me to smoke | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking, substance use |  |
| irritable | Irritable | rating_scale | 101 | I feel irritable | 0 = not at all<br>100 = as much as possible |  |  | ESM | irritability, negative affect, affect, neuroticism, big five, psychopathology |  |
| concentrate | unclear, but likely: Difficulty concentrating | rating_scale | 101 | unclear, but likely: I am having difficulty concentrating | 0 = not at all<br>100 = as much as possible |  |  | ESM | concentration, cognitive functioning, nonmotor symptoms, parkinson disease, |  |
| calm | Calm | rating_scale | 101 | I feel calm | 0 = not at all<br>100 = as much as possible |  |  | ESM | calmness, positive affect, affect, neuroticism, big five |  |
| happy | Happy | rating_scale | 101 | I feel happy | 0 = not at all<br>100 = as much as possible |  |  | ESM | happiness, positive affect, affect |  |
| enthusiastic | Enthusiastic | rating_scale | 101 | I feel enthusiastic | 0 = not at all<br>100 = as much as possible |  |  | ESM | enthusiasm, positive affect, affect, extraversion, big five |  |
| nervous | Nervous | rating_scale | 101 | I feel nervous | 0 = not at all<br>100 = as much as possible |  |  | ESM | nervousness, negative affect, affect, neuroticism, big five |  |
| tired | Tired | rating_scale | 101 | I feel tired | 0 = not at all<br>100 = as much as possible |  |  | ESM | tiredness, negative affect, affect, biological, psychopathology |  |
| hurt_health | Smoking hurts health | rating_scale | 101 | My smoking is hurting my health | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking, substance use, physical health, health belief |  |
| pos_expect | Positive smoking expectations | rating_scale | 101 | A cigarette would improve my mood or make me feel <br>better | 0 = not at all<br>100 = as much as possible |  |  | ESM | smoking, substance use |  |
| ashamed_smoking | Ashamed of smoking | rating_scale | 101 | I am embarassed/ashamed that I am a smoker | 0 = not at all<br>100 = as much as possible |  |  | ESM | shame, smoking, substance use |  |
| agency | Smoking agency | rating_scale | 101 | Unclear, but likely: The amount I smoke is within my own control | 0 = not at all<br>100 = as much as possible |  |  | ESM | self-control, self-efficacy, smoking, substance use |  |
| could_quit | Smoking-related self efficacy | rating_scale | 101 | If I tried to quit smoking right now I would be successful | 0 = not at all<br>100 = as much as possible |  |  | ESM | self-control, self-efficacy, smoking, substance use |  |
| delay_gratification | Delayed gratification | rating_scale | 101 | I can delay gratification | 0 = not at all<br>100 = as much as possible |  |  | ESM | self-control |  |
| health_belief | Smoking health belief | rating_scale | 101 | unclear, but likely: My health would improve if I would quit smoking | 0 = not at all<br>100 = as much as possible |  |  | ESM | health belief, smoking, substance use, physical health |  |
| comfortable | Comfortable situation | rating_scale | 101 | I feel comfortable in my current location/situation | 0 = not at all<br>100 = as much as possible |  |  | ESM | comfortable, positive affect, affect, situation, context |  |
| frustrated | Frustrated | rating_scale | 101 | I feel frustrated | 0 = not at all<br>100 = as much as possible |  |  | ESM | frustration, negative affect, affect |  |
| pos_social | Positive social interactions | rating_scale | 101 | I am enjoying my interactions with other people | 0 = not at all<br>100 = as much as possible |  |  | ESM | social interaction |  |
| cig_predict | Cigarette number prediction | numeric |  | How many cigarettes do you think you’ll smoke today (morning only) |  |  |  | ESM | smoking, substance use |  |

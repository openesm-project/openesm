---
title: "Wright (2019)"
date: 2026-04-27
draft: false
dataset_id: "0041_wright"
first_author: "Wright"
year: 2019
paper_doi: "https://doi.org/10.1037/pas0000617"
zenodo_doi: "10.5281/zenodo.17348148"
license: "CC BY-NC 4.0"
n_participants: 94
n_time_points: 100
n_days: "100"
topics: "personality disorder, interpersonal behavior, stress, affect, functioning"
sampling_scheme: "1x/day in the evening"
participants: "individuals with personality disorder diagnosis"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348148">10.5281/zenodo.17348148</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0041_wright")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0041_wright")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Wright</li>
<li><strong>Year:</strong> 2019</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1037/pas0000617">https://doi.org/10.1037/pas0000617</a></li>
<li><strong>Topics:</strong> personality disorder, interpersonal behavior, stress, affect, functioning</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 94 (individuals with personality disorder diagnosis)</li>
<li><strong>Time Points:</strong> 100</li>
<li><strong>Days:</strong> 100</li>
<li><strong>Beeps per Day:</strong> 1</li>
<li><strong>Sampling Scheme:</strong> 1x/day in the evening</li>
<li><strong>Raw Timestamp:</strong> no</li>
<li><strong>Implicit Missingness:</strong> unclear</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **License:** CC BY-NC 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348148">10.5281/zenodo.17348148</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/5x8rv">https://osf.io/5x8rv</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>


</div>

## Additional Comments

no information on day of data collection available - unclear if there are intermediate missings


## Citation

Wright, A. G. C., Gates, K. M., Arizmendi, C., Lane, S. T., Woods, W. C., & Edershile, E. A. (2019). Focusing personality assessment on the person: Modeling general, shared, and person specific processes in personality and psychopathology. Psychological Assessment, 31(4), 502–515. https://doi.org/10.1037/pas0000617



### Additional Reference

Wright, A. G. C., Hopwood, C. J., & Simms, L. J. (2015). Daily interpersonal and affective dynamics in personality disorder. Journal of Personality Disorders, 29(4), 503–525. https://doi.org/10.1521/pedi.2015.29.4.503



## Changelog

- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | Daily |  |  |
| day | Day of study | other |  | NA |  |  |  | Daily |  |  |
| beep | Beep of the day | other |  | NA |  |  |  | Daily |  |  |
| dominance | Interpersonal dominance score | rating_scale | 8 | Sum score of interpersonal dominance obtained after controlling for overall endorsment, followed by combining scores based on circumplex weights. One adjective from each octant scale was provided. Rating how well the term described their past 24 hours. | 1 = Extremely inaccurate<br>8 = Extremely accurate | sum score | Subset of interpersonal adjective scale | Daily | interpersonal dominance, social behavior, big five, extraversion |  |
| affiliation | Interpersonal affiliation score | rating_scale | 8 | Sum score of interpersonal affiliation obtained after controlling for overall endorsment, followed by combinig scores based on circumplex weights. One adjective from each octant scale was provided. Rating how well the term described their past 24 hours. | 1 = Extremely inaccurate<br>8 = Extremely accurate | sum score | Subset of interpersonal adjective scale | Daily | interpersonal affiliation, social behavior, big five, agreeableness |  |
| pa | Positive affect | rating_scale | 5 | Sum score of positive affect PANAS items: Active, alert, attentive, determined, inspired | 1 = Very slightly or not at all<br>2 = A little<br>3 = Moderately<br>4 = Quite a bit<br>5 = Very much | sum score | PANAS | Daily | positive affect, affect |  |
| na | Negative affect | rating_scale | 5 | Sum score of negative affect PANAS items: Afraid, ashamed, hostile, nervous, upset | 1 = Very slightly or not at all<br>2 = A little<br>3 = Moderately<br>4 = Quite a bit<br>5 = Very much | sum score | PANAS | Daily | negative affect, affect |  |
| stressed | Stress score | rating_scale | 4 | Sum score of severity of seven potential stressul events in the last 24 hours<br>Events: 1.Having had an argument or disagreement with someone, 2.Something occurring that could have led to an argument or disagreement but it was allowed to pass, 3.A stressful event at work or school, 4.A stressful event at home, 5.Experiencing discrimination on the basis of age, sex, or race, 6.Something stressful happening to a close friend or relative, 7.Anything else that most people would consider stressful | 1 = Not at all<br>2 = Not very<br>3 = Somewhat<br>4 = Very | sum score | Daily Inventory of Stressful Events | Daily | stress, negative affect, affect |  |
| functioning | General functioning | rating_scale | 5 | How much difficulty did you have in taking care of important tasks or responsibilites? (with reference to the last 24 hours) | 1 = None<br>2 = Mild<br>3 = Moderate<br>4 = Severe<br>5 = Extreme (Could not do) |  |  | Daily | functional impairment, daily functioning |  |

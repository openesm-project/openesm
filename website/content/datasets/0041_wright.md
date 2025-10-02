---
title: "Wright (2019)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Wright
- **Year:** 2019
- **Paper DOI:** [https://doi.org/10.1037/pas0000617](https://doi.org/10.1037/pas0000617)
- **Topics:** personality disorder, interpersonal behavior, stress, affect, functioning

## Data Characteristics

- **Participants:** 94 (individuals with personality disorder diagnosis)
- **Time Points:** 100
- **Days:** 100
- **Beeps per Day:** 1
- **Sampling Scheme:** 1x/day in the evening
- **Raw Timestamp:** no
- **Implicit Missingness:** unclear

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/5x8rv](https://osf.io/5x8rv)
- **Link to Codebook:** [-](-)
- **Link to Code:** [-](-)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0041_wright")`
- **Python:** `openesm.get_dataset("0041_wright")`

## Additional Comments

no information on day of data collection available - unclear if there are intermediate missings


## Citation

Wright, A. G. C., Gates, K. M., Arizmendi, C., Lane, S. T., Woods, W. C., & Edershile, E. A. (2019). Focusing personality assessment on the person: Modeling general, shared, and person specific processes in personality and psychopathology. Psychological Assessment, 31(4), 502–515. https://doi.org/10.1037/pas0000617



### Additional Reference

Wright, A. G. C., Hopwood, C. J., & Simms, L. J. (2015). Daily interpersonal and affective dynamics in personality disorder. Journal of Personality Disorders, 29(4), 503–525. https://doi.org/10.1521/pedi.2015.29.4.503



## Changelog

No changes yet.

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

---
title: "Bosley (2019)"
date: 2025-10-27
draft: false
---


## Study Information

- **First Author:** Bosley
- **Year:** 2019
- **Paper DOI:** [https://doi.org/10.31234/osf.io/bhn7y](https://doi.org/10.31234/osf.io/bhn7y)
- **Topics:** GAD, affect, dampening

## Data Characteristics

- **Participants:** 96 (undergraduate students with elevated GAD symptoms)
- **Time Points:** 45
- **Days:** 19
- **Beeps per Day:** 4
- **Sampling Scheme:** 4x/day 30-minute interval
- **Raw Timestamp:** yes
- **Implicit Missingness:** yes

## Data Availability

- **Cross-sectional Data:** no
- **Passive Sensor Data:** no
- **Link to Original Data:** [https://osf.io/4x8jd/](https://osf.io/4x8jd/)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://osf.io/8t46j](https://osf.io/8t46j)
- **License:** CC BY-NC 4.0

## Data Access

- **Zenodo DOI:** [10.5281/zenodo.17348118](https://doi.org/10.5281/zenodo.17348118)
- **R:** `openesm::get_dataset("0036_bosley")`
- **Python:** `openesm.get_dataset("0036_bosley")`

## Additional Comments

item order was randomized; wording of items not fully clear but inferred from article+data; no beep information available; number of max. time points and days taken as maximum of observations in data


## Citation

Bosley, H. G., Sandel, D. B., & Fisher, A. J. (2020). Idiographic dynamics of positive affect in GAD. European Journal of Psychological Assessment, 36(3), 500–509. https://doi.org/10.1027/1015-5759/a000580




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  |  |  |  |
| day | Day of study | other |  |  |  |  |  |  |  |  |
| beep | Beep of the day | other |  |  |  |  |  |  |  |  |
| creation_time | Creation time | PosixCt |  |  |  |  |  |  |  |  |
| completion_time | Completion time | PosixCt |  |  |  |  |  |  |  |  |
| bragging_thought | Happiness as bragging | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think "People will think I'm bragging"? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | social dampening, dampening, emotion regulation |  |
| too_good_to_be_true | Too good to be true | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think this is too good to be true? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | skeptical dampening, dampening, emotion regulation |  |
| ruminate_negatives | Ruminate about negatives | rating_scale | 101 | Since the last survey, when you felt happy, how often did you things that have not gone well? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | rumination, dampening, emotion regulation |  |
| feelings_transient | Feelings perceived as transient | rating_scale | 101 | Since the last survey, when you felt happy, how often did you remind yourself that these feelings won't last? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | temporal dampening, dampening, emotion regulatoin |  |
| hard_to_concentrate | Hard to concentrate when happy | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think about how hard it is to concentrate? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | cognitive dampening, concentration, dampening, emotion regulation |  |
| think_of_risks | Thinking of risks | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think about things that could go wrong? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | catastrophic thinking, worry, dampening, emotion regulation |  |
| undeserving | Feeling undeserving | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think "I don't deserve this"? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | self-worth, self-esteem, dampening, emotion regulation |  |
| luck_will_end | Thinking luck will end | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think "My streak of luck is going to end soon"? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | pessimism, dampening, emotion regulation |  |
| happy | Happy | rating_scale | 101 | Felt happy |  |  | neutral arousal exemplar of positive affect |  | happiness, positive affect, affect |  |
| content | Content | rating_scale | 101 | Felt content |  |  | low arousal exemplar of positive affect |  | content, positive affect, affect |  |
| excited | Excited | rating_scale | 101 | Felt excited |  |  | high arousal exemplar of positive affect |  | excitement, positive affect, affect, extraversion, big five |  |
| sad | Sad | rating_scale | 101 | Felt sad |  |  |  |  | sadness, negative affect, affect |  |
| depressed | Depressed | rating_scale | 101 | Felt depressed |  |  |  |  | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| nervous | Nervous | rating_scale | 101 | Felt nervous |  |  |  |  | nervousness, negative affect, affect, neuroticism, big five |  |
| determined | Determined | rating_scale | 101 | Felt determined |  |  |  |  | determination, positive affect, affect |  |
| attentive | Attentive | rating_scale | 101 | Felt attentive |  |  |  |  | attentiveness, positive affect, affect |  |
| alert | Alert | rating_scale | 101 | Felt alert |  |  |  |  | alertness, positive affect, affect, etxraversion, big five |  |
| inspired | Inspired | rating_scale | 101 | Felt inspired |  |  |  |  | inspiration, positive affect, affect |  |
| active | Active | rating_scale | 101 | Felt active |  |  |  |  | active, energy, positive affect, affect, big five, extraversion |  |
| afraid | Afraid | rating_scale | 101 | Felt afraid |  |  |  |  | fear, negative affect, affect, neuroticism, big five |  |
| upset | Upset | rating_scale | 101 | Felt upset |  |  |  |  | upset, negative affect, affect, neuroticism, big five |  |
| ashamed | Ashamed | rating_scale | 101 | Felt ashamed |  |  |  |  | shame, negative affect, affect |  |
| hostile | Hostile | rating_scale | 101 | Felt hostile |  |  |  |  | hostility, anger, negative affect, affect |  |
| worry_frequent | Frequent worrying | rating_scale | 101 | Felt worried frequently |  |  | DSM–5 GAD diagnostic criteria |  | worry, anxiety, psychopathology, negative affect, affect, neuroticism, big five |  |
| worry_hard_to_control | Worry hard to control | rating_scale | 101 | Felt that worry is difficult to stop or control |  |  | DSM–5 GAD diagnostic criteria |  | worry, anxiety, psychopathology, negative affect, affect, neuroticism, big five |  |
| worry_interferes | Worry interferes with life | rating_scale | 101 | Felt that worry is interfering with your life |  |  | DSM–5 GAD diagnostic criteria |  | worry, anxiety, psychopathology, negative affect, affect, neuroticism, big five |  |

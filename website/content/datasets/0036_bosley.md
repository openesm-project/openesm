---
title: "Bosley (2019)"
date: 2026-09-03
draft: false
dataset_id: "0036_bosley"
first_author: "Bosley"
year: 2019
paper_doi: "https://doi.org/10.31234/osf.io/bhn7y"
zenodo_doi: "10.5281/zenodo.17348118"
license: "CC BY-NC 4.0"
n_participants: 96
n_time_points: 45
n_days: "19"
topics: "GAD, affect, dampening"
sampling_scheme: "4x/day 30-minute interval"
participants: "undergraduate students with elevated GAD symptoms"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17348118">10.5281/zenodo.17348118</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0036_bosley")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0036_bosley")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Bosley</li>
<li><strong>Year:</strong> 2019</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.31234/osf.io/bhn7y">https://doi.org/10.31234/osf.io/bhn7y</a></li>
<li><strong>Topics:</strong> GAD, affect, dampening</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 96 (undergraduate students with elevated GAD symptoms)</li>
<li><strong>Time Points:</strong> 45</li>
<li><strong>Days:</strong> 19</li>
<li><strong>Beeps per Day:</strong> 4</li>
<li><strong>Sampling Scheme:</strong> 4x/day 30-minute interval</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

<div class="dataset-meta-card">
<h2>Data Availability</h2>
<ul>
<li><strong>Cross-sectional Data:</strong> no</li>
<li><strong>Passive Sensor Data:</strong> no</li>
<li><strong>License:</strong> CC BY-NC 4.0</li>
</ul>
<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17348118">10.5281/zenodo.17348118</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/4x8jd/">https://osf.io/4x8jd/</a> <span class="dataset-link-note">(not harmonized, for reference only)</span></p>

<p><strong>Code:</strong> <a href="https://osf.io/8t46j">https://osf.io/8t46j</a></p>
</div>
</div>

## Additional Comments

item order was randomized; wording of items not fully clear but inferred from article+data; no beep information available; number of max. time points and days taken as maximum of observations in data


## Citation

Bosley, H. G., Sandel, D. B., & Fisher, A. J. (2020). Idiographic dynamics of positive affect in GAD. European Journal of Psychological Assessment, 36(3), 500–509. https://doi.org/10.1027/1015-5759/a000580




## Changelog

- **2026-04-27** (1.0.0) *metadata change*: Fix 'extraversion' typo in variable coding.
- **2025-10-14** (1.0.0) *data change*: Initial release.

## Variables

<p class="dataset-note">Linked variable names point to item-level distributional statistics on the <a href="{{< relref "/descriptives/" >}}">Descriptives</a> page.</p>

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  |  |  |  |
| day | Day of study | other |  |  |  |  |  |  |  |  |
| beep | Beep of the day | other |  |  |  |  |  |  |  |  |
| creation_time | Creation time | PosixCt |  |  |  |  |  |  |  |  |
| completion_time | Completion time | PosixCt |  |  |  |  |  |  |  |  |
| [bragging_thought]({{< relref "/descriptives/" >}}?dataset=0036&item=bragging_thought) | Happiness as bragging | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think "People will think I'm bragging"? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | social dampening, dampening, emotion regulation |  |
| [too_good_to_be_true]({{< relref "/descriptives/" >}}?dataset=0036&item=too_good_to_be_true) | Too good to be true | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think this is too good to be true? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | skeptical dampening, dampening, emotion regulation |  |
| [ruminate_negatives]({{< relref "/descriptives/" >}}?dataset=0036&item=ruminate_negatives) | Ruminate about negatives | rating_scale | 101 | Since the last survey, when you felt happy, how often did you things that have not gone well? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | rumination, dampening, emotion regulation |  |
| [feelings_transient]({{< relref "/descriptives/" >}}?dataset=0036&item=feelings_transient) | Feelings perceived as transient | rating_scale | 101 | Since the last survey, when you felt happy, how often did you remind yourself that these feelings won't last? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | temporal dampening, dampening, emotion regulatoin |  |
| [hard_to_concentrate]({{< relref "/descriptives/" >}}?dataset=0036&item=hard_to_concentrate) | Hard to concentrate when happy | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think about how hard it is to concentrate? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | cognitive dampening, concentration, dampening, emotion regulation |  |
| [think_of_risks]({{< relref "/descriptives/" >}}?dataset=0036&item=think_of_risks) | Thinking of risks | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think about things that could go wrong? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | catastrophic thinking, worry, dampening, emotion regulation |  |
| [undeserving]({{< relref "/descriptives/" >}}?dataset=0036&item=undeserving) | Feeling undeserving | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think "I don't deserve this"? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | self-worth, self-esteem, dampening, emotion regulation |  |
| [luck_will_end]({{< relref "/descriptives/" >}}?dataset=0036&item=luck_will_end) | Thinking luck will end | rating_scale | 101 | Since the last survey, when you felt happy, how often did you think "My streak of luck is going to end soon"? |  |  | The Response to Positive Affect Scale (RPA; Feldman, Joorman, and Johnson, 2008), dampening subscale |  | pessimism, dampening, emotion regulation |  |
| [happy]({{< relref "/descriptives/" >}}?dataset=0036&item=happy) | Happy | rating_scale | 101 | Felt happy |  |  | neutral arousal exemplar of positive affect |  | happiness, positive affect, affect |  |
| [content]({{< relref "/descriptives/" >}}?dataset=0036&item=content) | Content | rating_scale | 101 | Felt content |  |  | low arousal exemplar of positive affect |  | content, positive affect, affect |  |
| [excited]({{< relref "/descriptives/" >}}?dataset=0036&item=excited) | Excited | rating_scale | 101 | Felt excited |  |  | high arousal exemplar of positive affect |  | excitement, positive affect, affect, extraversion, big five |  |
| [sad]({{< relref "/descriptives/" >}}?dataset=0036&item=sad) | Sad | rating_scale | 101 | Felt sad |  |  |  |  | sadness, negative affect, affect |  |
| [depressed]({{< relref "/descriptives/" >}}?dataset=0036&item=depressed) | Depressed | rating_scale | 101 | Felt depressed |  |  |  |  | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| [nervous]({{< relref "/descriptives/" >}}?dataset=0036&item=nervous) | Nervous | rating_scale | 101 | Felt nervous |  |  |  |  | nervousness, negative affect, affect, neuroticism, big five |  |
| [determined]({{< relref "/descriptives/" >}}?dataset=0036&item=determined) | Determined | rating_scale | 101 | Felt determined |  |  |  |  | determination, positive affect, affect |  |
| [attentive]({{< relref "/descriptives/" >}}?dataset=0036&item=attentive) | Attentive | rating_scale | 101 | Felt attentive |  |  |  |  | attentiveness, positive affect, affect |  |
| [alert]({{< relref "/descriptives/" >}}?dataset=0036&item=alert) | Alert | rating_scale | 101 | Felt alert |  |  |  |  | alertness, positive affect, affect, extraversion, big five |  |
| [inspired]({{< relref "/descriptives/" >}}?dataset=0036&item=inspired) | Inspired | rating_scale | 101 | Felt inspired |  |  |  |  | inspiration, positive affect, affect |  |
| [active]({{< relref "/descriptives/" >}}?dataset=0036&item=active) | Active | rating_scale | 101 | Felt active |  |  |  |  | active, energy, positive affect, affect, big five, extraversion |  |
| [afraid]({{< relref "/descriptives/" >}}?dataset=0036&item=afraid) | Afraid | rating_scale | 101 | Felt afraid |  |  |  |  | fear, negative affect, affect, neuroticism, big five |  |
| [upset]({{< relref "/descriptives/" >}}?dataset=0036&item=upset) | Upset | rating_scale | 101 | Felt upset |  |  |  |  | upset, negative affect, affect, neuroticism, big five |  |
| [ashamed]({{< relref "/descriptives/" >}}?dataset=0036&item=ashamed) | Ashamed | rating_scale | 101 | Felt ashamed |  |  |  |  | shame, negative affect, affect |  |
| [hostile]({{< relref "/descriptives/" >}}?dataset=0036&item=hostile) | Hostile | rating_scale | 101 | Felt hostile |  |  |  |  | hostility, anger, negative affect, affect |  |
| [worry_frequent]({{< relref "/descriptives/" >}}?dataset=0036&item=worry_frequent) | Frequent worrying | rating_scale | 101 | Felt worried frequently |  |  | DSM–5 GAD diagnostic criteria |  | worry, anxiety, psychopathology, negative affect, affect, neuroticism, big five |  |
| [worry_hard_to_control]({{< relref "/descriptives/" >}}?dataset=0036&item=worry_hard_to_control) | Worry hard to control | rating_scale | 101 | Felt that worry is difficult to stop or control |  |  | DSM–5 GAD diagnostic criteria |  | worry, anxiety, psychopathology, negative affect, affect, neuroticism, big five |  |
| [worry_interferes]({{< relref "/descriptives/" >}}?dataset=0036&item=worry_interferes) | Worry interferes with life | rating_scale | 101 | Felt that worry is interfering with your life |  |  | DSM–5 GAD diagnostic criteria |  | worry, anxiety, psychopathology, negative affect, affect, neuroticism, big five |  |

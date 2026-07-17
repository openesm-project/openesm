---
title: "Sicorello (2024)"
date: 2026-07-17
draft: false
dataset_id: "0073_sicorello"
first_author: "Sicorello"
year: 2024
paper_doi: "https://doi.org/10.31234/osf.io/8mzvu"
zenodo_doi: "10.5281/zenodo.19886179"
license: "CC BY-NC 4.0"
n_participants: 214
n_time_points: 60
n_days: "10"
topics: "emotion regulation, stress, affect"
sampling_scheme: "6x/day semi-randomized prompts within 30-minute intervals with 75 minutes between intervals and a 45-minute expiration time for each prompt"
participants: "adults between 18-65"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.19886179">10.5281/zenodo.19886179</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0073_sicorello")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0073_sicorello")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Sicorello</li>
<li><strong>Year:</strong> 2024</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.31234/osf.io/8mzvu">https://doi.org/10.31234/osf.io/8mzvu</a></li>
<li><strong>Topics:</strong> emotion regulation, stress, affect</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 214 (adults between 18-65)</li>
<li><strong>Time Points:</strong> 60</li>
<li><strong>Days:</strong> 10</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> 6x/day semi-randomized prompts within 30-minute intervals with 75 minutes between intervals and a 45-minute expiration time for each prompt</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

<div class="dataset-meta-card">
<h2>Data Availability</h2>
<ul>
<li><strong>Cross-sectional Data:</strong> yes</li>
<li><strong>Passive Sensor Data:</strong> no</li>
<li><strong>License:</strong> CC BY-NC 4.0</li>
</ul>
<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.19886179">10.5281/zenodo.19886179</a></p>
<p><strong>Original Source Data:</strong> <a href="https://github.com/MaurizioSicorello/SDERSvalid_Analysis/blob/main/data/SDERSvalid_DailyLife_data_preprocessed.csv">https://github.com/MaurizioSicorello/SDERSvalid_Analysis/blob/main/data/SDERSvalid_DailyLife_data_preprocessed.csv</a> <span class="dataset-link-note">(not harmonized, for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://github.com/MaurizioSicorello/SDERSvalid_Analysis/blob/main/data/SDERSvalid_Codebook.xlsx">https://github.com/MaurizioSicorello/SDERSvalid_Analysis/blob/main/data/SDERSvalid_Codebook.xlsx</a></p>
<p><strong>Code:</strong> <a href="https://github.com/MaurizioSicorello/SDERSvalid_Analysis/tree/main/scripts">https://github.com/MaurizioSicorello/SDERSvalid_Analysis/tree/main/scripts</a></p>
</div>
</div>

## Additional Comments

did not convert timestamps to time columns as there is additional timezone information available; items originally in German


## Citation

Sicorello, M., Heyse, W., Pruessner, L., Elsaesser, M., & Kolar, D. R. (2025, September 8). Emotion regulation difficulties in daily life: Assessment, dynamics, and links to stress-affective states and traits. https://doi.org/10.31234/osf.io/k7mgv_v1




## Changelog

- **2026-04-29** (1.0.0) *data change*: Initial release.

## Variables

<p class="dataset-note">Linked variable names point to item-level distributional statistics on the <a href="{{< relref "/descriptives/" >}}">Descriptives</a> page.</p>

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | Date |  |  |  |  |  | ESM |  |  |
| participant_timezone | Timezone of participant | categorical |  |  |  |  |  | ESM |  |  |
| export_timezone | Timezone of export | categorical |  |  |  |  |  | ESM |  |  |
| created | Creation time beep | PosixCt |  |  |  |  |  | ESM |  |  |
| scheduled | Scheduled time beep | PosixCt |  |  |  |  |  | ESM |  |  |
| started | Start time beep | PosixCt |  |  |  |  |  | ESM |  |  |
| completed | Completion time beep | PosixCt |  |  |  |  |  | ESM |  |  |
| expired | Expired | PosixCt |  |  |  |  |  | ESM |  |  |
| uploaded | Uploaded | PosixCt |  |  |  |  |  | ESM |  |  |
| [guilty_emotion]({{< relref "/descriptives/" >}}?dataset=0073&item=guilty_emotion) | Guilty about emotion | rating_scale | 5 | I feel guilty for feeling this way. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | guilt, emotion dysregulation, emotion regulation | Item wording originally in German |
| [out_of_control]({{< relref "/descriptives/" >}}?dataset=0073&item=out_of_control) | Out of control | rating_scale | 5 | I feel out of control. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | control loss, emotion dysregulation, emotion regulation | Item wording originally in German |
| [embarrassed_emotion]({{< relref "/descriptives/" >}}?dataset=0073&item=embarrassed_emotion) | Embarassed about emotion | rating_scale | 5 | I am embarrassed for feeling this way. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | embarrassment, emotion dysregulation, emotion regulation | Item wording originally in German |
| [negative_self_thoughts]({{< relref "/descriptives/" >}}?dataset=0073&item=negative_self_thoughts) | Negative self thoughts | rating_scale | 5 | I am feeling very bad about myself. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | negative self-perception, self-perception, self-concept, emotion regulation | Item wording originally in German |
| [emotion_confusion]({{< relref "/descriptives/" >}}?dataset=0073&item=emotion_confusion) | Emotional confusion | rating_scale | 5 | I have no idea how I am feeling. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | emotion clarity, emotion dysregulation, emotion regulation | Item wording originally in German |
| [ashamed_emotion]({{< relref "/descriptives/" >}}?dataset=0073&item=ashamed_emotion) | Ashamed about emotion | rating_scale | 5 | I feel ashamed with myself for feeling this way. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | shame, emotion dysregulation, emotion regulation | Item wording originally in German |
| [task_difficulty]({{< relref "/descriptives/" >}}?dataset=0073&item=task_difficulty) | Difficulty with required tasks | rating_scale | 5 | I am having difficulty doing the things I need to do right now. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | task interference, goal pursuit, self-regulation | Item wording originally in German |
| [prolonged_emotion_expectation]({{< relref "/descriptives/" >}}?dataset=0073&item=prolonged_emotion_expectation) | Prolonged emotion expectation | rating_scale | 5 | I believe that I will continue feeling this way for a long time. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | emotion persistence belief, emotion dysregulation, emotion regulation | Item wording originally in German |
| [annoyed_at_self]({{< relref "/descriptives/" >}}?dataset=0073&item=annoyed_at_self) | Annoyed at self | rating_scale | 5 | I am angry with myself for feeling this way. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | anger, emotion disregulation, emotion regulation, affect, negative affect | Item wording originally in German |
| [behavior_control_difficulty]({{< relref "/descriptives/" >}}?dataset=0073&item=behavior_control_difficulty) | Difficulty with behavioral control | rating_scale | 5 | I am having difficulty controlling my behaviors. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | impulse control, self-control, self-regulation, big five, conscientiousness | Item wording originally in German |
| [confused_emotions]({{< relref "/descriptives/" >}}?dataset=0073&item=confused_emotions) | Confused about emotions | rating_scale | 5 | I am confused about how I feel. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | emotion clarity, emotion dysregulation, emotion regulation | Item wording originally in German |
| [down_expectation]({{< relref "/descriptives/" >}}?dataset=0073&item=down_expectation) | Expect emotion down | rating_scale | 5 | I believe that I am going to end up feeling very depressed. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | expectation, emotion dysregulation, emotion regulation | Item wording originally in German |
| [emotions_out_of_control]({{< relref "/descriptives/" >}}?dataset=0073&item=emotions_out_of_control) | Emotions out of control | rating_scale | 5 | My emotions feel out of control. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | control loss, emotion dysregulation, emotion regulation | Item wording originally in German |
| [annoyed_at_self_emotion]({{< relref "/descriptives/" >}}?dataset=0073&item=annoyed_at_self_emotion) | Annoyed at self about emotion | rating_scale | 5 | I am irritated with myself for feeling this way. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | irritated, negative affect, affect, emotion dysregulation, emotion regulation | Item wording originally in German |
| [weak_emotion]({{< relref "/descriptives/" >}}?dataset=0073&item=weak_emotion) | Feeling weak for emotion | rating_scale | 5 | I feel like I'm a weak person for feeling this way. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | self-perception, emotion dysregulation, emotion regulation | Item wording originally in German |
| [overwhelming_emotions]({{< relref "/descriptives/" >}}?dataset=0073&item=overwhelming_emotions) | Overwhelming emotions | rating_scale | 5 | My emotions feel overwhelming. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely |  | S-DERS | ESM | negative affect, affect, emotion dysregulation, emotion regulation | Item wording originally in German |
| affect_grid_x | Affect grid x-axis | numeric |  | Please select a point on the grid that best represents how you feel at this moment. (x-axis) |  |  |  | ESM | valence, affect |  |
| affect_grid_y | Affect grid y-axis | numeric |  | Please select a point on the grid that best represents how you feel at this moment. (y-axis) |  |  |  | ESM | arousal, affect |  |
| [seek_contact_affect]({{< relref "/descriptives/" >}}?dataset=0073&item=seek_contact_affect) | Seek contact to improve affect | rating_scale | 5 | ...had contact with people/ were with people to increase your positive feelings? | 1 = Does not apply at all<br>2 = Applies somewhat<br>3 = Applies fairly well<br>4 = Applies quite well<br>5 = Applies completely |  |  | ESM | social emotion regulation, emotion regulation, social behavior, social interaction | Item wording originally in German |
| [others_perspective_giving]({{< relref "/descriptives/" >}}?dataset=0073&item=others_perspective_giving) | Receive perspective giving | rating_scale | 5 | ...experienced that other people tried to remind you to worry less or that other people are worse off? | 1 = Does not apply at all<br>2 = Applies somewhat<br>3 = Applies fairly well<br>4 = Applies quite well<br>5 = Applies completely |  |  | ESM | social emotion regulation, emotion regulation, social behavior, social interaction | Item wording originally in German |
| [received_comfort]({{< relref "/descriptives/" >}}?dataset=0073&item=received_comfort) | Receive comfort | rating_scale | 5 | ...experienced that other people tried to calm you down or to comfort you? | 1 = Does not apply at all<br>2 = Applies somewhat<br>3 = Applies fairly well<br>4 = Applies quite well<br>5 = Applies completely |  |  | ESM | social emotion regulation, emotion regulation, social interaction | Item wording originally in German |
| [received_coping_examples]({{< relref "/descriptives/" >}}?dataset=0073&item=received_coping_examples) | Receive coping examples | rating_scale | 5 | ...learned from other people how they have dealt with an emotional situation in the past or how they would behave in your place? | 1 = Does not apply at all<br>2 = Applies somewhat<br>3 = Applies fairly well<br>4 = Applies quite well<br>5 = Applies completely |  |  | ESM | coping, social emotion regulation, emotion regulation, social interaction | Item wording originally in German |
| [negative_event]({{< relref "/descriptives/" >}}?dataset=0073&item=negative_event) | Negative event | rating_scale | 7 | Have you had one or more bad experiences since the last survey? How bad was your worst experience? |  |  |  | ESM | negative events, life events | Item wording originally in German |
| [positive_event]({{< relref "/descriptives/" >}}?dataset=0073&item=positive_event) | Positive event | rating_scale | 7 | Have you had one or more good experiences since the last survey? How good was your best experience? |  |  |  | ESM | positive events, life events | Item wording originally in German |
| [impulse_contact_emotion_regulation]({{< relref "/descriptives/" >}}?dataset=0073&item=impulse_contact_emotion_regulation) | Impulse contact-seeking for emotion regulation | rating_scale | 7 | Do you currently feel the urge to seek out another person for support in regulating your emotions? |  |  |  | ESM | regulation impulse, emotion regulation | Item wording originally in German |
| [impulse_self_regulation]({{< relref "/descriptives/" >}}?dataset=0073&item=impulse_self_regulation) | Impulse self-regulation | rating_scale | 7 | Do you currently feel the urge to regulate your emotions on your own? |  |  |  | ESM | regulation impulse, emotion regulation | Item wording originally in German |
| quest_duration | Quest duration | numeric |  |  |  |  |  | ESM |  |  |
| time | Time | numeric |  |  |  |  |  | ESM |  |  |
| [emotion_awareness]({{< relref "/descriptives/" >}}?dataset=0073&item=emotion_awareness) | Emotion awareness | rating_scale | 5 | I am paying attention to how I feel. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely | reverse coding | S-DERS | ESM | emotion awareness, emotion regulation | Item wording originally in German |
| [acknowledge_emotions]({{< relref "/descriptives/" >}}?dataset=0073&item=acknowledge_emotions) | Acknowledge emotions | rating_scale | 5 | I am acknowledging my emotions. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely | reverse coding | S-DERS | ESM | emotion acceptance, emotion regulation | Item wording originally in German |
| [care_about_emotions]({{< relref "/descriptives/" >}}?dataset=0073&item=care_about_emotions) | Care about emotions | rating_scale | 5 | I care about what I am feeling. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely | reverse coding | S-DERS | ESM | emotion regulation | Item wording originally in German |
| [emotion_exploration]({{< relref "/descriptives/" >}}?dataset=0073&item=emotion_exploration) | Emotion exploration | rating_scale | 5 | I am taking time to figure out what I am really feeling. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely | reverse coding | S-DERS | ESM | emotion regulation | Item wording originally in German |
| [emotions_valid]({{< relref "/descriptives/" >}}?dataset=0073&item=emotions_valid) | Perceived emotion validity | rating_scale | 5 | I believe that my feelings are valid and important. | 1 = not at all<br>2 = somewhat<br>3 = partly<br>4 = very much<br>5 = completely | reverse coding | S-DERS | ESM | emotion regulation | Item wording originally in German |

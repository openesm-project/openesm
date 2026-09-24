---
title: "Bayer (2026)"
date: 2026-09-24
draft: false
dataset_id: "0076_bayer"
first_author: "Bayer"
year: 2026
paper_doi: "https://doi.org/10.1177/20501579221149823"
zenodo_doi: "10.5281/zenodo.22911022"
license: "CC-BY 4.0"
n_participants: 519
n_time_points: 84
n_days: "14"
topics: "daily mobility, space perception, social perception"
sampling_scheme: "6x/day randomly in equal intervals, with some surveys triggered by passive sensing mobility"
participants: "adults residing in the data collection city with an Android phone"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.22911022">10.5281/zenodo.22911022</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0076_bayer")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0076_bayer")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Bayer</li>
<li><strong>Year:</strong> 2026</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1177/20501579221149823">https://doi.org/10.1177/20501579221149823</a></li>
<li><strong>Topics:</strong> daily mobility, space perception, social perception</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 519 (adults residing in the data collection city with an Android phone)</li>
<li><strong>Time Points:</strong> 84</li>
<li><strong>Days:</strong> 14</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> 6x/day randomly in equal intervals, with some surveys triggered by passive sensing mobility</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> no</li>
</ul>
</div>
</div>

<div class="dataset-meta-card">
<h2>Data Availability</h2>
<ul>
<li><strong>Cross-sectional Data:</strong> no</li>
<li><strong>Passive Sensor Data:</strong> no</li>
<li><strong>License:</strong> CC-BY 4.0</li>
</ul>
<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.22911022">10.5281/zenodo.22911022</a></p>
<p><strong>Original Source Data:</strong> <a href="https://osf.io/d56cx/overview">https://osf.io/d56cx/overview</a> <span class="dataset-link-note">(not harmonized, for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://osf.io/d56cx/files/b3a5m">https://osf.io/d56cx/files/b3a5m</a></p>

</div>
</div>

## Additional Comments

data were sent to openESM team via email, data link only contains description of original data; more information available on the mCog project's OSF page (https://osf.io/d56cx/); passive sensing and cross-sectional data available in the overall mCog project; participants were randomly assigned to groups


## Citation

Mao, C. (Molly), Bayer, J. B., Ross, M. Q., Rhee, L., Le, H. T. K., Mount, J., Chang, H.-C., Chang, Y.-J., Hedstrom, A., & Hovick, S. R. (2023). Perceived vs. observed mHealth behavior: A naturalistic investigation of tracking apps and daily movement. Mobile Media & Communication, 11(3), 526–548. https://doi.org/10.1177/20501579221149823




## Changelog

No changes yet.

## Variables

<p class="dataset-note">Linked variable names point to item-level distributional statistics on the <a href="{{< relref "/descriptives/" >}}">Descriptives</a> page.</p>

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| group | Study group | categorical | 3 |  |  |  |  | Daily |  |  |
| mobility_survey | Mobility-triggered survey | binary |  |  |  |  |  | ESM |  |  |
| start_time | Start time of survey | PosixCt |  |  |  |  |  | ESM |  |  |
| end_time | End time of survey | PosixCt |  |  |  |  |  | ESM |  |  |
| progress | Percentage survey progress | numeric |  |  |  |  |  | ESM |  |  |
| response_duration | Survey response duration | numeric |  | In seconds |  |  |  | ESM |  |  |
| [pa]({{< relref "/descriptives/" >}}?dataset=0076&item=pa) | Positive affect | rating_scale | 5 | Right now, how positive or negative do you feel? | 1. Very Negative<br>2. Somewhat Negative<br>3. Neutral<br>4. Somewhat Positive<br>5. Very Positive |  |  | ESM | positive affect, negative affect, affect |  |
| [energy]({{< relref "/descriptives/" >}}?dataset=0076&item=energy) | Energy level | rating_scale | 5 | Right now, what is your energy level? | 1. Very Low Energy<br>2. Somewhat Low Energy<br>3. Neutral<br>4. Somewhat High Energy<br>5. Very High Energy |  |  | ESM | energy, affect, extraversion, big five |  |
| [fidgety]({{< relref "/descriptives/" >}}?dataset=0076&item=fidgety) | Fidgety | rating_scale | 5 | Right now, do you feel fidgety or calm? | 1. Very Calm<br>2. Somewhat Calm<br>3. Neutral<br>4. Somewhat Fidgety<br>5. Very Fidgety |  |  | ESM | calmness, fidgetiness, affect, neuroticism, big five |  |
| [want_other_people]({{< relref "/descriptives/" >}}?dataset=0076&item=want_other_people) | Want to be with other people | rating_scale | 5 | Right now, do you want to be alone or with other people? | 1. I only want to be alone.<br>2. I mostly want to be alone.<br>3. Neutral<br>4. I mostly want to be with other people.<br>5. I only want to be with other people. |  |  | ESM | social interaction, social functioning, loneliness |  |
| [location_stimulation]({{< relref "/descriptives/" >}}?dataset=0076&item=location_stimulation) | Location stimulation level | rating_scale | 5 | Does your current location have a low or high level of stimulation (such as lights, sounds,<br>and activities)? | 1. Very Low Level<br>2. Somewhat Low Level<br>3. Neutral<br>4. Somewhat High Level<br>5. Very High Level |  |  | ESM | space perception, context, situational appraisal |  |
| [location_overstimulation]({{< relref "/descriptives/" >}}?dataset=0076&item=location_overstimulation) | Location overstimulation | rating_scale | 5 | Right now, how over-stimulating or under-stimulating does your current location feel? | 1. Very Under-stimulating<br>2. Somewhat Under-stimulating<br>3. Neutral<br>4. Somewhat Over-stimulating<br>5. Very Over-stimulating |  |  | ESM | space perception, context, situational appraisal |  |
| [location_familiar]({{< relref "/descriptives/" >}}?dataset=0076&item=location_familiar) | Location familiarity | rating_scale | 5 | How unfamiliar or familiar does your current location feel? | 1. Very Unfamiliar<br>2. Somewhat Unfamiliar<br>3. Neutral<br>4. Somewhat Familiar<br>5. Very Familiar |  |  | ESM | space perception, context, situational appraisal |  |
| [location_interesting]({{< relref "/descriptives/" >}}?dataset=0076&item=location_interesting) | Location interesting | rating_scale | 5 | How interesting or uninteresting does your current location feel? | 1. Very Uninteresting<br>2. Somewhat Uninteresting<br>3. Neutral<br>4. Somewhat Interesting<br>5. Very Interesting |  |  | ESM | space perception, context, situational appraisal |  |
| [location_refreshing]({{< relref "/descriptives/" >}}?dataset=0076&item=location_refreshing) | Location refreshing | rating_scale | 5 | How tiring or refreshing does your current location feel? | 1. Very Tiring<br>2. Somewhat Tiring<br>3. Neutral<br>4. Somewhat Refreshing<br>5. Very Refreshing |  |  | ESM | space perception, context, situational appraisal |  |
| [location_compatible_personality]({{< relref "/descriptives/" >}}?dataset=0076&item=location_compatible_personality) | Location compatible with personality | rating_scale | 5 | How compatible or incompatible with your personality does your current location feel? | 1. Very Incompatible<br>2. Somewhat Incompatible<br>3. Neutral<br>4. Somewhat Compatible<br>5. Very Compatible |  |  | ESM | space perception, context, situational appraisal |  |
| interaction_type | Interaction type | categorical | 5 | How did your most recent social interaction occur? | 0. Face-to-Face<br>1. Calling (with video)<br>2. Calling (audio only)<br>3. Messaging (with image or video)<br>4. Messaging (text only) |  |  | ESM | social interaction, communication |  |
| [interaction_when]({{< relref "/descriptives/" >}}?dataset=0076&item=interaction_when) | Interaction how long ago | rating_scale | 5 | How long ago was this interaction? | 1. Last 10 minutes<br>2. Last hour<br>3. Last 3 hours<br>4. Last day<br>5. Over a day |  |  | ESM | social interaction, communication |  |
| interaction_number | Interaction members quantity | categorical | 7 | How many other people were part of this interaction? | 1. 1<br>2. 2<br>3. 3<br>4. 4<br>5. 5<br>6. 6-10<br>11. 11+ |  |  | ESM | social interaction, communication |  |
| [interaction_pleasant]({{< relref "/descriptives/" >}}?dataset=0076&item=interaction_pleasant) | Interaction pleasant | rating_scale | 5 | How pleasant or unpleasant was this interaction? | 1. Very Unpleasant<br>2. Somewhat Unpleasant<br>3. Neutral<br>4. Somewhat Pleasant<br>5. Very Pleasant |  |  | ESM | social interaction, situational appraisal, context |  |
| [interaction_playful]({{< relref "/descriptives/" >}}?dataset=0076&item=interaction_playful) | Interaction playful | rating_scale | 5 | How serious or playful was this interaction? | 1. Very Serious<br>2. Somewhat Serious<br>3. Neutral<br>4. Somewhat Playful<br>5. Very Playful |  |  | ESM | social interaction, situational appraisal, context |  |
| [interaction_meaningful]({{< relref "/descriptives/" >}}?dataset=0076&item=interaction_meaningful) | Interaction meaningful | rating_scale | 5 | How superficial or meaningful was this interaction? | 1. Very Superficial<br>2. Somewhat Superficial<br>3. Neutral<br>4. Somewhat Meaningful<br>5. Very Meaningful |  |  | ESM | social interaction, situational appraisal, context |  |
| [interaction_frequency]({{< relref "/descriptives/" >}}?dataset=0076&item=interaction_frequency) | Interaction frequency | rating_scale | 5 | How often do you interact with this individual or particular group? | 0. Never<br>1. Yearly<br>2. Monthly<br>3. Weekly<br>4. Daily |  |  | ESM | social interaction, situational appraisal, context |  |
| [time_perception_clock]({{< relref "/descriptives/" >}}?dataset=0076&item=time_perception_clock) | Time perception | rating_scale | 5 | Before seeing the survey notification, how was time passing for you compared to the time on the clock? | 1. Much slower<br>2. Somewhat slower<br>3. Neutral<br>4. Somewhat faster<br>5. Much faster |  |  | ESM | time perception |  |
| time_orientation | Time orientation of thoughts | categorical | 3 | The next question asks you to reflect on what you were thinking about before seeing the survey notification. A thought that you would mark as present-focused is a thought about something occurring in the moment it is happening. A thought about anything occurring before should be marked as past-focused, and a thought about anything after should be marked as future-focused.<br>Before seeing the survey notification, how would you best characterize your thoughts? | 1. Past-focused<br>2. Present-focused<br>3. Future-focused |  |  | ESM | time perception |  |
| [focus_activity]({{< relref "/descriptives/" >}}?dataset=0076&item=focus_activity) | Focus on activity | rating_scale | 5 | Before seeing the survey notification, what was your mind focused on? | 1. My mind was completely focused on what I was doing.<br>2. My mind was mostly focused on what I was doing.<br>3. My mind was focused on BOTH what I was doing and something else.<br>4. My mind was mostly focused on something other than what I was doing.<br>5. My mind was completely focused on something other than what I was doing. |  |  | ESM | mindfulness, focus, attention |  |
| problem_thoughts | Thoughts about problem | categorical | 3 | Before seeing the survey notification, were you thinking about a particular problem? | 0. No, I was not thinking about a problem.<br>1. Yes, I was thinking about a problem related to something other than what I was doing.<br>2. Yes, I was thinking about a problem related to what I was doing. |  |  | ESM | problem-solving |  |
| [problem_progress]({{< relref "/descriptives/" >}}?dataset=0076&item=problem_progress) | Progress on problem | rating_scale | 3 | How much progress did you make toward the problem while thinking about it? | 0. I made little or no progress.<br>1. I made some progress.<br>2. I figured out a solution. |  |  | ESM | problem-solving |  |
| [time_available]({{< relref "/descriptives/" >}}?dataset=0076&item=time_available) | Available time | rating_scale | 5 | Right now, do you have too much or too little time on your hands? | 1. Too little time<br>2. Somewhat too little<br>3. Just about right<br>4. Somewhat too much<br>5. Too much time |  |  | ESM | time perception |  |
| [sleep_duration]({{< relref "/descriptives/" >}}?dataset=0076&item=sleep_duration) | Sleep duration | rating_scale | 11 | How much sleep did you get last night? | 0. Under 4 Hours<br>4. 4 Hours<br>5. 5 Hours<br>…<br>9. 9 Hours<br>10. Over 10 Hours |  |  | Daily | sleep quality, sleep duration, sleep |  |
| [healthy]({{< relref "/descriptives/" >}}?dataset=0076&item=healthy) | Feeling healthy | rating_scale | 5 | How healthy or unhealthy did you feel yesterday? | 1. Very Unhealthy<br>2. Somewhat Unhealthy<br>3. Neutral<br>4. Somewhat Healthy<br>5. Very Healthy |  |  | Daily | physical health |  |
| [exercise]({{< relref "/descriptives/" >}}?dataset=0076&item=exercise) | Amount of exercise | rating_scale | 5 | How much strenuous exercise did you perform yesterday? | 0. Less than 15 minutes<br>1. 16-30 minutes<br>2. 31-45 minutes<br>3. 46-60 minutes<br>4. More than 60 minutes |  |  | Daily | physical exercise, activity |  |
| [stressed]({{< relref "/descriptives/" >}}?dataset=0076&item=stressed) | Stressfulness | rating_scale | 5 | How laid-back or stressful is your life today? | 1. Very Laid-back<br>2. Somewhat Laid-back<br>3. Neutral<br>4. Somewhat Stressful<br>5. Very Stressful |  |  | Daily | stress, negative affect, affect |  |
| [self_esteem]({{< relref "/descriptives/" >}}?dataset=0076&item=self_esteem) | Self-esteem | rating_scale | 5 | I have high self-esteem today. | 1. Not at all true of me<br>2. Slightly true of me<br>3. Somewhat true of me<br>4. True of me<br>5. Very true of me |  |  | Daily | self-esteem, self-concept |  |
| [productive]({{< relref "/descriptives/" >}}?dataset=0076&item=productive) | Feeling productive | rating_scale | 5 | How productive or unproductive did you feel today? | 1. Very Unproductive<br>2. Somewhat Unproductive<br>3. Neutral<br>4. Somewhat Productive<br>5. Very Productive |  |  | Daily | productivity, positive affect, affect |  |
| mobile_data_access | Access to mobile data | binary | 2 | The optional question below asks you to volunteer information about your current area in order to provide support to the Columbus community.<br>Is your phone able to access 4G/LTE mobile data in your current location? | 0. No<br>1. Yes |  |  | ESM | mobile data, internet access |  |
| [mobile_data_speed]({{< relref "/descriptives/" >}}?dataset=0076&item=mobile_data_speed) | Mobile data speed | rating_scale | 7 | Right now, how would you describe the mobile data speed in your current location? | 1. Very Slow<br>2. Somewhat Slow<br>3. Slightly Slow<br>4. Average<br>5. Slightly Fast<br>6. Somewhat Fast<br>7. Very Fast |  |  | ESM | mobile data, internet access |  |
| mobile_data_speed_open | Mobile data speed description | freetext |  | Right now, how would you describe the mobile data speed in your current location? |  |  |  | ESM | mobile data, internet access |  |
| public_wifi | Access to public wifi | binary | 2 | Is your phone able to access free public Wi-Fi Internet in your current location? | 0. No<br>1. Yes |  |  | ESM | wifi, internet access |  |
| [public_wifi_speed]({{< relref "/descriptives/" >}}?dataset=0076&item=public_wifi_speed) | Public wifi speed | rating_scale | 7 | Right now, how would you describe the Wi-Fi Internet speed in your current location? | 1. Very Slow<br>2. Somewhat Slow<br>3. Slightly Slow<br>4. Average<br>5. Slightly Fast<br>6. Somewhat Fast<br>7. Very Fast |  |  | ESM | wifi, internet access |  |
| public_wifi_speed_open | Public wifi speed description | freetext |  | Right now, how would you describe the Wi-Fi Internet speed in your current location? |  |  |  | ESM | wifi, internet access |  |
| survey_error | Survey error | binary |  | completed more than once, out-of-order, on a different day than the first<br>survey of the day, or on the wrong day based on the beginning of the study period |  |  |  | ESM |  |  |

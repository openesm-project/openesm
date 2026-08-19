---
title: "Ballou (2025)"
date: 2026-08-19
draft: false
dataset_id: "0075_ballou"
first_author: "Ballou"
year: 2025
paper_doi: "https://doi.org/10.31234/osf.io/nz96c_v1"
zenodo_doi: "10.5281/zenodo.21495793"
license: "CC0 1.0 - modified"
n_participants: 1284
n_time_points: 30
n_days: "30"
topics: "videogames, gaming, well-being, mental health"
sampling_scheme: "1x/day at 2 pm local time"
participants: "18-40 year old people who play video games"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.21495793">10.5281/zenodo.21495793</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0075_ballou")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0075_ballou")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Ballou</li>
<li><strong>Year:</strong> 2025</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.31234/osf.io/nz96c_v1">https://doi.org/10.31234/osf.io/nz96c_v1</a></li>
<li><strong>Topics:</strong> videogames, gaming, well-being, mental health</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 1284 (18-40 year old people who play video games)</li>
<li><strong>Time Points:</strong> 30</li>
<li><strong>Days:</strong> 30</li>
<li><strong>Beeps per Day:</strong> 1</li>
<li><strong>Sampling Scheme:</strong> 1x/day at 2 pm local time</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

<div class="dataset-meta-card">
<h2>Data Availability</h2>
<ul>
<li><strong>Cross-sectional Data:</strong> yes</li>
<li><strong>Passive Sensor Data:</strong> yes</li>
<li><strong>License:</strong> CC0 1.0 - modified</li>
</ul>
<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.21495793">10.5281/zenodo.21495793</a></p>
<p><strong>Original Source Data:</strong> <a href="https://github.com/digital-wellbeing/open-play/tree/main/data">https://github.com/digital-wellbeing/open-play/tree/main/data</a> <span class="dataset-link-note">(not harmonized, for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://github.com/digital-wellbeing/open-play/blob/main/codebook.xlsx">https://github.com/digital-wellbeing/open-play/blob/main/codebook.xlsx</a></p>
<p><strong>Code:</strong> <a href="https://github.com/digital-wellbeing/open-play/blob/main/data-process.qmd">https://github.com/digital-wellbeing/open-play/blob/main/data-process.qmd</a></p>
</div>
</div>

## Additional Comments

Part of the "open play" project; more video game and time use data and additional surveys available on Zenodo and GitHub (https://github.com/digital-wellbeing/open-play). Find the modified license on GitHub and Zenodo.


## Citation

Ballou, N., Földes, T. A., Vuorre, M., Hakman, T., Magnusson, K., & Przybylski, A. K. (2025, November 14). Open Play: A longitudinal dataset of multi-platform video game digital trace data and psychological measures. https://doi.org/10.31234/osf.io/nz96c_v1




## Changelog

No changes yet.

## Variables

<p class="dataset-note">Linked variable names point to item-level distributional statistics on the <a href="{{< relref "/descriptives/" >}}">Descriptives</a> page.</p>

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| date | Date | Date |  |  |  |  |  | ESM |  |  |
| survey_duration | Survey Duration | numeric |  |  |  |  |  | ESM |  |  |
| played24hr | Played Last 24 Hours | binary |  |  |  |  |  | ESM | video games, activity, context |  |
| [gaming_autonomy]({{< relref "/descriptives/" >}}?dataset=0075&item=gaming_autonomy) | Played Way I Wanted | rating_scale | 7 | I could play in the way I wanted. | 1 = Strongly Disagree<br>4 = Neither Agree nor Disagree<br>7 =  Strongly agree |  | BANGS | ESM | video games, autonomy, self-determination |  |
| [gaming_wish_else]({{< relref "/descriptives/" >}}?dataset=0075&item=gaming_wish_else) | Wished Do Something Else | rating_scale | 7 | I often found myself wishing I could do something else. | 1 = Strongly Disagree<br>4 = Neither Agree nor Disagree<br>7 =  Strongly agree |  | BANGS | ESM | video games |  |
| [gaming_progress]({{< relref "/descriptives/" >}}?dataset=0075&item=gaming_progress) | Made Progress | rating_scale | 7 | I felt that I made progress while playing. | 1 = Strongly Disagree<br>4 = Neither Agree nor Disagree<br>7 =  Strongly agree |  | BANGS | ESM | video games, performance |  |
| [gaming_disappointed]({{< relref "/descriptives/" >}}?dataset=0075&item=gaming_disappointed) | Disappointed with Performance | rating_scale | 7 | I felt disappointed with my performance. | 1 = Strongly Disagree<br>4 = Neither Agree nor Disagree<br>7 =  Strongly agree |  | BANGS | ESM | video games, performance |  |
| [gaming_relationships]({{< relref "/descriptives/" >}}?dataset=0075&item=gaming_relationships) | Formed Relationships | rating_scale | 7 | I felt I formed relationships with other players and/or characters. | 1 = Strongly Disagree<br>4 = Neither Agree nor Disagree<br>7 =  Strongly agree |  | BANGS | ESM | video games, relationship, social interaction |  |
| [gaming_toxic]({{< relref "/descriptives/" >}}?dataset=0075&item=gaming_toxic) | Toxic Interactions | rating_scale | 7 | Interactions with other players and/or characters felt toxic to me. | 1 = Strongly Disagree<br>4 = Neither Agree nor Disagree<br>7 =  Strongly agree |  | BANGS | ESM | video games, social interaction |  |
| social_singleplayer | Single-player | other |  | While gaming today, what kind of social interaction did you take part in?<br>Single-player games only |  |  |  | ESM | video games, activity, context |  |
| social_friends_realworld | Real-world Friends | other |  | While gaming today, what kind of social interaction did you take part in? <br>Multiplayer with real-world friends |  |  |  | ESM | video games, activity, context |  |
| social_friends_online | Online-only Friends | other |  | While gaming today, what kind of social interaction did you take part in? <br>Multiplayer with online-only friends |  |  |  | ESM | video games, activity, context |  |
| social_strangers | Strangers | other |  | While gaming today, what kind of social interaction did you take part in? <br>Multiplayer with strangers |  |  |  | ESM | video games, activity, context |  |
| most_recent_game | Most Recent Game | freetext |  | What is the name of the game you most recently played?<br>This text will be copied into certain other questions, so please write only the game name and use abbreviations if needed. |  |  |  | ESM | video games, activity, context |  |
| most_recent_game_plat | Most Recent Game Platform | categorical | 7 | Which platform did this session take place on? | Steam; <br>Playstation; <br>Xbox; <br>Nintendo Switch; <br>iOS; <br>Android; <br>Other (text entry) |  |  | ESM | video games, activity, context |  |
| displaced_activity | Displaced Activity | freetext |  | Think back to your most recent gaming session. If you hadn't played a game, what would you most likely have done instead? |  |  |  | ESM | video games, activity, context |  |
| [needs_autonomy_satisfied]({{< relref "/descriptives/" >}}?dataset=0075&item=needs_autonomy_satisfied) | Able to Do Valued Things | rating_scale | 7 | The next statements tap into your experiences today. Please indicate for each of the statements to what extent they are true for you.Today...<br>... I was able to do things that I really want and value in life. | 1 = very strongly disagree<br>2 = strongly disagree<br>3 = disagree<br>4 = neither disagree nor agree<br>5 = agree<br>6 = strongly agree<br>7 = very strongly agree |  | BPNSFS brief version | ESM | autonomy, self-determination, need satisfaction, basic psychological needs |  |
| [needs_autonomy_frustrated]({{< relref "/descriptives/" >}}?dataset=0075&item=needs_autonomy_frustrated) | Forced to Do Things | rating_scale | 7 | The next statements tap into your experiences today. Please indicate for each of the statements to what extent they are true for you.Today...<br>... I felt forced to do many things I wouldn’t choose to do. | 1 = very strongly disagree<br>2 = strongly disagree<br>3 = disagree<br>4 = neither disagree nor agree<br>5 = agree<br>6 = strongly agree<br>7 = very strongly agree |  | BPNSFS brief version | ESM | self-determination, need frustration, basic psychological needs |  |
| [needs_competence_satisfied]({{< relref "/descriptives/" >}}?dataset=0075&item=needs_competence_satisfied) | Could Do Things Well | rating_scale | 7 | The next statements tap into your experiences today. Please indicate for each of the statements to what extent they are true for you.Today...<br>... I could do things well and achieve my goals. | 1 = very strongly disagree<br>2 = strongly disagree<br>3 = disagree<br>4 = neither disagree nor agree<br>5 = agree<br>6 = strongly agree<br>7 = very strongly agree |  | BPNSFS brief version | ESM | competence, need satisfaction, competence satisfaction, mastery, self-efficacy, basic psychological needs |  |
| [needs_competence_frustrated]({{< relref "/descriptives/" >}}?dataset=0075&item=needs_competence_frustrated) | Insecure about Abilities | rating_scale | 7 | The next statements tap into your experiences today. Please indicate for each of the statements to what extent they are true for you.Today...<br>... I felt insecure about my abilities. | 1 = very strongly disagree<br>2 = strongly disagree<br>3 = disagree<br>4 = neither disagree nor agree<br>5 = agree<br>6 = strongly agree<br>7 = very strongly agree |  | BPNSFS brief version | ESM | competence, need satisfaction, competence satisfaction, insecurity, self-efficacy, basic psychological needs |  |
| [needs_relatedness_satisfied]({{< relref "/descriptives/" >}}?dataset=0075&item=needs_relatedness_satisfied) | Felt Close and Connected | rating_scale | 7 | The next statements tap into your experiences today. Please indicate for each of the statements to what extent they are true for you.Today...<br>... I felt close and connected with other people whom I care about and who care about me. | 1 = very strongly disagree<br>2 = strongly disagree<br>3 = disagree<br>4 = neither disagree nor agree<br>5 = agree<br>6 = strongly agree<br>7 = very strongly agree |  | BPNSFS brief version | ESM | relatedness, social connectedness, need satisfaction, basic psychological needs |  |
| [needs_relatedness_frustrated]({{< relref "/descriptives/" >}}?dataset=0075&item=needs_relatedness_frustrated) | Felt Excluded | rating_scale | 7 | The next statements tap into your experiences today. Please indicate for each of the statements to what extent they are true for you.Today...<br>... I felt excluded from the group I want to belong to. | 1 = very strongly disagree<br>2 = strongly disagree<br>3 = disagree<br>4 = neither disagree nor agree<br>5 = agree<br>6 = strongly agree<br>7 = very strongly agree |  | BPNSFS brief version | ESM | relatedness, social connectedness, social exclusion, need satisfaction, basic psychological needs |  |
| bpnsfs_dup_item | Duplicated Item | other |  |  |  |  |  | ESM |  | One BPNSFS was duplicated for attention checking. See the manuscript describing the dataset for more details. |
| bpnsfs_dup_score | Duplicated Item Score | other |  |  |  |  |  | ESM |  |  |
| bpnsfs_failed_att_check | Failed Attention Check | other |  |  |  |  |  | ESM |  |  |
| had_stress | Had Stress | binary | 2 | Did anything happen to you in the last 24 hours that most people would consider stressful? | Yes<br>No |  |  | ESM | negative event, stress |  |
| stress_events_argument | Argument | categorical | 1 | Argument or disagreement |  |  |  | ESM | negative event, stress, argument, social stress, social conflict | Only non-missing when present |
| stress_events_discrimination | Discrimination | categorical | 1 | Discrimination |  |  |  | ESM | negative event, stress, discrimination, social conflict | Only non-missing when present |
| stress_events_friend_rel | Friend or Relative | categorical | 1 | Issue affecting a friend or relative |  |  |  | ESM | negative effent, stress, social stress | Only non-missing when present |
| stress_events_health | Health | categorical | 1 | Health issue |  |  |  | ESM | negative event, stress, physical health | Only non-missing when present |
| stress_events_home | Home | categorical | 1 | Home issue |  |  |  | ESM | negative event, stress | Only non-missing when present |
| stress_events_other | Other | categorical | 1 | Other |  |  |  | ESM | negative event, stress | Only non-missing when present |
| stress_events_work_school | Work or School | categorical | 1 | Work or school issue |  |  |  | ESM | negative event, stress, work, school | Only non-missing when present |
| [how_stressful_argument]({{< relref "/descriptives/" >}}?dataset=0075&item=how_stressful_argument) | How Stressful Argument | rating_scale | 4 | How stressful was this stressful event? <br>Argument or disagreement | 1 = not at all <br>2 = not very <br>3 = somewhat <br>4 = very |  |  | ESM | negative event, stress, argument, social stress, social conflict |  |
| how_stressful_discrimination | How Stressful Discrimination | rating_scale | 4 | How stressful was this event?<br>Discrimination | 1 = not at all <br>2 = not very <br>3 = somewhat <br>4 = very |  |  | ESM | negative event, stress, discrimination, social conflict |  |
| [how_stressful_friend_rel]({{< relref "/descriptives/" >}}?dataset=0075&item=how_stressful_friend_rel) | How Stressful Friend or Relative | rating_scale | 4 | How stressful was this event?<br>Issue affecting a friend or relative | 1 = not at all <br>2 = not very <br>3 = somewhat <br>4 = very |  |  | ESM | negative effent, stress, social stress |  |
| [how_stressful_health]({{< relref "/descriptives/" >}}?dataset=0075&item=how_stressful_health) | How Stressful Health | rating_scale | 4 | How stressful was this event?<br>Health issue | 1 = not at all <br>2 = not very <br>3 = somewhat <br>4 = very |  |  | ESM | negative event, stress, physical health |  |
| [how_stressful_home_issue]({{< relref "/descriptives/" >}}?dataset=0075&item=how_stressful_home_issue) | How Stressful Home | rating_scale | 4 | How stressful was this event?<br>Home issue | 1 = not at all <br>2 = not very <br>3 = somewhat <br>4 = very |  |  | ESM | negative event, stress |  |
| [how_stressful_other]({{< relref "/descriptives/" >}}?dataset=0075&item=how_stressful_other) | How Stressful Other | rating_scale | 4 | How stressful was this event?<br>Other | 1 = not at all <br>2 = not very <br>3 = somewhat <br>4 = very |  |  | ESM | negative event, stress |  |
| [how_stressful_work_school]({{< relref "/descriptives/" >}}?dataset=0075&item=how_stressful_work_school) | How Stressful Work or School | rating_scale | 4 | How stressful was this event?<br>Work or school issue | 1 = not at all <br>2 = not very <br>3 = somewhat <br>4 = very |  |  | ESM | negative event, stress, work, school |  |
| affective_valence | Affective Valence | numeric | 101 | How are you feeling right now? |  |  |  | ESM | affect, valence |  |
| [life_satisfaction]({{< relref "/descriptives/" >}}?dataset=0075&item=life_satisfaction) | Life Satisfaction | rating_scale | 101 | I was satisfied with my life today. |  |  |  | ESM | life satisfaction, well-being |  |
| day_type | Day Type | categorical | 6 | Which best describes today for you? | Regular work day<br>Regular day off<br>Weekend<br>Holiday<br>Vacation day <br>Other (please specify) |  |  | ESM | context |  |
| [sleep_quality]({{< relref "/descriptives/" >}}?dataset=0075&item=sleep_quality) | Sleep Quality | rating_scale | 5 | How do you rate the quality of your sleep?<br>"Sleep Quality" is your sense of whether you slept well or poorly. | 1 = very poor<br>2 = poor<br>3 = fair <br>4 = good <br>5 = very good |  |  | ESM | sleep quality, sleep |  |
| baseline_day | Baseline Day | Date |  |  |  |  |  | ESM |  |  |
| ideal_baseline_day | Ideal Baseline Day | Date |  |  |  |  |  | ESM |  |  |
| n_valid |  | numeric |  |  |  |  |  | ESM |  |  |
| original_wave |  | other |  |  |  |  |  | ESM |  |  |

---
title: "Westhoff (2024)"
date: 2025-10-01
draft: false
---


## Study Information

- **First Author:** Westhoff
- **Year:** 2024
- **Paper DOI:** [https://doi.org/10.1038/s41598-024-58598-3](https://doi.org/10.1038/s41598-024-58598-3)
- **Topics:** psychological flexibility, cognition, affect

## Data Characteristics

- **Participants:** 114 (young adults)
- **Time Points:** 105
- **Days:** 21
- **Beeps per Day:** 5
- **Sampling Scheme:** 5x/day semi-random schedule
- **Raw Timestamp:** yes
- **Implicit Missingness:** no

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** yes
- **Link to Original Data:** [https://doi.org/10.1038/s41598-024-58598-3](https://doi.org/10.1038/s41598-024-58598-3)
- **Link to Codebook:** [-](-)
- **Link to Code:** [https://osf.io/ejtzs/](https://osf.io/ejtzs/)
- **License:** CC-BY4.0

## Data Access

- **Zenodo DOI:** not available
- **R:** `openesm::get_dataset("0008_westhoff")`
- **Python:** `openesm.get_dataset("0008_westhoff")`

## Additional Comments

item coding based on private codebook


## Citation

Westhoff, M., Heshmati, S., Siepe, B. S., Vogelbacher, C., Ciarrochi, J., Hayes, S. C., & Hofmann, S. G. (2024). Psychological flexibility and cognitive-affective processes in young adults’ daily lives. Scientific Reports, 14(1), 8182. https://doi.org/10.1038/s41598-024-58598-3




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| scheduled_time | Scheduled time | PosixCt |  |  |  |  |  | ESM |  |  |
| response_time | Response time | PosixCt |  |  |  |  |  | ESM |  |  |
| weekday | Day of the week | other |  |  |  |  |  | ESM |  |  |
| location_latitude | Latitude | numeric |  |  |  |  |  | Passive |  |  |
| location_longitude | Longitude | numeric |  |  |  |  |  | Passive |  |  |
| start_date | Start of survey | PosixCt |  |  |  |  |  | ESM |  |  |
| end_date | End of survey | PosixCt |  |  |  |  |  | ESM |  |  |
| duration_in_seconds | Duration of survey | numeric |  |  |  |  |  | ESM |  |  |
| finished | Finished survey | binary | 2 |  | NA = no<br>1 = yes |  |  | ESM |  |  |
| negative_affect_behavior | negative affect behavior | rating_scale | 101 | I am not finding an appropriate outlet for my emotions. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | emotion regulation | item does not seem to measure affect (as indicated by authors) but rather emotion regulation |
| positive_affect_behavior | positive affect behavior | rating_scale | 101 | I am able to experience a range of emotions appropriate to the moment. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | emotion regulation | item does not seem to measure affect (as indicated by authors) but rather emotion regulation |
| negative_cognition_behavior | negative cognition behavior | rating_scale | 101 | My thinking is getting in the way of things that are important to me. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | intrusive thinking, cognitive control, executive functioning, self-regulation |  |
| positive_cognition_behavior | positive cognition behavior | rating_scale | 101 | I am using my thinking in ways that help me live better. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | adaptive thinking, cognitive control, executive functioning, self-regulation |  |
| negative_attention_behavior | negative attention behavior | rating_scale | 101 | I am struggling to connect with the present moment. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | mindfulness, executive functioning |  |
| positive_attention_behavior | positive attention behavior | rating_scale | 101 | I am paying attention to important things in my life. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | attentional control, executive functioning |  |
| negative_social_connection_behavior | negative social connection behavior | rating_scale | 101 | I am doing things that hurt my connection with people who are important to me. | 0 = fully disagree<br>100 = fully agre |  | Process-Based Assessment Tool (PBAT) | ESM | social connection, social interaction |  |
| positive_social_connection_behavior | positive social connection behavior | rating_scale | 101 | I am doing things to connect with people who are important to me. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | social connection, social interaction |  |
| negative_motivation_behavior | negative motivation behavior | rating_scale | 101 | I am doing things only because I am complying with what others want me to do. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | compliance, social interaction |  |
| positive_motivation_behavior | positive motivation behavior | rating_scale | 101 | I am choosing to do things that are personally important to me. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | goal prioritization, motivation, self-regulation |  |
| negative_overt_behavior | negative overt behavior | rating_scale | 101 | I am not finding a meaningful way to challenge myself. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | personal growth, self-improvement, motivation, self-regulation |  |
| positive_overt_behavior | positive overt behavior | rating_scale | 101 | I am finding personally important ways to challenge myself. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | personal growth, self-improvement, motivation, self-regulation |  |
| negative_physical_health_behavior | negative physical health behavior | rating_scale | 101 | I am acting in ways that hurt my physical health. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | health-impairing behaviors, physical health |  |
| positive_physical_health_behavior | positive physical health behavior | rating_scale | 101 | I am acting in ways that help my physical health. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | health-supporting behaviors, physical health |  |
| negative_change_behavior | negative change behavior | rating_scale | 101 | I am feeling stuck and unable to change my ineffective behavior. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | behavior change-abilites, self-regulation |  |
| positive_change_behavior | positive change behavior | rating_scale | 101 | I am able to change my behavior, so that it helps my life. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | behavior change-abilites, self-regulation |  |
| negative_behavior_retention | negative behavior retention | rating_scale | 101 | I am struggling to keep doing something that is good for me. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | behavior persistence, self-regulation |  |
| positive_behavior_retention | positive behavior retention | rating_scale | 101 | I am sticking to strategies that seem to work. | 0 = fully disagree<br>100 = fully agree |  | Process-Based Assessment Tool (PBAT) | ESM | behavior persistence, self-regulation |  |
| affect_valence | affect valence | rating_scale | 101 | How do you feel right now? | 0 = Very bad<br>100 = Very good |  |  | ESM | affect |  |
| affect_arousal | affect arousal | rating_scale | 101 | How physically active do you feel right now? | 0 = Not active<br>100 = Very active |  |  | ESM | physical activity, arousal |  |
| life_satisfaction | Life Satisfaction (reverse-coded) | rating_scale | 4 | In general, how satisfied are you with your life? | 1 = Very Satisfied<br>4 = Very Dissatisfied |  |  | ESM | life satisfaction, well-being |  |
| depressed | Depression | rating_scale | 101 | Feeling sad, down, or uninterested in life? | 0 = fully disagree<br>100 = fully agree |  | STOP-D | ESM | depression, negative affect, affect, neuroticism, big five, psychopathology |  |
| anxious | Anxiety | rating_scale | 101 | Feeling anxious or nervous? | 0 = fully disagree<br>100 = fully agree |  | STOP-D | ESM | anxiety, negative affect, affect, neuroticism, big five |  |
| stressed | Stress | rating_scale | 101 | Feeling stressed? | 0 = fully disagree<br>100 = fully agree |  | STOP-D | ESM | stress, negative affect, affect |  |
| angry | Angry | rating_scale | 101 | Feeling angry? | 0 = fully disagree<br>100 = fully agree |  | STOP-D | ESM | anger, negative affect, affect |  |
| lacking_support | Social Support lacking | rating_scale | 101 | Not having the social support you feel you need? | 0 = fully disagree<br>100 = fully agree |  | STOP-D | ESM | social support, social interaction |  |
| sleep_duration | Sleep duration | numeric |  | How many hours did you sleep last night? |  |  |  | Daily | sleep duration, sleep |  |
| sleep_quality | Sleep quality | rating_scale | 101 | How would you rate your sleep quality last night? |  |  |  | Daily | sleep quality, sleep |  |
| counter | Counter | numeric |  |  |  |  |  | ESM |  |  |

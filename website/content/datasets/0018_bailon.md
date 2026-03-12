---
title: "Bailon (2020)"
date: 2026-03-12
draft: false
dataset_id: "0018_bailon"
first_author: "Bailon"
year: 2020
paper_doi: "https://doi.org/10.1038/s41597-020-00700-1"
zenodo_doi: "10.5281/zenodo.17347690"
license: "CC-BY 4.0"
n_participants: 999
n_time_points: 444
n_days: "86"
topics: "COVID, affect, pandemic, valence, arousal, context"
sampling_scheme: "6x/day pseudo-random one-hour intervals"
participants: "community sample"
---

<div class="dataset-access-box">
<h2 class="dataset-access-title">Access Harmonized Data</h2>
<p class="dataset-access-doi"><strong>Zenodo DOI:</strong> <a href="https://doi.org/10.5281/zenodo.17347690">10.5281/zenodo.17347690</a></p>
<div class="dataset-code-grid">
<div class="dataset-code-item"><span class="dataset-code-label">R</span> <code>openesm::get_dataset("0018_bailon")</code></div>
<div class="dataset-code-item"><span class="dataset-code-label">Python</span> <code>openesm.get_dataset("0018_bailon")</code></div>
</div>
</div>

<div class="dataset-meta-grid">
<div class="dataset-meta-card">
<h2>Study Information</h2>
<ul>
<li><strong>First Author:</strong> Bailon</li>
<li><strong>Year:</strong> 2020</li>
<li><strong>Paper DOI:</strong> <a href="https://doi.org/10.1038/s41597-020-00700-1">https://doi.org/10.1038/s41597-020-00700-1</a></li>
<li><strong>Topics:</strong> COVID, affect, pandemic, valence, arousal, context</li>
</ul>
</div>
<div class="dataset-meta-card">
<h2>Data Characteristics</h2>
<ul>
<li><strong>Participants:</strong> 999 (community sample)</li>
<li><strong>Time Points:</strong> 444</li>
<li><strong>Days:</strong> 86</li>
<li><strong>Beeps per Day:</strong> 6</li>
<li><strong>Sampling Scheme:</strong> 6x/day pseudo-random one-hour intervals</li>
<li><strong>Raw Timestamp:</strong> yes</li>
<li><strong>Implicit Missingness:</strong> yes</li>
</ul>
</div>
</div>

## Data Availability

- **Cross-sectional Data:** yes
- **Passive Sensor Data:** no
- **License:** CC-BY 4.0

<div class="dataset-links">
<p><strong>Harmonized Data (Zenodo):</strong> <a href="https://doi.org/10.5281/zenodo.17347690">10.5281/zenodo.17347690</a></p>
<p><strong>Original Source Data:</strong> <a href="http://doi.org/10.5281/zenodo.3774526">http://doi.org/10.5281/zenodo.3774526</a> <span class="dataset-link-note">(not harmonized — for reference only)</span></p>
<p><strong>Codebook:</strong> <a href="https://zenodo.org/records/4024141">https://zenodo.org/records/4024141</a></p>

</div>

## Additional Comments

no beep information available; number of max. time points taken as maximum of observations in data


## Citation

Bailon, C., Goicoechea, C., Banos, O., Damas, M., Pomares, H., Correa, A., Sanabria, D., & Perakakis, P. (2020). CoVidAffect, real-time monitoring of mood variations following the COVID-19 outbreak in Spain. Scientific Data, 7(1), 365. https://doi.org/10.1038/s41597-020-00700-1




## Changelog

No changes yet.

## Variables

| Name | Description | Type | Answer Categories | Details | Labels | Transformation | Source | Assessment Type | Construct | Comments |
|------|-------------|------|------------------|---------|--------|----------------|--------|----------------|----------|----------|
| id | Participant ID | categorical |  |  |  |  |  | ESM |  |  |
| day | Day of study | other |  |  |  |  |  | ESM |  |  |
| beep | Beep of the day | other |  |  |  |  |  | ESM |  |  |
| timestamp_issued | Timestamp survey issued | PosixCt |  |  |  |  |  | ESM |  |  |
| timestamp_answer | Timestamp survey answered | PosixCt |  |  |  |  |  | ESM |  |  |
| valence | Valence | rating_scale | 101 | How do you feel right now? | -50 = Very bad<br>50 = Very good |  | the Feeling Scale <br>(https://doi.org/10.1123/jsep.11.3.304) | ESM | valence, affect |  |
| arousal | Arousal | rating_scale | 101 | How physically active do you feel right now? | 0 = Not active<br>100 = Active |  | the Felt Arousal Scale<br>(https://doi.org/10.1123/jsep.11.3.304) | ESM | arousal, affect |  |
| valence_slider_initial | Slider initialisation valence | rating_scale | 101 |  |  |  |  | ESM | slider, measurement |  |
| arousal_slider_initial | Slider initialisation arousal | rating_scale | 101 |  |  |  |  | ESM | slider, measurement |  |
| input_method | Survey input method | categorical | 3 |  | One of {‘App’, ‘Web’, ‘Both’} |  |  | ESM |  |  |

---
title: "Updates: Paper published, new dataset & features"
date: 2026-07-17
categories: ["news"]
summary: "Our tutorial paper on openESM has been published, and we have added new datasets and features to the platform."
---

It has been around nine months since we launched openESM. Since then, we have been working on improving the user experience in the platform in terms of understanding the data better and making it easier to find relevant items. The publication of our introductory paper seems like a good time to summarize the recent updates and new features in openESM.

## Introductory paper out now

Our introductory paper on openESM has been published in *Behavior Research Methods*. It provides an overview of the platform, including its design, data harmonization processes, and how users can access and use the datasets. We also provide an example analysis on the momentary within-person correlations of positive and negative affect to illustrate the potential of openESM. You can read the full open-access paper [here](https://doi.org/10.3758/s13428-026-03112-y).

## New dataset: Sicorello et al. (2024)

We have added a new dataset to openESM. Sicorello et al. (2024) investigated emotion regulation difficulties in everyday life in 214 adults over 10 days with 6 beeps per day. You can explore the dataset [here](/datasets/0073_sicorello/). We currently have several new datasets lined up for addition to openESM, so stay tuned for more updates in the coming months.

## Descriptives explorer

One of the first steps in every modeling workflow is to get a basic understanding of the data. As we have argued before in [our paper on understanding EMA data](https://doi.org/10.1177/25152459241286877), this is particularly important for EMA/ESM data, which is often complex and high-dimensional. Many of the items in ESM studies show properties that can be a challenge for modeling, such as floor/ceiling effects, skewed distributions, and low within-person variance. 

To help users get a quick first insight into individual items, we have added a new descriptives explorer to openESM. By clicking on an item in the dataset view, or by going to the [descriptives page](/descriptives/) directly, you can now see a summary of the distributional properties of the item, including its mean, standard deviation, skewness, floor/ceiling effects, and mode counts. These properties are computed per participant, so that you can immediately get a sense of interindividual variability. See this screenshot for an example of the descriptives for the item "difficulties_relaxing" in the Fried (2021) dataset: 

![Screenshot of the descriptives explorer, showing distributional summaries of an item](../images/descriptives-screenshot.png)

Needless to say, we used simple and quick methods to compute these properties and applied arbitrary exclusion and visualization choices. It's intended as a starting point for exploring the data, and for maybe identifying items that show surprising patterns. 

## Semantic similarity for items

One of the most challenging tasks when creating openESM was the harmonization of items across datasets, and annotating which constructs they belong to. Often, items are phrased slightly differently across studies, and it can be hard to identify which items are similar to each other. This is particularly challenging for items that were created for a specific study and do not map cleanly onto, for example, commonly used affect items. 

To help users explore items more easily, we have added a semantic similarity feature to openESM. For each item, you can now see a list of the 10 most similar items from other datasets, and a quick overview of how similar they are. We hope that this feature will help users find relevant items more easily, and also help them identify items that are similar to each other but phrased differently.

We obtained the semantic similarity information by applying an [off-the-shelf sentence embedding model](https://huggingface.co/BAAI/bge-large-en-v1.5) to the item descriptions and details, and then computing the cosine similarity between the embeddings. We then stored the 10 most similar items for each item (excluding items from the same dataset). For the same "difficulties_relaxing" item in the Fried (2021) dataset, we here see a screenshot of the semantic similarity feature: 

![Screenshot of the semantic similarity feature, indicating 10 items in other datasets and their similarities](../images/similarity-screenshot.png)

Like the descriptives explorer, this feature is intended as a starting point for exploring the data in more detail. There are good reasons for why similarity might be surprisingly low or high. For example, items might tap into the same construct but be phrased very differently. Conversely, our similarity calculation can also capture the wording of the item that is not relevant for the construct itself, which can lead to high similarity scores for items that are not actually measuring the same construct. For example, two items in different datasets might be phrased as "How *[item]* did you feel right before opening this questionnaire?". Even if they might be measuring different constructs, they might have a high similarity score because of the similar wording.

## Next up

We are currently working on adding more datasets to openESM, and we are also working on a simpler way to add new datasets for contributors. If you'd like to help us, please reach out to us! Also, if you have any new feature ideas or feedback on the current features, please let us know. 
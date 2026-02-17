---
title: "About"
# prevent showing posts
type: "docs"
layout: "single"
---

We came together to create an open database of experience sampling datasets primarily from psychological research. Our goal is to provide easy access to experience sampling datasets, standardize metadata across studies, and enable researchers to find relevant datasets through filtering and search. More details on the datasets, metadata, and technical details can be found in the [Documentation]({{< relref "docs/" >}}).

## Getting Started

Getting started with openESM is straightforward. Follow these steps to find and use datasets:

### 1. Explore Available Datasets
- **Browse all datasets**: Visit our [Datasets]({{< relref "/datasets/" >}}) page to see the complete overview table with key information about each study
- **Search by criteria**: Use the [Search]({{< relref "/search/" >}}) page to filter datasets by constructs, sample size, study duration, or other characteristics

### 2. Generate Access Code
Once you've found a relevant dataset, use our code generator on the dataset's page to create the appropriate command for your preferred programming language:

**R Package:**
```r
# install if needed: install.packages("openesm")
openesm::get_dataset("dataset_id")
```

**Python Package:**
```python
# install if needed: pip install openesm
import openesm
openesm.get_dataset("dataset_id")
```

### 3. Download and Use Responsibly
- The packages will automatically download the standardized dataset files
- **Check licensing**: Each dataset page contains specific license information - ensure you comply with these terms
- **Cite properly**: Use the provided citation information for both the original study and the openESM database
- **Review documentation**: Each dataset includes detailed variable descriptions and methodology information

For technical details about the data structure and metadata, see our [Documentation]({{< relref "/docs/" >}}).

## Your resposibility
We built openESM as a hopefully useful service to the research community, but we are deeply grateful to the original dataset owners who made their work openly available. It is crucial to properly credit their contributions to ensure that data sharing remains worthwhile and sustainable for the research community.

While we only include datasets that are openly available or for which we have obtained permission for reuse, you are responsible for ensuring compliance with the terms of use of each dataset. This includes checking for the license information of every dataset you use, as well as ensuring that you have the right to use the data for your intended purpose. We do not take responsibility for any misuse of the datasets or any legal issues that may arise from their use.

### How to Cite

When using datasets from openESM in your research, please cite:

1. **The original authors** - citation information is provided on each dataset's page. Sometimes, there are multiple relevant publications; please make sure to cite all appropriate sources.
2. **The openESM database** - using our introduction paper:


> Siepe, B. S., Haslbeck, J. M. B., Kloft, M., Büchner, A., Zhang, Y., Fried, E. I., & Heck, D. W. (2025, October 22). Introducing openESM: A database of openly available experience sampling datasets. https://doi.org/10.31234/osf.io/qfdtb_v1


## How did we create openESM?
More details are available in our [introduction paper](https://doi.org/10.31234/osf.io/qfdtb_v1).


## Contributors

Our team includes: 
- Björn S. Siepe (Marburg University), main creator and maintainer
- Jonas M.B. Haslbeck (University of Amsterdam)
- Matthias Kloft (Marburg University)
- Yong Zhang (University of Groningen)
- Anabel Büchner (Humboldt University Berlin)
- Eiko I. Fried (Leiden University)
- Daniel W. Heck (Marburg University)

We are grateful for all researchers who have contributed datasets to the openESM database. If you would like to contribute your own dataset, please refer to our [Contributing Guide]({{< relref "docs/contributing/" >}}).

## Contact us
If you have any questions, suggestions, or feedback, please feel free to reach out to us at bjoernsiepe+openesm[at]gmail.com. We are always happy to hear from you and will try to continuously improve the openESM database.
---
title: "openESM: Open Experience Sampling Method Database"
# prevent showing posts
hidemeta: true
# Hide the default list of posts
hideposts: true
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>openESM: Open Experience Sampling Method Database</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* Color Palette Variables */
        :root {
            --primary-blue: #085AB3;
            --accent-orange: #E78A00;
            --text-charcoal: #262626;
            --bg-offwhite: #FDFDFD;
            --light-gray: #f5f5f5;
            --border-gray: #e0e0e0;
            --hover-gray: #f0f0f0;
        }
        /* General Body Styles */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: var(--text-charcoal);
            background-color: white; /* Default background */
        }
        /* Hero Section */
        .hero-section {
            color: var(--text-charcoal);
            padding: 0px 20px 20px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .hero-section h1 {
            font-size: 3em;
            margin-bottom: 10px;
            line-height: 1.2;
        }
        .hero-section p {
            font-size: 1.2em;
            max-width: 800px;
            margin: 0 auto 30px auto;
        }
        .hero-section p strong { /* Style for bold text within hero paragraph */
            color: var(--text-charcoal); /* Ensure bold text is still visible against blue */
            font-weight: bold;
        }
        .hero-section .cta-button {
            background-color: var(--accent-orange);
            color: white;
            padding: 15px 35px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1.2em;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.2s ease;
            display: inline-block;
        }
        .hero-section .cta-button:hover {
            background-color: #d17a00; /* Manual darken for hover */
            transform: translateY(-2px);
        }
        /* Statistics Section */
        .stats-section {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 35px 20px;
            gap: 30px;
        }
        .stat-box {
            text-align: center;
            flex: 0 0 280px; /* Fixed width, allows wrapping */
            padding: 20px;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .stat-box .icon {
            font-size: 3.5em;
            margin-bottom: 15px;
        }
        .stat-box .number {
            font-size: 3em;
            font-weight: bold;
            color: var(--text-charcoal);
            margin-bottom: 5px;
        }
        .stat-box .label {
            font-size: 1.2em;
            font-weight: bold;
            color: var(--text-charcoal);
            margin-bottom: 5px;
        }
        .stat-box p {
            font-size: 0.95em;
            color: #555;
            max-width: 200px;
            margin: 5px auto 0;
        }
        .stat-box:nth-child(1) .icon { color: var(--primary-blue); }
        .stat-box:nth-child(2) .icon { color: var(--accent-orange); }
        .stat-box:nth-child(3) .icon { color: var(--primary-blue); } /* Consistent blue for 1st and 3rd */
        /* Explore section */
        .explore-section {
            background-color: var(--light-gray);
            padding: 50px 40px;
        }
        .explore-inner {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            align-items: flex-start;
        }
        .explore-col {
            flex: 1;
            padding: 0 40px;
        }
        .explore-col:first-child {
            padding-left: 0;
        }
        .explore-col:last-child {
            padding-right: 0;
        }
        .explore-divider {
            width: 1px;
            background-color: var(--border-gray);
            align-self: stretch;
            flex-shrink: 0;
            min-height: 200px;
        }
        .explore-col h2 {
            font-size: 0.8em;
            font-weight: 700;
            color: var(--text-charcoal);
            margin: 0 0 24px 0;
            padding-bottom: 8px;
            border-bottom: 2px solid var(--primary-blue);
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }
        .explore-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .explore-links li {
            margin-bottom: 18px;
        }
        .explore-links a {
            font-size: 1em;
            font-weight: 600;
            color: var(--primary-blue);
            text-decoration: none;
            transition: color 0.2s ease;
        }
        .explore-links a:hover {
            color: var(--accent-orange);
            text-decoration: none;
        }
        .explore-links p {
            margin: 3px 0 0 0;
            font-size: 0.88em;
            color: #666;
            line-height: 1.45;
        }
        @media (max-width: 768px) {
            .explore-section {
                padding: 35px 20px;
            }
            .explore-inner {
                flex-direction: column;
            }
            .explore-divider {
                width: 100%;
                height: 1px;
                min-height: 0;
                margin: 24px 0;
            }
            .explore-col {
                padding: 0;
            }
        }
        /* modern header improvements */
        .header,
        header.header {
          background: linear-gradient(135deg, var(--primary-blue) 0%, #0a5fb8 100%);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(8, 90, 179, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        /* add subtle glow effect to logo */
        .header .logo a {
          position: relative;
          transition: all 0.3s ease;
        }
        .header .logo a:hover {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        /* modern menu items with better spacing */
        .header .menu a {
          position: relative;
          margin: 0 8px;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        .header .menu a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--accent-orange);
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .header .menu a:hover::after {
          width: 80%;
        }
        /* Responsive Adjustments */
        @media (max-width: 768px) {
            .hero-section {
                padding: 30px 20px 20px 20px;
            }
            .hero-section h1 {
                font-size: 2.2em;
            }
            .hero-section p {
                font-size: 1em;
            }
            .stats-section {
                padding: 25px 20px;
                flex-direction: column;
                align-items: center;
                gap: 25px;
            }
            .how-it-works-section {
                padding: 35px 20px;
            }
            .how-it-works-section h2 {
                margin-bottom: 20px;
            }
            .steps-container {
                flex-direction: column;
                align-items: center;
                margin-bottom: 20px;
            }
            .stat-box, .step-card {
                flex-basis: auto; /* Allow full width on small screens */
                max-width: 90%;
            }
        }
    </style>
</head>
<body>
    <div class="hero-section">
        <h1>A database of open experience sampling datasets</h1>
        <p>openESM is a database of harmonized openly available experience sampling datasets. The platform enables easy reuse of datasets with consistent and detailed metadata standards to advance reproducible research into daily life.</p>
        <a href="{{< relref "/datasets/" >}}" class="cta-button">Start Exploring Datasets</a>
    </div>
    <div class="stats-section">
        <div class="stat-box">
            <div class="icon"><i class="fas fa-database"></i></div>
            <div class="number" data-target="60">0</div>
            <div class="label">Datasets</div>
            <p>Explore our growing collection of datasets.</p>
        </div>
        <div class="stat-box">
            <div class="icon"><i class="fas fa-users"></i></div>
            <div class="number" data-target="16000" data-suffix="+">0</div>
            <div class="label">Individuals</div>
            <p>Obtain insights from thousands of participants.</p>
        </div>
        <div class="stat-box">
            <div class="icon"><i class="fas fa-lightbulb"></i></div>
            <div class="number" data-target="100" data-suffix="+">0</div>
            <div class="label">Constructs</div>
            <p>Investigate a diverse range of psychological variables.</p>
        </div>
    </div>
<div class="explore-section">
    <div class="explore-inner">
        <div class="explore-col">
            <h2>Using openESM</h2>
            <ul class="explore-links">
                <li>
                    <a href="{{< relref "/about/" >}}">About the project</a>
                    <p>What openESM is, how the database is structured, and what kinds of datasets it contains.</p>
                </li>
                <li>
                    <a href="{{< relref "/datasets/" >}}">Browse all datasets</a>
                    <p>View all available datasets with key metadata, participant counts, and variable summaries.</p>
                </li>
                <li>
                    <a href="{{< relref "/search/" >}}">Search by construct</a>
                    <p>Filter datasets by constructs, metadata, or free-text entry.</p>
                </li>
                <li>
                    <a href="{{< relref "/docs/" >}}">Documentation</a>
                    <p>Technical details on data formats, metadata standards, and the R and Python packages.</p>
                </li>
            </ul>
        </div>
        <div class="explore-divider"></div>
        <div class="explore-col">
            <h2>Contributing</h2>
            <ul class="explore-links">
                <li>
                    <a href="{{< relref "/docs/contributing/" >}}">Overview</a>
                    <p>Who can contribute, what kinds of datasets qualify, and how the process works.</p>
                </li>
                <li>
                    <a href="{{< relref "/docs/contributing/#dataset-formatting-guidelines" >}}">Formatting guidelines</a>
                    <p>How to structure your data files and prepare the required metadata.</p>
                </li>
                <li>
                    <a href="{{< relref "/docs/contributing/#adding-a-new-dataset" >}}">Submission process</a>
                    <p>Open an issue, format your data, and submit a pull request to the metadata repository.</p>
                </li>
                <li>
                    <a href="{{< relref "/docs/contributing/#contact" >}}">Contact us</a>
                    <p>In the early stages, we're happy to add qualifying datasets ourselves.</p>
                </li>
            </ul>
        </div>
    </div>
</div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('.stat-box .number');
            const speed = 200; // The lower the number, the faster the count
            const animateCount = (counter) => {
                const target = parseInt(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || ''; // Get the suffix
                let current = 0;
                const increment = target / speed;
                const updateCount = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current).toLocaleString() + suffix; // add suffix
                        setTimeout(updateCount, 1);
                    } else {
                        counter.textContent = target.toLocaleString() + suffix; // ensure final value has suffix
                    }
                };
                updateCount();
            };
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCount(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            counters.forEach(counter => {
                observer.observe(counter);
            });
        });
    </script>
</body>
</html>


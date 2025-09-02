---
title: "OpenESM: Open Experience Sampling Method Database"
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
    <title>OpenESM: Open Experience Sampling Method Database</title>
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
        /* How It Works Section */
        .how-it-works-section {
            text-align: center;
            padding: 50px 20px;
            background-color: var(--light-gray);
        }
        .how-it-works-section h2 {
            font-size: 2.5em;
            color: var(--text-charcoal);
            margin-bottom: 30px;
        }
        .steps-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            margin-bottom: 30px;
        }
        .step-card {
            flex: 0 0 300px; /* Fixed width, allows wrapping */
            padding: 30px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .step-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        .step-card .icon {
            font-size: 3em;
            margin-bottom: 20px;
        }
        .step-card h3 {
            color: var(--text-charcoal);
            margin-bottom: 10px;
            font-size: 1.5em;
        }
        .step-card p {
            color: #555;
            font-size: 1em;
        }
        .step-card:nth-child(1) .icon { color: var(--primary-blue); }
        .step-card:nth-child(2) .icon { color: var(--accent-orange); }
        .step-card:nth-child(3) .icon { color: var(--primary-blue); }
        .how-it-works-section .main-cta-button {
            background-color: var(--primary-blue);
            color: white;
            padding: 18px 40px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1.3em;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.2s ease;
            display: inline-block;
        }
        .how-it-works-section .main-cta-button:hover {
            background-color: #06458d; /* Manual darken for hover */
            transform: translateY(-2px);
        }
        /* cards link styles */
        .steps-container a.step-card {
            text-decoration: none;
            color: inherit;
            display: block;
        }
        .steps-container a.step-card:hover {
            text-decoration: none;
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
        <h1>openESM: A database of open experience sampling datasets</h1>
        <p>openESM is a database of harmonized openly available experience sampling datasets. The platform enables easy reuse of datasets with consistent and detailed metadata standards to facilitate reproducible research.</p>
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
<div class="how-it-works-section">
    <h2>Get Started in Three Simple Steps:</h2>
<div class="steps-container">
    <div class="steps-container">
    <a href="{{< relref "/about/" >}}" class="step-card">
        <div class="icon"><i class="fas fa-book-open"></i></div>
        <h3>1. Learn</h3>
        <p>Understand how you can use our database and get an overview of all datasets.</p>
    </a>
    <a href="{{< relref "/search/" >}}" class="step-card">
        <div class="icon"><i class="fas fa-search"></i></div>
        <h3>2. Filter & Find</h3>
        <p>Utilize our search and filter tools to find datasets with a relevant structure and constructs.</p>
    </a>
    <a href="{{< relref "/docs/" >}}" class="step-card">
        <div class="icon"><i class="fas fa-download"></i></div>
        <h3>3. Reuse</h3>
        <p>Download standardized datasets using an R or Python interface.</p>
    </a>
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


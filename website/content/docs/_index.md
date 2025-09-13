---
title: "Documentation"
# prevent showing posts
type: "docs"
layout: "single"
---

<div class="docs-intro">
    <p>Welcome to the documentation pages of openESM. Here you'll find comprehensive guides for using the database, contributing datasets, and understanding the technical infrastructure.</p>
</div>

<div class="docs-cards">
    <h2>Quick Start</h2>
    <div class="docs-grid">
        <a href="{{< relref "docs/data/" >}}" class="doc-card">
            <div class="doc-icon">📊</div>
            <h3>Data Documentation</h3>
            <p>Learn how to use and understand the datasets in our database</p>
            <span class="doc-badge">Using the data?</span>
        </a>
        <a href="{{< relref "docs/contributing/" >}}" class="doc-card">
            <div class="doc-icon">🤝</div>
            <h3>Contributing Guide</h3>
            <p>Guidelines for contributing your own datasets to openESM</p>
            <span class="doc-badge">Contributing datasets?</span>
        </a>
        <a href="{{< relref "docs/packages/" >}}" class="doc-card">
            <div class="doc-icon">📦</div>
            <h3>Package Documentation</h3>
            <p>How to use our R and Python packages for data access</p>
            <span class="doc-badge">Using R/Python packages?</span>
        </a>
        <a href="{{< relref "docs/technical/" >}}" class="doc-card">
            <div class="doc-icon">⚙️</div>
            <h3>Technical Documentation</h3>
            <p>Understand the system architecture and technical details</p>
            <span class="doc-badge">Want to understand the system?</span>
        </a>
    </div>
</div>

<style>
.docs-intro {
    text-align: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
}

.docs-intro h1 {
    font-size: 2.5rem;
    color: var(--primary-blue);
    margin-bottom: 1rem;
}

.docs-intro p {
    font-size: 1.1rem;
    color: var(--text-charcoal);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.docs-cards h2 {
    text-align: center;
    color: var(--text-charcoal);
    margin-bottom: 2rem;
    font-size: 2rem;
}

.docs-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.doc-card {
    background: white;
    border: 1px solid rgba(8, 90, 179, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
}

.doc-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(8, 90, 179, 0.15);
    border-color: var(--primary-blue);
}

.doc-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
}

.doc-card h3 {
    color: var(--text-charcoal);
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

.doc-card p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.doc-badge {
    background: var(--accent-orange);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
}

@media (max-width: 768px) {
    .docs-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .docs-intro h1 {
        font-size: 2rem;
    }
    
    .doc-card {
        padding: 1rem;
    }
}
</style>


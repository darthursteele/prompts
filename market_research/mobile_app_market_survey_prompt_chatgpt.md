---
title: Mobile App Market Survey Prompt
description: Generate a structured market survey of any mobile app niche, covering market size, trends, competitive landscape, leading apps, and AI-first opportunities.
domain: product-research
variables:
  required:
    - niche: The specific mobile app market niche to analyze (e.g., budgeting, language learning, sleep tracking)
    - platform_scope: Which platforms to cover (e.g., "iOS and Android", "Android only")
    - geographic_scope: The region or market focus (e.g., "United States", "Europe", "Global")
  optional:
    - time_frame: Time frame for analyzing growth and trends | default: "past 3 years"
    - min_market_share_coverage: Minimum cumulative market share coverage to include in app-level analysis | default: 80
    - focus_on_ai: Whether to emphasize AI-first opportunities | default: true
tags: [mobile-apps, market-research, competitive-analysis, product-strategy, AI-strategy]
---

## Description
Use this prompt to generate a comprehensive market analysis of any mobile app category. It is designed for product managers, founders, or strategy teams evaluating opportunities for new product launches. The output includes market size and growth, trends, competitor mapping, app-level deep-dives, feature gaps, and recommendations for differentiation — all framed with optional emphasis on AI-first strategies.

## Example
```
niche = "budgeting apps"
platform_scope = "iOS and Android"
geographic_scope = "United States"
time_frame = "past 3 years"
min_market_share_coverage = 85
focus_on_ai = true
```

## Prompt
```text
Conduct a structured market survey of the {niche} mobile app category in {geographic_scope} for the {platform_scope} platforms. The analysis should include:

**1. Market Overview**
- Total market size and growth rate over the {time_frame}.
- TAM/SAM breakdown for iOS vs Android within {geographic_scope}.
- Historical growth trajectory and near-term projections.

**2. Trends and Drivers**
- Cultural, technological, behavioral, and economic factors shaping the category.
- Key unmet needs or shifting user expectations.

**3. Competitive Landscape**
- Identify leading apps (incumbents and challengers).
- Rough market share breakdown (downloads/revenue).
- Table comparing incumbents and challengers.
- Disruptions on the horizon: platform policies, regulations, new tech, or behavior shifts.

**4. App-Level Analysis**
Provide detailed coverage of apps collectively representing at least {min_market_share_coverage}% of market share (by downloads). For each:
- Market position & estimated revenue.
- Target users (demographics, psychographics).
- Unique value proposition & differentiators.
- Monetization model.
- Growth trajectory relative to peers.
- User sentiment from reviews/testimonials.

Present findings in a **comparison table**.

**5. Recommendations for New Entrants**
- Identify table-stakes features required in the category.
- Highlight underserved needs and frustrations with current apps.
- Recommend differentiating features, product approaches, or user experiences.

**6. AI-First Opportunities** (include only if {focus_on_ai} = true)
- How AI can enhance personalization, retention, automation, or delight.
- Novel AI-first product concepts that could disrupt incumbents.

Structure output with clear sections and comprehensive tables, optimized for product managers/founders evaluating go-to-market strategies.
```

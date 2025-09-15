---
title: Mobile App Market Survey and Analysis
description: Conducts comprehensive market research for a specific mobile app category with competitive analysis and AI-first product recommendations
domain: productivity
variables:
  required:
    - {app_category}: Category or niche to analyze (e.g., "meditation apps", "fitness tracking", "language learning")
    - {geographic_scope}: Market scope for analysis (e.g., "global", "North America", "Europe")
  optional:
    - {analysis_depth}: Level of detail for competitive analysis | default "top 10 apps by market share"
    - {ai_focus_areas}: Specific AI capabilities to explore | default "personalization and automation features"
    - {target_audience}: Specific user segment if known | default "general market"
tags: [market-research, competitive-analysis, mobile-apps, product-strategy, ai-integration]
---

## Description
This prompt generates a comprehensive market survey for a specific mobile app category, providing strategic insights for product managers and founders considering market entry. It covers market sizing, competitive landscape, detailed app analysis, and AI-first product recommendations.

## Example
```
app_category = "personal finance apps"
geographic_scope = "North America"
analysis_depth = "top 12 apps by downloads"
ai_focus_areas = "spending insights, automated budgeting, and financial coaching"
```

## Prompt
```text
Conduct a comprehensive market survey and competitive analysis for {app_category} in the {geographic_scope} market. Structure your response as follows:

## Market Overview

**Market Size & Growth**
- Quantify the total addressable market (TAM) for {app_category}, including revenue and user base
- Break down growth rates and market projections for the next 3-5 years
- Compare iOS vs Android ecosystem performance, including:
  - Download volumes and revenue distribution
  - Average revenue per user (ARPU) differences
  - Geographic penetration patterns

**Market Trends & User Behavior**
- Identify 3-5 key trends reshaping user expectations in this category
- Analyze shifts in user behavior, preferences, and pain points
- Highlight emerging use cases or market segments gaining traction

**Competitive Landscape**
- Map the competitive ecosystem, identifying market leaders, challengers, and niche players
- Provide market share breakdown by downloads and revenue (where available)
- Identify potential disruptions: new technologies, regulatory changes, or behavioral shifts

## Detailed App Analysis

Analyze {analysis_depth} representing approximately 80% of total market share. For each app, provide:

| App Name | Market Position | Target User | Key Differentiators | Monetization | Growth Rate | User Sentiment |
|----------|----------------|-------------|-------------------|--------------|-------------|----------------|
| [App 1] | Position & revenue estimate | Demographics & characteristics | Unique features/approach | Revenue model | YoY growth vs competitors | Review highlights & pain points |

Continue this analysis for all major players, ensuring comprehensive coverage of the competitive landscape.

## Strategic Recommendations

**Table Stakes Features**
- List essential features any new entrant must have to be considered viable
- Identify minimum viable product (MVP) requirements for market entry

**Market Gaps & Opportunities**
- Highlight user needs currently underserved by existing solutions
- Identify feature gaps or experience friction points across top apps
- Suggest positioning strategies for a new market entrant

**AI-First Product Strategy**
Focus on {ai_focus_areas} and provide specific recommendations for:

1. **Core AI Features**
   - How AI could enhance the primary app function
   - Specific algorithms or ML models that would add value
   - Data requirements and user privacy considerations

2. **Differentiation Through AI**
   - AI capabilities that could set a new app apart from existing solutions
   - Emerging AI technologies applicable to this category
   - Integration points that enhance rather than complicate user experience

3. **AI-Powered User Experience**
   - Personalization opportunities using AI
   - Automation potential to reduce user friction
   - Predictive features that anticipate user needs

**Go-to-Market Considerations**
- Recommended customer acquisition strategies
- Key partnerships or integrations to consider
- Pricing strategy recommendations based on competitive analysis

Ensure all data is current as of 2025 and cite sources where possible. Focus on actionable insights that would inform product development and market entry decisions.
```
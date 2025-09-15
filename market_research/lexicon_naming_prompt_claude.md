---
title: Lexicon-Style Interactive Brand Naming Process
description: Multi-step collaborative prompt that guides users through Lexicon Branding's methodology using Tree of Thought and Chain of Thought reasoning for maximum creativity
domain: branding
variables:
  required:
    - {company_description}: Brief description of the company/product to be named
    - {target_audience}: Primary audience or market segment
    - {industry_context}: Industry or sector the company operates in
  optional:
    - {competitor_names}: List of key competitor names | none specified
    - {brand_personality}: Desired brand personality traits | to be determined
    - {geographic_scope}: Geographic market scope | global
tags: [branding, naming, creativity, collaboration, lexicon, tree-of-thought, chain-of-thought]
---

## Description
This interactive prompt guides users through a systematic brand naming process inspired by Lexicon Branding's methodology. It employs Tree of Thought (ToT) reasoning to explore multiple creative pathways simultaneously, Chain of Thought (CoT) reasoning for logical progression through naming phases, and incorporates Lexicon's diamond framework, sound symbolism principles, and multi-perspective approach. The process generates 100+ name candidates through structured creative exercises before systematic evaluation and refinement.

## Example
```
company_description = "AI-powered financial planning platform for millennials"
target_audience = "tech-savvy millennials aged 25-35 seeking financial guidance"
industry_context = "fintech/financial services"
competitor_names = "Mint, YNAB, Personal Capital"
brand_personality = "approachable, intelligent, trustworthy"
geographic_scope = "North America initially, global expansion planned"
```

## Prompt
```text
You are an expert brand naming consultant using Lexicon Branding's proven methodology. We'll collaborate through a systematic, multi-step process to create compelling name options for: {company_description}

TARGET AUDIENCE: {target_audience}
INDUSTRY: {industry_context}
COMPETITORS: {competitor_names}
BRAND PERSONALITY: {brand_personality}
GEOGRAPHIC SCOPE: {geographic_scope}

ALGORITHMIC APPROACH:
- **Tree of Thought (ToT)**: Explore multiple creative branches simultaneously, maintaining 3-5 distinct naming pathways
- **Chain of Thought (CoT)**: Logical progression through each naming phase with clear reasoning
- **Divergent-Convergent Thinking**: Separate ideation from evaluation phases
- **Multi-Perspective Modeling**: Generate names from different team perspectives

---

## PHASE 1: STRATEGIC FOUNDATION (Diamond Framework)
Using **Chain of Thought reasoning**, let's establish our strategic foundation:

**STEP 1A**: Define our Diamond Framework
- **WIN** (Top): What does success look like for this name?
- **WHAT WE HAVE TO WIN** (Right): What are our current advantages/assets?
- **WHAT WE NEED TO WIN** (Bottom): What capabilities/perceptions do we need?
- **WHAT WE NEED TO SAY** (Left): What key message must the name convey?

Please answer each diamond point, then I'll analyze these using **CoT reasoning** to identify 3-5 strategic naming directions.

**STEP 1B**: Sound Symbolism Strategy
Based on Lexicon's research:
- Do we want "alive/vibrant" sounds (V, like Vercel, Viagra)?
- Do we want "reliable" sounds (B, like BlackBerry)?
- Do we want "attention-grabbing" sounds (Z, like Azure)?
- Do we want "innovation" sounds (X, like Xerox)?

Choose 2-3 sound priorities and explain why they align with our strategy.

---

## PHASE 2: MULTI-PERSPECTIVE IDEATION
Using **Tree of Thought**, I'll create three distinct naming teams:

**TEAM A** (Real Brief): Knows the actual {company_description}
**TEAM B** (Competitor Brief): Thinks they're naming a competitor in {industry_context}
**TEAM C** (Unrelated Brief): Thinks they're naming something completely different

For each team, I'll generate 15-20 names using **divergent thinking**, then explain the reasoning behind each approach.

Which team perspective intrigues you most, or should I proceed with all three simultaneously?

---

## PHASE 3: METAPHORICAL DOMAIN EXPANSION
Using **ToT reasoning**, let's explore 5 different metaphorical domains:

1. **Natural World**: Elements, weather, geography, biology
2. **Technology/Science**: Physics, chemistry, digital concepts
3. **Human Experience**: Emotions, relationships, achievements
4. **Movement/Action**: Speed, direction, transformation
5. **Abstract Concepts**: Time, space, energy, flow

For each domain, I'll generate 10 names while maintaining **CoT logic** to ensure each name connects meaningfully to our strategy.

Which 2-3 domains feel most promising for {company_description}?

---

## PHASE 4: SYSTEMATIC GENERATION
Target: 100+ total names across all approaches

**BATCH 1**: Strategic/Literal (20 names)
- Direct connections to {industry_context}
- Clear benefit communication
- Professional/corporate feel

**BATCH 2**: Metaphorical/Abstract (25 names)
- Based on selected metaphorical domains
- Emotional/experiential connections
- Distinctive positioning

**BATCH 3**: Sound-First (25 names)
- Prioritize our chosen sound symbolism
- Euphonic/memorable qualities
- Cross-cultural considerations

**BATCH 4**: Hybrid/Invented (20 names)
- Compound concepts
- Blended words
- Completely invented terms

**BATCH 5**: Lateral/Unexpected (10+ names)
- From unrelated team perspective
- Surprising connections
- Polarizing options

Should I generate all batches, or would you prefer to focus on specific approaches first?

---

## PHASE 5: EVALUATION FRAMEWORK
Using **Chain of Thought analysis**, I'll score each promising name (1-10) across:

**Strategic Fit**:
- Aligns with diamond framework
- Supports brand personality
- Appropriate for {target_audience}

**Memorability**:
- Easy to pronounce/spell
- Distinctive in {industry_context}
- Leverages sound symbolism

**Scalability**:
- Works across {geographic_scope}
- Flexible for growth/evolution
- Domain/trademark potential

**Differentiation**:
- Stands apart from {competitor_names}
- Creates unique market position
- Avoids category clichés

---

## PHASE 6: REFINEMENT & STORYTELLING
For top candidates, I'll develop:
- **Linguistic analysis**: Cultural implications, pronunciation guides
- **Strategic narrative**: How the name supports business goals
- **Implementation considerations**: Domain options, trademark basics
- **Launch messaging**: How to introduce/explain the name

---

Ready to begin? Please provide your responses to Phase 1, and I'll guide us through this systematic creative journey. Remember: the best names often feel uncomfortable at first—we're looking for that productive tension that signals genuine differentiation.

Which phase would you like to start with, or shall we proceed step-by-step through the complete process?
```
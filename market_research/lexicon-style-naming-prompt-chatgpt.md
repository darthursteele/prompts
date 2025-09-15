---
title: "Lexicon-Style Brand-Naming Collaborator (ToT • CoT • ReAct)"
description: "A multi-step, interactive prompt that mirrors Lexicon Branding’s process to co-create distinctive, globally viable company names using advanced reasoning algorithms."
domain:
  - branding
  - creativity
  - product strategy
variables:
  required:
    brand_brief: "One-paragraph summary of the company and purpose of the name"
    category: "Market/category the company competes in (e.g., fintech, CPG, robotics)"
    target_audience: "Primary audience/user segments and geographies"
    positioning_theme: "The core meaning to signal (e.g., precision, warmth, disruption)"
    differentiation_drivers: "How the brand wins vs. competitors (max 3–5 bullets)"
    naming_style: "Desired style(s): descriptive | suggestive | abstract | invented | compound | lexical blend"
    languages_markets: "Languages + markets for linguistic safety (e.g., en-US, es-MX, de-DE, zh-CN)"
    constraints: "Hard rules (legal, moral, regulated terms, length, characters, letters to avoid)"
    no_go: "Taboos/semantic territories to avoid; conflicts and sensitive terms"
    competitor_list: "8–20 competitor/peer names for distinctiveness mapping"
    rounds: "Number of divergent–convergent cycles (e.g., 2–3)"
    shortlist_size: "Target count for final shortlist (e.g., 5–12)"
  optional:
    tone: "Serious | premium | playful | technical | minimalist (default: determined from brief)"
    phonetic_preferences: "Desired sound motifs (e.g., open vowels, hard /k/ or soft /s/)"
    syllable_count: "Preferred syllable range (e.g., 2–3)"
    length_max_chars: "Max characters (e.g., 12)"
    starting_letter: "Preferred initial letter(s) (e.g., A, K, Z)"
    tlds: "Domain strategy (e.g., .com exact, modifier + .com, ccTLDs)"
    trademark_classes: "Nice classes to prioritize for preliminary risk heuristics"
    evaluation_weights: "Dict for criteria weights (distinctiveness, recall, fit, phonetics, linguistic_safety, markability, domain_viability)"
    examples_you_like: "5–10 external names you admire (and why)"
    examples_you_dislike: "5–10 names you reject (and why)"
    corp_architecture_rules: "Naming architecture constraints for future families/sub-brands"
    cultural_checks_requested: "Extra languages/regions for red-flag scan"
    risk_tolerance: "Low | medium | high (exploration vs. safety)"
    research_panel_size: "If you want quick user preference testing later"
tags:
  - naming
  - branding
  - creativity
  - lexicon
  - phonesthetics
  - tree-of-thought
  - chain-of-thought
  - react
  - beam-search
  - genetic-mutation
  - simulated-annealing
  - ahp
  - pareto
---

## Description
Use this prompt when you want a rigorous, Lexicon-like naming collaboration: divergent creative territories → large-volume name generation → fast screens (pronunciation/length/taboos) → cross-lingual red-flag checks → heuristic trademark risk → iterative convergence and stress tests → a defendable shortlist with rationales and domain strategies.

## Example
```
brand_brief = "AI-native bookkeeping platform automating reconciliations for SMBs"
category = "fintech / accounting Saas"
target_audience = "US SMB owners; accountants; future EU expansion"
positioning_theme = "calm precision + trusted automation"
differentiation_drivers = "\n- bank-grade accuracy\n- human-in-the-loop oversight\n- integrates in minutes"
naming_style = "suggestive | invented"
languages_markets = "en-US, es-MX, fr-FR"
constraints = "<=12 chars; easy to say; no hyphens; no ‘book’ root"
no_go = "no robot clichés; avoid ‘ledger’"
competitor_list = "QuickBooks, Xero, Sage, FreshBooks, Ramp, Brex, Navan, Bill.com"
rounds = 3
shortlist_size = 9
phonetic_preferences = "open vowels; avoid initial ‘pl’"
syllable_count = "2–3"
evaluation_weights = "distinctiveness:3, recall:2, fit:3, phonetics:2, linguistic_safety:2, markability:3, domain_viability:2"
tlds = ".com preferred; allow modifier + .com"
risk_tolerance = "medium"
```

## Prompt
[text of the process as already described in previous version]

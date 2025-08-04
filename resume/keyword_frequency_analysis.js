// Read the job descriptions file
const jobDescriptions = await window.fs.readFile('Job descriptions_Keyword analysis.pdf', { encoding: 'utf8' });

// Function to clean text and extract keywords
function extractKeywords(text) {
  // Define categories and associated keywords/phrases
  const categories = {
    "Product Strategy/Vision": ["product strategy", "strategic direction", "vision", "roadmap", "multi-year", "long-term"],
    "0-to-1 Product Development": ["0 to 1", "0→1", "zero to one", "new product", "new features", "conception to launch"],
    "Cross-functional Leadership": ["cross-functional", "cross functional", "collaborate", "collaboration", "partner", "coordinate"],
    "Customer Focus": ["customer", "client", "user", "customer-obsessed", "customer focus", "customer-centric"],
    "Data-Driven Decision Making": ["data", "quantitative", "qualitative", "metrics", "KPI", "measure", "analytics"],
    "AI/ML Experience": ["AI", "artificial intelligence", "machine learning", "ML", "generative AI", "automation"],
    "Communication Skills": ["communication", "articulate", "storytell", "present", "influence", "verbal", "written"],
    "Problem Solving": ["problem", "solution", "solve", "complex", "ambiguity", "ambiguous"],
    "Technical Background": ["technical", "engineering", "software", "technology", "architecture"],
    "Leadership": ["lead", "leadership", "manage", "guide", "direct", "mentor", "coach"],
    "Business Impact": ["growth", "revenue", "ROI", "impact", "business outcome", "success"],
    "UX/Design": ["UX", "user experience", "design", "interface", "UI", "usability"],
    "Prioritization": ["prioritize", "prioritization", "trade-off", "decision", "decide"],
    "Execution": ["execute", "execution", "deliver", "ship", "launch", "release"],
    "Strategic Thinking": ["strategy", "strategic", "innovative", "innovation", "disruptive", "market"]
  };
  
  // Count frequency of each category in the text
  const categoryCounts = {};
  Object.keys(categories).forEach(category => {
    let count = 0;
    categories[category].forEach(keyword => {
      const regex = new RegExp('\\b' + keyword + '[a-z]*\\b', 'gi');
      const matches = text.match(regex);
      if (matches) {
        count += matches.length;
      }
    });
    categoryCounts[category] = count;
  });
  
  return categoryCounts;
}

// Analyze the job descriptions
const keywordCounts = extractKeywords(jobDescriptions);

// Sort by frequency
const sortedCategories = Object.entries(keywordCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([category, count]) => ({ category, count }));

console.log("Top Skills in Job Descriptions (by frequency):");
console.log(JSON.stringify(sortedCategories, null, 2));

// Additional specific keyword analysis to find important individual terms
function countSpecificKeywords(text) {
  const keywords = [
    "product management", "experience", "strategy", "technical", "customer", 
    "data", "AI", "innovation", "leadership", "roadmap", "cross-functional",
    "execution", "communication", "scale", "stakeholder", "vision", "business",
    "prioritize", "problem solving", "UX", "metrics", "KPI", "design",
    "collaboration", "engineering", "0 to 1", "market", "ambiguity",
    "startup", "deliver", "decision"
  ];
  
  const wordCounts = {};
  keywords.forEach(word => {
    const regex = new RegExp('\\b' + word + '[a-z]*\\b', 'gi');
    const matches = text.match(regex);
    wordCounts[word] = matches ? matches.length : 0;
  });
  
  return Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([word, count]) => ({ word, count }));
}

const specificKeywords = countSpecificKeywords(jobDescriptions);
console.log("\nTop Individual Keywords:");
console.log(JSON.stringify(specificKeywords.slice(0, 20), null, 2));

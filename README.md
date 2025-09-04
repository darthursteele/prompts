# Prompt Library

A structured repository of reusable prompts, designed for both human readability and machine consumption.

## File Format
- Prompts are stored in **Markdown (.md)** for readability and flexibility.
- Each file includes **metadata (YAML front matter)**, a **description**, an **example**, and the **prompt itself**.

## File Structure
Each prompt file follows this structure:

1. **YAML Front Matter**  
   - Contains metadata such as title, description, domain, variables, and tags.  
   - Example:  
     ```yaml
     ---
     title: Emergency Safety Code Prompt
     description: A coded dialogue template for signaling distress in private situations.
     domain: safety
     variables:
       required:
         - friend_name: name of the person you’re communicating with
         - confirmation_code: keyword for distress signal
       optional:
         - location: optional meeting spot
     tags: [safety, coded-comms, template]
     ---
     ```

2. **Description Section**  
   - Explains purpose, usage context, and any notes for humans.  

3. **Example Section**  
   - Shows example values for variables.  

4. **Prompt Section**  
   - Contains the actual prompt in a fenced `text` block.  
   - Copy-paste ready, using `{variables}` for substitution.

## Naming Conventions
- File names should be **kebab-case** and descriptive.  
  - Example: `emergency-signal.md`

## Repository Structure
Organize prompts by domain or function type:
```
/prompts
  /safety
    emergency-signal.md
  /productivity
    meeting-summarizer.md
  /translation
    eng-to-spanish.md
```

## Best Practices
- Keep prompts modular (one clear purpose per file).  
- Use `{variables}` consistently.  
- Document required vs optional variables in metadata.  
- Include at least one example for substitution.  
- Tag files with categories for easy indexing and retrieval.  

## Extending for Agents
- Metadata makes prompts easy to parse into JSON for agentic architectures.  
- Optional sidecar `.json` files can be generated automatically if needed.  

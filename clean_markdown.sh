#!/bin/bash

# Define the root of your prompts repo (change if needed)
REPO_DIR="$HOME/src/prompts"

# Find all markdown files and clean them
find "$REPO_DIR" -type f -name "*.md" | while read -r file; do
  echo "Cleaning $file"
  # Use sed to remove all 【...】 citation markers
  sed -i '' -E 's/【[^】]+】//g' "$file"
done

echo "✅ All citation markers removed."

#!/bin/bash

# Deployment Script for GitHub Pages
# This script cleans, builds, and deploys the React app to GitHub Pages

echo "🚀 Starting deployment process..."

# Clean cache and previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist node_modules/.vite

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  
  # Deploy to GitHub Pages
  echo "📤 Deploying to GitHub Pages..."
  npm run deploy
  
  if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your site should be live at: https://<USERNAME>.github.io/"
  else
    echo "❌ Deployment failed!"
    exit 1
  fi
else
  echo "❌ Build failed!"
  exit 1
fi

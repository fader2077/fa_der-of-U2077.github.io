#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== GitHub Pages + React + TailwindCSS + Live2D Setup ===${NC}"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}[ERROR] Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node -v) detected${NC}"

# Check npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}[ERROR] npm is not installed.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ npm $(npm -v) detected${NC}"

# Check Git
if ! command -v git &> /dev/null; then
    echo -e "${RED}[ERROR] Git is not installed. Please install Git first.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Git detected${NC}"

# Create React app with Vite
echo -e "${YELLOW}Creating React project with Vite...${NC}"
npm create vite@latest my-portfolio -- --template react

cd my-portfolio || exit

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install

# Install TailwindCSS
echo -e "${YELLOW}Installing TailwindCSS...${NC}"
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install additional dependencies
echo -e "${YELLOW}Installing additional packages...${NC}"
npm install gh-pages --save-dev
npm install react-icons

echo -e "${GREEN}✓ Setup completed!${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. cd my-portfolio"
echo -e "2. Update package.json with your GitHub repository URL"
echo -e "3. npm run deploy"

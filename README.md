# SunshineNotes - Personal Knowledge Base and Technical Blog

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![VuePress](https://img.shields.io/badge/VuePress-2.0.0--rc.24-brightgreen.svg)
![Theme](https://img.shields.io/badge/Theme-hope--2.0.0--rc.94-orange.svg)

## 📚 Overview

SunshineNotes is a comprehensive knowledge management system and technical blog designed to document and share learning experiences, technical notes, and practical insights. Built with modern tools and frameworks, this repository hosts a personal website for SunshineCloudTech that covers various topics from programming tutorials to travel diaries and technical documentation.

## 🔍 Repository Structure

The repository is organized into several key sections:

- **编程相关** (Programming Related) - Programming tutorials, code snippets, and technical guides
- **朝阳笔记** (Sunshine Notes) - Personal technical notes and reflections
- **旅行日记** (Travel Diary) - Travel experiences and Japanese anime pilgrimage journals
- **建站杂记** (Website Building Notes) - Documentation on website development and maintenance
- **项目文档** (Project Documentation) - Detailed documentation for various projects
- **B站小漫画合集** (Bilibili Comic Collection) - Archived comics from Bilibili platform

## 🛠️ Technology Stack

This project leverages several modern technologies:

- **[VuePress](https://vuepress.vuejs.org/)** (v2.0.0-rc.24) - A Vue-powered static site generator
- **[VuePress Theme Hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)** (v2.0.0-rc.94) - Enhanced theme with additional features
- **[Vue.js](https://vuejs.org/)** (v3.5.18) - Progressive JavaScript framework for building user interfaces
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[GitHub Pages](https://pages.github.com/)** - Hosting platform for deployment
- **[Markdown](https://daringfireball.net/projects/markdown/)** - Lightweight markup language for content creation
- **[Sass](https://sass-lang.com/)** - Preprocessor scripting language for CSS

## ✨ Features

- Responsive design for optimal viewing on all devices
- Full-text search functionality powered by SlimSearch
- Chinese language segmentation with NodeJS-Jieba
- Automatic table of contents generation
- Code syntax highlighting
- Custom theming and styling
- Dark mode support
- Multiple content categories with organized navigation

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [PNPM](https://pnpm.io/) package manager

### Installation

```sh
# Install dependencies
pnpm i
```

### Development

```sh
# Start the development server
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build locally
pnpm docs:preview

# Update VuePress and theme dependencies
pnpm docs:update-package
```

## 📋 Deployment

This repository is configured to deploy to GitHub Pages using GitHub Actions workflows. To set up deployment:

1. Go to `Settings > Actions > General`, scroll to the bottom, and under `Workflow permissions`, check `Read and write permissions`

2. Navigate to `Settings > Pages`, select `Deploy from a branch` for `Source`, and choose `gh-pages` for `Branch`
   (The `gh-pages` branch will be created after your first push and GitHub Action run)

3. If deploying to a custom domain or non-root path, update the `base` option in the configuration file accordingly

## 🔗 Useful Links

- [Live Site](https://SunshineCloudTech.github.io) - The deployed website
- [VuePress Documentation](https://vuepress.vuejs.org/) - Official VuePress docs
- [Vue.js Documentation](https://vuejs.org/) - Official Vue.js docs
- [GitHub Pages Documentation](https://docs.github.com/en/pages) - Hosting documentation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

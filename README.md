# Cloud Explorer Website

A modern, responsive React website for the Cloud Explorer mobile application. This website serves as a landing page to showcase the Cloud Explorer app's features, architecture, and screenshots.

![Cloud Explorer Website Screenshot](public/cloud_explorer.png)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Modern Design**: Clean, visually appealing interface with smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Component-Based Architecture**: Built with reusable React components
- **Interactive Elements**: Including tabbed interfaces and image galleries
- **Performance Optimized**: Fast loading times and smooth transitions
- **SEO Friendly**: Proper semantic HTML structure
- **Easy to Customize**: Well-organized code and styling

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cloud-explorer-website.git
cd cloud-explorer-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and visit:

```
http://localhost:3000
```

## Project Structure

```bash
cloud-explorer-website/
├── public/                     # Static assets served directly
│   ├── favicon.ico
│   ├── index.html              # Main HTML template
│   ├── logo.svg
│   └── cloud_explorer.png      # Screenshot shown in README
├── src/                        # Application source code
│   ├── assets/                 # Static assets like images, fonts
│   │   └── screenshots/
│   │       ├── screenshot1.png
│   │       ├── screenshot2.png # Corrected duplicate name
│   │       └── ...
│   ├── components/             # Reusable UI components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── Features/           # Example: Section-specific component
│   │   │   ├── Features.jsx
│   │   │   └── Features.module.css
│   │   ├── Architecture/
│   │   │   ├── Architecture.jsx
│   │   │   └── Architecture.module.css
│   │   ├── Screenshots/
│   │   │   ├── Screenshots.jsx
│   │   │   └── Screenshots.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── PrivacyPolicy/      # Example: Page-level component
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   └── PrivacyPolicy.module.css
│   │   └── shared/             # Common components used across features
│   │       ├── Button/
│   │       │   ├── Button.jsx
│   │       │   └── Button.module.css
│   │       └── Card/
│   │           ├── Card.jsx
│   │           └── Card.module.css
│   ├── styles/                 # Global styles and configurations
│   │   ├── variables.css       # CSS custom properties (variables)
│   │   ├── typography.css      # Global typography rules
│   │   ├── animations.css      # Reusable animations
│   │   └── global.css          # Global styles, resets
│   ├── utils/                  # Utility functions, hooks
│   │   └── hooks.js            # Custom React hooks
│   ├── App.jsx                 # Main application component (routing, layout)
│   └── index.js                # Application entry point
├── package.json
└── README.md
```

### Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `build` directory with optimized files for deployment.

## Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - For styling
- [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) - For icons and illustrations

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Related Projects

- [Cloud Explorer Mobile App](https://github.com/yourusername/CloudExplorer) - The React Native mobile application this website showcases.

## Acknowledgments

- Design inspiration from [The State of Health](https://thestateofhealth.com/)
- Icons used from [Font Awesome](https://fontawesome.com/)

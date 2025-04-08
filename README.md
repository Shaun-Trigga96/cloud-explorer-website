# Cloud Explorer Website

A modern, responsive React website for the Cloud Explorer mobile application. This website serves as a landing page to showcase the Cloud Explorer app's features, architecture, and screenshots.

![Cloud Explorer Website Screenshot](public/cloud_explorer.png)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Customization](#customization)
  - [Styling](#styling)
  - [Content](#content)
  - [Images](#images)
- [Deployment](#deployment)
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
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.svg
│   ├── icons/
│   │   ├── learning-icon.svg
│   │   ├── quiz-icon.svg
│   │   └── ...
│   └── screenshots/
│       ├── screenshot1.png
│       └── ...
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Architecture.jsx
│   │   ├── Screenshots.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Customization

### Styling

The website uses a custom CSS file (`src/styles.css`) with CSS variables for easy theming. To change the color scheme, modify the CSS variables at the top of the file:

```css
:root {
  --primary-color: #4285F4;
  --secondary-color: #34A853;
  --accent-color: #FBBC05;
  --dark-color: #212121;
  --light-color: #F8F9FA;
  --text-color: #333333;
  --light-text: #FFFFFF;
  --gradient-primary: linear-gradient(135deg, #4285F4, #0F9D58);
  --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --border-radius: 12px;
  --transition: all 0.3s ease;
}
```

### Content

To update the content:

1. **Features**: Modify the `features` array in `src/components/Features.jsx`
2. **Architecture details**: Update the content in `src/components/Architecture.jsx`
3. **Screenshots**: Change the `screenshots` array in `src/components/Screenshots.jsx`
4. **Hero text**: Edit the content in `src/components/Hero.jsx`
5. **Footer links**: Update the links and content in `src/components/Footer.jsx`

### Images

Replace the placeholder images in the `public` folder with your own assets:

- `/logo.svg` - Your app logo
- `/cloud_explorer.png` - Main app image for the hero section
- `/icons/` - Feature icons (SVG format recommended)
- `/screenshots/` - App screenshots and GIFs
- `/CloudExplocer-App-Architecture.svg` - Application architecture diagram
- `/CloudExplorer-Cloud-Architecture.svg` - Cloud architecture diagram

## Deployment

### Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `build` directory with optimized files for deployment.

### Deploy to GitHub Pages

1. Install GitHub Pages package:

```bash
npm install --save gh-pages
```

2. Add the following to your `package.json`:

```json
"homepage": "https://yourusername.github.io/cloud-explorer-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy the website:

```bash
npm run deploy
```

### Deploy to Netlify

1. Create a `netlify.toml` file in the root directory:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy using the Netlify CLI or connect your repository to Netlify for continuous deployment.

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

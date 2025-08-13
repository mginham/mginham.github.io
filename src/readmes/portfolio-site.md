# Portfolio Website – Megan Ginham
A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS, deployed on GitHub Pages.

This portfolio showcases projects, skills, and experience, with a clean design and smooth navigation powered by React Router.

## Project Overview
The portfolio site serves as a central hub to present professional information, highlight key projects, and provide easy contact options.

It leverages Vite for fast development and optimized builds, while Tailwind CSS enables a fully responsive and customizable UI. The site is deployed automatically to GitHub Pages for easy hosting and continuous updates.

## Features
- Modern responsive design using Tailwind CSS
- Fast development and builds with Vite
- Smooth client-side navigation powered by React Router
- Project showcase with images and tech stacks
- Dynamic project tiles (images or placeholders)
- Deployed on GitHub Pages for simple hosting
- Linting and clean code practices via ESLint
- Easily customizable structure for adding new sections or features

## Getting Started
### Prerequisites
- Node.js (v18 or higher)
- Git installed

### Setup
1. Clone the repository:
   ```
   git clone https://github.com/mginham/mginham.github.io.git
   cd mginham.github.io
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
The site will be available at http://localhost:5173.

### Build for Production
To create an optimized build:
```
npm run build
```

### Deploy to GitHub Pages
The site is deployed to the gh-pages branch:
```
npm run deploy
```
This will build the project and push the dist folder to the gh-pages branch for hosting on GitHub Pages.

Live Site: mginham.github.io

## Project Structure
```
mginham.github.io/
│
├── public/                  # Public assets
├── src/
│   ├── assets/              # Image and media files
│   ├── components/          # Reusable UI components
│   ├── content/             # Project data and JSON files
│   ├── readmes/             # Markdown README files for each project, imported and rendered dynamically
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and Tailwind imports
│
├── index.html               # Base HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## How to Add New Projects
Projects displayed on the portfolio are defined in the src/content/projects.json file.
1. Add Project Metadata
   Open projects.json and add a new object to the array:
   ```
   {
     "title": "Data Pipeline Project",
     "image": "data-pipeline.png",
     "stack": ["PySpark", "PostgreSQL", "Airflow"],
     "description": "A scalable ETL pipeline orchestrated with Airflow and containerized using Docker."
   }
   ```
2. Add Project Image
   Place your project image in:
   ```
   src/assets/images/
   ```
3. Test Your Changes
   Run:
   ```
   npm run dev
   ```
   Verify the new project tile appears in the Projects section.
4. Deploy
   Once you're satisfied:
   ```
   npm run deploy
   ```

## Notes
- Tailwind CSS is configured through Vite using the @tailwindcss/vite plugin.
- gh-pages is used for deployment; ensure the homepage field in package.json is set correctly.
- React Router is used for smooth navigation across sections.
- react-router-hash-link enables anchor link scrolling for in-page navigation.

## Future Improvements
- Add dark mode support
- Improve SEO with meta tags and Open Graph images
- Integrate a contact form with email service
- Add animations for project tiles and section transitions
- Include a blog or case studies section

## License
This project is licensed under the MIT License – you are free to use and adapt it with attribution.

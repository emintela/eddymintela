# Eddy Mintela — Portfolio

**Live site: [eddymintela.dev](https://eddymintela.dev/)**

Personal portfolio of Eddy Wini Mintela, a Site Reliability Engineer, DevOps, Platform, and Cloud Engineer at Amazon Web Services (AWS), and an AI Software Engineer at Mercor.

## Features

- **Single-page layout**: Home, About, Projects, and Resume sit on one scrolling page. The navbar scrolls to each section, and `/about`, `/project`, and `/resume` jump straight to theirs.
- **Scroll-reveal animation**: sections fade and slide in as they come into view, and stay still for visitors who have reduced motion turned on.
- **Fully responsive**: built with React-Bootstrap.
- **GitHub contribution calendar** and a skills grid covering languages, cloud, and DevOps tools.
- **SEO-ready**: Open Graph and Twitter tags, structured data, a sitemap, and `robots.txt`.

## Built With

- React 17 (Create React App)
- React-Bootstrap and CSS
- tsparticles, typewriter-effect, react-parallax-tilt
- Hosted on Vercel

## Running Locally

You need [Node.js](https://nodejs.org/) and `git`.

```bash
git clone https://github.com/emintela/eddymintela.git
cd eddymintela
npm install --legacy-peer-deps
npm start
```

Then open [http://localhost:3000](http://localhost:3000). The page reloads as you edit.

To make a production build in `build/`:

```bash
npm run build
```

## Project Structure

- `src/components/Home/`: hero, intro, and the page that stacks every section
- `src/components/About/`: about card, skills, tools, GitHub calendar
- `src/components/Projects/`: project cards
- `src/components/Resume/`: resume and contact section
- `src/components/Reveal.js`: scroll-reveal wrapper
- `src/components/ScrollToSection.js`: scrolls to a section when the URL changes
- `public/`: `index.html` (SEO tags), favicon, sitemap, and Open Graph image

## Contact

- GitHub: [@emintela](https://github.com/emintela)
- LinkedIn: [Eddy Mintela](https://www.linkedin.com/in/eddy-mintela-5965347/)

## Credits

Based on the open-source [Portfolio template](https://github.com/soumyajit4419/Portfolio) by Soumyajit Behera.

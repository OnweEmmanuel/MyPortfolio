# Emmanuel Onwe — Portfolio

Personal portfolio site for **Emmanuel Onwe**, a full-stack software engineer based in Cape Town, South Africa.

A dark, terminal-inspired showcase of experience, technical stack, projects, and services, built with React and Vite.

---

## Stack

| Layer | Choice |
| --- | --- |
| UI | React 19 (function components + hooks) |
| Build | Vite |
| Styles | Plain CSS (custom properties, responsive layout) |
| Fonts | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) · [Space Mono](https://fonts.google.com/specimen/Space+Mono) (Google Fonts) |

Site content (experience, skills, projects, etc.) lives in `src/data.js`, so most edits don't touch any markup.

---

## Features

- Terminal / developer visual language (lime accent, sharp edges, mono labels)
- Sticky translucent header with active-section highlighting
- Mobile navigation
- Smooth scrolling with reduced-motion support
- Experience timeline, skill chips, project cards, services panels
- Contact channels (email, phone, GitHub, LinkedIn)

---

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

---

## Project structure

```text
MyPortfolio/
├── index.html            # Vite entry (meta tags, fonts, favicons)
├── public/assets/        # favicons, served as-is
├── src/
│   ├── main.jsx          # mounts <App />
│   ├── App.jsx           # page layout
│   ├── data.js           # all site content
│   ├── styles.css        # design system & layout
│   ├── components/       # one component per section + shared pieces
│   └── hooks/            # nav state, scroll reveal, media queries
├── package.json
└── vite.config.js
```

---

## Design notes

Visual direction was refined against a Lovable-generated concept, first built as a vanilla HTML/CSS/JS site, then converted to React.

---

## Contact

- Email: [cyberkuv@gmail.com](mailto:cyberkuv@gmail.com)
- GitHub: [OnweEmmanuel](https://github.com/OnweEmmanuel)
- LinkedIn: [emmanuel-onwe](https://www.linkedin.com/in/emmanuel-onwe-97355a184/)

---

## License

See [LICENSE](./LICENSE).

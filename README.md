# Emmanuel Onwe — Portfolio

Personal portfolio for **Emmanuel Onwe**, a full-stack software engineer. Career built in Cape Town, moving back to Lagos, and open to projects anywhere in the world.

It's a single-page React site with a bold, playful developer theme: a self-typing code editor, scroll-driven animation, and a terminal visitors can actually type into.

---

## What's on the page

| Section | What it does |
| --- | --- |
| **Hero** | Big animated name, plus a tilted code editor that types Python and PHP snippets and "runs" them. Animated circuit-board background and code symbols that move with the mouse. |
| **Marquee** | Two crossing bands of scrolling text. |
| **Statement** | A sentence pinned to the screen that lights up word by word as you scroll. |
| **Experience** | Career shown as a `git log`. The commit rail fills in as you scroll, and each commit is wired to its card with current flowing along it. |
| **Education** | Cards for MANCOSA and WeThinkCode, linking to each school. |
| **Stack** | Skills orbiting a `{ }` core, next to a `package.json` card. |
| **Projects** | Browser-window cards that tilt toward the mouse. Clicking a card opens the project. |
| **Services** | Rows that fill with orange on hover. |
| **Side quests** | The fun bit: hobbies as game achievement cards (CODM, Clash of Clans, anime, manga, bowling, mini golf), each with a joke stat bar. |
| **Contact** | Email link and a working terminal (`help`, `whoami`, `location`, `hobbies`, `sudo hire-me`, …). |

People who have "reduce motion" turned on in their device settings get a still version of the site.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | [React 19](https://react.dev) (function components and hooks) |
| Animation | [Motion](https://motion.dev) for scroll-linked effects, reveals and springs; plain CSS keyframes for looping effects |
| Build | [Vite](https://vite.dev) |
| Styles | Plain CSS with custom properties, in one file |
| Fonts | [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) from Google Fonts |

**Palette:** Mandarin Orange `#FD550A`, Forest Green `#015D47` and Crest Yellow `#E0F354` on a warm off-white `#FBF8F1`.

---

## Running it locally

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173/MyPortfolio/
npm run build     # make a production build in dist/
npm run preview   # serve the production build locally
```

---

## Editing content

Almost all text lives in [`src/data.js`](src/data.js), so most updates don't touch any components.

| To change… | Edit in `src/data.js` |
| --- | --- |
| Location (hero sticker, terminal, footer) | `location` |
| Jobs | `experience` (set `head: true` on your current role) |
| Schools | `education` |
| Skills in the orbit | `stackRings` (`"hot"` makes a chip orange, `"yel"` makes it yellow) |
| Projects | `projects` (add `link` to make the card clickable; `shot` picks the illustration) |
| Services | `services` |
| Hobbies | `sideQuests` and `nowPlaying` |
| Editor snippets | `editorSnippets` (each token is `[type, text]`, where type sets the colour) |
| Scrolling bands | `marqueeRows` |
| Pinned statement | `statement` (wrap a word in `*asterisks*` to make it orange) |

A few things live elsewhere:

- **Terminal commands:** `COMMANDS` in [`src/components/Terminal.jsx`](src/components/Terminal.jsx)
- **The `package.json` card:** [`src/components/Stack.jsx`](src/components/Stack.jsx)
- **Page title and description:** [`index.html`](index.html)

---

## Project structure

```text
MyPortfolio/
├── index.html                 # Vite entry: title, meta tags, fonts, favicons
├── public/assets/favicon/     # favicons (SVG + PNG sizes), served as-is
├── src/
│   ├── main.jsx               # mounts <App />
│   ├── App.jsx                # page layout, in section order
│   ├── data.js                # all site content
│   ├── styles.css             # colours, typography and every section's styles
│   ├── utils.js
│   ├── hooks/
│   │   ├── useActiveSection.js   # highlights the nav link for the section in view
│   │   └── useMediaQuery.js
│   └── components/
│       ├── hero/              # Hero, CodeEditor (typing), Circuits (background art)
│       ├── Nav.jsx, Cursor.jsx, ScrollProgress.jsx
│       ├── Marquee.jsx, Statement.jsx
│       ├── Experience.jsx, Education.jsx, Stack.jsx
│       ├── Projects.jsx, Services.jsx, SideQuests.jsx
│       ├── Contact.jsx, Terminal.jsx, MailLink.jsx, Footer.jsx
│       └── Reveal.jsx, BlockHead.jsx   # shared: scroll-in animation, section heading
├── package.json
└── vite.config.js
```

---

## Deploying

The site deploys to GitHub Pages at **https://onweemmanuel.github.io/MyPortfolio/**.

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs dependencies, runs `npm run build`, and publishes the `dist/` folder. You can also run it by hand from the repo's **Actions** tab.

One-time setup: in the repo's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.

The site is served from the `/MyPortfolio/` sub-path, so `base` in [`vite.config.js`](vite.config.js) is set to match. If you move it to a custom domain or a `<user>.github.io` repo, change `base` to `"/"`.

---

## History

This site started as a dark, vanilla HTML/CSS/JS page. It was then converted to React and redesigned into this light, orange-and-green version.

---

## Contact

- Email: [cyberkuv@gmail.com](mailto:cyberkuv@gmail.com)
- GitHub: [OnweEmmanuel](https://github.com/OnweEmmanuel)
- LinkedIn: [emmanuel-onwe](https://www.linkedin.com/in/emmanuel-onwe-97355a184/)

---

## License

GPL-3.0. See [LICENSE](./LICENSE).

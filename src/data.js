// All site content lives here so sections can be edited without touching markup.

export const EMAIL = "cyberkuv@gmail.com";
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
export const GITHUB_URL = "https://github.com/OnweEmmanuel";
export const LINKEDIN_URL = "https://www.linkedin.com/in/emmanuel-onwe-97355a184/";

export const location = {
  from: "Cape Town",
  to: "Lagos",
  route: "CPT → LOS",
  summary: "Cape Town → Lagos · working worldwide",
};

export const navItems = [
  { id: "work", label: "work" },
  { id: "education", label: "education" },
  { id: "stack", label: "stack" },
  { id: "projects", label: "projects" },
  { id: "services", label: "services" },
  { id: "contact", label: "contact" },
];

// Token types: k = keyword, f = name/function, s = string, p = plain, c = comment
export const editorSnippets = [
  {
    file: "profile.py",
    run: "python profile.py",
    output: "✓ engineer ready to ship",
    tokens: [
      ["k", "class "], ["f", "Engineer"], ["p", ":\n    name  = "], ["s", '"Emmanuel Onwe"'],
      ["p", "\n    stack = ["], ["s", '"Laravel"'], ["p", ", "], ["s", '".NET"'], ["p", ", "], ["s", '"React"'],
      ["p", "]\n\n    "], ["k", "def "], ["f", "ship"], ["p", "(self, idea):\n        "],
      ["k", "return "], ["f", "deploy"], ["p", "(idea)  "], ["c", "# always"],
    ],
  },
  {
    file: "Engineer.php",
    run: "php artisan ship",
    output: "✓ 4 features deployed · 0 bugs",
    tokens: [
      ["k", "final class "], ["f", "Engineer "], ["k", "extends "], ["f", "Human"],
      ["p", "\n{\n    "], ["k", "public function "], ["f", "build"], ["p", "("], ["f", "Idea "],
      ["p", "$idea): "], ["f", "Product"], ["p", "\n    {\n        "], ["k", "return "], ["p", "$idea->"],
      ["f", "design"], ["p", "()\n                    ->"], ["f", "test"], ["p", "()->"], ["f", "ship"], ["p", "();\n    }\n}"],
    ],
  },
];

export const marqueeRows = [
  ["LARAVEL", "REACT", ".NET", "ANGULAR", "PHP", "TYPESCRIPT", "PYTHON", "DOCKER"],
  ["APIs THAT SCALE", "UIs THAT FEEL GOOD", "BUGS THAT STAY FIXED", "SHIPPED ON TIME"],
];

// Words wrapped in *asterisks* are highlighted.
export const statement =
  "I turn messy business *problems* into clean, fast, *shipped* software, from the database all the way to the *button* you click.";

export const experience = [
  {
    hash: "a3f9c14",
    head: true,
    company: "InfoDocs",
    role: "Full-Stack Engineer",
    date: "May 2024 → Sept 2026",
    points: ["API endpoints", "new features", "UI components", "data integrity", "bug fixes"],
  },
  {
    hash: "7be2101",
    company: "EasyCrypto",
    role: "Full-Stack Developer",
    date: "Feb 2021 → Nov 2023",
    points: ["team delivery", "testing", "improvements", "pair programming"],
  },
  {
    hash: "c04d9e2",
    company: "WeThinkCode",
    role: "Technical Assistant & Mentor",
    date: "2020 → 2021",
    points: ["student support", "onboarding"],
  },
  {
    hash: "0001init",
    company: "WeThinkCode",
    role: "Developer Intern",
    date: "2019",
    points: ["built Staff Views", "unified student data"],
  },
];

export const education = [
  {
    name: "MANCOSA",
    url: "https://www.mancosa.co.za/",
    qualification: "Bachelor of Commerce in Information Technology Management",
    field: "Information Technology",
    dates: "Jan 2023 – Dec 2026",
    skills: ["Java", "Databases", "+3 skills"],
  },
  {
    name: "WeThinkCode",
    url: "https://wethinkcode.co.za/",
    qualification: "MICT SETA NQF Level 5",
    field: "Computer Programming",
    dates: "2018 – 2020",
    skills: ["Object-Oriented Programming", "Full-Stack Development"],
  },
];

// Orbit rings, innermost first. `inset` is the ring's distance from the edge, as % of the orbit.
// Chip styles: "hot" = orange, "yel" = yellow.
export const stackRings = [
  { inset: 26, seconds: 26, skills: [["React", "hot"], ["TypeScript"], ["Angular", "yel"], ["JavaScript"]] },
  { inset: 14, seconds: 40, offset: 20, skills: [["Laravel", "hot"], ["PHP"], [".NET", "yel"], ["C#"], ["Node.js"]] },
  {
    inset: 2,
    seconds: 60,
    skills: [["Docker"], ["MySQL", "yel"], ["Redis"], ["Python", "hot"], ["Git"], ["Azure DevOps"], ["MongoDB"], ["Linux"]],
  },
];

export const projects = [
  {
    title: "InfoDocs",
    badge: "PLATFORM · 2024–26",
    url: "infodocs.co.za",
    shot: "api",
    description: "API endpoints, features, and UI for a company-secretarial SaaS. Data integrity first.",
    link: { label: "visit infodocs", href: "https://infodocs.co.za/" },
  },
  {
    title: "EasyCrypto",
    badge: "PLATFORM · 2021–23",
    url: "crypto.easyequities.co.za",
    shot: "crypto",
    description: "Full-stack work on EasyEquities' crypto platform: features, testing, and improvements as part of the dev team.",
    link: { label: "visit easycrypto", href: "https://crypto.easyequities.co.za/" },
  },
  {
    title: "Olutomi Kassim, digital CV",
    badge: "CLIENT SITE",
    url: "kassimd813-cloud.github.io",
    shot: "graph",
    description: "A digital CV for a Cape Town mathematics educator, designed around graphs and equations, with his teaching career plotted as a timeline.",
    link: { label: "visit the cv", href: "https://kassimd813-cloud.github.io/" },
  },
  {
    title: "This portfolio",
    badge: "LIVE · React + Motion",
    url: "emmanuel.onwe",
    shot: "portfolio",
    description: "Rebuilt from vanilla HTML to React, with a typing editor, scroll-driven art, and a working terminal.",
    link: { label: "view source", href: "https://github.com/OnweEmmanuel/MyPortfolio" },
  },
  {
    title: "Dice Roller",
    badge: "ANDROID",
    url: "github › dice-roller",
    shot: "dice",
    description: "A small Android app from when I was learning mobile fundamentals.",
    link: { label: "view code", href: "https://github.com/OnweEmmanuel/dice-roller" },
  },
];

export const services = [
  { title: "Business websites", description: "Modern sites that bring small businesses customers." },
  { title: "Web applications", description: "Custom apps on Laravel, .NET, React or Angular." },
  { title: "Fixes & maintenance", description: "Bugs squashed, slow things made fast." },
];

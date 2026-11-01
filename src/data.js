// All site content lives here so sections can be edited without touching markup.

export const EMAIL = "cyberkuv@gmail.com";
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

export const navItems = [
  { id: "home", label: "01 / Home" },
  { id: "experience", label: "02 / Experience" },
  { id: "education", label: "03 / Education" },
  { id: "skills", label: "04 / Stack" },
  { id: "projects", label: "05 / Projects" },
  { id: "services", label: "06 / Services" },
  { id: "contact", label: "07 / Contact" },
];

export const heroMeta = [
  { term: "Current", value: "Full-Stack Software Engineer" },
  { term: "Focus", value: "Web Development / Full-Stack Development" },
  { term: "Since", value: "2019" },
];

export const experience = [
  {
    company: "InfoDocs",
    role: "Full-Stack Engineer",
    date: "May 2024 - Sept 2026",
    points: [
      "Maintain data integrity",
      "Fix bugs and improve existing features",
      "Build new features",
      "Develop API endpoints",
      "Create UI components",
    ],
  },
  {
    company: "EasyCrypto",
    role: "Full-Stack Developer",
    date: "Feb 2021 - Nov 2023",
    points: [
      "Worked in a development team",
      "Bug fixing and testing",
      "Suggested improvements",
      "Pair programming",
    ],
  },
  {
    company: "WeThinkCode",
    role: "Technical Assistant & Mentor",
    date: "2020 - 2021",
    points: ["Assisted students with technical issues", "Supported onboarding and learning"],
  },
  {
    company: "WeThinkCode",
    role: "Developer Intern",
    date: "2019",
    points: ['Built "Staff Views" system', "Aggregated student data into a unified interface"],
  },
];

export const education = [
  {
    name: "MANCOSA",
    url: "https://www.mancosa.co.za/",
    code: "EDU_01",
    mark: "m",
    markPath: "M14 42V14h7l7 16 7-16h7v28h-6.5V24L29.5 42h-3L20.5 24v18H14Z",
    signal: "DEGREE / IT",
    qualification: "Bachelor of Commerce in Information Technology Management",
    field: "Information Technology",
    dates: "Jan 2023 – Dec 2026",
    skills: ["Java", "Databases", "+3 skills"],
  },
  {
    name: "WeThinkCode",
    url: "https://wethinkcode.co.za/",
    code: "EDU_02",
    mark: "w",
    markPath: "M10 14h7l5.5 20L28 14h6l5.5 20L45 14h7l-8 28H36l-5.5-20L25 42h-8L10 14Z",
    signal: "NQF 5 / PROGRAMMING",
    qualification: "MICT SETA NQF Level 5",
    field: "Computer Programming",
    dates: "2018 – 2020",
    skills: ["Object-Oriented Programming (OOP)", "Full-Stack Development"],
  },
];

// A panel has either `title` + `skills`, or `groups` of { title, skills }.
export const skillPanels = [
  {
    title: "Programming",
    skills: ["C#", "JavaScript", "TypeScript", "PHP", "Java", "Python", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["Angular", "React", "HTML5", "CSS3", "SCSS", "Bootstrap", "RxJS"],
  },
  {
    title: "Backend",
    skills: [".NET", "ASP.NET Core", "Laravel", "Node.js", "REST APIs"],
  },
  {
    groups: [
      { title: "Databases & Caching", skills: ["MySQL", "MongoDB", "Redis"] },
      { title: "AI & Development", skills: ["Cursor", "ChatGPT"] },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Azure DevOps",
      "Docker",
      "Docker Compose",
      "CI/CD",
      "Bitbucket Pipelines",
      "Postman",
      "VS Code",
      "Composer",
      "npm",
      "Vite",
      "Linux",
    ],
  },
  {
    title: "Development & Monitoring",
    skills: [
      "Laravel Horizon",
      "Sentry",
      "Automated Testing",
      "API Testing",
      "Webhooks",
      "JSON",
    ],
  },
];

export const projects = [
  {
    title: "Dice Roller App",
    description: "Basic Android app built while learning fundamentals.",
    url: "https://github.com/OnweEmmanuel/dice-roller",
    code: "PROJECT_01",
    glyph: "dice",
    signal: "ANDROID / FUNDAMENTALS",
  },
  {
    title: "PHP Bootcamp Project",
    description: "Built during a 2-week bootcamp and covers PHP, HTML, CSS, and SQL basics.",
    url: "https://github.com/OnweEmmanuel/Php_bootcamp",
    code: "PROJECT_02",
    glyph: "php",
    signal: "PHP / HTML / CSS / SQL",
  },
];

export const services = [
  {
    title: "Business Website Development",
    description: "Simple, modern websites for small businesses to attract customers.",
  },
  {
    title: "Web Application Development",
    description: "Custom web apps built with modern technologies.",
  },
  {
    title: "Bug Fixing & Maintenance",
    description: "Fix issues and improve performance of existing systems.",
  },
];

export const socialLinks = [
  { label: "GITHUB", value: "GitHub Profile", url: "https://github.com/OnweEmmanuel" },
  {
    label: "LINKEDIN",
    value: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/emmanuel-onwe-97355a184/",
  },
];

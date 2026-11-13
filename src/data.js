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

// `page: true` links to a separate page instead of a homepage section.
export const navItems = [
  { id: "work", label: "work" },
  { id: "education", label: "education" },
  { id: "stack", label: "stack" },
  { id: "projects", label: "projects" },
  { id: "services", label: "services" },
  { id: "side-quests", label: "fun" },
  { id: "pricing", label: "pricing", page: true },
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

// Career summary shown above the timeline.
export const experienceSummary = [
  { value: "5+", label: "years building software professionally" },
  { value: "4", label: "roles, from intern to full-stack engineer" },
  { value: "2019 → 2026", label: "across fintech, SaaS and tech education" },
];

// Dates are "YYYY-MM" or "YYYY". When both ends have a month, the duration is
// worked out automatically. Roles use `groups` (headed lists) or `points`
// (a flat list). `stack` shows technologies; `focus` shows areas of work.
export const experience = [
  {
    hash: "a3f9c14",
    head: true,
    company: "InfoDocs",
    role: "Full-Stack Software Engineer",
    start: "2024-05",
    end: "2026-09",
    summary:
      "Full-stack engineering on InfoDocs, a company-secretarial SaaS platform. I worked across the Laravel backend and the Angular frontend, building and maintaining the APIs, background processing and user-facing workflows the product runs on, and tracing production issues from the interface down to the database.",
    groups: [
      {
        title: "backend",
        points: [
          "Developed and maintained backend features in PHP and Laravel 11, implementing business logic in service classes composed through dependency injection.",
          "Built and maintained RESTful API endpoints for the Angular frontend, using Postman to test request and response contracts as they changed.",
          "Implemented background jobs on Redis queues, monitored through Laravel Horizon, moving slow work out of the request cycle with explicit failure handling and logging.",
        ],
      },
      {
        title: "database",
        points: [
          "Wrote and maintained the MySQL queries and model relationships behind data-driven features, with a focus on data integrity across related records.",
          "Optimised database interactions where features needed it, and kept structured data consistent at the application level.",
        ],
      },
      {
        title: "frontend",
        points: [
          "Built and improved features in Angular and TypeScript, integrating components with backend APIs.",
          "Refined existing user-facing workflows and responsive layouts across the application.",
        ],
      },
      {
        title: "quality & delivery",
        points: [
          "Investigated and resolved production issues across frontend and backend, using application logs to find root causes instead of patching symptoms.",
          "Reviewed and raised pull requests on Bitbucket, tracked work in Jira, and followed the team's development and deployment process.",
          "Wrote and maintained technical documentation so features stayed understandable after they shipped.",
        ],
      },
    ],
    stack: ["PHP", "Laravel 11", "MySQL", "Redis", "Laravel Horizon", "Angular", "TypeScript", "JavaScript", "REST APIs", "Docker", "Git", "Bitbucket", "Jira", "Postman"],
  },
  {
    hash: "7be2101",
    company: "EasyCrypto",
    role: "Full-Stack Developer",
    start: "2021-02",
    end: "2023-11",
    summary:
      "Full-stack developer on EasyCrypto, the cryptocurrency platform from EasyEquities. I joined the product team on an established ASP.NET and C# codebase, delivering features and improvements across the frontend and backend, and took part in the team's testing and pair programming.",
    points: [
      "Developed and maintained full-stack application features in ASP.NET and C#, from user interface implementation through to backend logic and API integration.",
      "Wrote and maintained SQL stored procedures behind the platform's data access, and connected frontend views to backend services through REST APIs.",
      "Debugged and troubleshot issues across the stack, improving how established features behaved inside an existing codebase.",
      "Tested new and changed functionality before release, working through Azure DevOps as part of the team's delivery process.",
      "Pair-programmed with other developers to work through problems, share context and keep the codebase consistent.",
    ],
    stack: ["ASP.NET", "C#", "SQL Stored Procedures", "REST APIs", "Azure DevOps"],
  },
  {
    hash: "c04d9e2",
    company: "WeThinkCode_",
    role: "Technical Assistant & Mentor",
    start: "2020",
    end: "2021",
    summary:
      "Supported students on WeThinkCode_'s software development programme, helping them get unstuck without handing them the answer.",
    points: [
      "Helped students work through programming concepts and practical exercises, explaining technical ideas in clear, practical terms.",
      "Guided students through debugging their own code: reading errors, isolating the problem and testing their assumptions.",
      "Encouraged independent problem-solving by asking the questions that lead to an answer rather than giving it away.",
      "Supported onboarding for new students and helped keep the learning environment collaborative.",
    ],
    focus: ["Mentorship", "Technical Communication", "Debugging", "Onboarding"],
  },
  {
    hash: "0001init",
    company: "WeThinkCode_",
    role: "Developer Intern",
    start: "2019",
    end: "2019",
    summary: "Where my professional career started: building working software for real users.",
    points: [
      "Built Staff Views, an internal system that aggregated student data into a single, unified interface for staff.",
      "Gained hands-on experience of the full development process, from understanding what staff needed to delivering a working tool.",
    ],
    focus: ["Internal Tooling", "Data Aggregation"],
  },
];

export const education = [
  {
    name: "MANCOSA",
    url: "https://www.mancosa.co.za/",
    qualification: "Bachelor of Commerce in Information Technology Management",
    field: "Information Technology",
    dates: "Jan 2023 – Dec 2026",
    skills: [
      "Java",
      "Databases",
      "Software Engineering Practice",
      "Systems Analysis & Design",
      "IT Law & Ethics",
      "Auditing",
      "Capstone Project",
    ],
  },
  {
    name: "WeThinkCode",
    url: "https://wethinkcode.co.za/",
    qualification: "MICT SETA NQF Level 5",
    field: "Computer Programming",
    dates: "2018 – 2020",
    skills: ["C", "C++", "Java", "PHP", "Angular", "Bash", "Makefile", "Docker", "Object-Oriented Programming", "Full-Stack Development"],
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
    title: "Kepa",
    badge: "ANDROID APP · 2026",
    url: "kepa › android",
    shot: "kepa",
    description:
      "A free, private tracker for subscriptions, debit orders, renewals and warranties, built in Flutter for West and Southern Africa. Reminders, bank-statement import and on-device slip scanning; nothing leaves the phone.",
    // Opens the Kepa page on this site (same tab); the code is private.
    link: { label: "see kepa", href: `${import.meta.env.BASE_URL}kepa/`, internal: true },
  },
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
    title: "This portfolio",
    badge: "LIVE · React + Motion",
    url: "emmanuel.onwe",
    shot: "portfolio",
    description: "Rebuilt from vanilla HTML to React, with a typing editor, scroll-driven art, and a working terminal.",
    link: { label: "view source", href: "https://github.com/OnweEmmanuel/MyPortfolio" },
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
    title: "Dice Roller",
    badge: "ANDROID",
    url: "github › dice-roller",
    shot: "dice",
    description: "A small Android app from when I was learning mobile fundamentals.",
    link: { label: "view code", href: "https://github.com/OnweEmmanuel/dice-roller" },
  },
  {
    title: "Tic-tac-toe",
    badge: "PYTHON · TERMINAL",
    url: "github › tick-tack-toe",
    shot: "tictactoe",
    description: "A two-player tic-tac-toe game that runs right in the terminal, written in Python.",
    link: { label: "view code", href: "https://github.com/OnweEmmanuel/tick-tack-toe" },
  },
];

export const CODM_USERNAME = "STRANGER亗乂";

export const nowPlaying = [
  "▶ watching: Black Clover",
  "📖 reading: Overgeared",
  "🎮 dropping in: CODM BR",
  "🏰 builders: all busy (always)",
];

// `facts` are shown as chips. Each stat is a joke "progress bar"; `value` can
// go past 100, the bar just caps out.
export const sideQuests = [
  {
    icon: "🎯",
    tag: "BR MAIN",
    title: "Call of Duty: Mobile",
    text: "Battle Royale main, but I'll happily run Multiplayer too. I don't lose, I get lagged. Every win is pure skill; every death is my Wi-Fi's fault. Science.",
    facts: [`IGN: ${CODM_USERNAME}`, "21× Legendary BR", "7× Legendary MP"],
    stat: { label: "Blaming the ping", value: 97 },
  },
  {
    icon: "🏰",
    tag: "SINCE 2019",
    title: "Clash of Clans",
    text: "Building since 2019, with a 'strategic break' in the middle. Now at Town Hall 17, still upgrading walls. The only roadmap I've seen that's longer than enterprise software.",
    facts: ["Town Hall 17", "Dragons", "Balloons", "Lightning spells"],
    stat: { label: "Free builders", value: 0 },
  },
  {
    icon: "🏴‍☠️",
    tag: "ANIME",
    title: "One Piece → Black Clover",
    text: "All-time favourite: One Piece. 1,000+ episodes and somehow still too short. Currently on Black Clover: a guy with zero magic screams his way to the top. That's also my debugging strategy.",
    facts: ["Favourite: One Piece", "Watching: Black Clover"],
    stat: { label: "Belief the One Piece is real", value: 100 },
  },
  {
    icon: "📚",
    tag: "CHAPTER ADDICT",
    title: "Manga & manhwa",
    text: "Currently reading Overgeared and Tower of God. Team Urek Mazino, obviously. I read faster than they release, and cliffhangers should be a punishable offence.",
    facts: ["Overgeared", "Tower of God", "Urek Mazino supremacy"],
    stat: { label: "Patience for next chapter", value: 4 },
  },
  {
    icon: "🎳",
    tag: "UNDEFEATED-ISH",
    title: "Bowling",
    text: "I'm actually good at this one. I almost always win, so the occasional gutter ball is really just me being kind to everyone else.",
    facts: ["High score: 130+", "Almost always wins"],
    stat: { label: "Win rate (allegedly)", value: 90 },
  },
  {
    icon: "⛳",
    tag: "JUST FOR FUN",
    title: "Mini golf",
    text: "Not good. Don't care. I have the most fun on the course while losing to people who 'never play'. Also, the windmill hole is rigged.",
    facts: ["Skill: questionable", "Fun: maxed out"],
    stat: { label: "Actual skill", value: 25 },
  },
];

// `includes` is what the client gets; `goodFor` says who it suits.
export const services = [
  {
    title: "Business websites",
    pitch: "Fast, modern websites that help small businesses and professionals get found, look credible and turn visitors into enquiries.",
    includes: [
      "A custom design built around your brand, not a stock template",
      "Responsive layouts that work on phones, tablets and desktops",
      "Contact and enquiry forms that land in your inbox",
      "SEO basics: clear page titles, descriptions and fast load times",
      "Domain, hosting and deployment set up for you",
    ],
    goodFor: "Small businesses, freelancers and personal brands",
    stack: ["React", "Laravel", "HTML & CSS", "JavaScript"],
  },
  {
    title: "Web applications",
    pitch: "Custom software built around how your business actually works, from the database and API through to the screens your team uses every day.",
    includes: [
      "Dashboards, client portals and internal tools",
      "REST APIs and integrations with the services you already use",
      "Database design that keeps your data consistent",
      "Background jobs and queues for slow or heavy work",
      "User accounts, roles and permissions",
    ],
    goodFor: "Teams outgrowing spreadsheets and startups building a product",
    stack: ["Laravel", "ASP.NET / C#", "Angular", "React", "MySQL", "Redis"],
  },
  {
    title: "Fixes & maintenance",
    pitch: "Keep an existing application healthy: bugs traced to their cause, slow pages made faster and code that is safer to change.",
    includes: [
      "Bug investigation and root-cause fixes, not quick patches",
      "Performance work on slow pages and database queries",
      "Framework and dependency upgrades",
      "New features added to an existing codebase",
      "Documentation so the next developer is not starting blind",
    ],
    goodFor: "Apps whose original developer has moved on, or teams with a backlog",
    stack: ["PHP / Laravel", ".NET", "Angular", "MySQL", "Docker"],
  },
];

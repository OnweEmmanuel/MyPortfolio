// Everything on the Kepa page (/kepa/) and its project card lives here.

const BASE = import.meta.env.BASE_URL;

export const KEPA_PATH = `${BASE}kepa/`;
export const KEPA_PRIVACY_PATH = `${BASE}kepa/privacy/`;
export const KEPA_EMAIL = "getkepainc@gmail.com";

// Set once Kepa is live on Google Play; the page then shows a store button.
export const KEPA_PLAY_URL = null;

export const kepaAsset = (file) => `${BASE}assets/kepa/${file}`;

export const kepaIntro =
  "Kepa keeps every subscription, debit order, renewal and warranty in one calm place, and reminds you before money leaves your account. It's free, has no ads, and everything stays on your phone.";

export const kepaFacts = [
  { value: "0", label: "accounts, servers or trackers" },
  { value: "26", label: "African countries, each in its own currency" },
  { value: "100%", label: "on your phone, works offline" },
];

// Screenshots from a real phone (Galaxy S25 Ultra), demo data.
export const kepaScreens = [
  { file: "screen-home.png", title: "Home", caption: "What's left this month, what's due before payday, and what's up next." },
  { file: "screen-subscriptions.png", title: "Subscriptions", caption: "A timeline of every debit order and card subscription." },
  { file: "screen-detail.png", title: "Details", caption: "Mark it paid, record a price rise, or cancel with a reminder of what you'll save." },
  { file: "screen-insights.png", title: "Insights", caption: "Where your money goes: by category, the biggest costs, and what changed." },
];

export const kepaFeatures = [
  {
    tag: "REMINDERS",
    title: "Know what's coming",
    text: "A nudge before every charge, at the time you choose. Exact alarms on Android, a reminder health check, and battery-saver help for Samsung, Xiaomi, Tecno and more.",
  },
  {
    tag: "STATEMENT IMPORT",
    title: "Find what you forgot",
    text: "Pick a PDF or CSV bank statement and Kepa spots the charges that repeat. Locked statements work too. The file is read on the phone and never kept.",
  },
  {
    tag: "VAULT",
    title: "Warranties and renewals",
    text: "Snap a till slip and Kepa reads the store, date and items on the device. Licence discs, passports, insurance and contract upgrades, every year or every few.",
  },
  {
    tag: "PAYDAY",
    title: "Before payday",
    text: "Set the day you get paid and Home shows what still has to come out of this pay, overdue included.",
  },
];

export const kepaPrivacy = [
  "No account, no sign-in, no bank login.",
  "The Play Store build has no internet permission at all, so nothing can leave the phone.",
  "No ads, analytics or tracking.",
  "Backups are one AES-256 encrypted file, protected by a password only you know.",
  "Delete everything from Settings in one tap.",
];

export const kepaStack = [
  "Flutter",
  "Dart",
  "Riverpod",
  "drift (SQLite)",
  "ML Kit, on-device",
  "PDF parsing in pure Dart",
  "AES-GCM backups",
];

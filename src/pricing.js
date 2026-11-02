// All pricing lives here. The homepage teaser and the /pricing page both read
// from this file, so a price only ever needs changing once. Prices are USD.

export const PRICING_PATH = `${import.meta.env.BASE_URL}pricing/`;

export const formatPrice = (amount) => `$${amount.toLocaleString("en-US")}`;

export const pricingIntro =
  "I build personal websites that work as an online CV: one link that shows who you are, what you've done, and how to reach you. For job seekers, consultants, academics, freelancers and professionals who want to stand out from a PDF. All prices are in US dollars; clients paying in rand, naira or another currency pay the equivalent at the exchange rate on the invoice date. Every site is mobile-friendly, fast, and yours to keep.";

// `popular` marks the highlighted package.
export const packages = [
  { id: "starter", name: "Starter", price: 100, bestFor: "Job seekers who need a link fast" },
  { id: "professional", name: "Professional", price: 250, bestFor: "Professionals and consultants", popular: true },
  { id: "signature", name: "Signature", price: 400, bestFor: "Senior people, creatives, academics" },
];

export const startingPrice = Math.min(...packages.map((pkg) => pkg.price));

// One value per package, in the same order as `packages`.
export const packageFeatures = [
  { label: "Pages", values: ["1 scrolling page", "Up to 4 sections or pages", "Up to 7 pages, incl. projects or publications"] },
  { label: "Design", values: ["Ready-made template, your colors", "Template customized to your style", "Custom design from scratch"] },
  { label: "Downloadable CV (PDF)", values: ["Yes", "Yes", "Yes"] },
  { label: "Contact form", values: ["Not included", "Yes", "Yes"] },
  { label: "Custom domain setup", values: ["Not included", "Included", "Included"] },
  { label: "Portfolio/project showcase", values: ["Not included", "Up to 6 items", "Unlimited items"] },
  { label: "Basic SEO (Google-friendly titles, preview image)", values: ["Not included", "Included", "Included"] },
  { label: "Visitor analytics", values: ["Not included", "Not included", "Included"] },
  { label: "Revision rounds", values: ["1", "2", "3"] },
  { label: "Delivery", values: ["5 working days", "7 working days", "14 working days"] },
];

export const packagesNote =
  "Domain registration costs (usually $10–$20 a year) are paid by the client at cost, and the domain is registered in the client's name. You pay your domain and any hosting costs directly; on a care plan, I manage them for you.";

export const carePlans = [
  { id: "essential", name: "Essential", monthly: 10, yearly: 100 },
  { id: "plus", name: "Plus", monthly: 25, yearly: 250 },
];

// One value per care plan, in the same order as `carePlans`.
export const carePlanFeatures = [
  { label: "Hosting, security and uptime checks", values: ["Yes", "Yes"] },
  { label: "Domain renewal reminders and management", values: ["Yes", "Yes"] },
  { label: "Content updates", values: ["1 small update a month", "Up to 4 updates a month"] },
  { label: "Response time", values: ["3 working days", "1 working day"] },
  { label: "New section added per year", values: ["Not included", "1 included"] },
];

export const carePlansNote =
  "No plan? You can host the site yourself; I'll hand over the files and a short guide. One-off updates outside a plan cost $25 each.";

// `price` is a USD amount; `priceLabel` is used instead when the price isn't fixed.
export const addOns = [
  { name: "Extra page or section", price: 40 },
  { name: "Bio and profile writing", detail: "I write your About text from a short call", price: 50 },
  { name: "CV redesign as a matching PDF", price: 40 },
  { name: "Professional email setup", detail: "you@yourname.com", price: 25 },
  { name: "Rush delivery", detail: "half the normal time", priceLabel: "+30% of package price" },
  { name: "Extra revision round", price: 20 },
];

export const steps = [
  { title: "Short call or chat (free, 15 minutes)", text: "We agree on the package, style, and what goes on the site." },
  { title: "Deposit", text: "You pay 50% to book your slot." },
  { title: "Your content", text: "You send your CV, photo, and any links or projects. The delivery clock starts when I have everything." },
  { title: "First draft", text: "I send a private preview link." },
  { title: "Revisions", text: "You send feedback; I make changes within your package's revision rounds." },
  { title: "Final payment and launch", text: "You pay the remaining 50%, and the site goes live on your domain." },
  { title: "Care plan (optional)", text: "Your monthly plan starts on launch day." },
];

export const paymentTerms = [
  { title: "Payment", text: "50% deposit to start, 50% before launch. Care plans are paid in advance, monthly or yearly." },
  { title: "How to pay", text: "Bank transfer or an international payment link, in USD or the local equivalent on the invoice date." },
  { title: "Revisions", text: "A revision round is one set of feedback sent together. New features or pages count as add-ons, not revisions." },
  { title: "Content", text: "You provide your CV, photo, and text. If I write it, that's the Bio and profile writing add-on." },
  { title: "Delays", text: "If I don't hear back within 30 days of sending a draft, the project is closed, and the deposit is kept. It can be restarted later." },
  { title: "Refunds", text: "The deposit is refundable only if I haven't started the design. Care plans can be cancelled at any time and stop at the end of the paid period." },
  { title: "Ownership", text: "Once paid in full, the site content and domain are yours. If you leave the care plan, I hand over the files." },
];

// 0 -> "01", 1 -> "02", ...
export const padIndex = (index) => String(index + 1).padStart(2, "0");

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

// "2024-05" -> "May 2024", "2020" -> "2020"
export const formatMonth = (value) => {
  const [year, month] = value.split("-");
  return month ? `${MONTHS[month - 1]} ${year}` : year;
};

// Inclusive length of a "YYYY-MM" range, e.g. "2 yrs 5 mos". Null for year-only dates.
export const formatDuration = (start, end) => {
  const [startYear, startMonth] = start.split("-").map(Number);
  const [endYear, endMonth] = end.split("-").map(Number);
  if (!startMonth || !endMonth) {
    return null;
  }
  const total = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  return [years && plural(years, "yr"), months && plural(months, "mo")].filter(Boolean).join(" ");
};

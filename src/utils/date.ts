/**
 * Returns the current four-digit year as a number.
 * Use this anywhere a copyright year or "current year" is displayed
 * so it never needs to be updated manually.
 */
export function currentYear(): number {
  return new Date().getFullYear();
}

/**
 * Returns a formatted date string, e.g. "18 April 2025".
 * Defaults to today when no date is provided.
 */
export function formatDate(date: Date = new Date(), locale = "en-GB"): string {
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Returns today formatted as "DD Month YYYY", e.g. "18 April 2025".
 */
export function today(locale = "en-GB"): string {
  return formatDate(new Date(), locale);
}

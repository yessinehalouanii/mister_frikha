import { yearsOfExperience } from "@/lib/site";

/** "25+" in 2026, "30+" from 2030: rounded down to the last full five years. */
export const yearsLabel = () => `${Math.floor(yearsOfExperience() / 5) * 5}+`;

/** French typography: narrow no-break space before high punctuation. */
export function frenchTypography<T>(value: T): T {
  if (typeof value === "string") {
    return value.replace(/ ([:;!?»])/g, " $1").replace(/« /g, "« ") as T;
  }
  if (Array.isArray(value)) return value.map(frenchTypography) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, frenchTypography(v)]),
    ) as T;
  }
  return value;
}

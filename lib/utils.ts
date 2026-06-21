/**
 * Merge class names, filtering out falsy values.
 * Simple utility to avoid adding a class-variance-authority dependency.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidSyntaxSlug(slug: string): boolean {
  // Regular expression for a valid slug
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  // Check if the string matches the regex
  return slugRegex.test(slug);
}

export function convertToSlug(input: string): string {
  // Convert to lowercase and replace spaces with dashes
  const slug = input.toLowerCase().replace(/\s+/g, '-');
  // Remove special characters
  const validSlug = slug.replace(/[^\w-]/g, '');
  return validSlug;
}
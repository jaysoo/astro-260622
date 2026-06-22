/**
 * Shared UI component utilities for the Astro Starlight docs site.
 * Import from '@astro-starlight-template/ui-components' in your MDX/Astro files.
 */

/** Generates a slug from a heading string */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Formats an ISO date string for display in docs */
export function formatDate(iso: string, locale = 'en-US'): string {
  return new Date(iso).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Returns reading time estimate in minutes */
export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

/** Sidebar entry shape used across doc pages */
export interface SidebarEntry {
  label: string;
  href: string;
  badge?: string;
}

/** Creates a sorted sidebar section from an array of entries */
export function sortedSidebar(entries: SidebarEntry[]): SidebarEntry[] {
  return [...entries].sort((a, b) => a.label.localeCompare(b.label));
}

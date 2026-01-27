import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', 
    month: 'long',
    year: 'numeric'
  })
}

export function generateUUID() {
  // If crypto.randomUUID exists (Node 19+ or modern browser)
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // Fallback for older browsers or any environment (Coolify)
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
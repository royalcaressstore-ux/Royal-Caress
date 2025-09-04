/**
 * Utility function to check if code is running in the browser environment
 * This helps prevent "window is not defined" errors during server-side rendering
 */
export function isBrowser(): boolean {
  return typeof window !== "undefined"
}

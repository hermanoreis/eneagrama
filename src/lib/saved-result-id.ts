export const RESULT_ID_KEY = "eneagrama-resultado-id";

export function loadSavedResultId(): string | null {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const id = sessionStorage.getItem(RESULT_ID_KEY);
    return parseResultId(id);
  } catch {
    return null;
  }
}

export function saveSavedResultId(id: string) {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(RESULT_ID_KEY, id);
  } catch {
    /* Ignore quota / private-mode failures. */
  }
}

export function clearSavedResultId() {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.removeItem(RESULT_ID_KEY);
  } catch {
    /* Ignore quota / private-mode failures. */
  }
}

export function parseResultId(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const id = value.trim();
  if (id.length < 8 || id.length > 128 || !/^[\w-]+$/.test(id)) return null;
  return id;
}

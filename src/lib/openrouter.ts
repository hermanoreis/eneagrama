import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const MENTOR_MODEL =
  process.env.OPENROUTER_MODEL ?? "anthropic/claude-haiku-4.5";

export function getOpenRouter() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not set");
  }
  return createOpenRouter({
    apiKey,
    headers: {
      "HTTP-Referer":
        process.env.BETTER_AUTH_URL ||
        (process.env.VERCEL_PROJECT_PRODUCTION_URL
          ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
          : "http://localhost:3000"),
      "X-Title": "Eneagrama Mentor",
    },
  });
}

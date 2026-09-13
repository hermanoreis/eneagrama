import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { createMentorAgent, portraitForUser } from "../../../lib/mentor/agent";
import { saveMentorMessages } from "../../../lib/mentor/store";
import { auth } from "../../../lib/auth";
import { parseLocale } from "../../../i18n/config";
import { localeFromHeaders } from "../../../i18n/request-locale";

export const maxDuration = 60;

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    return new Response("unauthorized", { status: 401 });
  }
  if (!process.env.OPENROUTER_API_KEY) {
    return Response.json(
      { error: "mentor-unconfigured" },
      { status: 503 },
    );
  }

  const body = (await request.json()) as { messages?: UIMessage[]; locale?: string };
  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "messages" }, { status: 400 });
  }

  const locale = body.locale ? parseLocale(body.locale) : localeFromHeaders(request.headers);
  const portrait = await portraitForUser(
    {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
    },
    locale,
  );
  const agent = createMentorAgent(portrait, locale);
  const result = await agent.stream({
    messages: await convertToModelMessages(messages),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({
      stream: result.stream,
      originalMessages: messages,
      onEnd: ({ messages: next }) => {
        void saveMentorMessages(session.user.id, next);
      },
    }),
  });
}

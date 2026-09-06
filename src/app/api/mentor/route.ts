import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { createMentorAgent, portraitForUser } from "../../../lib/mentor/agent";
import { saveMentorMessages } from "../../../lib/mentor/store";
import { auth } from "../../../lib/auth";

export const maxDuration = 60;

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    return new Response("unauthorized", { status: 401 });
  }
  if (!process.env.OPENROUTER_API_KEY) {
    return Response.json(
      { error: "O mentor ainda não tem a chave da OpenRouter configurada." },
      { status: 503 },
    );
  }

  const body = (await request.json()) as { messages?: UIMessage[] };
  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "messages" }, { status: 400 });
  }

  const portrait = await portraitForUser({
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  });
  const agent = createMentorAgent(portrait);
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

"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useMemo, useState } from "react";
import { useI18n } from "@/i18n/provider";
import type { MentorUIMessage } from "@/lib/mentor/agent";

function textOf(message: MentorUIMessage) {
  return message.parts
    .filter((part): part is { type: "text"; text: string } => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export function MentorClient({
  initialMessages,
  primaryLabel,
  configured,
}: {
  initialMessages: MentorUIMessage[];
  primaryLabel: string | null;
  configured: boolean;
}) {
  const { locale, messages: m } = useI18n();
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/mentor",
        headers: { "x-eneagrama-locale": locale },
        body: { locale },
      }),
    [locale],
  );
  const { messages, sendMessage, status, error } = useChat<MentorUIMessage>({
    messages: initialMessages,
    transport,
  });
  const [input, setInput] = useState("");
  const busy = status === "submitted" || status === "streaming";
  const [beforeResult, afterResult] = m.mentor.withResult.split("{label}");

  function submit(text: string) {
    const trimmed = text.trim();
    if (!configured || !trimmed || busy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col gap-6">
      <header>
        <h1 className="font-display text-5xl">{m.mentor.h1}</h1>
        <p className="mt-3 max-w-xl leading-relaxed text-[color:var(--ink-soft)]">
          {m.mentor.lead}
          {primaryLabel ? (
            <>
              {" "}
              {beforeResult}
              <strong>{primaryLabel}</strong>
              {afterResult}
            </>
          ) : (
            <> {m.mentor.withoutResult}</>
          )}
        </p>
      </header>

      {messages.length === 0 ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {m.mentor.suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => submit(s)}
              className="paper-sheet-plain px-4 py-4 text-left text-sm leading-relaxed hover:bg-[color:var(--paper)]"
            >
              {s}
            </button>
          ))}
        </div>
      ) : (
        <ol className="space-y-4">
          {messages.map((message) => {
            const mine = message.role === "user";
            const body = textOf(message);
            const looking = message.parts.some(
              (part) => part.type === "tool-consultarTipo" || part.type === "tool-retratoDoUsuario",
            );
            if (!body && !looking) return null;
            return (
              <li
                key={message.id}
                className={`max-w-[92%] rounded-[4px] px-5 py-4 ${
                  mine
                    ? "ml-auto bg-[color:var(--ink)] text-[color:var(--paper)]"
                    : "bg-[color:var(--wash)]"
                }`}
              >
                {!mine && looking && !body ? (
                  <p className="text-sm text-[color:var(--mute)]">{m.mentor.consulting}</p>
                ) : null}
                {body ? <p className="whitespace-pre-wrap leading-relaxed">{body}</p> : null}
              </li>
            );
          })}
          {busy ? <li className="text-sm text-[color:var(--mute)]">{m.mentor.thinking}</li> : null}
        </ol>
      )}

      {!configured ? (
        <p className="paper-sheet text-sm">{m.mentor.unavailable}</p>
      ) : null}
      {error ? <p className="paper-sheet text-sm">{m.mentor.error}</p> : null}

      <p className="text-sm leading-relaxed text-[color:var(--mute)]">{m.mentor.disclaimer}</p>
      <form
        className="sticky bottom-4 mt-auto flex gap-2 rounded-[4px] border border-[color:var(--line)] bg-[color:var(--paper)] p-2"
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit(input);
            }
          }}
          rows={2}
          aria-label={m.mentor.placeholder}
          placeholder={m.mentor.placeholder}
          className="min-h-[52px] flex-1 resize-none bg-transparent px-3 py-2 outline-none"
        />
        <button disabled={!configured || busy || !input.trim()} className="btn-primary self-end !px-4 !py-2" type="submit">
          {m.mentor.send}
        </button>
      </form>
    </div>
  );
}

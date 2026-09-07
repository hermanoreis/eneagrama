"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useMemo, useState } from "react";
import type { MentorUIMessage } from "../lib/mentor/agent";

const SUGGESTIONS = [
  "Tenho dificuldade para dizer não. Por onde começo?",
  "Me identifiquei com dois tipos. Como comparar?",
  "Como posso receber uma crítica sem responder na hora?",
  "Uma prática simples para hoje",
];

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
  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/mentor" }),
    [],
  );
  const { messages, sendMessage, status, error } = useChat<MentorUIMessage>({
    messages: initialMessages,
    transport,
  });
  const [input, setInput] = useState("");
  const busy = status === "submitted" || status === "streaming";

  function submit(text: string) {
    const trimmed = text.trim();
    if (!configured || !trimmed || busy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col gap-6">
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">Mentor</p>
        <h1 className="mt-2 font-display text-5xl">Vamos olhar para uma situação da sua vida?</h1>
        <p className="mt-3 max-w-xl leading-relaxed text-[color:var(--ink-soft)]">
          Converse com uma IA sobre o Eneagrama e seu resultado. Ela pode ajudar com perguntas e sugestões de prática.
          {primaryLabel ? (
            <>
              {" "}
              A conversa pode usar seu último resultado: <strong>{primaryLabel}</strong>.
            </>
          ) : (
            <> Você pode conversar sobre os tipos mesmo sem ter um resultado salvo.</>
          )}
        </p>
      </header>

      {messages.length === 0 ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => submit(s)}
              className="rounded-3xl border border-[color:var(--line)] bg-white px-4 py-4 text-left text-sm leading-relaxed hover:border-[color:var(--ink)]"
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
                className={`max-w-[92%] rounded-[28px] px-5 py-4 ${
                  mine
                    ? "ml-auto bg-[color:var(--ink)] text-[color:var(--paper)]"
                    : "bg-white shadow-[0_12px_28px_rgba(27,36,48,0.06)]"
                }`}
              >
                {!mine && looking && !body ? (
                  <p className="text-sm text-[color:var(--mute)]">Consultando o mapa…</p>
                ) : null}
                {body ? (
                  <p className="whitespace-pre-wrap leading-relaxed">{body}</p>
                ) : null}
              </li>
            );
          })}
          {busy ? (
            <li className="text-sm text-[color:var(--mute)]">O mentor está pensando…</li>
          ) : null}
        </ol>
      )}

      {!configured ? (
        <p className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 text-sm">
          O mentor está indisponível no momento. Você pode continuar explorando os perfis e exercícios.
        </p>
      ) : null}
      {error ? (
        <p className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 text-sm">
          Não consegui responder agora. Tente novamente em alguns instantes.
        </p>
      ) : null}

      <p className="text-sm leading-relaxed text-[color:var(--mute)]">Você está conversando com uma IA. Ela pode errar e não substitui acompanhamento profissional.</p>
      <form
        className="sticky bottom-4 mt-auto flex gap-2 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--paper)] p-2"
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
          aria-label="Conte uma situação que você gostaria de entender melhor"
          placeholder="Conte uma situação que você gostaria de entender melhor."
          className="min-h-[52px] flex-1 resize-none bg-transparent px-3 py-2 outline-none"
        />
        <button
          disabled={!configured || busy || !input.trim()}
          className="btn-primary self-end !px-4 !py-2"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { authClient } from "../lib/auth-client";

const SEND_ERROR = "Não conseguimos enviar o código agora. Tente novamente em alguns instantes.";
const VERIFY_ERROR = "Não foi possível confirmar esse código. Confira os números ou peça outro.";

function safeDestination(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return "/conta";
  return value;
}

export function LoginClient({ goingToTest = false }: { goingToTest?: boolean }) {
  const router = useRouter();
  const search = useSearchParams();
  const next = safeDestination(search.get("next"));
  const testNext = goingToTest || next.startsWith("/teste");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [devCode, setDevCode] = useState<string | null>(null);

  async function sendCode() {
    setError("");
    setBusy(true);
    try {
      const { error: err } = await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
      });
      setBusy(false);
      if (err) {
        setError(SEND_ERROR);
        return false;
      }
    } catch {
      setBusy(false);
      setError(SEND_ERROR);
      return false;
    }
    if (process.env.NODE_ENV !== "production") {
      const res = await fetch(`/api/dev/otp?email=${encodeURIComponent(email)}`);
      if (res.ok) {
        const data = (await res.json()) as { otp?: string | null };
        setDevCode(data.otp ?? null);
      }
    }
    return true;
  }

  async function onEmail(e: React.FormEvent) {
    e.preventDefault();
    if (await sendCode()) setStep("code");
  }

  async function onResend() {
    await sendCode();
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const { error: err } = await authClient.signIn.emailOtp({
        email,
        otp,
        name: email.split("@")[0],
      });
      setBusy(false);
      if (err) {
        setError(VERIFY_ERROR);
        return;
      }
    } catch {
      setBusy(false);
      setError("Não conseguimos confirmar o acesso agora. Tente novamente em alguns instantes.");
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md rounded-[32px] bg-white p-8 shadow-[0_18px_40px_rgba(27,36,48,0.08)]">
      {step === "email" ? (
        <form onSubmit={onEmail} className="space-y-5">
          <h1 className="font-display text-4xl">{testNext ? "Vamos começar?" : "Acesse sua conta"}</h1>
          <p className="text-[color:var(--ink-soft)]">
            {testNext
              ? "Entre com seu e-mail para fazer o teste e acessar sua conta. Vamos enviar um código, sem precisar criar uma senha."
              : "Entre com seu e-mail para acessar seus resultados. Vamos enviar um código, sem precisar criar uma senha."}
          </p>
          <label className="block text-sm font-medium">
            Seu e-mail
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3"
              placeholder="voce@email.com"
            />
          </label>
          {error ? <p role="alert" className="text-sm text-[color:var(--danger)]">{error}</p> : null}
          <button disabled={busy} className="btn-primary w-full" type="submit">
            {busy ? "Enviando…" : "Enviar código"}
          </button>
          <p className="text-center text-sm text-[color:var(--mute)]">O teste e o resultado são gratuitos.</p>
        </form>
      ) : (
        <form onSubmit={verify} className="space-y-5">
          <h1 className="font-display text-4xl">Confira seu e-mail</h1>
          <p className="text-[color:var(--ink-soft)]">
            Enviamos um código de 6 dígitos para <strong>{email}</strong>. Digite abaixo para continuar.
          </p>
          {devCode ? (
            <p className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 text-sm">
              Ambiente de desenvolvimento: use <strong className="tracking-[0.3em]">{devCode}</strong>
            </p>
          ) : (
            <p className="text-sm text-[color:var(--mute)]">
              Confira a caixa de entrada e o spam.
            </p>
          )}
          <label className="block text-sm font-medium">
            Código
            <input
              required
              inputMode="numeric"
              pattern="[0-9]{6}"
              autoComplete="one-time-code"
              name="code"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              onPaste={(e) => {
                e.preventDefault();
                setOtp(e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6));
              }}
              className="mt-1 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3 text-center font-display text-3xl tracking-[0.4em]"
            />
          </label>
          {error ? <p role="alert" className="text-sm text-[color:var(--danger)]">{error}</p> : null}
          <button disabled={busy || otp.length < 6} className="btn-primary w-full" type="submit">
            {busy ? "Entrando…" : "Confirmar e continuar"}
          </button>
          <div className="flex flex-col gap-2 text-center text-sm">
            <button
              type="button"
              disabled={busy}
              className="text-[color:var(--ink-soft)] underline underline-offset-4"
              onClick={onResend}
            >
              Enviar outro código
            </button>
            <button
              type="button"
              className="text-[color:var(--mute)] underline underline-offset-4"
              onClick={() => {
                setStep("email");
                setOtp("");
                setError("");
                setDevCode(null);
              }}
            >
              Usar outro e-mail
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

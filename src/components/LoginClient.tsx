"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { authClient } from "../lib/auth-client";

export function LoginClient() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/conta";
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [devCode, setDevCode] = useState<string | null>(null);

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const { error: err } = await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
      });
      setBusy(false);
      if (err) {
        setError(err.message || "Não foi possível enviar o código.");
        return;
      }
    } catch (e) {
      setBusy(false);
      setError(e instanceof Error ? e.message : "Não foi possível enviar o código.");
      return;
    }
    const res = await fetch(`/api/dev/otp?email=${encodeURIComponent(email)}`);
    const data = (await res.json()) as { otp?: string | null };
    setDevCode(data.otp ?? null);
    setStep("code");
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
        setError(err.message || "Código inválido.");
        return;
      }
    } catch (e) {
      setBusy(false);
      setError(e instanceof Error ? e.message : "Código inválido.");
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md rounded-[32px] bg-white p-8 shadow-[0_18px_40px_rgba(27,36,48,0.08)]">
      {step === "email" ? (
        <form onSubmit={sendCode} className="space-y-5">
          <h1 className="font-display text-4xl">Entre com o e-mail</h1>
          <p className="text-[color:var(--ink-soft)]">
            Enviamos um código de 6 dígitos. Sem senha.
          </p>
          <label className="block text-sm font-medium">
            E-mail
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3 outline-none focus:border-[color:var(--accent)]"
              placeholder="voce@email.com"
            />
          </label>
          {error ? <p className="text-sm text-[color:var(--accent)]">{error}</p> : null}
          <button disabled={busy} className="btn-primary w-full" type="submit">
            {busy ? "Enviando…" : "Receber código"}
          </button>
        </form>
      ) : (
        <form onSubmit={verify} className="space-y-5">
          <h1 className="font-display text-4xl">Digite o código</h1>
          <p className="text-[color:var(--ink-soft)]">
            Enviado para <strong>{email}</strong>
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
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              className="mt-1 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3 text-center font-display text-3xl tracking-[0.4em] outline-none focus:border-[color:var(--accent)]"
            />
          </label>
          {error ? <p className="text-sm text-red-700">{error}</p> : null}
          <button disabled={busy || otp.length < 6} className="btn-primary w-full" type="submit">
            {busy ? "Entrando…" : "Entrar"}
          </button>
          <button
            type="button"
            className="w-full text-sm text-[color:var(--mute)] underline"
            onClick={() => {
              setStep("email");
              setOtp("");
              setError("");
            }}
          >
            Usar outro e-mail
          </button>
        </form>
      )}
    </div>
  );
}

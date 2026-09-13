"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useI18n } from "@/i18n/provider";
import { authClient } from "@/lib/auth-client";

function safeDestination(value: string | null, fallback: string) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return fallback;
  return value;
}

export function LoginClient({ goingToTest = false }: { goingToTest?: boolean }) {
  const { locale, messages: m, href } = useI18n();
  const router = useRouter();
  const search = useSearchParams();
  const accountPath = href("account");
  const testPath = href("test");
  const next = safeDestination(search.get("next"), accountPath);
  const testNext = goingToTest || next.startsWith(testPath);
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
      const { error: err } = await authClient.emailOtp.sendVerificationOtp(
        {
          email,
          type: "sign-in",
        },
        {
          headers: { "x-eneagrama-locale": locale },
        },
      );
      setBusy(false);
      if (err) {
        setError(m.login.sendError);
        return false;
      }
    } catch {
      setBusy(false);
      setError(m.login.sendError);
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
        setError(m.login.verifyError);
        return;
      }
    } catch {
      setBusy(false);
      setError(m.login.accessError);
      return;
    }
    router.push(next);
    router.refresh();
  }

  const [sentBefore, sentAfter] = m.login.sentTo.split("{email}");

  return (
    <div className="mx-auto max-w-md rounded-[32px] bg-white p-8 shadow-[0_18px_40px_rgba(27,36,48,0.08)]">
      {step === "email" ? (
        <form onSubmit={onEmail} className="space-y-5">
          <h1 className="font-display text-4xl">{testNext ? m.login.startH1 : m.login.accountH1}</h1>
          <p className="text-[color:var(--ink-soft)]">{testNext ? m.login.startP : m.login.accountP}</p>
          <label className="block text-sm font-medium">
            {m.login.email}
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3"
              placeholder={m.login.placeholder}
            />
          </label>
          {error ? (
            <p role="alert" className="text-sm text-[color:var(--danger)]">
              {error}
            </p>
          ) : null}
          <button disabled={busy} className="btn-primary w-full" type="submit">
            {busy ? m.login.sending : m.login.send}
          </button>
          <p className="text-center text-sm text-[color:var(--mute)]">{m.login.free}</p>
        </form>
      ) : (
        <form onSubmit={verify} className="space-y-5">
          <h1 className="font-display text-4xl">{m.login.checkH1}</h1>
          <p className="text-[color:var(--ink-soft)]">
            {sentBefore}
            <strong>{email}</strong>
            {sentAfter}
          </p>
          {devCode ? (
            <p className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 text-sm">
              {m.login.dev} <strong className="tracking-[0.3em]">{devCode}</strong>
            </p>
          ) : (
            <p className="text-sm text-[color:var(--mute)]">{m.login.spam}</p>
          )}
          <label className="block text-sm font-medium">
            {m.login.code}
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
          {error ? (
            <p role="alert" className="text-sm text-[color:var(--danger)]">
              {error}
            </p>
          ) : null}
          <button disabled={busy || otp.length < 6} className="btn-primary w-full" type="submit">
            {busy ? m.login.entering : m.login.confirm}
          </button>
          <div className="flex flex-col gap-2 text-center text-sm">
            <button
              type="button"
              disabled={busy}
              className="text-[color:var(--ink-soft)] underline underline-offset-4"
              onClick={onResend}
            >
              {m.login.resend}
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
              {m.login.otherEmail}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

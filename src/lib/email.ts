import { Resend } from "resend";

const lastCodes = new Map<string, { otp: string; at: number }>();

export function allowDevOtp() {
  return process.env.NODE_ENV !== "production";
}

export function rememberDevOtp(email: string, otp: string) {
  if (!allowDevOtp()) return;
  lastCodes.set(email.toLowerCase(), { otp, at: Date.now() });
}

export function peekDevOtp(email: string) {
  if (!allowDevOtp()) return null;
  const row = lastCodes.get(email.toLowerCase());
  if (!row) return null;
  if (Date.now() - row.at > 10 * 60 * 1000) return null;
  return row.otp;
}

export async function sendOtpEmail(email: string, otp: string) {
  rememberDevOtp(email, otp);
  if (allowDevOtp()) {
    console.log(`[eneagrama] código para ${email}: ${otp}`);
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (allowDevOtp()) return { delivered: false as const };
    throw new Error("E-mail de acesso não está configurado.");
  }

  const resend = new Resend(key);
  const from = process.env.RESEND_FROM ?? "Eneagrama <eneagrama@hermano.me>";
  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: `${otp} é o seu código de acesso`,
    html: `
      <div style="font-family:Georgia,serif;background:#f3ebe0;padding:32px">
        <h1 style="font-size:28px;color:#1c1612">Seu código</h1>
        <p style="color:#4a4038">Use este código para entrar no Eneagrama. Ele vale por 10 minutos.</p>
        <p style="font-size:36px;letter-spacing:8px;font-weight:700;color:#9c3d2a">${otp}</p>
      </div>
    `,
  });
  if (error) {
    throw new Error(error.message || "Não foi possível enviar o e-mail.");
  }
  return { delivered: true as const };
}

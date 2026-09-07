const SITE_URL =
  process.env.BETTER_AUTH_URL || "https://eneagrama-seven.vercel.app";

const MARK_SRC = `${SITE_URL}/eneagrama-mark.png`;

function digitCells(otp: string) {
  return otp
    .replace(/\D/g, "")
    .slice(0, 6)
    .split("")
    .map(
      (d) =>
        `<td style="width:42px;height:54px;text-align:center;vertical-align:middle;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:54px;font-weight:600;color:#1b2430;background:#efe8dc;border:1px solid #ddd4c6;border-radius:12px;">${d}</td>`,
    )
    .join('<td style="width:8px;font-size:0;line-height:0;">&nbsp;</td>');
}

export function otpEmailHtml(otp: string) {
  const digits = digitCells(otp);

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Seu código de acesso</title>
</head>
<body style="margin:0;padding:0;background:#f7f4ee;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    Seu código de 6 dígitos. Sem senha. Vale por 10 minutos.
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f4ee;">
    <tr>
      <td align="center" style="padding:40px 16px;background-color:#f7f4ee;background-image:radial-gradient(900px 420px at 8% -8%, rgba(91,75,219,0.12), transparent 50%), radial-gradient(800px 380px at 100% 0%, rgba(47,158,107,0.10), transparent 46%);">
        <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">
          <tr>
            <td style="padding:0 8px 22px;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1;color:#1b2430;">
              Eneagrama
            </td>
          </tr>
          <tr>
            <td style="background:#ffffff;border:1px solid #ddd4c6;border-radius:32px;box-shadow:0 18px 40px rgba(27,36,48,0.08);padding:36px 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:8px;">
                    <img src="${MARK_SRC}" width="148" height="148" alt="Símbolo do Eneagrama" style="display:block;border:0;width:148px;height:148px;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:8px;font-family:'Avenir Next','Plus Jakarta Sans','Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-weight:600;color:#5b4bdb;">
                    Código de acesso
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:10px 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:38px;line-height:1.05;color:#1b2430;">
                    Digite o código
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:0 8px 28px;font-family:'Avenir Next','Plus Jakarta Sans','Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.55;color:#3d4a5c;">
                    Enviamos um código de 6 dígitos. Sem senha.<br />Ele vale por 10 minutos.
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom:28px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>${digits}</tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom:8px;">
                    <a href="${SITE_URL}/entrar" style="display:inline-block;background:#2f9e6b;color:#ffffff;font-family:'Avenir Next','Plus Jakarta Sans','Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;font-weight:650;text-decoration:none;padding:14px 28px;border-radius:999px;box-shadow:0 10px 24px rgba(47,158,107,0.22);">
                      Entrar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:18px;font-family:'Avenir Next','Plus Jakarta Sans','Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.5;color:#6d7a8a;">
                    Confira a caixa de entrada e o spam.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 12px 0;font-family:'Avenir Next','Plus Jakarta Sans','Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.55;color:#6d7a8a;text-align:center;">
              Se você não pediu este código, pode ignorar o e-mail.<br />
              Nove tipos. Um mapa para se entender — e entender os outros.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function otpEmailText(otp: string) {
  const code = otp.replace(/\D/g, "").slice(0, 6);
  return `Digite o código para entrar no Eneagrama: ${code}

Enviamos um código de 6 dígitos. Sem senha. Ele vale por 10 minutos.

Abrir: ${SITE_URL}/entrar

Se você não pediu este código, ignore este e-mail.
Nove tipos. Um mapa para se entender — e entender os outros.`;
}

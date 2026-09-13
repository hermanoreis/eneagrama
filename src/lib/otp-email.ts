import { defaultLocale, htmlLang, type Locale } from "../i18n/config";
import { interpolate } from "../i18n/format";
import { href } from "../i18n/pathnames";
import { getMessages } from "../messages";
import { SITE_URL as CANONICAL_SITE_URL } from "./seo";

const SITE_URL = process.env.BETTER_AUTH_URL || CANONICAL_SITE_URL;

const FONT = "Outfit, 'Avenir Next', 'Segoe UI', Helvetica, sans-serif";

const paper = "#f7f3eb";
const wash = "#eee8dc";
const ink = "#073b33";
const inkSoft = "#395b53";
const mute = "#52695f";
const line = "#d3d5c8";
const gold = "#c4a35a";

function signInUrl(locale: Locale) {
  return `${SITE_URL}${href(locale, "signIn")}`;
}

export function otpEmailHtml(otp: string, locale: Locale = defaultLocale) {
  const code = otp.replace(/\D/g, "").slice(0, 6);
  const messages = getMessages(locale);
  const copy = messages.email;
  const url = signInUrl(locale);

  return `<!DOCTYPE html>
<html lang="${htmlLang[locale]}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light only" />
  <meta name="supported-color-schemes" content="light only" />
  <title>${copy.title}</title>
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <!--<![endif]-->
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap");
    :root { color-scheme: light only; }
  </style>
  <!--[if mso]>
  <style>
    table, td, a { font-family: 'Segoe UI', Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background:${paper};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${copy.preview}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${paper};">
    <tr>
      <td align="center" style="padding:48px 20px;background:${paper};">
        <!--[if mso]>
        <table role="presentation" width="520" cellpadding="0" cellspacing="0"><tr><td>
        <![endif]-->
        <table role="presentation" width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">
          <tr>
            <td style="padding:0 4px 8px;">
              <p style="margin:0;font-family:${FONT};font-size:22px;line-height:1.1;font-weight:600;letter-spacing:-0.02em;color:${ink};">
                Eneagrama
              </p>
              <p style="margin:8px 0 0;font-family:${FONT};font-size:12px;line-height:1.3;font-weight:400;color:${mute};">
                ${messages.brandBy}
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                <tr>
                  <td width="40" height="2" style="width:40px;height:2px;line-height:2px;font-size:0;background:${gold};">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 4px 8px;font-family:${FONT};font-size:40px;line-height:1.05;font-weight:600;letter-spacing:-0.03em;color:${ink};">
              ${copy.heading}
            </td>
          </tr>
          <tr>
            <td style="padding:12px 4px 28px;font-family:${FONT};font-size:16px;line-height:1.55;font-weight:400;color:${inkSoft};">
              ${copy.body}
            </td>
          </tr>
          <tr>
            <td style="padding:0 4px 12px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${wash};border:1px solid ${line};border-radius:5px;padding:16px 24px;font-family:${FONT};font-size:36px;line-height:1.2;letter-spacing:0.28em;font-weight:600;color:${ink};-webkit-user-select:all;user-select:all;">${code}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 4px 32px;font-family:${FONT};font-size:13px;line-height:1.5;color:${mute};">
              ${copy.copy}
            </td>
          </tr>
          <tr>
            <td style="padding:0 4px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td bgcolor="${ink}" style="background:${ink};border-radius:5px;">
                    <a href="${url}" style="display:inline-block;background:${ink};color:#ffffff;font-family:${FONT};font-size:15px;font-weight:650;text-decoration:none;padding:14px 22px;border-radius:5px;">
                      ${copy.cta}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 4px 0;border-top:1px solid ${line};font-family:${FONT};font-size:13px;line-height:1.55;color:${mute};">
              ${copy.footer}
            </td>
          </tr>
        </table>
        <!--[if mso]>
        </td></tr></table>
        <![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function otpEmailText(otp: string, locale: Locale = defaultLocale) {
  const code = otp.replace(/\D/g, "").slice(0, 6);
  return interpolate(getMessages(locale).email.text, {
    otp: code,
    url: signInUrl(locale),
  });
}

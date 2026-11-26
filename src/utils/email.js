export const EMAIL = "hasnainiqbal7860a@gmail.com";

// Web3Forms access key. Public by design (Web3Forms documents it as safe for
// client-side code); VITE_WEB3FORMS_ACCESS_KEY overrides it when set.
export const WEB3FORMS_ACCESS_KEY = "ec58de0b-4d7e-4213-83d0-09460cf73870";

// Gmail web compose window with the "To" field prefilled.
// Works without a desktop mail app (mailto: links do nothing on many PCs).
export function gmailComposeUrl({ subject = "", body = "" } = {}) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: EMAIL });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

// Open Gmail compose in a new tab; if a popup blocker stops it, open it in this tab.
export function openGmailCompose(options) {
  const url = gmailComposeUrl(options);
  const win = window.open(url, "_blank");
  if (win) {
    win.opener = null;
  } else {
    window.location.href = url;
  }
}

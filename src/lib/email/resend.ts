import { Resend } from "resend";

let client: Resend | undefined;

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }
  client ??= new Resend(apiKey);
  return client;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

export function bookPurchaseEmail({
  productName,
  downloadUrl,
}: {
  productName: string;
  downloadUrl: string;
}) {
  const safeName = escapeHtml(productName);
  const safeUrl = escapeHtml(downloadUrl);

  return {
    subject: `Your Jamezzi book is ready: ${productName}`,
    text: `Thank you for your purchase. Download ${productName}: ${downloadUrl}\n\nKeep this email so you can access your purchase later. If you need help, contact info@jamezzi.com.`,
    html: `<!doctype html>
<html>
  <body style="margin:0;background:#f7f6f2;color:#111827;font-family:Arial,sans-serif">
    <div style="max-width:600px;margin:0 auto;padding:40px 20px">
      <p style="margin:0 0 12px;color:#6d28d9;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Jamezzi</p>
      <h1 style="margin:0 0 16px;font-size:30px;line-height:1.2">Your book is ready.</h1>
      <p style="margin:0 0 24px;color:#475569;font-size:16px;line-height:1.7">Thank you for purchasing <strong>${safeName}</strong>.</p>
      <a href="${safeUrl}" style="display:inline-block;padding:14px 22px;border-radius:10px;background:#6d28d9;color:#ffffff;text-decoration:none;font-weight:700">Download your book</a>
      <p style="margin:24px 0 0;color:#64748b;font-size:14px;line-height:1.6">Keep this email so you can access your purchase later. If you need help, contact info@jamezzi.com using the email used at checkout.</p>
    </div>
  </body>
</html>`,
  };
}

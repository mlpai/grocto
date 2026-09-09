import nodemailer from "nodemailer";

function required(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

export function getMailer() {
  const port = Number(process.env.MAIL_PORT || 465);
  const secure = (process.env.MAIL_SECURE || "true") === "true" || port === 465;

  return nodemailer.createTransport({
    host: required("MAIL_HOST"),
    port,
    secure,
    auth: {
      user: required("MAIL_USER"),
      pass: required("MAIL_PASS"),
    },
  });
}

export function mailDefaults() {
  return {
    from: process.env.MAIL_FROM || required("MAIL_USER"),
    to: process.env.MAIL_TO || "support@grocto.co.in",
  };
}

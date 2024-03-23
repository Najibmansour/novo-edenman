import nodemailer from "nodemailer";

export const tpt = nodemailer.createTransport({
  host: "mail.novo-concepts.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "edenmen-info@novo-concepts.com",
    pass: "edenmeninfo2024",
  },
});

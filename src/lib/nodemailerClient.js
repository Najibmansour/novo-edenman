import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_NODEMAILER_MAIL;
const pass = process.env.NEXT_PUBLIC_NODEMAILER_PASS;

export const tpt = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_NODEMAILER_HOST,
  port: process.env.NEXT_PUBLIC_NODEMAILER_PORT,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};

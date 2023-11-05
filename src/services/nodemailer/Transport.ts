import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const mailer_user = process.env.MAILER_USER
const mailer_pass = process.env.MAILER_PASS
console.log('MAILER_USER:', process.env.MAILER_USER);
console.log('MAILER_PASS:', process.env.MAILER_PASS);

export const transporter = nodemailer.createTransport({
  
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: mailer_user,
      pass: mailer_pass,
    },

  });
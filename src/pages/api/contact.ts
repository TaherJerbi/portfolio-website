// mailgun contact handler

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export type Body = {
  name: string;

  email: string;

  purpose: string;

  message: string;
};

const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN_NAME = process.env.MAILGUN_DOMAIN_NAME;
const RECEIVER = process.env.MAILGUN_RECEIVER;
const MAILGUN_URL = `https://api.mailgun.net/v3/${DOMAIN_NAME}/messages`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body as Body;
  console.log("🚀 ~ file: contact.ts:26 ~ body", body);
  const { name, email, purpose, message } = body;
  const data = {
    from: `${name} <mailgun@${DOMAIN_NAME}>`,
    to: `${RECEIVER}`,
    subject: `Contact from ${name} - ${purpose}`,
    text: `
            Name: ${name}
            Email: ${email}
            Purpose: ${purpose}
            Message:
            ${message}
        `,
  };
  try {
    const response = await axios({
      method: "POST",
      url: MAILGUN_URL,
      params: data,
      auth: {
        username: "api",
        password: API_KEY,
      },
    });
    res.status(200).json({ message: "Email sent" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

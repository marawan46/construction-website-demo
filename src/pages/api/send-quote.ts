export const prerender = false;

import { render } from "@react-email/render";
import type { APIRoute } from "astro";
import { Resend } from "resend";
import QuoteEmail from "../../email/QuoteEmail";

const requests = new Map();

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const now = Date.now();
  const limit = 60 * 1000; // 1 minute    

  try {
    const body = await request.json();
    
    if (body.honeypot) {
    return new Response("Spam detected", { status: 400 });
    }


  if (requests.has(clientAddress)) {
    const lastRequest = requests.get(clientAddress);
    if (now - lastRequest < limit) {
      return new Response("Too many requests", { status: 429 });
    }
  }

  requests.set(clientAddress, now);
    const { name, email, phone, projectType, budget, timeline, message } = body;

    const formatedEmail = await render(QuoteEmail({name,phone,projectType,email,budget,timeline,message}))
    console.log(formatedEmail);
    
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["miroelbehery178@gmail.com"], // ← حط ميلك هنا
      subject: "New Construction Quote Request",
      html: formatedEmail,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
};

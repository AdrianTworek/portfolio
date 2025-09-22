"use server";

import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendContactEmailState = {
  success: boolean;
  error: string | null;
};

export const sendContactEmail = async (
  _: SendContactEmailState,
  formData: FormData,
): Promise<SendContactEmailState> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const website = formData.get("website") as string; // Honeypot field

  try {
    if (website && website.trim() !== "") {
      console.log("Bot detected");
      return { success: true, error: null };
    }

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return { success: false, error: "Please fill in all fields." };
    }

    if (name.length >= 256) {
      return {
        success: false,
        error: "Name must be less than 256 characters.",
      };
    }

    if (email.length >= 256) {
      return {
        success: false,
        error: "Email must be less than 256 characters.",
      };
    }

    if (subject.length >= 256) {
      return {
        success: false,
        error: "Subject must be less than 256 characters.",
      };
    }

    if (message.length >= 2000) {
      return {
        success: false,
        error: "Message must be less than 2000 characters.",
      };
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!fromEmail || !toEmail) {
      console.error("Missing email configuration");
      return { success: false, error: "Email configuration error." };
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Contact Form Submission: ${subject}`,
      react: ContactEmailTemplate({ name, email, subject, message }),
      replyTo: email,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
};

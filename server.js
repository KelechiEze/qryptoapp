import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail email (Receiver)
    pass: process.env.EMAIL_PASS, // Your App Password (Generated from Google Security)
  },
});

// Email sending route
app.post("/send-email", async (req, res) => {
  const { firstName, email, phone, subject, message } = req.body;

  // Email to Admin (You)
  const adminMailOptions = {
    from: `${firstName} <${email}>`, // Sender's Name & Email (User's Input)
    to: process.env.EMAIL_USER, // Your email (Receiver)
    subject: subject || "New Contact Message", // Use subject if provided, else default
    replyTo: email, // Allows you to reply directly to the sender's email
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border-radius: 10px; overflow: hidden; background: #ffffff; border: 1px solid #ddd;">
        <div style="background: linear-gradient(135deg, #2563eb, #1e3a8a); padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0;">📩 New Contact Message</h2>
        </div>

        <div style="padding: 20px; color: #333;">
          <p style="font-size: 16px; font-weight: bold; margin: 0; color: #2563eb;">Sender Details:</p>
          <p style="font-size: 14px; margin: 5px 0;"><strong>Name:</strong> ${firstName}</p>
          <p style="font-size: 14px; margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <p style="font-size: 14px; margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;">

          <p style="font-size: 16px; font-weight: bold; margin: 0; color: #2563eb;">Message:</p>
          <p style="font-size: 14px; margin: 5px 0;">${message}</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;">

          <p style="text-align: center; font-size: 14px; color: #666;">Reply to this email to respond to the sender.</p>
        </div>

        <div style="background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p style="margin: 0;">PayCoin Crypto © 2025 | All Rights Reserved</p>
        </div>
      </div>
    `,
  };

  // Confirmation Email to User
  const userMailOptions = {
    from: `"PayCoin Crypto Support" <${process.env.EMAIL_USER}>`, // Your email as sender
    to: email, // User's email (Receiver)
    subject: "Your Contact Request Has Been Received ✅",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border-radius: 10px; overflow: hidden; background: #ffffff; border: 1px solid #ddd;">
        <div style="background: linear-gradient(135deg, #2563eb, #1e3a8a); padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0;">📩 Thank You for Contacting Us!</h2>
        </div>

        <div style="padding: 20px; color: #333;">
          <p style="font-size: 16px;">Dear <strong>${firstName}</strong>,</p>
          <p style="font-size: 14px; color: #555;">
            Thank you for reaching out to <strong>PayCoin Crypto Support</strong>. We have received your message and will respond as soon as possible.
          </p>

          <p style="font-size: 14px;">
            <strong>Your Message:</strong>
          </p>
          <p style="font-size: 14px; background: #f5f5f5; padding: 10px; border-radius: 5px;">
            ${message}
          </p>

          <p style="font-size: 14px; color: #555;">We appreciate your patience and will get back to you shortly.</p>

          <p style="font-size: 14px; text-align: center;">
            🚀 <strong>PayCoin Crypto Team</strong> 🚀
          </p>
        </div>

        <div style="background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p style="margin: 0;">PayCoin Crypto © 2025 | All Rights Reserved</p>
        </div>
      </div>
    `,
  };

  try {
    // Send email to admin
    await transporter.sendMail(adminMailOptions);
    console.log("✅ Email sent to admin!");

    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);
    console.log("✅ Confirmation email sent to user!");

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending emails:", error);
    res.status(500).json({ message: "Failed to send emails" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

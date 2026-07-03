import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log("🔥 REQUEST:", req.body);

    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // required
      to: [process.env.EMAIL_TO], // YOUR REAL EMAIL
      replyTo: email, // USER EMAIL (important)
      subject: subject || "New Contact Message",
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("✅ EMAIL SENT:", result);

    return res.json({ success: true });

  } catch (error) {
    console.log("❌ ERROR:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
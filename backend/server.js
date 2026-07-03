import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    console.log("🔥 REQUEST RECEIVED");
    console.log(req.body);

    const { name, email, subject, message } = req.body;

    console.log("🔥 EMAIL USER:", process.env.EMAIL_USER);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("🔥 SENDING EMAIL...");

    await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `<p>${message}</p>`,
    });

    console.log("✅ EMAIL SENT");

    return res.json({ success: true });

  } catch (error) {
    console.log("❌ ERROR:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});
// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
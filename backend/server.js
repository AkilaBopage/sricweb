import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

/**
 * HEALTH CHECK (VERY IMPORTANT)
 */
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

/**
 * CONTACT API
 */
app.post("/api/contact", async (req, res) => {
  console.log("\n============================");
  console.log("🔥 REQUEST RECEIVED");
  console.log(req.body);
  console.log("============================\n");

  try {
    const { name, email, subject, message } = req.body;

    console.log("🔥 EMAIL USER:", process.env.EMAIL_USER);
    console.log("🔥 STARTING TRANSPORT...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true,
      debug: true,
    });

    console.log("🔥 VERIFYING TRANSPORT...");

    await transporter.verify();

    console.log("🔥 SENDING EMAIL...");

    // TIMEOUT WRAPPER (prevents infinite hanging)
    const sendMailPromise = transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject || "No Subject",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("EMAIL TIMEOUT (10s)")), 10000)
    );

    const info = await Promise.race([sendMailPromise, timeout]);

    console.log("✅ EMAIL SENT SUCCESSFULLY");
    console.log(info);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log("\n❌ EMAIL ERROR:");
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Email failed",
      error: error.message,
    });
  }
});

/**
 * SERVER START
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
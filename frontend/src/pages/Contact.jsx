import { useState } from "react";
import PageHero from "../components/sections/PageHero";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // 🔥 BACKEND READY API CALL
      const BASE_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");
     const res = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch {
      alert("Server error. Check backend connection.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* HERO */}
      <PageHero
        title="Contact Us"
        subtitle="Let’s discuss investment opportunities and partnerships."
        className="text-white"
        containerClassName="container text-center"
        titleClassName="display-4 fw-bold"
        style={{
          minHeight: "50vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CONTACT SECTION */}
      <section className="py-5">
        <div className="container">

          <div className="row g-5">

            {/* FORM */}
            <div className="col-lg-7">

              <ContactForm
                form={form}
                loading={loading}
                success={success}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />

            </div>

            {/* INFO */}
            <div className="col-lg-5">

              <div className="p-4 bg-light rounded-4 h-100">

                <h4 className="fw-bold">Get in Touch</h4>

                <p className="text-muted mt-3">
                  We respond within 24–48 hours for all business inquiries
                  and investment discussions.
                </p>

                <hr />

                <p><strong>Email:</strong> info@sricinvestments.com</p>
                <p><strong>Phone:</strong> +94 77 000 0000</p>
                <p><strong>Location:</strong> Sri Lanka / Global Offices</p>

                <hr />

                <h5>Business Hours</h5>
                <p className="text-muted">
                  Monday – Friday: 9:00 AM – 6:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
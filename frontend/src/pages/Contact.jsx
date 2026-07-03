import { useState } from "react";

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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
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
    } catch (error) {
      alert("Server error. Check backend connection.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="text-white d-flex align-items-center"
        style={{
           
          minHeight: "50vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead mt-3">
            Let’s discuss investment opportunities and partnerships.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5">
        <div className="container">

          <div className="row g-5">

            {/* FORM */}
            <div className="col-lg-7">

              <div className="card shadow border-0 p-4">

                <h3 className="fw-bold mb-3">
                  Send Us a Message
                </h3>

                {success && (
                  <div className="alert alert-success">
                    Message sent successfully!
                  </div>
                )}

                <form onSubmit={handleSubmit}>

                  <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    className="form-control mb-3"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    name="message"
                    className="form-control mb-3"
                    rows="5"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                </form>

              </div>

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
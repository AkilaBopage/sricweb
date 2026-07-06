export default function ContactForm({ form, loading, success, onChange, onSubmit }) {
  return (
    <div className="card shadow border-0 p-4">
      <h3 className="fw-bold mb-3">Send Us a Message</h3>

      {success && <div className="alert alert-success">Message sent successfully!</div>}

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Your Name"
          value={form.name}
          onChange={onChange}
          required
        />

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Your Email"
          value={form.email}
          onChange={onChange}
          required
        />

        <input
          type="text"
          name="subject"
          className="form-control mb-3"
          placeholder="Subject"
          value={form.subject}
          onChange={onChange}
          required
        />

        <textarea
          name="message"
          className="form-control mb-3"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={onChange}
          required
        />

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

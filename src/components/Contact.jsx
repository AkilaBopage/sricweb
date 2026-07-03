export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">

          <input className="form-control mb-3" placeholder="Name" />
          <input className="form-control mb-3" placeholder="Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>

          <button className="btn btn-dark w-100">
            Send Message
          </button>

        </div>
      </div>
    </div>
  );
}
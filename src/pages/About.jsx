import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      desc: "SRIC Route Investments was established with a vision to transform infrastructure investment.",
    },
    {
      year: "2018",
      title: "Expansion",
      desc: "Expanded into international transport and logistics partnerships.",
    },
    {
      year: "2021",
      title: "Renewable Focus",
      desc: "Entered renewable energy and sustainable development projects.",
    },
    {
      year: "2026",
      title: "Global Growth",
      desc: "Operating across multiple countries with strategic investment portfolios.",
    },
  ];

  return (
    <>
      {/* HERO (Different style from Home) */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          
          minHeight: "80vh",
          backgroundImage:
            "linear-gradient(rgba(10,15,30,.75),rgba(10,15,30,.75)),url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bold">
            Who We Are
          </h1>

          <p className="lead mt-4 mx-auto" style={{ maxWidth: "800px" }}>
            A strategic investment company focused on building long-term
            value through infrastructure, transportation, energy,
            and global partnerships.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                className="img-fluid rounded-4 shadow"
                alt=""
              />
            </div>

            <div className="col-lg-6">

              <span className="text-primary fw-bold">
                OUR STORY
              </span>

              <h2 className="fw-bold display-5 mt-2">
                Building Trust Through Investment Excellence
              </h2>

              <p className="text-muted mt-4">
                SRIC Route Investments began with a mission to connect
                capital with opportunity. Over the years, we have expanded
                into multiple sectors including infrastructure, logistics,
                renewable energy, and international trade.
              </p>

              <p className="text-muted">
                Today, we operate with a global mindset, helping investors
                and partners create sustainable and profitable long-term
                ventures.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-light py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Our Journey
          </h2>

          <div className="row g-4">

            {timeline.map((item, index) => (
              <div className="col-md-6" key={index}>

                <div className="p-4 bg-white shadow-sm rounded-4 h-100">

                  <h1 className="text-primary fw-bold">
                    {item.year}
                  </h1>

                  <h4>{item.title}</h4>

                  <p className="text-muted mb-0">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-5">
        <div className="container">

          <div className="row g-4">

            <div className="col-md-6">
              <div className="p-5 bg-primary text-white rounded-4 h-100">
                <h2>Our Vision</h2>
                <p className="mt-3">
                  To become a global leader in sustainable investment
                  solutions across infrastructure, energy, and transport.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-5 bg-dark text-white rounded-4 h-100">
                <h2>Our Mission</h2>
                <p className="mt-3">
                  To connect investors with high-impact opportunities
                  that drive economic growth and long-term sustainability.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-5">
        <div className="container text-center">

          <h2 className="fw-bold mb-4">
            Global Presence
          </h2>

          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=2000&q=80"
            className="img-fluid rounded-4 shadow"
            alt=""
          />

          <p className="text-muted mt-4">
            Operating across Asia, Europe, Middle East and emerging markets.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">

          <h2 className="fw-bold">
            Let’s Build Something Global
          </h2>

          <p className="lead mt-3">
            Partner with SRIC Route Investments for sustainable growth and international expansion.
          </p>

          <button
            className="btn btn-warning btn-lg mt-3 px-5"
            onClick={() => navigate("/Contact")}
          >
            Contact Us
          </button>

        </div>
      </section>
    </>
  );
}
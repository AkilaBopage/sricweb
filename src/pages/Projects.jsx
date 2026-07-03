import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const [active, setActive] = useState("all");

  const projects = [
    {
      title: "Sri Lanka Highway Expansion Network",
      type: "Sri Lanka",
      status: "Ongoing",
      value: "$120M",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Asian Renewable Energy Grid",
      type: "Global",
      status: "Completed",
      value: "$300M",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Smart Logistics Hub Europe",
      type: "Global",
      status: "Planning",
      value: "$450M",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Colombo Urban Transport Upgrade",
      type: "Sri Lanka",
      status: "Ongoing",
      value: "$80M",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80",
    },
  ];

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.type === active);

  return (
    <>
      {/* HERO */}
      <section
        className="text-white d-flex align-items-center"
        style={{
           
          minHeight: "80vh",
          backgroundImage:
            "linear-gradient(rgba(5,10,25,.78),rgba(5,10,25,.78)),url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <span className="badge bg-warning text-dark px-3 py-2 mb-3">
              
              </span>

              <h1 className="display-3 fw-bold">
                Strategic Projects That Shape Economies
              </h1>

              <p className="lead mt-4">
                Explore high-value infrastructure, energy, and transport
                investments across Sri Lanka and global markets.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* KPI STRIP */}
      <section className="bg-dark text-white py-4">
        <div className="container">

          <div className="row text-center">

            <div className="col-md-3">
              <h2 className="fw-bold">$1B+</h2>
              <small>Total Investments</small>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">25+</h2>
              <small>Active Projects</small>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">15+</h2>
              <small>Countries</small>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold">100%</h2>
              <small>Execution Focus</small>
            </div>

          </div>

        </div>
      </section>

      {/* FILTERS */}
      <h1 className="text-center fw-bold mt-5">
        Explore Our Projects
      </h1>
      
<section className="py-4 border-bottom bg-white sticky-top" style={{ top: "70px", zIndex: 10 }}>
  <div className="container text-center">

    <div
      className="d-inline-flex gap-2 p-2 rounded-4 shadow-sm"
      style={{
        background: "#f8f9fa",
        border: "1px solid #e9ecef",
      }}
    >

      {/* ALL */}
      <button
        onClick={() => setActive("all")}
        className={`btn px-4 py-2 rounded-3 fw-semibold ${
          active === "all"
            ? "btn-dark"
            : "btn-light border"
        }`}
        style={{
          transition: "0.3s",
        }}
      >
        All
      </button>

      {/* SRI LANKA */}
      <button
        onClick={() => setActive("Sri Lanka")}
        className={`btn px-4 py-2 rounded-3 fw-semibold ${
          active === "Sri Lanka"
            ? "btn-dark"
            : "btn-light border"
        }`}
        style={{
          transition: "0.3s",
        }}
      >
        Sri Lanka
      </button>

      {/* GLOBAL */}
      <button
        onClick={() => setActive("Global")}
        className={`btn px-4 py-2 rounded-3 fw-semibold ${
          active === "Global"
            ? "btn-dark"
            : "btn-light border"
        }`}
        style={{
          transition: "0.3s",
        }}
      >
        Global
      </button>

    </div>

  </div>
</section>

      {/* FEATURED PROJECT (BIG SPOTLIGHT) */}
      <section className="py-5">
        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-7">

              <img
                src={filtered[0].image}
                className="img-fluid rounded-4 shadow"
                alt=""
              />

            </div>

            <div className="col-lg-5">

              <span className="text-primary fw-bold">
                FEATURED PROJECT
              </span>

              <h2 className="fw-bold mt-2">
                {filtered[0].title}
              </h2>

              <p className="text-muted mt-3">
                A high-impact investment project focused on
                infrastructure development, economic growth,
                and long-term sustainability.
              </p>

              <div className="mt-3">

                <p><strong>Status:</strong> {filtered[0].status}</p>
                <p><strong>Value:</strong> {filtered[0].value}</p>
                <p><strong>Region:</strong> {filtered[0].type}</p>

              </div>

              <button className="btn btn-primary mt-3">
                View Case Study
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* PROJECT GRID (CARD HOVER STYLE) */}
      <section className="py-5 bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            More Projects
          </h2>

          <div className="row g-4">

            {filtered.map((p, i) => (
              <div className="col-lg-4" key={i}>

                <div
                  className="card border-0 shadow h-100 project-card"
                  style={{
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                >

                  <img
                    src={p.image}
                    className="card-img-top"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">

                    <span className="badge bg-dark">
                      {p.type}
                    </span>

                    <h5 className="fw-bold mt-2">
                      {p.title}
                    </h5>

                    <p className="text-muted mb-0">
                      Status: {p.status}
                    </p>

                    <p className="text-primary fw-bold">
                      {p.value}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">

          <h2 className="fw-bold">
            Investing in the Future of Infrastructure
          </h2>

          <p className="lead mt-3">
            Partner with SRIC Route Investments on global-scale
            development projects.
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
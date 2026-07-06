import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/sections/PageHero";
import FilterBar from "../components/ui/FilterBar";
import InfoCard from "../components/ui/InfoCard";

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
      <PageHero
        title="Strategic Projects That Shape Economies"
        subtitle="Explore high-value infrastructure, energy, and transport investments across Sri Lanka and global markets."
        className="text-white"
        contentClassName="col-lg-7"
        style={{
          minHeight: "80vh",
          backgroundImage:
            "linear-gradient(rgba(5,10,25,.78),rgba(5,10,25,.78)),url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

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

    <FilterBar
      options={[
        { label: "All", value: "all" },
        { label: "Sri Lanka", value: "Sri Lanka" },
        { label: "Global", value: "Global" },
      ]}
      activeValue={active}
      onChange={setActive}
    />

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
                <InfoCard
                  title={p.title}
                  description={`Status: ${p.status}`}
                  image={p.image}
                  alt={p.title}
                  imageStyle={{ height: "240px", objectFit: "cover" }}
                  className="project-card"
                  bodyClassName=""
                >
                  <span className="badge bg-dark">{p.type}</span>
                  <p className="text-primary fw-bold mt-2">{p.value}</p>
                </InfoCard>
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
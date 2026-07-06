import { useNavigate } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import InfoCard from "../components/ui/InfoCard";
import StatsGrid from "../components/ui/StatsGrid";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    {
      icon: "bi-building",
      title: "Infrastructure Investment",
      desc: "Supporting transportation, commercial and industrial infrastructure projects.",
    },
    {
      icon: "bi-truck",
      title: "Vehicle Export",
      desc: "Reliable commercial vehicle sourcing and international export solutions.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Renewable Energy",
      desc: "Driving sustainable development through clean energy investments.",
    },
  ];

  const projects = [
    {
      title: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Transportation",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Renewable Energy",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <>
      {/* HERO */}

      <section
        className="hero-home text-white"
        style={{
           
          minHeight: "92vh",
          backgroundImage:
            "linear-gradient(rgba(8,20,43,.72),rgba(8,20,43,.72)),url('https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=2200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container h-100">

          <div className="row h-100 align-items-center">

            <div className="col-lg-7">

              <span className="badge bg-warning text-dark px-3 py-2 mb-4">
                Strategic Investment Solutions
              </span>

              <h1 className="display-2 fw-bold">
                Investing Today.
                <br />
                Building Tomorrow.
              </h1>

              <p
                className="lead mt-4"
                style={{ maxWidth: "700px" }}
              >
                SRIC Route Investments creates sustainable investment
                opportunities across infrastructure, transportation,
                renewable energy, logistics and commercial development
                throughout Sri Lanka and international markets.
              </p>

              <div className="mt-5">

                <button
                  className="btn btn-warning btn-lg me-3 px-4"
                  onClick={() => navigate("/Projects")}
                >
                  Explore Projects
                </button>

                <button
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => navigate("/Contact")}
                >
                  Contact Us
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* TRUST BAR */}

      <section className="bg-dark text-white py-4">

        <div className="container">
          <StatsGrid
            items={[
              { value: "20+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "15+", label: "Countries" },
              { value: "100%", label: "Client Commitment" },
            ]}
            columnClassName="col-md-3"
          />
        </div>

      </section>

      {/* ABOUT */}

      <section className="py-5">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                className="img-fluid rounded-4 shadow"
                alt=""
              />

            </div>

            <div className="col-lg-6">

              <span className="text-primary fw-bold">
                ABOUT SRIC
              </span>

              <h2 className="fw-bold display-5 mt-2">
                Creating Sustainable Investment Opportunities
              </h2>

              <p className="text-muted mt-4">
                We partner with governments, private organizations,
                and investors to develop infrastructure, logistics,
                renewable energy and transportation projects that
                deliver lasting economic impact.
              </p>

              <button
                className="btn btn-primary mt-3"
                onClick={() => navigate("/About")}
              >
                Learn More
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-5 bg-light">

        <div className="container">

          <SectionHeader eyebrow="WHAT WE DO" title="Our Core Services" />

          <div className="row g-4">

            {services.map((service, index) => (

              <div className="col-lg-4" key={index}>
                <InfoCard
                  className="shadow-lg h-100 border-0"
                  bodyClassName="p-5 text-center"
                >
                  <i className={`bi ${service.icon} display-2 text-primary`}></i>
                  <h4 className="mt-4">{service.title}</h4>
                  <p className="text-muted">{service.desc}</p>
                </InfoCard>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="py-5">

        <div className="container">

          <div className="d-flex justify-content-between align-items-center mb-5">

            <div>

              <span className="text-primary fw-bold">
                FEATURED
              </span>

              <h2 className="fw-bold display-5">
                Recent Projects
              </h2>

            </div>

            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/Projects")}
            >
              View All
            </button>

          </div>

          <div className="row g-4">

            {projects.map((project, index) => (

              <div className="col-lg-4" key={index}>
                <InfoCard
                  title={project.title}
                  description="Strategic investment project designed for sustainable development."
                  image={project.image}
                  alt={project.title}
                  imageStyle={{ height: "260px", objectFit: "cover" }}
                />
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY US */}

      <section className="bg-primary text-white py-5">

        <div className="container">

          <div className="row">

            <div className="col-lg-3 text-center">

              <i className="bi bi-globe2 display-2"></i>

              <h4 className="mt-3">
                Global Reach
              </h4>

            </div>

            <div className="col-lg-3 text-center">

              <i className="bi bi-award display-2"></i>

              <h4 className="mt-3">
                Trusted Partner
              </h4>

            </div>

            <div className="col-lg-3 text-center">

              <i className="bi bi-cpu display-2"></i>

              <h4 className="mt-3">
                Innovation
              </h4>

            </div>

            <div className="col-lg-3 text-center">

              <i className="bi bi-shield-check display-2"></i>

              <h4 className="mt-3">
                Reliability
              </h4>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-5 bg-dark text-white">

        <div className="container text-center">

          <h2 className="display-5 fw-bold">
            Ready To Start Your Next Investment?
          </h2>

          <p className="lead mt-3">
            Let's create opportunities that shape industries,
            strengthen economies, and build a sustainable future.
          </p>

          <button
            className="btn btn-warning btn-lg mt-3 px-5"
            onClick={() => navigate("/Contact")}
          >
            Get Started
          </button>

        </div>

      </section>
    </>
  );
}
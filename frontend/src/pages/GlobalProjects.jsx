export default function GlobalProjects() {
  return (
    <>

      {/* HERO */}
      <section
        className="text-white d-flex align-items-center"
        style={{
           
          minHeight: "85vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bold">
            Global Investment Projects
          </h1>

          <p className="lead mt-4 mx-auto" style={{ maxWidth: "800px" }}>
            Building sustainable international partnerships through
            infrastructure, transportation, renewable energy, logistics,
            industrial development and strategic investments.
          </p>

          <button className="btn btn-warning btn-lg px-5 mt-4">
            Explore Opportunities
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                className="img-fluid rounded shadow"
                alt=""
              />
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold">
                Connecting Global Investment
              </h2>

              <p className="text-muted mt-3">
                SRIC Route Investments collaborates with international
                investors, governments, and private organizations to
                develop high-impact infrastructure and commercial
                projects across multiple regions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-light py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Investment Sectors
          </h2>

          <div className="row g-4">

            {[
              "Transportation",
              "Infrastructure",
              "Renewable Energy",
              "Industrial Development",
              "Logistics",
              "Technology"
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow h-100">
                  <div className="card-body text-center">
                    <h4>{item}</h4>
                    <p className="text-muted">
                      Strategic international investments supporting
                      long-term economic growth.
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-5">
            Featured Global Projects
          </h2>

          <div className="row g-4">

            <div className="col-lg-4">
              <div className="card shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4>Asia Transport Expansion</h4>
                  <p>
                    Cross-border logistics and transportation
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4>European Infrastructure</h4>
                  <p>
                    Commercial developments and infrastructure
                    partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h4>Renewable Energy</h4>
                  <p>
                    Sustainable solar and wind investment projects.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* COUNTRIES */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">

          <h2 className="fw-bold mb-4">
            Global Presence
          </h2>

          <p className="lead">
            Asia • Europe • Middle East • Africa • North America •
            Australia
          </p>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-5">
            Why Choose SRIC
          </h2>

          <div className="row text-center">

            <div className="col-md-3">
              <h1>20+</h1>
              <p>Years Experience</p>
            </div>

            <div className="col-md-3">
              <h1>50+</h1>
              <p>Projects</p>
            </div>

            <div className="col-md-3">
              <h1>15+</h1>
              <p>Countries</p>
            </div>

            <div className="col-md-3">
              <h1>100%</h1>
              <p>Client Commitment</p>
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-light py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-5">
            Investment Process
          </h2>

          <div className="row">

            <div className="col-md-3 text-center">
              <h3>1</h3>
              <p>Consultation</p>
            </div>

            <div className="col-md-3 text-center">
              <h3>2</h3>
              <p>Planning</p>
            </div>

            <div className="col-md-3 text-center">
              <h3>3</h3>
              <p>Implementation</p>
            </div>

            <div className="col-md-3 text-center">
              <h3>4</h3>
              <p>Growth</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">

          <h2 className="fw-bold">
            Let's Build Global Opportunities Together
          </h2>

          <p className="mt-3">
            Partner with SRIC Route Investments to create sustainable,
            profitable international ventures.
          </p>

          <button className="btn btn-light btn-lg mt-3">
            Contact Us
          </button>

        </div>
      </section>

    </>
  );
}
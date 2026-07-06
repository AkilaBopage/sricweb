import PageHero from "../components/sections/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import InfoCard from "../components/ui/InfoCard";

export default function GlobalProjects() {
  return (
    <>

      {/* HERO */}
      <PageHero
        title="Global Investment Projects"
        subtitle="Building sustainable international partnerships through infrastructure, transportation, renewable energy, logistics, industrial development and strategic investments."
        className="text-white"
        containerClassName="container text-center"
        titleClassName="display-3 fw-bold"
        style={{
          minHeight: "85vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button className="btn btn-warning btn-lg px-5 mt-4">
          Explore Opportunities
        </button>
      </PageHero>

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

          <SectionHeader title="Investment Sectors" className="mb-5" />

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
                <InfoCard
                  title={item}
                  description="Strategic international investments supporting long-term economic growth."
                  className="border-0 shadow h-100"
                  bodyClassName="text-center"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-5">
        <div className="container">

          <SectionHeader title="Featured Global Projects" className="mb-5" />

          <div className="row g-4">

            <div className="col-lg-4">
              <InfoCard
                title="Asia Transport Expansion"
                description="Cross-border logistics and transportation infrastructure."
                image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="shadow h-100"
              />
            </div>

            <div className="col-lg-4">
              <InfoCard
                title="European Infrastructure"
                description="Commercial developments and infrastructure partnerships."
                image="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="shadow h-100"
              />
            </div>

            <div className="col-lg-4">
              <InfoCard
                title="Renewable Energy"
                description="Sustainable solar and wind investment projects."
                image="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="shadow h-100"
              />
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
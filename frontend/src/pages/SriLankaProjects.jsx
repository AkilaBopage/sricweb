export default function SriLankaProjects() {
  return (
    <>

      {/* HERO */}
      <section
        className="text-white d-flex align-items-center"
        style={{
           
          minHeight: "85vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bold">
            Sri Lanka Projects
          </h1>
          <p className="lead mt-4 mx-auto" style={{ maxWidth: "800px" }}>
            Driving Sri Lanka's future through strategic investments in transportation, infrastructure, logistics, renewable energy, industrial development, and public-private partnerships.
          </p>
          <button className="btn btn-warning btn-lg px-5 mt-4">
            Explore Projects
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.pexels.com/photos/30379285/pexels-photo-30379285.jpeg?_gl=1*1q8l87k*_ga*MTA3MjMxMDEwNi4xNzgyOTc4ODY2*_ga_8JE65Q40S6*czE3ODI5Nzg4NjYkbzEkZzAkdDE3ODI5Nzg4NjYkajYwJGwwJGgw"
                className="img-fluid rounded shadow"
                alt="Colombo skyline"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold">
                Investing in Sri Lanka's Growth
              </h2>
              <p className="text-muted mt-3">
                SRIC Route Investments is committed to delivering projects that improve transportation, economic development, infrastructure, and sustainable investment opportunities across Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Project Areas
          </h2>
          <div className="row g-4">
            {[
              "Public Transportation",
              "Road Infrastructure",
              "Logistics & Supply Chain",
              "Renewable Energy",
              "Commercial Development",
              "Smart Cities"
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow h-100">
                  <div className="card-body text-center">
                    <h4>{item}</h4>
                    <p className="text-muted">
                      Sustainable projects designed to strengthen Sri Lanka's economy and infrastructure.
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
            Featured Projects
          </h2>
          <div className="row g-4">

            <div className="col-lg-4">
              <div className="card shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80"
                  className="card-img-top"
                  alt="Modern bus"
                />
                <div className="card-body">
                  <h4>National Bus Modernization</h4>
                  <p>
                    Developing safer, smarter, and more efficient public transportation systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80"
                  className="card-img-top"
                  alt="Solar panels"
                />
                <div className="card-body">
                  <h4>Renewable Energy Projects</h4>
                  <p>
                    Investing in clean energy solutions for a sustainable future.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow h-100">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                  className="card-img-top"
                  alt="High-rise buildings"
                />
                <div className="card-body">
                  <h4>Commercial Infrastructure</h4>
                  <p>
                    Supporting industrial and commercial developments throughout Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NATIONAL IMPACT */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">
            Driving National Development
          </h2>
          <p className="lead">
            Transportation • Logistics • Ports • Renewable Energy • Infrastructure • Economic Development
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Why Partner With Us
          </h2>
          <div className="row text-center">
            <div className="col-md-3">
              <h1>100%</h1>
              <p>Commitment</p>
            </div>
            <div className="col-md-3">
              <h1>20+</h1>
              <p>Years Experience</p>
            </div>
            <div className="col-md-3">
              <h1>50+</h1>
              <p>Projects Delivered</p>
            </div>
            <div className="col-md-3">
              <h1>24/7</h1>
              <p>Professional Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Our Project Process
          </h2>
          <div className="row">
            <div className="col-md-3 text-center">
              <h3>1</h3>
              <p>Planning</p>
            </div>
            <div className="col-md-3 text-center">
              <h3>2</h3>
              <p>Design</p>
            </div>
            <div className="col-md-3 text-center">
              <h3>3</h3>
              <p>Implementation</p>
            </div>
            <div className="col-md-3 text-center">
              <h3>4</h3>
              <p>Growth & Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">
            Building Sri Lanka's Future Together
          </h2>
          <p className="mt-3">
            We welcome partnerships with investors, government institutions, and private organizations to create sustainable, high-impact projects across Sri Lanka.
          </p>
          <button className="btn btn-light btn-lg mt-3">
            Contact Our Team
          </button>
        </div>
      </section>

    </>
  );
}
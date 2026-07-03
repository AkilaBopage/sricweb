import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Infrastructure Investment",
      desc: "We invest in large-scale infrastructure projects including roads, transport systems, ports, and urban development to support long-term economic growth.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Transport & Logistics Solutions",
      desc: "End-to-end logistics systems, fleet management, and transportation networks designed to improve efficiency and global trade flow.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Renewable Energy Projects",
      desc: "We support solar, wind, and hybrid energy systems to accelerate sustainable development and reduce carbon footprint.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Commercial Development",
      desc: "Investment in commercial buildings, industrial zones, and business parks to support enterprise growth and foreign investment.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="text-white d-flex align-items-center"
        style={{
           
          minHeight: "85vh",
          backgroundImage:
            "linear-gradient(rgba(10,15,35,.75),rgba(10,15,35,.75)),url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">

          <h1 className="display-3 fw-bold">
            Our Services
          </h1>

          <p className="lead mt-4 mx-auto" style={{ maxWidth: "850px" }}>
            Delivering high-impact investment solutions across infrastructure,
            energy, logistics, and global development projects.
          </p>

          <button
            className="btn btn-warning btn-lg mt-4 px-5"
            onClick={() => navigate("/Projects")}
          >
            View Projects
          </button>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-5">
        <div className="container text-center">

          <h2 className="fw-bold">
            Strategic Investment Services
          </h2>

          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "800px" }}>
            We provide end-to-end investment solutions that combine financial
            expertise, engineering capability, and global partnerships to
            deliver successful large-scale projects.
          </p>

        </div>
      </section>

      {/* SERVICES (ALTERNATING LAYOUT) */}
      <section className="py-5">
        <div className="container">

          {services.map((item, index) => (
            <div
              className={`row align-items-center mb-5 g-5 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
              key={index}
            >

              {/* IMAGE */}
              <div className="col-lg-6">
                <img
                  src={item.image}
                  className="img-fluid rounded-4 shadow"
                  alt={item.title}
                />
              </div>

              {/* TEXT */}
              <div className="col-lg-6">

                <h2 className="fw-bold">
                  {item.title}
                </h2>

                <p className="text-muted mt-3">
                  {item.desc}
                </p>

                <button className="btn btn-primary mt-2">
                  Learn More
                </button>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-light py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Our Working Process
          </h2>

          <div className="row text-center g-4">

            <div className="col-md-3">
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h1 className="text-primary">1</h1>
                <h5>Consultation</h5>
                <p className="text-muted">
                  Understanding investment goals and project scope.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h1 className="text-primary">2</h1>
                <h5>Planning</h5>
                <p className="text-muted">
                  Strategic planning and feasibility analysis.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h1 className="text-primary">3</h1>
                <h5>Execution</h5>
                <p className="text-muted">
                  Implementation with expert project management.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white shadow-sm rounded-4">
                <h1 className="text-primary">4</h1>
                <h5>Growth</h5>
                <p className="text-muted">
                  Long-term monitoring and expansion support.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">

          <h2 className="fw-bold">
            Ready to Start Your Investment Journey?
          </h2>

          <p className="lead mt-3">
            Let’s build sustainable and profitable global projects together.
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
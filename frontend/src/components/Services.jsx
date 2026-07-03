export default function Services() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Services</h2>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5>Infrastructure Investment</h5>
              <p>Large-scale transport and industrial development projects.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5>Vehicle Export</h5>
              <p>Buses, trucks, and commercial logistics vehicles worldwide.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5>Energy Solutions</h5>
              <p>Solar, wind, and renewable infrastructure development.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
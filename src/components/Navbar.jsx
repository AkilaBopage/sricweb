import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container py-2">

        {/* BRAND */}
        <Link className="navbar-brand fw-bold" to="/">
          SRIC Investors
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>

          <ul className="navbar-nav ms-auto text-center text-lg-end gap-2">

            <li className="nav-item">
              <Link className="nav-link py-2" to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link py-2" to="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link py-2" to="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link py-2" to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}
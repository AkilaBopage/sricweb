import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-5">

      <h1>404</h1>
      <p>Page not found</p>

      <Link to="/" className="btn btn-dark">
        Go Home
      </Link>

    </div>
  );
}
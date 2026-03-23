import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-card" aria-labelledby="notfound-title">
      <h1 id="notfound-title">404 — Page Not Found</h1>
      <p>The page you are looking for doesn't exist. Go back to <Link to="/">Home</Link>.</p>
    </div>
  );
}

export default NotFound;
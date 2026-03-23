import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header" role="banner">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/" style={{ textDecoration: "none", color: "var(--accent)" }}>
            <strong>Creator Platform</strong>
          </Link>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>• Frontend Foundation</span>
        </div>

        <nav className="links" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
import React from "react";

function Home() {
  return (
    <div className="page-card" aria-labelledby="home-title">
      <h1 id="home-title">Welcome to the Creator Platform</h1>
      <p>
        This project demonstrates the frontend foundation: routing, layout components,
        and a clean folder structure. Use the nav links to move between pages without full reloads.
      </p>

      <section style={{ marginTop: 18 }}>
        <h3>Platform Theme: Blog</h3>
        <p className="muted">Placeholder content for the Home page — replace with real UI later.</p>
      </section>
    </div>
  );
}

export default Home;
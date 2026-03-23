import React from "react";

function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div>© {new Date().getFullYear()} Creator Platform — Built with Vite + React</div>
      </div>
    </footer>
  );
}

export default Footer;
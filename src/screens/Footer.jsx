import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <span className="Copyright">
          &copy; 2023 ARMALY. Todos los derechos reservados.
        </span>
        {/* <div className="creador">
          <p>
            Creado por:{" "}
            <a
              href="https://www.linkedin.com/in/edu-armas-1a4b16260/"
              target="__BLANK"
              className="creador-link"
            >
              Edu Armas
            </a>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

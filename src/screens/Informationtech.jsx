import React from "react";
import "../styles/informationtech.css"
import {FaTiktok} from "react-icons/fa"

const Informationtech = () => {
  return (
    <div className="bg-gray-600">
      <div className="caja-formal">
      <div className="img-tec">
        <img src="/images/tecnico.png" alt="Imagen de Tecnico o algo asi" />
      </div>
      <div className="info">
        <div className="info_tec">
          <h2>Martin Armas</h2>
          <span>Tecnico de Celulares</span>
        </div>
        <div className="experience">
          <h3>Experiencia del Tecnico</h3>
          <p>Mas de 5 años de experiencia trabajando con celulares de varios modelos </p>
        </div>
        <div>
          <h3>Redes Sociales</h3>
          <div className="tec_redes_sociales">
            <FaTiktok/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Informationtech;

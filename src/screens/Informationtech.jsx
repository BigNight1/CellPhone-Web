import React from "react";
import "../styles/informationtech.css"

const Informationtech = () => {
  return (
    <div className="caja_info">
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
            <img src="/images/facebook-64.png" alt="" />
            <img src="/images/tik-tok-50.png" alt="" />
            <img src="/images/whatsapp-48.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informationtech;

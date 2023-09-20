import React from "react";
import "../styles/informationtech.css"
import {FaTiktok} from "react-icons/fa"
import{BsFacebook} from "react-icons/bs"

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
          {/* voy a poner un efecto de escritura  */}
        </div>
        <div className="experience">
          <h3>Experiencia del Tecnico</h3>
          <p>Mas de 5 años de experiencia trabajando con celulares de varios modelos </p>
        </div>
        <div>
          <div className="tec_redes_sociales">
            <FaTiktok className=" text-3xl"/>
            <BsFacebook className="text-blue-500 text-3xl"/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Informationtech;

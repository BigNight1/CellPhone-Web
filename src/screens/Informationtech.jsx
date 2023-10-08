import React, { useEffect } from "react";
import "../styles/informationtech.css";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Informationtech = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="info-container" id="Informacion">
      <div className="info-card">
        <div className="info-img">
          <img src="/images/tecnico.png" alt="Imagen de Técnico" />
        </div>
        <div className="info-details">
          <h2 className="name " data-aos="fade-right">
            Martin Armas: Experto en Reparación de Celulares y Laptops
          </h2>
          <p className="highlighted-info" data-aos="fade-left">
            ¡Bienvenido al mundo de la tecnología con un toque humano! Soy
            Martin Armas, un apasionado técnico con más de 5 años de experiencia
            en la reparación de celulares y laptops. Con una serie de
            certificaciones respaldando mi experiencia, puedo garantizar
            soluciones confiables y efectivas para todos los problemas que pueda
            enfrentar su dispositivo.
          </p>
          <div className="specialization">
            <h3>Nuestra Especialidad:</h3>
            <ul className="specialization-list">
              <li data-aos="fade-left">
                Reparación de Celulares: Desde pantallas rotas hasta problemas
                de software, no hay tarea demasiado grande o pequeña para
                nosotros. Confíe en nosotros para devolverle la vida a su
                dispositivo.
              </li>
              <li data-aos="fade-left">
                Reparación de Laptops: No importa si su laptop es PC o Mac,
                tenemos las habilidades necesarias para solucionar cualquier
                problema que pueda surgir. ¡Su portátil estará funcionando como
                nuevo en poco tiempo!
              </li>
            </ul>
          </div>

          <div className="consult-us">
            <h3>¡Consulte con Nosotros!</h3>
            <p data-aos="fade-left">
              ¿Tiene algún problema con su dispositivo? No importa cuán complejo
              parezca, estamos aquí para ayudarlo. ¡Consulte con nosotros y le
              proporcionaremos una evaluación gratuita para que sepa exactamente
              qué necesita su dispositivo!
            </p>
          </div>

          <p className="final-note" data-aos="fade-left">
            No espere más. ¡Confíe en Martin Armas para todas sus necesidades de
            reparación de celulares y laptops!
          </p>
          <div className="tiktok-videos">
            <h3>Vea Nuestros Videos en TikTok:</h3>
            <a href="https://www.tiktok.com/@marttyarmas" target="__blank">
              ¡Haga clic aquí para ver nuestros videos de reparación de
              celulares!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informationtech;

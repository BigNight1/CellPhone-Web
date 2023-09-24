import React from "react";
import "../styles/informationtech.css";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Informationtech = () => {
  return (
    <div className="info-container">
      <div className="info-card">
        <div className="info-img">
          <img src="/images/tecnico.png" alt="Imagen de Técnico" />
        </div>
        <div className="info-details">
          <h2 className="name">Martin Armas: Experto en Reparación de Celulares y Laptops</h2>
          <p className="highlighted-info">
            ¡Bienvenido al mundo de la tecnología con un toque humano! Soy Martin Armas, un apasionado técnico con más de 5 años de experiencia en la reparación de celulares y laptops. Con una serie de certificaciones respaldando mi experiencia, puedo garantizar soluciones confiables y efectivas para todos los problemas que pueda enfrentar su dispositivo.
          </p>
          <div className="specialization">
            <h3>Nuestra Especialidad:</h3>
            <ul className="specialization-list">
              <li>Reparación de Celulares: Desde pantallas rotas hasta problemas de software, no hay tarea demasiado grande o pequeña para nosotros. Confíe en nosotros para devolverle la vida a su dispositivo.</li>
              <li>Reparación de Laptops: No importa si su laptop es PC o Mac, tenemos las habilidades necesarias para solucionar cualquier problema que pueda surgir. ¡Su portátil estará funcionando como nuevo en poco tiempo!</li>
            </ul>
          </div>
          <div className="service-quality">
            <h3>Servicio al Cliente de Primera Clase:</h3>
            <p>
              En nuestro centro de servicio, creemos en la importancia de brindar un servicio excepcional al cliente. Siempre será recibido con una sonrisa y un trato amable. Nuestra misión es hacer que su experiencia de reparación sea lo más conveniente y sin estrés posible.
            </p>
          </div>
          <div className="competitive-prices">
            <h3>Precios Competitivos:</h3>
            <p>
              Ofrecemos una política de precios justos y transparentes. Antes de comenzar cualquier trabajo, le proporcionaremos un presupuesto detallado para que sepa exactamente a qué atenerse. Sin sorpresas desagradables, solo soluciones asequibles.
            </p>
          </div>
          <div className="social-icons">
            <h3>Síganos en las Redes Sociales:</h3>
            <a href="https://www.tiktok.com/@marttyarmas" target="__blank">
              <FaTiktok size={30} />
            </a>
            <a href="https://www.facebook.com/marttyarmas" target="__blank">
              <BsFacebook size={30} color="#1877F2" />
            </a>
          </div>
          <div className="consult-us">
            <h3>¡Consulte con Nosotros!</h3>
            <p>
              ¿Tiene algún problema con su dispositivo? No importa cuán complejo parezca, estamos aquí para ayudarlo. ¡Consulte con nosotros y le proporcionaremos una evaluación gratuita para que sepa exactamente qué necesita su dispositivo!
            </p>
          </div>
          <div className="passion">
            <h3>Su Tecnología, Nuestra Pasión:</h3>
            <p>
              En el mundo actual, la tecnología es esencial. Permítanos ser su socio confiable en la resolución de problemas de tecnología. Su satisfacción es nuestra principal prioridad, y haremos todo lo posible para asegurarnos de que su dispositivo funcione perfectamente.
            </p>
          </div>
          <p className="final-note">
            No espere más. ¡Confíe en Martin Armas para todas sus necesidades de reparación de celulares y laptops!
          </p>
          <div className="tiktok-videos">
            <h3>Vea Nuestros Videos en TikTok:</h3>
            <a href="https://www.tiktok.com/@marttyarmas" target="__blank">¡Haga clic aquí para ver nuestros videos de reparación de celulares!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informationtech;

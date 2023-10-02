import React, { useEffect } from "react";
import "../styles/Locateus.css";
import Aos from "aos";
import "aos/dist/aos.css"

const Locateus = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])
  return (
    <div id="Encuentranos" className="Locateus-container">
      <div className="animate__animated animate__backInLeft Locateus-title">
        <h1>Encuéntranos</h1>
      </div>
      <div className="Map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.387310855415!2d-76.99921862410433!3d-12.085615942627024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7cd19f14c7b%3A0x4f173a57e06cf062!2sAv.%20San%20Luis%201859%2C%20San%20Borja%2015021!5e0!3m2!1ses-419!2spe!4v1695184499992!5m2!1ses-419!2spe"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
          title="Mapa"
        ></iframe>
      </div>
      <div className="Customer-support">
        <div className="atencion_cliente">
          <div className="color_title">
            <h2>Atención al Cliente</h2>
          </div>
          <p>Lunes a Sábado: 9AM - 8PM</p>
          <p>Domingo: 10AM - 4PM</p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <div className="tienda">
            <h2>Tienda 127</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locateus;

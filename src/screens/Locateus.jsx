import React from "react";
import "../styles/Locateus.css"
const Locateus = () => {
  return (
    <div className="Loca_Box">
      <div className="Tit_Location">
      <h1>Ubicación</h1>
      </div>
      <div className="map_google">
        <iframe
          className="p-1 m-1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.387310855415!2d-76.99921862410433!3d-12.085615942627024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7cd19f14c7b%3A0x4f173a57e06cf062!2sAv.%20San%20Luis%201859%2C%20San%20Borja%2015021!5e0!3m2!1ses-419!2spe!4v1695184499992!5m2!1ses-419!2spe"
          width="360"
          height="300"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="Customer_Support">
        <h2>Atención al cliente</h2>
        <p>Hora: 9AM - 8PM</p>
      </div>
    </div>
  );
};

export default Locateus;

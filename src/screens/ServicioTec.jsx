import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";

// Componente principal
const ServicioTec = () => {
  return (
    <Container>
      <h1>Servicio Técnico</h1>
      <h2>El Mejor Lugar para Reparar tu Celular</h2>
      <h3>Vamos Creciendo Juntos</h3>
      <a href="https://wa.me/924548268">
        <WhatsappIcon />
        <Contact>Contactanos</Contact>
      </a>
    </Container>
  );
};

// Estilos
const Container = styled.div`
  /* Importar fuentes */
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@700&display=swap');
  /* Estilos de diseño */
  background-image: linear-gradient(rgba(77, 35, 35, 0.6), rgba(0, 0, 0, 0.5)), url(/images/reparacion.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  background-color: #e2dddd;

  /* Estilos de texto */
  h1 {
    font-size: 40px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    padding: 10px 0;
  }
  h1,
  h2,
  h3 {
    font-family: "Oswald", sans-serif;
    font-weight: 900;
    color: #ffffff;
  }
  h2 {
    font-size: 23px;
    margin-top: 10px;
  }
  h3 {
    font-size: 24px;
  }
  a {
    margin: 10px 0;
    border: 2px #1db954 solid;
    padding: 5px;
    border-radius: 15px;
    display: flex;
  }
`;

const WhatsappIcon = styled(BsWhatsapp)`
  color: #1db954; /* Color de WhatsApp en HEX */
  font-size: 27px; /* Tamaño del ícono */
`;

const Contact = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 0px 5px;
  color: #fff;
  font-family: 'Pixelify Sans', cursive;
`;

export default ServicioTec;

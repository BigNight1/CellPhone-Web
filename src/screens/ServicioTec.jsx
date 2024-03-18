import "../styles/ServicioTec.css";
import Width from "./width.jsx";

// Componente principal

const ServicioTec = () => {
  return (
    <Width id="Inicio">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:items-center	 gap-3">
          <h2 className="text-5xl font-bold	text-center">Servicio Tecnico</h2>
          <p className="font-semibold	text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ab
            eum id et ullam consequuntur velit autem quae quod odit, minus
            tempore fugiat perferendis modi fuga, consequatur molestiae.
            Officia, incidunt.
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img src="/images/celular.png" alt="" className="w-100%" />
        </div>
      </div>
    </Width>
  );
};

export default ServicioTec;

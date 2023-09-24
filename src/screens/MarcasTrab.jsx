import {
  Alcatel,
  Android,
  Lg,
  Motorola,
  Samsung,
} from "../icons/IconsMarca.jsx";
import { SiHuawei, SiXiaomi } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import "../styles/MarcasTrab.css";

const MarcasTrab = () => {
  return (
    <div>
      <div className="titulo_marcas">
        <div className="tit">
        <h1 className="titulo_destacado">
        Reparación de Celulares con las Mejores Marcas
        </h1>
        </div>  
      </div>

      <div className="Caja_Marcas">
        <div className="marcas">
          <div className="marca">
            <SiHuawei size={70} color="#e12229" />
            <Motorola />
            <AiFillApple size={70} />
            <SiXiaomi color="#FF4B3A" size={65} />
            <Lg />
            <Android />
            <Samsung />
            <Alcatel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarcasTrab;

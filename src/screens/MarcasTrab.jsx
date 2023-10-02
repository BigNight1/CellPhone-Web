import "atropos/css";
import Atropos from "atropos/react";

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

const marcas = [
  { icon: <Alcatel />, name: "Huawei" },
  { icon: <Samsung />, name: "Huawei" },
  { icon: <Android />, name: "Huawei" },
  { icon: <Lg />, name: "Huawei" },
  { icon: <Motorola />, name: "Huawei" },
  { icon: <SiHuawei size={70} color="#e12229" />, name: "Huawei" },
  { icon: <AiFillApple size={70} />, name: "Huawei" },
  { icon: <SiXiaomi color="#FF4B3A" size={65} />, name: "Huawei" },
];

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
            {marcas.map((marca, index) => (
              <div key={index} className="marca-item">
                <Atropos
                  rotate={true}
                  rotateXMax={20}
                  rotateYMax={20}
                  shadow={false}
                >
                  {marca.icon}
                </Atropos>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarcasTrab;

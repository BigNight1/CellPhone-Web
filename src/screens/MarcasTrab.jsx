import {
  Alcatel,
  Android,
  Lg,
  Motorola,
  Samsung,
} from "../icons/IconsMarca.jsx";
import { SiHuawei, SiXiaomi } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";

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
    <div className="">
      <div className="grid grid-cols-4 justify-items-center items-center gap-10 py-10">
        {marcas.map((marca, index) => (
          <div key={index} className="marca-item">
            {marca.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarcasTrab;

// flex justify-center items-center

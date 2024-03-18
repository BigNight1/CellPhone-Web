import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  const Links = [
    {
      id:1,
      name: "Inicio",
      to: "#Inicio"
    },
    {
      id:2,
      name: "Informacion",
      to: "#Informacion"
    },
    {
      id:3,
      name: "Encuentranos",
      to: "#Encuentranos"
    },
    {
      id:4,
      name: "Reparacion",
      to: "#Reparacion"
    }

  ]
  return (
    <nav className="flex justify-center bg-black">
      <div className="flex justify-between items-center max-w-[1200px] w-[100%] ">
        <img
          src="/images/ArmalyLogo.png"
          alt="Logo_Armaly"
          className="h-[100px] rounded-[9999px]"
        />
        <div className="text-1xl font-semibold text-white">
          <ul>
            <li>
              {
                Links.map((link)=>
                  <Link className="px-2 cursor-pointer" to={link.to}>
                    {link.name}
                  </Link>
                )
              }
            </li>
        
          </ul>
        </div>
        {/* <div className="Links_pant_Gran">
          <a href="#">Inicio</a>
          <a href="#">Sobre Mi</a>
          <a href="#Encuentranos">Encuentranos</a>
          <a href="#">Reparación</a>
        </div> */}
      </div>
    </nav>
  );
};
export default Header;

import "../styles/Promo.css";
import { BannerTikTok } from "../icons/IconsRedes.jsx";

const Promo = () => {
  return (
    <div className="Promo_Caja">
      <div className="Caja_Descuento">
        <h1 className="flex justify-center">20%</h1>
        <span>DE DESCUENTO</span>
      </div>
      <div className="acercate">
        <p>Si te acercas al Local y dices:</p>
        <span>
          <b>"VengoPormiPromo"</b>
        </span>
      </div>
      <div className="nossigues">
        <p>Y nos sigues en </p>
      </div>
      <div>
        <a href="https://www.tiktok.com/@marttyarmas" target="__BLANK" >
          <BannerTikTok className="bannertik"/>
        </a>
      </div>
    </div>
  );
};

export default Promo;

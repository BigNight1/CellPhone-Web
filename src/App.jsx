import Header from "./components/Header.jsx";
import Footer from "./screens/Footer.jsx";
import Informationtech from "./screens/Informationtech.jsx";
import Locateus from "./screens/Locateus.jsx";
import MarcasTrab from "./screens/MarcasTrab.jsx";
import QuestionFre from "./screens/QuestionFre.jsx";
import Testimonio from "./screens/Testimonio.jsx";
import Carousel from "./screens/Slider.jsx";
import ServicioTec from "./screens/ServicioTec.jsx";
import Promo from "./screens/Promo.jsx";
import Workvideo from "./screens/Workvideo.jsx";
import "animate.css";
import Comentarios from "./screens/Comentarios.jsx";
import Servicios from "./screens/Servicios.jsx";

function App() {
  return (
    <div className="App bg-white">
      <Header />
        <ServicioTec />
        {/* <MarcasTrab /> */}
        <Servicios/>
        <Carousel />
        <Informationtech />
        {/* <Workvideo /> */}
        <Testimonio />
        {/* <QuestionFre /> */}
        <Locateus />
        <Promo />
        {/* <Comentarios/> */}
        <Footer />
    </div>
  );
}

export default App;

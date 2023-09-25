import Header from "./components/Header.jsx";
import Footer from "./screens/Footer.jsx";
import Informationtech from "./screens/Informationtech.jsx";
import Locateus from "./screens/Locateus.jsx";
import MarcasTrab from "./screens/MarcasTrab.jsx";
import QuestionFre from "./screens/QuestionFre.jsx";
import Testimonio from "./screens/Testimonio.jsx";
import Carousel from "./screens/slider.jsx";

function App() {
  return (
    <div className="App">
        <Header/>
        <Carousel />
        <Informationtech />
        <Locateus />
        <MarcasTrab />
        <Testimonio />
        <QuestionFre />
        <Footer />
    </div>
  );
}

export default App;


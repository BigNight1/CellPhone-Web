import Header from "./components/header.jsx";
import Locateus from "./screens/Locateus.jsx";
import QuestionFre from "./screens/QuestionFre.jsx";
import Informationtech from "./screens/informationtech.jsx";
import Carousel from "./screens/slider.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Informationtech />
      <Locateus />
      <QuestionFre />
    </div>
  );
}

export default App;

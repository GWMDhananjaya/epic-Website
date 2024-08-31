import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Slider from "./Components/Slider/Slider";
import Virtual from "./Components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Slider/>
      <Virtual/>
      <Product/>
     
    </div>
  );
}

export default App;

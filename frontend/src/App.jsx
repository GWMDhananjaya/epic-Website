import "./App.css";
import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Review from "./Components/Review/CustomerReview";
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
      <Review/>
      <Footer/>
     
    </div>
  );
}

export default App;

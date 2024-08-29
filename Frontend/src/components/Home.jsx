import React from "react";
import { Carousel } from "flowbite-react";
import firstimage from "../assets/fimage.png";

function Home() {
  return (
    
    <div className="">
      <div className="h-screen min-h-screen px-4 mx-auto ">
        <Carousel className="w-full mx-auto">
        <div>
        <div>
          <h1>
          ULTIMATE CAR DETAILING TEAM
          </h1>
          <p>
          We offer top-notch vinyl wrapping, window tinting, car modifications, 
          detailing, body stickers, and more. Get expert care and personalized 
          vehicle customization all in one place!
          </p>
        </div>
        
        <div>
          <img src={firstimage} alt="" />
        </div>
      </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

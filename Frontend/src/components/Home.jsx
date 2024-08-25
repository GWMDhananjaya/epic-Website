import React from "react";
import { Carousel } from "flowbite-react";
import firstimage from "../assets/fimage.png";

function Home() {
  return (
    <div className="bg-neutralSilver">
      <div className="h-screen min-h-screen px-4 mx-auto lg:px-14 max-w-screen-2xl">
        <Carousel className="w-full mx-auto">
          <div className="flex flex-col justify-between gap-12 py-12 my-24 md:my-8-col md:flex-row-reverse item-center">
            <div>
              <img src={firstimage} alt="" />
            </div>
            
            <div className="md:w-1/2">
                <h1 className="mb-4 text-4xl font-semibold leading-snug text-neutralDGrey md:w-3/4">
                ULTIMATE CAR DETAILING TEAM
                    <span className="leading-snug text-brandPrimary"> epic, Owner - Nuwan Sampath
                    </span>
                </h1>
                <p className="mb-8 text-base text-neutralGrey"></p>
                <button className="btn-primary"> Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;

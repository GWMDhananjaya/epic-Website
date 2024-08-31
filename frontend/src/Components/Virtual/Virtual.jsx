import React from "react";
import css from "./Virtual.module.css";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/Before.png";
import After from "../../assets/After.png";



function Virtual() {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>About Us</span>
        <span >At Epic, we are passionate about
        transforming vehicles with high-quality vinyl wrapping, window tinting,
        car modifications, and more. Owned and operated by Nuwan Sampath, our
        shop is dedicated to delivering exceptional craftsmanship and
        personalized service to every customer. With a wide range of services
        including car protection films, detailing, vehicle branding, and
        fiberglass work, we ensure that your vehicle stands out on the road.
        </span>
        </div>
        <div className={css.right}>
            <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before} rightImage={After}/>
            </div>
        </div>
      
    </div>
  );
}

export default Virtual;

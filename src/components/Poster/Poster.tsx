import React from "react";
import "../../styles/home.scss";
function Poster() {
  return (
    <section className={"home-home"}>
      <div className={"title-home"}>BIG SALE 20%</div>
      <div className={"product-poster-home"}>
        <div className={"text-home"}>
          <div className={"subtitle-home"}>the bestseller of 2022</div>
          <h1 className={"head-home"}>LENNON r2d2 with NVIDIA 5090 TI</h1>
          <button className={"button-home"}>Shop Now</button>
        </div>
        <div className={"image-home"}>
          <img
            src={
              "https://github.com/tamkovich-yana/stuff/blob/master/src/images/computer.png?raw=true"
            }
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Poster;

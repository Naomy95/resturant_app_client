import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/Artboard 34.png";
import "./HederUs.css";

const HeaderUs = () => {
  const navigate = useNavigate();
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundColor: " rgba(27, 26, 26, 0.9)",
      }}
    >
      <div className=" flex flex-col items-center  ">
        <p className="text-white font-sans text-xs lg:text-base pb-2 lg:pb-10  text-center font-normal ">
          MEET THE TEAM
        </p>
        <p className="text-white font-sans text-2xl lg:text-4xl text-center font-normal ">
          {" "}
          We will make your stay
        </p>
        <p className="text-white font-sans text-2xl lg:text-4xl text-center font-normal lg:leading-10 lg:pb-10">
          {" "}
          an unforgettable one
        </p>

        <div className=" lg:w-1/2 text-justify  px-4 mt-5">
          <p className="text-white font-sans text-sm lg:text-xl text-justify font-light lg:leading-10">
            {" "}
            Our Team at SALT & PAPER will make your stay an unforgettable one.
            Jalapeño sesame soba noodles Bulgarian carrot roasted brussel
            sprouts fruit smash ghost pepper summer fruit salad with potato
            simmer coconut rice crumbled lentils coconut green bowl peanut
            butter chickpea crust pizza a delicious meal portobello
          </p>
        </div>
      </div>
      {/* <img src={image} style={{border:"1px solid red"}}></img> */}
    </div>
  );
};

export default HeaderUs;

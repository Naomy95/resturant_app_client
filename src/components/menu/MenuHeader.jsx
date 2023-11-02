import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/Artboard 27.png";
import "../AboutUs/HederUs.css";

const MenuHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="header"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-col items-center  ">
          <p className="text-white font-sans text-xs lg:text-base pb-2 lg:pb-10  text-center font-normal ">
            EXPLORE
          </p>
          <p className="text-white font-sans text-2xl lg:text-4xl text-center font-normal ">
            {" "}
            Menu
          </p>
        </div>
        {/* <img src={image} style={{border:"1px solid red"}}></img> */}
      </div>

      <div className="py-14 justify-center items-center text-center bg-black">
        <p className="text-white font-sans text-lg px-4 lg:leading-10">
          We are passionate about sourcing fresh ingredients,
          </p>
          <p className="text-white font-sans text-lg px-4 lg:leading-10">
            combining with traditional flavors and continually evolving our menu
            to create
          </p>
          <p className="text-white font-sans text-lg px-4 lg:leading-10">
            culinary adventure, where you’ll explore undiscovered
          </p>
          <p className="text-white font-sans text-lg px-4 lg:leading-10">
            a dinging experience that is truly unique.
          </p>
     
      </div>
    </>
  );
};

export default MenuHeader;

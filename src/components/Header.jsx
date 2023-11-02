import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/home_cvr.png"
import './Header.css'
import Navbar from "./Navbar";

const Header = () => {
  const navigate =useNavigate()
  return (


      <div
        className="header"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundColor: " rgba(27, 26, 26, 0.9)",
        }}
      
      >
     
        
        <div  className=" flex flex-col items-center  " 
        > 
         <p className="text-white font-sans text-xs lg:text-base  text-center font-normal leading-10">
         ENJOY AN UNFORGETTABLE EXPERIENCE
        </p>
        <p className="text-white font-sans text-2xl lg:text-4xl text-center font-normal leading-10">
          {" "}
          SALT
        </p>
        <p className="text-white font-sans text-2xl lg:text-4xl text-center font-normal leading-10">
          {" "}
          &
        </p>
        <p className="text-white font-sans text-2xl lg:text-4xl text-center font-normal leading-10">
          {" "}
         PEPPER
        </p>

       
        {/* <img src={image} alt="" /> */}
       <div className="flex  pt-10">
       <button onClick={()=>navigate('/services')} className="border-[2px] text-xs lg:text-base  text-white font-sans lg:w-44 p-2 mr-10 ">
          See Menu
        </button>
        <button onClick={()=>navigate('/services')} className="border-[2px] text-xs lg:text-base  text-white font-sans lg:w-44 lg:ml-4 p-2 ">
          Book Your Table
        </button>
       </div>
        </div>
        {/* <img src={image} style={{border:"1px solid red"}}></img> */}
      </div>
  
  );
};

export default Header;

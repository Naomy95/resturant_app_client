import React from "react";
import image from "../../assets/images/Artboard 33.png";
import SubmitButton from "../SubmitButton";

const Reservation = () => {
  return (
    <div className="bg-black py-20 px-4 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 lg:mt-20 mt-5">
        <div className="">
          <img className="w-full h-full object-contain" src={image} alt="" />
        </div>

        <div className="bg-black">
          <div className="px-14 py-4 rounded-b-lg">
            <div className="pt-12 pb-24 lg:pb-1">
              <p className="text-md font-normal font-sans text-white leading-10">
                TASTE THE DIFFERENCE
              </p>
              <p className="text-white text-2xl lg:text-4xl font-sans font-medium leading-10 text-start">
                RESERVATION
              </p>

              <p className="text-md font-normal font-sans text-white pt-24 leading-5">
                HOURS
              </p>
              <p className="text-sm font-normal font-sans text-white leading-5">
                MONDAY thru FRIDAY
                <br />
                11am - 9pm
              </p>
            </div>
         <div className="lg:pt-20 pt-5">
         <SubmitButton
           
           onClick={() => {
             alert("Your Appointment is on the way!!");
             location.reload();
           }}
         />
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

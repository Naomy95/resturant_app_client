import React from 'react'
import image from "../../assets/images/Artboard 33.png";
import SubmitButton from '../SubmitButton';

const ReservationSm = () => {
  return (
    <div style={{backgroundImage:`url("${image}")`, backgroundSize:'cover'}}
    >
          <div className="py-5 text-center justify-center">
              <p className="text-md font-normal font-sans text-white leading-10">
                TASTE THE DIFFERENCE
              </p>
              <p className="text-white text-2xl lg:text-4xl font-sans font-medium leading-10 ">
                RESERVATION
              </p>

              <p className="text-md font-normal font-sans text-white pt-10 leading-5">
                HOURS
              </p>
              <p className="text-sm font-normal font-sans text-white leading-5">
                MONDAY thru FRIDAY
                <br />
                11am - 9pm
              </p>
            </div>
         <div className=" pt-5 flex justify-center">
         <button  
           onClick={() => {
             alert("Your Appointment is on the way!!");
             location.reload();
           }} className=' p-2  border-[1px] text-white font-sans text-center w-36' type='submit'>Book Your Table </button>
         
         </div>
    </div>
  )
}

export default ReservationSm
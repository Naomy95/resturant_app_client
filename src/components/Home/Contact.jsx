import React from 'react'
import image from '../../assets/images/Artboard 26.png'
import SubmitButton from '../SubmitButton';

const Contact = () => {
  return (
    <div className='bg-black py-20 px-12'>
   
<p className=" text-white text-2xl lg:text-4xl font-sans  pb-4 font-medium leading-10 text-center">
Contact Us
</p>
<p className="text-white  text-sm lg:text-base font-sans font-medium leading-10 text-center">
Get connected with us
</p>

<div
  
  className="grid grid-cols-1 lg:grid-cols-2  gap-6 lg:mt-20 mt-5"
  
>
  <div className="">
  <img className="w-full h-full object-contain" src={image} alt="" />
  </div>

  <div className="bg-black" >

   <div className="px-14 py-4 rounded-b-lg">

   <div className="mb-6 lg:mb-10" id="form">
      <label
        htmlFor="full_name"
        className="block mb-2 text-sm font-medium text-white"
      >
        * Full Name
      </label>
      <input
        type="text"
        id="first_name"
        placeholder="e.g. sam Smith"
        className="border-[1px]  border-slate-300 text-gray-900 text-sm bg-black focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
        required
      ></input>
    </div>
    

   <div className="mb-6 lg:mb-10">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-white"
      >
        * Email
      </label>
      <input
        type="text"
        id="email"
        placeholder="e.g. sam_Smith@gmail.com"
        className="border-[1px] border-slate-300 text-gray-900 text-sm bg-black focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
        required
      ></input>
    </div>

   <div className="mb-6 lg:mb-10">
      <label
        htmlFor="phone_number"
        className="block mb-2 text-sm font-medium text-white"
      >
        * Mobile Number
      </label>
      <input
        type="number"
        id="number"
        placeholder="e.g. +880-1234567"
        className="border-[1px] border-slate-300 text-gray-900 text-sm bg-black focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
        required
      ></input>
    </div>

   <div className="mb-6 lg:mb-10">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-white"
      >
        * Message
      </label>
      <input
        type="text"
        id="first_name"
        placeholder="Your message"
        className="border-[1px] border-slate-300 text-gray-900 text-sm bg-black focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
        required
      ></input>
    </div>

 <SubmitButton onClick={()=>{alert('Your Appointment is on the way!!'); location.reload()}} />

 <p className="text-white text-sm font-medium font-sans py-4">By clicking the button you agree to the Privacy Policy
and Terms of Services</p>

   </div>
  </div>
</div>
</div>
  )
}

export default Contact
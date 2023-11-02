import React from 'react'
import first from '../../assets/images/Artboard 23.jpg'
import second from '../../assets/images/Artboard 24.jpg'
import third from '../../assets/images/Artboard 25.jpg'

const MasterChef = () => {
  return (
    <div className='bg-black py-20 lg:px-12 px-4'>
         <p className="text-white  text-xs pb-5 lg:text-base font-sans font-medium leading-10 text-center">
 About Us
  </p>
    <p className=" text-white text-2xl lg:text-4xl font-sans  pb-4 font-medium leading-10 text-center">
    Our Master Chefs
  </p>
  <p className="text-white  text-sm lg:text-base font-sans font-medium leading-10 text-center">
  A recipe has no soul without its cooker.
  </p>
 
<div className='grid place-items-center grid-cols-1 gap-4 lg:grid-cols-3 py-20 px-12'>
    <div className='lg:w-[420px] lg:h-[636px] w-[250px] h-[500px] flex items-end justify-center pb-10  ' style={{backgroundImage:`url("${first}")`, backgroundSize:'cover'}}>
  <div className=' text-center'>
  <p className='text-white font-sans text-xl font-bold'>Nicole Appart</p>
    <p className='text-white font-sans text-sm pt-5'>Sue Chef</p>
  </div>


    </div>
    <div className='lg:w-[420px] lg:h-[636px] w-[250px] h-[500px] flex items-end justify-center pb-10' style={{backgroundImage:`url("${second}")`, backgroundSize:'cover'}}>
    <div className=' text-center'>
    <p className='text-white font-sans text-xl font-bold'>Alex Young</p>
    <p className='text-white font-sans text-sm pt-5'>Main Chef</p>
    </div>
    
    </div>
    <div className='lg:w-[420px] lg:h-[636px] w-[250px]  h-[500px] flex items-end justify-center pb-10' style={{backgroundImage:`url("${third}")`, backgroundSize:'cover'}}>
    <div className=' text-center'>
    <p className='text-white font-sans text-xl font-bold'>James bond</p>
    <p className='text-white font-sans text-sm pt-5'>Pastry Chef</p>
    </div>
   
    </div>
  
</div>

</div>
  )
}

export default MasterChef
import React from 'react'
import service from '../../assets/images/service.jpg'
import flavours from '../../assets/images/flavours.avif'
import drinks from '../../assets/images/drinks.jpg'

const Midsection = () => {
  return (
    <div className='bg-black px-4'>
        <div className='py-14 justify-center items-center text-center'>
            <p className='text-white font-sans text-lg'>
            SALT & PAPER, founded in 2023, is dedicated to all those who 
            <p className='text-white font-sans text-lg'>love yo wander far and wide. We invite you on an wholesome</p>

<p className='text-white font-sans text-lg'>culinary adventure, where you’ll explore undiscovered</p>
<p className='text-white font-sans text-lg'>gourment experiences.</p>
<p className='text-white font-sans text-lg pt-10'>Thank you for creating lasting memories with us.</p>
            </p>

        </div>

<div className='grid place-items-center grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-3 py-20 lg:px-12'>
    <div className='lg:w-[420px] lg:h-[636px] w-[300px] h-[500px] flex align-center items-end justify-center pb-10  ' style={{backgroundImage:`url(${service})`, backgroundSize:'cover'}}>
  <div className=' text-center'>
  <p className='text-white font-sans text-xl font-bold'>Full Service Catering</p>
    <p className='text-white font-sans text-sm pt-5'>Learn more</p>
  </div>


    </div>
    <div className='lg:w-[420px] lg:h-[636px] w-[300px] h-[500px] flex items-end justify-center pb-10' style={{backgroundImage:`url(${flavours})`, backgroundSize:'cover'}}>
    <div className=' text-center'>
    <p className='text-white font-sans text-xl font-bold'>Explosion of Flavours</p>
    <p className='text-white font-sans text-sm pt-5'>Learn more</p>
    </div>
    
    </div>
    <div className='lg:w-[420px] lg:h-[636px] w-[300px] h-[500px] flex items-end justify-center pb-10' style={{backgroundImage:`url(${drinks})`, backgroundSize:'cover'}}>
    <div className=' text-center'>
    <p className='text-white font-sans text-xl font-bold'>Signature Drinks</p>
    <p className='text-white font-sans text-sm pt-5'>Learn more</p>
    </div>
   
    </div>
  
</div>

    </div>
  )
}

export default Midsection
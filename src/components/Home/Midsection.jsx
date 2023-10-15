import React from 'react'
import service from '../../assets/images/service.jpg'
import flavours from '../../assets/images/flavours.avif'
import drinks from '../../assets/images/drinks.jpg'

const Midsection = () => {
  return (
    <div className='bg-black'>
        <div className='py-14 justify-center items-center text-center'>
            <p className='text-white font-sans text-lg'>
            YIN & YUMMY, founded in 2023, is dedicated to all those who 
            <p className='text-white font-sans text-lg'>love yo wander far and wide. We invite you on an wholesome</p>

<p className='text-white font-sans text-lg'>culinary adventure, where you’ll explore undiscovered</p>
<p className='text-white font-sans text-lg'>gourment experiences.</p>
<p className='text-white font-sans text-lg pt-10'>Thank you for creating lasting memories with us.</p>
            </p>

        </div>

<div className='grid grid-cols-3 py-20 px-12'>
    <div className='w-[420px] h-[636px] flex items-end justify-center pb-10  ' style={{backgroundImage:`url(${service})`, backgroundSize:'cover'}}>
  <div className=' text-center'>
  <p className='text-white font-sans text-xl font-bold'>Full Service Catering</p>
    <p className='text-white font-sans text-sm pt-5'>Learn more</p>
  </div>


    </div>
    <div className='w-[420px] h-[636px] flex items-end justify-center pb-10' style={{backgroundImage:`url(${flavours})`, backgroundSize:'cover'}}>
    <div className=' text-center'>
    <p className='text-white font-sans text-xl font-bold'></p>Explosion of Flavours
    <p className='text-white font-sans text-sm pt-5'>Learn more</p>
    </div>
    
    </div>
    <div className='w-[420px] h-[636px] flex items-end justify-center pb-10' style={{backgroundImage:`url(${drinks})`, backgroundSize:'cover'}}>
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
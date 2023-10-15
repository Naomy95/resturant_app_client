import React from 'react'
import HomeMenuCard from './HomeMenuCard'
import service from '../../assets/images/service.jpg'

const HomeMenu = () => {
  return (
    <div className='bg-black py-20 px-12'>
        <p className=" text-white text-2xl lg:text-4xl font-sans  pb-4 font-medium leading-10 text-center">
        Our Menus
      </p>
      <p className="text-white  text-sm lg:text-base font-sans font-medium leading-10 text-center">
      Picky eaters, adventurous eaters, ehatever your taste,
      </p>
      <p className="text-white  text-sm lg:text-base font-sans font-medium leading-10 text-center">
      we have something for you.
      </p>
      <div className='grid grid-cols-2 gap-20 pb-10 pt-20'>
        <HomeMenuCard 
        image={service}
        header="sushi"
        text= "lorem ipsam"
        price="300tk"
        
        />
        <HomeMenuCard 
       
        image={service}
        header="sushi"
        text= "lorem ipsam"
        price="300tk"
        
        />

      </div>
    </div>
   
  
  )
}

export default HomeMenu
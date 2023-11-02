import React from 'react'
import HomeMenuCard from './HomeMenuCard'
import service from '../../assets/images/Artboard 17.png'
import sandwich from '../../assets/images/Artboard 21.png'
import shrimp from '../../assets/images/Artboard 20.png'
import pasta from '../../assets/images/Artboard 19.png'
import beef from '../../assets/images/Artboard 22.png'
import mohito from '../../assets/images/Artboard 18.png'

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
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 pb-10 pt-20'>
        <HomeMenuCard 
        image={service}
        header="Spring Roll"
        text= "Lorem ipsum dolor sit
        amet, consectetuer 
        adipiscing elit, sed 
        diam nonummy nibh 
        euismod tincidunt ut 
        laoreet dolore magna 
        aliquam erat volutpat. 
        Ut wisi enim ad minim 
        veniam, "
        price="300tk"
        
        />
        <HomeMenuCard 
       
        image={sandwich}
        header="Sandwich"
        text= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,"
        price="400tk"
        
        />
        <HomeMenuCard 
       
        image={shrimp}
        header="Shrimp"
        text= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,"
        price="400tk"
        
        />
        <HomeMenuCard 
       
        image={pasta}
        header="Pasta"
        text= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,"
        price="400tk"
        
        />
        <HomeMenuCard 
       
        image={beef}
        header="Stake"
        text= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,"
        price="1400tk"
        
        />
        <HomeMenuCard 
       
        image={mohito}
        header="Mohito"
        text= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,"
        price="700tk"
        
        />

      </div>
    </div>
   
  
  )
}

export default HomeMenu
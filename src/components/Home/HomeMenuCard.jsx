import React from 'react'
import rating from '../../assets/images/rating.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HomeMenuCard = ({image,onClick,header,text,price}) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon  icon="fa-regular fa-star"  key={i} />);
    } else {
      stars.push(<FontAwesomeIcon  icon="fa-regular fa-star" key={i} />);
    }
  }

  return (
    <div className='grid grid-cols-2 gap-x-4 w-[250px] h-[400px] lg:w-[650px] lg:h-[517px] border border-[1px]' onClick={onClick}>
        <div className=''>
        <img className="w-full h-full object-contain" src={image} alt="" />
        </div>
        <div className=''>
            <div className='flex justify-between pr-5 pt-5 lg:pt-10'>
            <p className='text-white  text-sm lg:text-lg font-sans font-medium  text-start'>{header}</p>
            <p className='text-white  text-sm lg:text-lg font-sans font-light lg:font-medium pl-2'>{price}</p>
            </div>
            <p className='text-white  text-xs lg:text-base font-sans font-light lg:leading-10 text-justify pr-5 lg:pr-24 pt-5 lg:pt-10'>{text}</p>
            <div>
              {/* <img src={rating} alt="" /> */}
            <div>
              {stars}
              <button className='border border-[.5px] border-white text-white font-sans px-3 py-1 mt-5'>Add to tray</button>
            </div>

                
            </div>
        </div>
    </div>
  )
}

export default HomeMenuCard
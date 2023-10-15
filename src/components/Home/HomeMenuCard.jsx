import React from 'react'

const HomeMenuCard = ({image,onClick,header,text,price}) => {
  return (
    <div className='grid grid-cols-2 gap-x-4 w-[650px] h-[517px] border border-[1px]' onClick={onClick}>
        <img style={{width:'100%', height:'100%'}} src={image} alt="" />
        <div>
            <div className='flex justify-between pr-5'>
            <p className='text-white  text-sm lg:text-lg font-sans font-medium leading-10 text-start'>{header}</p>
            <p className='text-white  text-sm lg:text-lg font-sans font-medium leading-10 '>{price}</p>
            </div>
            <p className='text-white  text-sm lg:text-base font-sans font-light leading-10 text-start pt-10'>{text}</p>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default HomeMenuCard
import React from 'react'
import Navbar from '../components/Navbar'
import MenuHeader from '../components/menu/MenuHeader'
import MenuCarousel from '../components/menu/MenuCarousel'
import Reservation from '../components/menu/Reservation'
import ReservationSm from '../components/menu/ReservationSm'

const Menu = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <MenuHeader />
        <MenuCarousel />
       <div className='hidden lg:block'>
       <Reservation />

       </div>
       <div className='lg:hidden my-10'>
        <ReservationSm />
       </div>

    </div>
  )
}

export default Menu
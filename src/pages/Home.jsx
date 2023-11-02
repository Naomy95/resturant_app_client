import React from 'react'
import Navbar from '../components/Navbar'
import Piechart from './Piechart'
import Header from '../components/Header'
import Demo from '../components/Demo'
import Midsection from '../components/Home/Midsection'
import HomeMenu from '../components/Home/HomeMenu'
import MasterChef from '../components/Home/MasterChef'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <div>
   <Navbar />

      <Header />
      <Midsection />
      <HomeMenu />
      <MasterChef />
      <Contact />
    </div>
  )
}

export default Home
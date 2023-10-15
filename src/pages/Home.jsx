import React from 'react'
import Navbar from '../components/Navbar'
import Piechart from './Piechart'
import Header from '../components/Header'
import Demo from '../components/Demo'
import Midsection from '../components/Home/Midsection'
import HomeMenu from '../components/Home/HomeMenu'

const Home = () => {
  return (
    <div>
   <Navbar />

      <Header />
      <Midsection />
      <HomeMenu />
    </div>
  )
}

export default Home
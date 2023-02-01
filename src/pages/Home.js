import React from 'react'
import Header from '../components/header/Header'
import MainMap from '../components/MainMap'
import Sidebar from '../components/sidebar/Sidebar'
import MapPage from './MapPage'
import './home.css'
import Rightside from '../components/rightside/Rightside'
// not sure this is needed yet

const Home = () => {
  return (
    <div>
      <Header />
      <div className='homepage-container'>
        <Sidebar />
        <MapPage className='map-page'/>
        <Rightside />
      </div>
    </div>
  )
}

export default Home
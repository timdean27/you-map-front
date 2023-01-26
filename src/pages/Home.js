import React from 'react'
import Header from '../components/header/Header'
import MainMap from '../components/MainMap'
import MapPage from './MapPage'
// not sure this is needed yet

const Home = () => {
  return (
    <div>
      <Header />
      <MapPage/>
      {/* <MainMap /> */}
      this is Home page
      </div>
  )
}

export default Home
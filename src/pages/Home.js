import React from 'react'
import Header from '../components/header/Header'
import MainMap from '../components/MainMap'
import Sidebar from '../components/sidebar/Sidebar'
import MapPage from './MapPage'
import './home.css'
import Rightside from '../components/rightside/Rightside'
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import Login from '../components/login/Login'
import Logout from '../components/logout/Logout'
// not sure this is needed yet

const Home = () => {
  // user here is temporary
  const user = false
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='homepage-container'>
          <Routes>
            <Route path='/friends' element={<Sidebar />} />
            <Route path='/' element={<MapPage className='map-page'/>} />
            <Route path='/login' element={user? <Navigate to='/' />: <Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/maybe' element={<Rightside />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Home
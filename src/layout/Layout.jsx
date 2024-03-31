import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Container from '../components/Container'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
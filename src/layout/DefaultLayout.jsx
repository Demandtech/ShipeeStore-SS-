import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, CartNotification } from '../components'


const DefaultLayout = () => {
  return (
    <>
      <CartNotification />
      <Navbar />
      <Outlet />
    </>
  )
}


export default DefaultLayout

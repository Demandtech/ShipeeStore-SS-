import React from 'react'
import { Outlet } from 'react-router-dom'
import { Login } from '../pages'

const GuessLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default GuessLayout
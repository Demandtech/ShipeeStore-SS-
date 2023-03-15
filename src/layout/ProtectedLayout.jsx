import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navbar } from '../components'
import { useUserContext } from '../contexts/userContext'

const ProtectedLayout = () => {
 const { isAuthenticated } = useUserContext()

 if (!isAuthenticated) {
   return <Navigate  to={'/login'}/>
 }
   return (
     <div>
       <Navbar />
       <Outlet />
     </div>
   )
}

export default ProtectedLayout
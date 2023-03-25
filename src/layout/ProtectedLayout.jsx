import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navbar, CartNotification } from '../components'
import { useUserContext} from '../contexts/userContext'

const ProtectedLayout = () => {
 const { isAuthenticated } = useUserContext()

 if (!isAuthenticated) {
   return <Navigate  to={'/login'}/>
 }
   return (
     <div>
       <CartNotification />
       <Navbar />
       <Outlet />
     </div>
   )
}

export default ProtectedLayout
import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { SignUp, Login, ProductsPage,Contact, CartItems, About } from './pages'
import { Navbar } from './components'

//const url = 'https://dummyjson.com/products'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/' element={<ProductsPage />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/cart' element={<CartItems />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}



export default App

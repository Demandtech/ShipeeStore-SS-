import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductsProvider } from './contexts/productsContext'
import { CartsProvider } from './contexts/cartsContext'
import { FiltersProvider } from './contexts/filtersContext'
import { UserProvider } from './contexts/userContext'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserProvider>
    <ProductsProvider>
      <FiltersProvider>
        <CartsProvider>
          <RouterProvider router={router} />
        </CartsProvider>
      </FiltersProvider>
    </ProductsProvider>
  </UserProvider>
)

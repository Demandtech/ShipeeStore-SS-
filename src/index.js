import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProductsProvider } from './contexts/productsContext'
import { CartsProvider } from './contexts/cartsContext'
import { FiltersProvider } from './contexts/filtersContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ProductsProvider>
    <FiltersProvider>
      <CartsProvider>
        <App />
      </CartsProvider>
    </FiltersProvider>
  </ProductsProvider>
)

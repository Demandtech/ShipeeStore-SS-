import React, { useContext, createContext, useReducer, } from 'react'
import filtersReducer from '../reducers/filtersReducer'
//import { FILTER_PRODUCTS, UPDATE_FILTERS, GET_PRODUCTS } from '../actions'
//import {useProductsContext} from '../contexts/productsContext'




const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: '',
    brand: '',
    min_price: 0,
    max_price: '',
    price: ''
  },
}

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState)
  

  
  

  return (
    <FiltersContext.Provider value={{ ...state}}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => {
  return useContext(FiltersContext)
}

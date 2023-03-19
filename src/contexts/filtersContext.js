import React, { useContext, createContext, useReducer, useEffect } from 'react'
import filtersReducer from '../reducers/filtersReducer'
import { FILTER_PRODUCTS, UPDATE_FILTERS, GET_PRODUCTS } from '../actions'
import {useProductsContext} from '../contexts/productsContext'




const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    brand: 'all',
    min_price: 1,
    max_price: 100,
    price: 0
  },
}

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState)
  const {products} = useProductsContext()

  
  const updateFilters = (event)=> {
     let name = event.target.name  
     let value = event.target.value
     
     dispatch({type:UPDATE_FILTERS, payload:{name:name, value:value}})
  }

  useEffect(()=>{
    dispatch({type:GET_PRODUCTS, payload:products})
  }, [products])

  return (
    <FiltersContext.Provider value={{ ...state, updateFilters, dispatch }}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => {
  return useContext(FiltersContext)
}

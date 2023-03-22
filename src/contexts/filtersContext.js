import React, { useContext, createContext, useReducer, useEffect} from 'react'
import filtersReducer from '../reducers/filtersReducer'
import { GET_PRODUCTS } from '../actions'
import {useProductsContext} from '../contexts/productsContext'


const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: [],
    brand: []
  },
}

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState)
  const {products} = useProductsContext()
  
  useEffect(()=>{
   dispatch({type:GET_PRODUCTS, payload:products})
  }, [products])

  return (
    <FiltersContext.Provider value={{ ...state}}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => {
  return useContext(FiltersContext)
}

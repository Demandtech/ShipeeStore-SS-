import React, { useContext, createContext, useReducer } from 'react'
import filtersReducer from '../reducers/filtersReducer'
import {FILTER_PRODUCTS, UPDATE_FILTERS} from '../actions'
import Select from '../components'



const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    brand: 'all',
    min_price: 0,
    max_price: 0,
    price: 0
  },
}

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState)

  const updateFilters = (event)=> {
     let name = event.target.name  
     let value = event.target.value
     
     dispatch({type:UPDATE_FILTERS, payload:{name:name, value:value}})
    console.log(name, value)
  }
  return (
    <FiltersContext.Provider value={{ ...state, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => {
  return useContext(FiltersContext)
}

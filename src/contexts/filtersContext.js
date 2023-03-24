import React, { useContext, createContext, useReducer, useEffect} from 'react'
import filtersReducer from '../reducers/filtersReducer'
import { GET_PRODUCTS } from '../actions'
import {useProductsContext} from '../contexts/productsContext'


const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  category: [],
  brand: [],
  filters: {
    search_query: '',
    category_query: 'All',
    brand_query:''
  },
}

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState)
  const {products} = useProductsContext()

   const handleSearch = (e) => {
     const value = e.target.value
     dispatch({ type: 'GET_SEARCH_QUERY', payload: value})
   }

   const handleSelect = (cat, bra)=> {
    dispatch({ type: 'GET_SELECT_QUERY', payload:{cat, bra}})
   }
  
  useEffect(()=>{
   dispatch({type:GET_PRODUCTS, payload:products})
  }, [products])

  useEffect(()=> {
    dispatch({type:'LOAD_BRANDS'})
  },[state.filters.category_query])

  return (
    <FiltersContext.Provider value={{ ...state, handleSearch, handleSelect}}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => {
  return useContext(FiltersContext)
}

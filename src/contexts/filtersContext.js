import React, { useContext, createContext, useReducer, useEffect} from 'react'
import filtersReducer from '../reducers/filtersReducer'
import {
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  GET_SEARCH_QUERY,
  GET_SELECT_QUERY,
  LOAD_BRANDS,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from '../actions'
import {useProductsContext} from '../contexts/productsContext'


const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  category: [],
  brand: [],
  itemError: { show: false, msg: '' },
  filters: {
    search_query: '',
    category_query: '',
    brand_query: '',
  },
}

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState)
  const {products} = useProductsContext()

   const handleSearch = (e) => {
     const value = e.target.value
     dispatch({ type: GET_SEARCH_QUERY, payload: value })
   }

   const handleSelect = (cat, bra)=> {
    dispatch({ type: GET_SELECT_QUERY, payload: { cat, bra } })
   }

   const updateSort = (e)=> {
   const value = e.target.value
    dispatch({type: UPDATE_SORT, payload:value})
   }
  
  useEffect(()=>{
   dispatch({type:GET_PRODUCTS, payload:products})
  }, [products])

  useEffect(()=> {
    dispatch({ type: LOAD_BRANDS })
  },[state.filters.category_query])

  useEffect(()=>{
    dispatch({type:SORT_PRODUCTS})
    dispatch({type:FILTER_PRODUCTS})
  }, [state.filters, state.sort, products])

  return (
    <FiltersContext.Provider value={{ ...state, handleSearch, handleSelect, updateSort}}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => {
  return useContext(FiltersContext)
}

import { useContext, createContext, useReducer, useEffect } from 'react'
import productsReducer from '../reducers/productsReducer'

//Actions
import {
  GET_PRODUCTS,
  GET_SINGLEPRODUCT,
  START_LOADING,
  STOP_LOADING,
} from '../actions'

const ProductsContext = createContext()

const initialState = {
  products: [],
  singleProduct: [],
  isLoading: false,
}

const url = 'https://dummyjson.com/products'

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)

  const fetchData = async (url) => {
    dispatch({ type: START_LOADING })
    try {
      const request = await fetch(url)
      const data = await request.json()
      dispatch({ type: GET_PRODUCTS, payload:data })
      dispatch({ type: STOP_LOADING })
    } catch (err) {
      console.log(err)
      dispatch({ type: STOP_LOADING })
    } finally {
      dispatch({ type: STOP_LOADING })
    }
  }

  useEffect(()=> {
    fetchData(url)
  }, [])

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}

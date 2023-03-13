import { useContext, createContext, useReducer } from 'react'
import productsReducer from '../reducers/productsReducer'

const ProductsContext = createContext()

const initialState = {
  
}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)
  return (
    <ProductsContext.Provider value={{ ...state }}>{children}</ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}

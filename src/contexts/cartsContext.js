import { useContext, createContext, useReducer, useEffect } from 'react'
import cartsReducer from '../reducers/cartsReducer'
import { useProductsContext } from '../contexts/productsContext'
import {
  ADD_TO_CART,
  GET_PRODUCTS,
  DELETE_CART_ITEM
} from '../actions'

const CartsContext = createContext()

const initialState = {
  all_product: [],
  cart: [],
}

export const CartsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartsReducer, initialState)
  const { products } = useProductsContext()

  const addToCart = (id, discountPrice) => {
    dispatch({ type: ADD_TO_CART, payload: { id,  discountPrice } })
  }

  const deleteCartItem = (id) => {
    dispatch({ type: DELETE_CART_ITEM, payload:id })
  }

  

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS, payload: products })
  }, [products])

  return (
    <CartsContext.Provider
      value={{ ...state, addToCart, deleteCartItem}}
    >
      {children}
    </CartsContext.Provider>
  )
}

export const useCartsContext = () => {
  return useContext(CartsContext)
}

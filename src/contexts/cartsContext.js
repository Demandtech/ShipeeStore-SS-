import { useContext, createContext, useReducer, useEffect } from 'react'
import cartsReducer from '../reducers/cartsReducer'
import { useProductsContext } from '../contexts/productsContext'
import {
  ADD_TO_CART,
  GET_PRODUCTS,
  DELETE_CART_ITEM,
  SINGLE_ADD_TO_CART,
  CART_NOTIFICATION,
} from '../actions'

const CartsContext = createContext()

const getLocalStorage = () => {
  let cart = localStorage.getItem('cartList')
  if (cart) {
    return JSON.parse(localStorage.getItem('cartList'))
  } else {
    return []
  }
}

const initialState = {
  all_products: [],
  single_product: {},
  cart: getLocalStorage(),
  cart_notification: { show: false, msg: '' },
}

export const CartsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartsReducer, initialState)
  const { products, singleProduct } = useProductsContext()

  const addToCart = (id) => {
    console.log(id)
    dispatch({ type: ADD_TO_CART, payload: id })
  }

  const singlePageAddToCart = () => {
    dispatch({ type: SINGLE_ADD_TO_CART })
  }

  const deleteCartItem = (id) => {
    dispatch({ type: DELETE_CART_ITEM, payload: id })
  }

  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS, payload: { products, singleProduct } })
  }, [products, singleProduct])

  useEffect(() => {
    let timeoutId;
    if(state.cart_notification.show){
      timeoutId = setTimeout(()=>{
        dispatch({type:CART_NOTIFICATION})
      }, 2000)
    }
    return ()=>{
      clearTimeout(timeoutId)
    }
  }, [state.cart_notification])

  return (
    <CartsContext.Provider
      value={{ ...state, deleteCartItem, singlePageAddToCart, addToCart }}
    >
      {children}
    </CartsContext.Provider>
  )
}

export const useCartsContext = () => {
  return useContext(CartsContext)
}

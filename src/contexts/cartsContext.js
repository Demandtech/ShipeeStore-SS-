import { useContext, createContext, useReducer } from 'react'
import cartsReducer from '../reducers/cartsReducer'

const CartsContext = createContext()

const initialState = {
  cart: [],
}

export const CartsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartsReducer, initialState)
  return (
    <CartsContext.Provider value={{ ...state }}>
      {children}
    </CartsContext.Provider>
  )
}

export const useCartsContext = () => {
  return useContext(CartsContext)
}

import { useContext, createContext, useReducer } from 'react'
import userReducer from '../reducers/userReducer'

const UserContext = createContext()

const initialState = {
  user: {},
  isAuthenticated: false
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  return (
    <UserContext.Provider value={{ ...state }}>
       {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}

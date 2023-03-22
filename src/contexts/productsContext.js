import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react'
import productsReducer from '../reducers/productsReducer'

//Actions
import {
  GET_PRODUCTS,
  GET_SINGLEPRODUCT,
  START_LOADING,
  STOP_LOADING,
  TOGGLE_QUANTITY,
} from '../actions'

const ProductsContext = createContext()

let initialState = {
  products: [],
  singleProduct: {},
  isLoading: true,
  limit: 20,
  hasMore: true,
  total:0,
}

const url = 'https://dummyjson.com/products'

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)
 
  const fetchProduct = async (url) => {
    dispatch({ type: START_LOADING })
    try {
      const request = await fetch(url)
      const data = await request.json()
      dispatch({type: GET_PRODUCTS, payload:{products:data.products, total:data.total}})
      dispatch({ type: STOP_LOADING })
    } catch (err) {
      dispatch({ type: STOP_LOADING })
    } finally {
      dispatch({ type: STOP_LOADING })
    }
  }

  const fetchSingleProduct = async (url)=> {
    dispatch({type: START_LOADING})
    try{
     const res = await fetch(url)
     const data = await res.json()
     dispatch({type:GET_SINGLEPRODUCT, payload:data})
     dispatch({type: STOP_LOADING})
    }
    catch(err){
      console.log(err)
      dispatch({ type: STOP_LOADING })
    }
    finally{
      dispatch({ type: STOP_LOADING })
    }
  }

   const handlequantity = (command) => {
     dispatch({ type: TOGGLE_QUANTITY, payload: command })
   }

 
 useEffect(() => {
   fetchProduct(`${url}?limit=${state.limit}`)
 }, [state.limit])
 

  return (
    <ProductsContext.Provider
      value={{ ...state, fetchSingleProduct, handlequantity, dispatch }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}

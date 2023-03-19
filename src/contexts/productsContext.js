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
  GET_MORE_PRODUCTS
} from '../actions'

const ProductsContext = createContext()

const initialState = {
  products: [],
  singleProduct: {},
  isLoading: false,
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

  useEffect(() => {
    fetchProduct(`${url}?limit=${state.limit}`)
  }, [state.limit])

  const event = () => {
    if(state.limit === state.total){
       state.hasMore = false
    }
    if (state.hasMore && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      dispatch({type:GET_MORE_PRODUCTS})
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
  })

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}

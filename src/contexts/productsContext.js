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
  singleProduct: [],
  isLoading: false,
  limit: 20,
  hasMore: true,
  total:0
}

const url = 'https://dummyjson.com/products'

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)
 

  const fetchData = async (url) => {
    dispatch({ type: START_LOADING })
    try {
      const request = await fetch(url)
      const data = await request.json()
      console.log(data)
      dispatch({type: GET_PRODUCTS, payload:{products:data.products, total:data.total}})
      dispatch({ type: STOP_LOADING })
    } catch (err) {
      console.log(err)
      dispatch({ type: STOP_LOADING })
    } finally {
      dispatch({ type: STOP_LOADING })
    }
  }

  const event = () => {
    if(state.limit === state.total){
       state.hasMore = false
    }
    if (state.hasMore && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      dispatch({type:'LOAD_MORE_PRODUCTS'})
      console.log('bottom')
      console.log(state.limit, state.total)
    }
  }

  useEffect(() => {
    fetchData(`${url}?limit=${state.limit}`)
  }, [state.limit])

  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
  })

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}

import {
  useContext,
  createContext,
  useReducer,
  useEffect,
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
      if(data.total > state.limit)
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
   fetchProduct(`${url}?limit=100`)
   // eslint-disable-next-line
 }, [])
 

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

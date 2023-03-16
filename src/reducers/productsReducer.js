import {
  GET_PRODUCTS,
  GET_SINGLEPRODUCT,
  START_LOADING,
  STOP_LOADING,
} from '../actions'
const productsReducer = (state, action) => {
 switch(action.type){
  case START_LOADING:
    return {...state, isLoading:true}
  case STOP_LOADING:
    return {...state, isLoading: false}
  case GET_PRODUCTS:
    return {...state, products:action.payload.products}
  default :
    return {...state}
 }
}

export default productsReducer

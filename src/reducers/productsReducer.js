import {
  GET_PRODUCTS,
  GET_MORE_PRODUCTS,
  GET_SINGLEPRODUCT,
  START_LOADING,
  STOP_LOADING,
  TOGGLE_QUANTITY
} from '../actions'
const productsReducer = (state, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case STOP_LOADING:
      return { ...state, isLoading: false }
    case GET_PRODUCTS:
      return {
        ...state,
        total: action.payload.total,
        products: [...action.payload.products],
      }
    case GET_SINGLEPRODUCT:
      return {
        ...state,
        singleProduct: { ...action.payload, quantity: 1 },
      }
    case GET_MORE_PRODUCTS:
      return {
        ...state,
        limit: state.limit <= state.total ? state.limit + 12 : state.limit,
      }
    case TOGGLE_QUANTITY:
      console.log(state.singleProduct)
      if(action.payload === 'INC'){
        if (state.singleProduct.quantity < state.singleProduct.stock) {
          return {
            ...state,
            singleProduct: {
              ...state.singleProduct,
              quantity: state.singleProduct.quantity + 1,
            },
          }
        }
      }else if(action.payload === 'DEC'){
        if (state.singleProduct.quantity > 1) {
          return {
            ...state,
            singleProduct: {
              ...state.singleProduct,
              quantity: state.singleProduct.quantity - 1,
            },
          }
        }
      }
      return {...state}
    default:
      return { ...state }
  }
}

export default productsReducer

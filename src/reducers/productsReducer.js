import {
  GET_PRODUCTS,
  GET_MORE_PRODUCTS,
  GET_SINGLEPRODUCT,
  START_LOADING,
  STOP_LOADING,
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
        products: [...action.payload.products]
      }
    case 'LOAD_MORE_PRODUCTS':
      return{...state, limit: state.limit <= state.total ? state.limit + 12 : state.limit}
        default:
      return { ...state }
    }
}

export default productsReducer

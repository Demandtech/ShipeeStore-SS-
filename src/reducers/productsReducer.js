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
      action.payload.products.forEach(product => {
       product.quantity = 1;
        product.discountPrice =
          product.price - product.price * (product.discountPercentage / 100)
      })
   
      return {
        ...state,
        total: action.payload.total,
        products: [...action.payload.products],
      }
    case GET_SINGLEPRODUCT:
      let discountPrice = action.payload.price - action.payload.price * (action.payload.discountPercentage / 100)
      return {
        ...state,
        singleProduct: { ...action.payload, quantity: 1, discountPrice:discountPrice},
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
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default productsReducer

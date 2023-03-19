import { ADD_TO_CART, GET_PRODUCTS } from '../actions'

const cartsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, all_product: action.payload }
    case ADD_TO_CART:

      const itemToAddId = action.payload
      const itemExist = state.cart.some((item) => item.id === itemToAddId)

      if (!itemExist) {
        let cartItem = state.all_product.find((item) => item.id === itemToAddId)
        return { ...state, cart: [...state.cart, cartItem] }
      } else {
        return { ...state }
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default cartsReducer

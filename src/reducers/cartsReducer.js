import {
  ADD_TO_CART,
  GET_PRODUCTS,
  DELETE_CART_ITEM,
  TOGGLE_QUANTITY,
} from '../actions'

const cartsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, all_product: action.payload }
    case ADD_TO_CART:
      const itemToAddId = action.payload.id
      const itemExist = state.cart.some((item) => item.id === itemToAddId)
      console.log(itemToAddId)

      if (!itemExist) {
        let cartItem = state.all_product.find((item) => item.id === itemToAddId)
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...cartItem, discountPrice: action.payload.discountPrice },
          ],
        }
      } else {
        return { ...state }
      }

    case DELETE_CART_ITEM:
      console.log('clicked')
      return {
        ...state,
        cart: state.cart.filter((ca) => ca.id !== action.payload),
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default cartsReducer

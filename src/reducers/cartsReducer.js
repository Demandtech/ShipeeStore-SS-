import {
  ADD_TO_CART,
  GET_PRODUCTS,
  DELETE_CART_ITEM,
  SINGLE_ADD_TO_CART,
} from '../actions'

const cartsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        all_products: action.payload.products,
        single_product: action.payload.singleProduct,
      }
    case ADD_TO_CART:
      const itemToAddId = action.payload
      const itemExist = state.cart.some((item) => item.id === itemToAddId)
      //console.log(itemExist)
      if (!itemExist) {
        let cartItem = state.all_products.find(
          (item) => item.id === itemToAddId
        )
        console.log(cartItem)
        return { ...state, cart: [...state.cart, cartItem] }
      } else {
        return { ...state }
      }

    case SINGLE_ADD_TO_CART:
      const itemToAdd = state.single_product
      const itemIndexToAdd = state.cart.findIndex(
        (item) => item.id === itemToAdd.id
      )
      if (itemIndexToAdd !== -1) {
        let newItems = [...state.cart]
        newItems[itemIndexToAdd] = itemToAdd
        return { ...state, cart: [...newItems] }
      } else {
        return { ...state, cart: [...state.cart, itemToAdd] }
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

import {
  ADD_TO_CART,
  GET_PRODUCTS,
  DELETE_CART_ITEM,
  SINGLE_ADD_TO_CART,
  CART_NOTIFICATION,
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
        return { ...state, cart: [...state.cart, cartItem], cart_notification:{show:true, msg:'New item add to cart'} }
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
        return {
          ...state,
          cart: [...newItems],
          cart_notification: { show: true, msg: 'New item add to cart' },
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, itemToAdd],
          cart_notification: { show: true, msg: 'New item add to cart' },
        }
      }

    case DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((ca) => ca.id !== action.payload),
        cart_notification: { show: true, msg: 'Item removed from cart' }
      }
    case CART_NOTIFICATION:
      return {...state, cart_notification:{show:false, msg:''}}
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default cartsReducer

//import React from "react"
import { FILTER_PRODUCTS, GET_PRODUCTS, UPDATE_FILTERS } from '../actions'

const filterReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: {
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        },
      }
    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }
    default:
      return { ...state }
  }
}

export default filterReducer

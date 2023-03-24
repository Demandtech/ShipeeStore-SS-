//import React from "react"
import { FILTER_PRODUCTS, GET_PRODUCTS, UPDATE_FILTERS } from '../actions'

const filterReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      //Categories
      let tempCategory = action.payload.map((product) => product.category)
      tempCategory = new Set(tempCategory)
      //Brands
      
      return {
        ...state,
        all_products: action.payload,
        filtered_products:action.payload,
        category: ['All', ...tempCategory],
        
      }
    case 'GET_SEARCH_QUERY':
     
      return {
        ...state,
        filters: { ...state.filters, search_query:action.payload },
      }
     case 'GET_SELECT_QUERY':
      return {...state, filters:{...state.filters, category_query:action.payload.cat, brand_query:action.payload.bra}}
     case 'LOAD_BRANDS':
        let tempBrand = []
      if (
        state.filters.category_query === 'All' ||
        state.filters.category_query === 'Category'
      ) {
        tempBrand = state.all_products.map((product) => product.brand)
      } else {
        tempBrand = action.payload
          .filter((product) => {
            return product.category === state.filters.category_query
          })
          .map((product) => product.brand)
      }
      tempBrand = new Set(tempBrand)
      return { ...state, brand: ['All', ...tempBrand] }
    default:
      return { ...state }
  }
}

export default filterReducer

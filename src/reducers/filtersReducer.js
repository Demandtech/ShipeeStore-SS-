//import React from "react"
import {
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  GET_SEARCH_QUERY,
  GET_SELECT_QUERY,
  LOAD_BRANDS,
} from '../actions'

const filterReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      //Categories
      let tempCategory = action.payload.map((product) => product.category)
      tempCategory = new Set(tempCategory)
      //Brands
      let tempbrands = action.payload.map((product) => product.brand)
      tempbrands = new Set(tempbrands)
      return {
        ...state,
        all_products: action.payload,
        filtered_products: action.payload,
        category: ['All', ...tempCategory],
        brand: ['All', ...tempbrands],
      }
    case GET_SEARCH_QUERY:
      return {
        ...state,
        filters: { ...state.filters, search_query: action.payload },
      }
    case GET_SELECT_QUERY:
      return {
        ...state,
        filters: {
          ...state.filters,
          category_query: action.payload.cat,
          brand_query: action.payload.bra,
        },
      }
    case LOAD_BRANDS:
      let tempBrand = []
      if (
        state.filters.category_query === 'All' ||
        state.filters.category_query === 'Category'
      ) {
        tempBrand = state.all_products.map((product) => product.brand)
      } else {
        tempBrand = state.all_products
          .filter((product) => {
            return product.category === state.filters.category_query
          })
          .map((product) => product.brand)
      }
      tempBrand = new Set(tempBrand)
      return { ...state, brand: ['All', ...tempBrand] }
    case FILTER_PRODUCTS:
      const { all_products } = state
      const { category_query, search_query, brand_query } = state.filters
      let tempProducts = [...all_products]
      //Textbox
      if (search_query) {
        tempProducts = tempProducts.filter((product) => {
          return product.title.toLowerCase().startsWith(search_query)
        })
      }

      //Category
      if (category_query !== 'All' && category_query !== 'Category') {
        tempProducts = tempProducts.filter((product) => {
          return product.category === category_query
        })
      }

      if (category_query === 'All' || category_query === 'Category') {
        tempProducts = [...tempProducts]
      }

      //Brand
      if (brand_query !== 'All' && brand_query !== 'Brand') {
        tempProducts = tempProducts.filter((product) => {
          return product.brand === brand_query
        })
      }

      if (brand_query === 'All' || brand_query === 'Brand') {
        tempProducts = [...tempProducts]
      }

      //Empty
      let filterError = {}
      if (tempProducts.length < 1) {
        filterError = {
          show: true,
          msg: 'Item not found search for other items',
        }
      } else {
        filterError = { show: false, msg: '' }
      }

      return {
        ...state,
        filtered_products: tempProducts,
        itemError: filterError,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default filterReducer

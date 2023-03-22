//import React from "react"
import { FILTER_PRODUCTS, GET_PRODUCTS, UPDATE_FILTERS } from '../actions'

const filterReducer = (state, action) => {
 switch(action.type){
  case GET_PRODUCTS :
   let tempCategory = action.payload.map(product => product.category)
   tempCategory = new Set(tempCategory)

   let tempBrand = action.payload.map((product) => product.brand)
   tempBrand = new Set(tempBrand)
   
   return {...state, all_products:action.payload, filtered_products:action.payload, filters:{...state.filters, category:['All',...tempCategory], brand:['All', ...tempBrand]}}
  default:
   return {...state}
 }
}

export default filterReducer

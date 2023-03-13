//import React from "react"
import { FILTER_PRODUCTS, UPDATE_FILTERS } from '../actions'

const filterReducer = (state, action) => {
  switch(action.type){
   case UPDATE_FILTERS:
    const {name, value} = action.payload
    return {...state, filters:{...state.filters, [name]:value }}
    default:
     return {...state}
  }
}

export default filterReducer
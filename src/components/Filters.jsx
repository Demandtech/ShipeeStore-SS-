import React from 'react'
import styled from 'styled-components'
import { useFiltersContext } from '../contexts/filtersContext'
//import Select from 'react-select'
//import {UPDATE_FILTERS} from '../actions'
import {formatPrice} from '../utils'

const Filters = () => {
  const {filters: {
    text,
    min_price,
    max_price,
    price
  },
  updateFilters
} = useFiltersContext()


  
//const options = [{label: 'iphone', value: 'ios'}]
  
  return (
    <Wrapper>
      <h2>Products</h2>
      <div className='filters-wrapper'>
        <div className='filter-control'>
          <label htmlFor=''>Category</label>
          <select name="category" id="">
              <option value="iphone">Iphone</option>
          </select>
        </div>
        <div className='filter-control'>
          <label htmlFor=''>Brand</label>
         
        </div>
        <div className='price filter-control'>
          <label htmlFor='price'>Price</label>
          <div className='input-control'>
            <input
              name='price'
              type='range'
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
            <div className='max-price'>
              <span>{formatPrice(price)}</span>
            </div>
          </div>
        </div>
        <div className='search filter-control'>
          <label htmlFor='name'>Product</label>
          <div className='input-control'>
            <input
              type='text'
              name='text'
              placeholder='Search products...'
              className='text-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: fixex;
  width: 250px;
  
`

export default Filters

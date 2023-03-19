import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFiltersContext } from '../contexts/filtersContext'
import Select from 'react-select'
import {UPDATE_FILTERS} from '../actions'

const Filters = () => {
  const {
    updateFilters,
    filters: { brand, category, text, min_price, max_price, price },
    dispatch
  } = useFiltersContext()
  const [selectedOption, setSelectedOption] = useState(category)
  const [selectedBrandOption, setSelectedBrandOption] = useState(brand)
  const handleCategorySelect = (data) => {
    setSelectedOption(data)
    dispatch({type:UPDATE_FILTERS, payload:{ name:data.value, value:data.label }})
  }

  const handleBrandSelect = (data) => {
    setSelectedBrandOption(data)
    dispatch({
      type: UPDATE_FILTERS,
      payload: { name: data.value, value: data.label },
    })
  }

  const options = [
    { value: 'category', label: 'smartPhone'},
    { value: 'category', label: 'Electronics' },
    { value: 'category', label: 'Perfume' },
  ]

  const brandOptions = [
    { value: 'brand', label: 'smartPhone' },
    { value: 'brand', label: 'Electronics' },
    { value: 'brand', label: 'Perfume' },
  ]

  return (
    <Wrapper>
      <h2>Products</h2>
      <div className='filters-wrapper'>
        <div className='filter-control'>
          <label htmlFor=''>Category</label>
          <Select
            name='category'
            onChange={handleCategorySelect}
            value={selectedOption}
            options={options}
          />
        </div>
        <div className='filter-control'>
          <label htmlFor=''>Brand</label>
          <Select
            name='category'
            onChange={handleBrandSelect}
            value={selectedBrandOption}
            options={brandOptions}
          />
        </div>
        <div className='price filter-control'>
          <label htmlFor='price'>Price</label>
          <div className='input-control'>
            <div className='min-price'>
              <span>{min_price}</span>
            </div>
            <input
              name='price'
              type='range'
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
            <div className='max-price'>
              <span>{max_price}</span>
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
              className='input'
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
  padding: 4rem 4rem 0 4rem;

  h2 {
    color: var(--navyBlue);
    padding: 1.5rem 0;
    font-weight: 600;
    font-size: 2.5rem;
  }

  .filters-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .filter-control {
      width: 100%;
      label {
        display: block;
        color: var(--navyBlue);
        padding-bottom: 0.5rem;
      }

      .input-control {
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 40px;
        width: 100%;

        input {
          height: 100%;
          width: 100%;
          border: 1px solid lightgray;
          border-radius: 0.2rem;
          padding: 0 1rem;
          font-size: 1rem;
          transition: var(--transition);

          &:focus {
            outline: none;
            transform: translateY(-2px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 835px) {
    padding: 1rem;
    .filters-wrapper {
      flex-direction: column;
    }
  }
`

export default Filters

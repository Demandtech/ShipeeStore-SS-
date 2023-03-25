import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFiltersContext } from '../contexts/filtersContext'
import Select from '../components/Select'
import { formatPrice } from '../utils'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const Filters = () => {
  const [catValue, setCatValue] = useState('Category')
  const [braValue, setBraValue] = useState('Brand')
  const {
    grid_view,
    brand,
    category,
    handleSelect,
    handleSearch,
    handleFilter,
    sort,
    updateSort,
    filters: { search_query },
  } = useFiltersContext()

  useEffect(() => {
    handleSelect(catValue, braValue)
  }, [catValue, braValue])

  return (
    <Wrapper>
      <div className='left-wrapper'>
        <div className='view-btns'>
          <button className={`btn ${grid_view ? 'active-view' : ''}`}>
            <BsFillGridFill />
          </button>
          <button className={`btn ${!grid_view ? 'active-view' : ''}`}>
            <BsList />
          </button>
        </div>
        <div className='sort'>
          <select value={sort} onChange={updateSort} name='sort' id='sort'>
            <option value='price-lowest'>price(lowest)</option>
            <option value='price-highest'>Price(hightes)</option>
            <option value='name-1'>A - Z</option>
            <option value='name-z'>Z - A</option>
          </select>
        </div>
      </div>
      <form className='search'>
        <input
          value={search_query}
          onChange={handleSearch}
          type='text'
          placeholder='Search products...'
        />
      </form>
      <div className='select-control category'>
        <Select value={catValue} setValue={setCatValue} options={category} />
      </div>
      <div className='select-control brand'>
        <Select value={braValue} setValue={setBraValue} options={brand} />
      </div>
      <button onClick={handleFilter} className='submit-btn'>
        Search
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  gap: 1rem;
  border-bottom: 1px solid lightgray;

  .left-wrapper {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    select{
      height: 40px;
      bordeR: 1.5px solid lightgray;
      border-radius: <div className="2"></div>rem;
    }
    .view-btns {
      display: flex;
      gap: 0.5rem;

      .btn {
        padding: 0;
        display: grid;
        place-items: center;
      }

      .active-view {
        color: var(--navyBlue);
      }
    }
  }

  .search {
    width: 100%;
    display: flex;
    input {
      width: 100%;
      height: 40px;
      border: 1.5px solid lightgray;
      border-radius: 0.2rem;
      padding: 0 0.5rem;
    }
  }

  .select-control {
    border: 1.5px solid lightgray;
    border-radius: 0.2rem;
  }

  .submit-btn {
    all: unset;
    border: 1.5px solid var(--navyBlue);
    width: 100%;
    text-align: center;
    padding: 0.4rem 0;
    color: var(--navyBlue);
    border-radius: 0.4rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background: var(--navyBlue);
      color: var(--white);
      transition: var(--transition);
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 2rem 1rem;

    .select-control {
      width: 100%;
    }
  }
`

export default Filters

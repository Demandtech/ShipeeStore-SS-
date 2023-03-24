import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFiltersContext } from '../contexts/filtersContext'
import Select from '../components/Select'
import { formatPrice } from '../utils'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const Filters = () => {
  const [catValue, setCatValue] = useState("Category")
  const [braValue, setBraValue] = useState("Brand")
  const { brand, category,handleSelect, handleSearch, filters:{brand_query, search_query, category_query} } = useFiltersContext()
  
 
 useEffect(()=> {
  handleSelect(catValue, braValue)
 }, [catValue, braValue])
  
  return (
    <Wrapper>
      <div className='view-btns'>
        <button className='btn'>
          <BsFillGridFill />
        </button>
        <button className='btn'>
          <BsList />
        </button>
      </div>
      <form className='search'>
        <input value={search_query} onChange={handleSearch} type='text' placeholder='Search products...' />
      </form>
      <div className='select-control category'>
        <Select value={catValue} setValue={setCatValue} options={category} />
      </div>
      <div className='select-control brand'>
        <Select value={braValue} setValue={setBraValue}  options={brand} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 1rem 3rem 1rem 3rem;
  gap: 1rem;

  .view-btns {
    display: flex;
    gap: 0.5rem;

    .btn {
      padding: 0;
      display: grid;
      place-items: center;
    }
  }

  .search {
    width: 100%;
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

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 1rem;

    .select-control {
      width: 100%;
    }
  }
`

export default Filters

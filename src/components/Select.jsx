import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useFiltersContext } from '../contexts/filtersContext'

const Select = ({ placeholder, values, name }) => {
  const [openList, setOpenList] = useState(false)
  const [value, setValue] = useState(values)
  const {updateFilters} = useFiltersContext()
  const options = [
    { value: 'phone', label: 'phone' },
    { value: 'laptop', label: 'laptop' },
    { value: 'perfume', label: 'perfume' },
  ]

  return (
    <Wrapper>
      <div className='select-control'>
        <input
          onClick={() => {
            setOpenList(!openList)
          }}
          name={name}
          value={value}
          type='text'
          placeholder={placeholder}
          onChange={updateFilters}
        />
        {openList && (
          <ul className='select-list'>
            {options.map((option, index) => {
              return (
                <li key={index} onClick={(e) => setValue(e.target.textContent)}>
                  {option.value}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .select-control {
    width: 100%;
    height: 40px;
    position: relative;

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

    .select-list {
      list-style-type: none;
      position: absolute;
      border: 1px solid lightgray;
      border-radius: 0.2rem;
      left: 0;
      width: 100%;
      z-index: 1;
      li {
        background: var(--white);
        padding: 0.5rem 1rem;
      }
    }
  }
`

export default Select

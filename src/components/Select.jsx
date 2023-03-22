import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BsChevronDown } from 'react-icons/bs'

const Select = ({ type, options }) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [value, setValue] = useState(type)

  return (
    <Wrapper>
      <div className='select'>
        <button onClick={() => setOpenSelect(!openSelect)}>
          <span>{value}</span>
          <BsChevronDown />
        </button>
        <ul className={`${openSelect ? 'open' : 'close'}`}>
          {options.map((option, index) => (
            <li className={`${option === value ? 'active' : ''}`} onClick={()=> setValue(option)} key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .select {
    width: 200px;
    min-height: 40px;
    position: relative;
    padding: 0 0.4rem;

    button {
      all: unset;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .close {
    height: 0;
    overflow: hidden;
  }

  .open {
    height: 10rem;
    position: absolute;
    list-style-type: none;
    background: white;
    z-index: 100;
    border: 1.5px solid lightgray;
    overflow: auto;
    left: 0;
    right: 0;
    transition: var(--transition);

    li {
      background: white;
      padding: 0.5rem 0.4rem;
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        background: aliceblue;
      }
    }

    .active {
      background: var(--hoverBlue);
    }
  }
`

export default Select

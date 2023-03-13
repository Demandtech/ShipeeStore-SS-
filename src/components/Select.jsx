import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Select = ({ name, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedindex, setHighlightedindex] = useState(0)
  const containerRef = useRef(null)

  const clearOption = () => {
    onChange(undefined)
  }
  const selectOption = (option) => {
    if (option !== value) {
      onChange(option)
    }
  }
  const isOptionSelected = (option) => {
    return option === value
  }

  useEffect(() => {
    isOpen && setHighlightedindex(0)
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => {
      if (e.target !== containerRef.current) return
      switch (e.code) {
        case 'Enter':
        case 'Sapce':
          setIsOpen((prev) => !prev)
          if (isOpen) selectOption(options[highlightedindex])
          break
        case 'ArrowUp':
        case 'ArrowDown':
          if (!isOpen) {
            setIsOpen(true)
            break
          }
          const newValue = highlightedindex + (e.code === 'ArrowDown' ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedindex(newValue)
          }
          break
        case 'Escape':
          setIsOpen(false)
        default:
         break
      }
    }
    containerRef.current?.addEventListener('keydown', handler)

    return () => {
      containerRef.current?.removeEventListener('keydown', handler)
    }
  }, [isOpen, highlightedindex])

  return (
    <Wrapper>
      <label htmlFor=''>{name}</label>
      <div
        className='container'
        ref={containerRef}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        onBlur={() => setIsOpen(false)}
      >
        <span className='value'>{value}</span>
        <button
          className='clear-btn'
          onClick={(e) => {
            clearOption()
            e.stopPropagation()
          }}
        >
          &times;
        </button>

        <div className='divider'></div>
        <div className='caret'></div>
        <ul className={`options ${isOpen ? 'show' : ''}`}>
          {options.map((option, index) => {
            return (
              <li
                onClick={(e) => {
                  e.stopPropagation()
                  selectOption(option)
                  setIsOpen(false)
                }}
                onMouseEnter={() => setHighlightedindex(index)}
                key={index}
                className={`option ${
                  isOptionSelected(option) ? 'selected' : ''
                } ${index === highlightedindex ? 'highlighted' : ''}`}
              >
                {option}
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    position: relative;
    width: 100%;
    min-height: 40px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    gap: 0.5em;
    border-radius: 0.25em;
    outline: none;
    padding: 0.25em 0.5rem;

    &:focus {
      border-color: hsl(200, 100%, 50%);
    }

    .value {
      flex-grow: 1;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;     
    }

    .clear-btn{
     background: none;
      border: none;
     outline: none;
     font-size: 1.25em;
      color: #777;
    cursor: pointer;
    padding: 0;
    }

    .divider {
      background-color: #777;
      align-self: stretch;
      width: 0.05em;
    }

    .caret {
      translate: 0 25%;
      border: 0.25em solid transparent;
      border-top-color: #777;
    }

    .options {
      position: absolute;
      margin: 0;
      padding: 0;
      list-style-type: none;
      max-height: 15em;
      overflow-y: auto;
      max-height: 15em;
      overflow-y: auto;
      border: 0.05em solid #777;
      width: 100%;
      left: 0;
      display: none;
      top: calc(100% + 0.25rem);
      background-color: white;
      z-index: 100;

      .option {
        padding: 0.25em 0.5rem;
        cursor: pointer;

        &.selected {
          background-color: hsl(200, 100%, 70%);
        }
        &.highlighted {
          background-color: hsl(200, 100%, 50%);
          color: white;
        }
      }
    }
    .show {
        display: block;
      }
    }
  }
`

export default Select

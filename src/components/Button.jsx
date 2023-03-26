import React from 'react'
import styled, { css } from 'styled-components'

const Button = (props) => {
  return (
    <Wrapper type={props.type} onClick={() => props.onClick(props.argument)}>
      {props.label}
    </Wrapper>
  )
}

Button.defaultProps = {
  argument: null,
}

const Wrapper = styled.button`
  all: unset;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
  display: grid;
  place-items: center;
  

  ${(props) =>
    props.type === 'primary' &&
    css`
      background: var(--primary);
      color: var(--white);
      border: 2px solid var(--primary);

      &:hover {
        background: transparent;
        color: var(--primary);
        border: 2px solid var(--primary);
      }

      &:active {
        transform: translateY(5px);
      }
    `}

  ${(props) =>
    props.type === 'secondary' &&
    css`
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);

      &:hover {
        background: var(--primary);
        color: var(--white);
        border: 2px solid var(--primary);
      }

      &:active {
        transform: translateY(5px);
      }
    `}
`

export default Button

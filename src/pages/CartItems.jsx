import React from 'react'
import { useUserContext } from '../contexts/userContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CartItems = () => {
  return (
    <Wrapper>
      <Link className='home-link' to='/'>
        Continue Shopping
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 3rem;
  .home-link {
    text-decoration: none;
    border: 2px solid var(--navyBlue);
    padding: 0.4rem 2rem;
    color: var(--navyBlue);
  }
`

export default CartItems

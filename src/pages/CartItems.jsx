import React from 'react'
//import { useUserContext } from '../contexts/userContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../components'

const CartItems = () => {
  return (
    <Wrapper>
      <Link className='home-link' to='/'>
         <Button label='Continue Shopping' type='secondary'/>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  a{
    text-decoration: none;

    button{
      padding: .5rem 1.5rem;
    }
  }
  padding: 3rem;
  
`

export default CartItems

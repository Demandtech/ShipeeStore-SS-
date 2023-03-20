import React from 'react'
import { useCartsContext } from '../contexts/cartsContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartItem } from '../components'

const Cart = () => {
  const { cart } = useCartsContext()

  console.log(cart)

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className='empty'>
          <p>Cart is empty</p>
        </div>
        <Link to={'/'} className='btn'>
          Fill Basket
        </Link>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h6>Cart</h6> 
        <div className="cart_list">

        {cart.map((ca, index) => {
          return (
            <article key={index} >
              <CartItem {...ca} />
            </article>
          )
        })}
        </div>
        <Link to={'/cart'}>Checkout</Link>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  position: absolute;
  background: var(--white);
  color: var(--navyBlue);
  right: 2rem;
  top: 70px;
  padding: 1rem;
  z-index: 1;
  box-shadow: 1px 1px 5px gray;
  width: 350px;
  max-height: 350px;
  overflow-y: auto;

  h6 {
    border-bottom: 1px solid lightgray;
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }

  a {
    color: var(--white);
    background: var(--navyBlue);
    padding: 0.5rem 1rem;
    display: block;
    text-align: center;
  }
  .empty {
    text-align: center;
    p {
      margin-bottom: 1rem;
    }
  }

  .cart_list {
    padding: 1rem 0;
  }

  @media screen and (max-width: 835px) {
    right: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    right: 0;
  }
`
export default Cart

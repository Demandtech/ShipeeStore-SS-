import React from 'react'
//import { useUserContext } from '../contexts/userContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../components'
import { useCartsContext } from '../contexts/cartsContext'
import { formatPrice } from '../utils'

const CartItems = () => {
  const { cart } = useCartsContext()
  //const { singleProduct } = useProductsContext()
  console.log(cart)
  let totalincart = 0;
  let totalPrice = 0
  return (
    <Wrapper>
      <Link className='home-link' to='/'>
        <Button label='Continue Shopping' type='secondary' />
      </Link>
      <div className='cart-items-wrapper'>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sub Total</th>
            </tr>
            {cart.map((ca) => {
              let subTotal = ca.quantity * ca.discountPrice
              totalincart += ca.quantity
              totalPrice += subTotal
              return (
                <tr>
                  <td>
                    <img
                      width={80}
                      height={80}
                      src={ca.thumbnail}
                      alt={ca.title}
                    />
                  </td>
                  <td>{ca.title}</td>
                  <td className='quantity'>{ca.quantity}</td>
                  <td>{formatPrice(ca.discountPrice)}</td>
                  <td>{formatPrice(subTotal)}</td>
                </tr>
              )
            })}
          </thead>
        </table>
        <div>
          <p>
            <strong>Total Price</strong> : {formatPrice(totalPrice)}
          </p>
          <p>
            <strong>Total Quantity</strong> : {totalincart} Items
          </p>
          <p>
            <strong>Shipping</strong> : {formatPrice(totalPrice * 0.01 )}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  a {
    text-decoration: none;

    button {
      padding: 0.5rem 1.5rem;
    }
  }
  padding: 3rem;

  .cart-items-wrapper {
    padding-top: 4rem;
    max-width: 60%;
    table {
      tr {
        
      }
      th {
        text-align: left;
        padding: 0 1rem;
      }
      td {
        padding: 0 1rem;
      }
      .quantity {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .cart-items-wrapper {
      max-width: 100%;
    }
  }
`

export default CartItems

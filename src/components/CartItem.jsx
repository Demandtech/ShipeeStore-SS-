import React from 'react'
import styled from 'styled-components'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { formatPrice } from '../utils'
import { useCartsContext } from '../contexts/cartsContext'
import Button from './Button'

const CartItem = ({ id, thumbnail, discountPrice, title, quantity }) => {
  // let tempTitle = title.split(' ').slice(0, 2).join(' ')
  const { deleteCartItem } = useCartsContext()

  return (
    <Wrapper>
      <div className='cart_item_wrapper'>
        <div className='img-wrapper'>
          <img src={thumbnail} alt={title} />
        </div>
        <div>
          <p className='title'>{title}</p>
          <div className='price_wrapper'>
            <span className='price'>{formatPrice(discountPrice)}</span>
            <span>x</span>
            <span className='order'>{quantity}</span>
            <span className='total'>
              {formatPrice(discountPrice * quantity)}
            </span>
          </div>
        </div>
       
        <div className='btn'>
          <Button
            onClick={deleteCartItem}
            argument={id}
            label={<RiDeleteBin6Line />}
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .cart_item_wrapper {
    padding: 0.5rem 0;
    display: flex;

    .img-wrapper {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
      }
    }

    .title {
      color: lightgray;
    }

    .price_wrapper {
      color: lightgray;
      display: flex;
      gap: 0.3rem;

      .total {
        color: #000000;
        font-weight: 600;
      }
    }

    .btn {
      margin-left: auto;
      transition:var(--transition);

      &:hover{
        opacity:0.5;
      }
    }
  }
`

export default CartItem

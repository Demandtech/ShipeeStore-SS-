import React from 'react'
import styled from 'styled-components'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { formatPrice } from '../utils'
import { useCartsContext } from '../contexts/cartsContext'

const CartItem = ({id,thumbnail, discountPrice, title }) => {
  // let tempTitle = title.split(' ').slice(0, 2).join(' ')
  const { deleteCartItem } = useCartsContext()
  let quantity = 1
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
            <span className='total'>{formatPrice(discountPrice * quantity)}</span>
          </div>
        </div>
        <button className='btn' onClick={()=> deleteCartItem(id)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  
  .cart_item_wrapper {
    padding: .5rem 0;
    display: flex;
    
    .img-wrapper {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: .4rem;
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
      color: lightgray;
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
      margin-left: auto;

      &:hover {
        color: var(--navyBlue);
        transition: var(--transition);
      }
    }
  }
`

export default CartItem

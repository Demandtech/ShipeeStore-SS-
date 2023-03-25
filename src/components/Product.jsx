import React from 'react'
import styled from 'styled-components'
import Stars from './Stars'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils'
import { useCartsContext } from '../contexts/cartsContext'

const Product = ({ title, price, rating, thumbnail, discountPercentage, id }) => {
  let tempTitle = title.split(' ').slice(0, 2).join(' ')
  const {addToCart} = useCartsContext()
  
  return (
    <Wrapper>
      <img src={thumbnail} alt={title} />
      <div className='name'>
        <Link to={`/products/${id}`} >
          {tempTitle}
        </Link>
        <div>
          <Stars rating={rating} />
        </div>
      </div>
      <span>Price: {formatPrice(price)}</span>
      <div className='btns'>
        <Link className='buy-btn' to={'/cart'}>
          Buy Now
        </Link>
        <button onClick={()=> addToCart(id)} className='add-btn'>Add to Cart</button>
      </div>
      <span className='discount'>Discount {discountPercentage}%</span>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;
  background: aliceblue;
  padding: 0.5rem;
  border-radius: 0.2rem;
  position: relative;

  .discount {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: var(--white);
    background: var(--notification);

    padding: 0 0.5rem;
    box-shadow: 2px 2px 4px #dcdcdc;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem 0;
  }
  .name {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;

    a {
      text-decoration: none;
      color: var(--navyBlue);
      transition: var(--transition);
      font-weight: 600;

      &:hover {
        color: var(--hoverBlue);
      }
    }
  }

  .btns {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    .add-btn {
      all: unset;
      background: var(--navyBlue);
      color: var(--white);
      padding: 0.2rem 0.5rem;
      border-radius: 0.3rem;
      cursor: pointer;
      transition: var(--transition);
      border: 2px solid var(--navyBlue);

      &:hover {
        background: transparent;
        color: var(--navyBlue);
        border: 2px solid var(--navyBlue);
      }

      &:active {
        transform: translateY(5px);
        // background: red;
      }
    }

    .buy-btn {
      text-decoration: none;
      border: 2px solid var(--navyBlue);
      padding: 0.2rem 0.5rem;
      border-radius: 0.3rem;
      color: var(--navyBlue);
      transition: var(--transition);

      &:hover {
        color: var(--white);
        background: var(--navyBlue);
        border: 2px solid var(--navyBlue);
      }

      &:active {
        transform: translateY(5px);
        // background: red;
      }
    }
  }
`

export default Product

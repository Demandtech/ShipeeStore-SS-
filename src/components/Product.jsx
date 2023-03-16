import React from 'react'
import styled from 'styled-components'
import Stars from './Stars'
import { Link } from 'react-router-dom'

const Product = ({ title, price, rating, thumbnail, discountPercentage }) => {
  let tempTitle = title.split(' ').slice(0, 2).join(' ')
  return (
    <Wrapper>
      <Link to={'singleproduct'} className='product'>
        <img src={thumbnail} alt={title} />
        <div className='name'>
          <p>{tempTitle}</p>
          <div>
            <Stars rating={rating} />
          </div>
        </div>
        <span>Price: ${price}</span>
        <div className='btns'>
          <Link className='buy-btn' to={'/cart'}>
            Buy Now
          </Link>
          <button className='add-btn'>Add to Cart</button>
        </div>
        <span className='discount'>Discount {discountPercentage}%</span>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;
  background: aliceblue;
  padding: 0.5rem;
  border-radius: 0.2rem;
  position: relative;

  .product {
    text-decoration: none;
    height: 100%;

    .discount {
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: var(--white);
      background: red;
      border-radius: 1rem;
      padding: 0 0.5rem;
      box-shadow: 2px 2px 5px lightgrey;
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
    }

    .btns {
      display: flex;
      justify-content: space-between;

      .add-btn {
        all: unset;
      }

      .buy-btn {
        text-decoration: none;
      }
    }
  }
`

export default Product

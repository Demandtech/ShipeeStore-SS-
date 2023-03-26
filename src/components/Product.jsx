import React from 'react'
import styled from 'styled-components'
import Stars from './Stars'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils'
import { useCartsContext } from '../contexts/cartsContext'
import Button from './Button'

const Product = ({ title, price, rating, thumbnail, discountPercentage, id }) => {
  let tempTitle = title.split(' ').slice(0, 2).join(' ')
  const {addToCart} = useCartsContext()
  
  return (
    <Wrapper>
      <img src={thumbnail} alt={title} />
      <div className='name'>
        <Link to={`/products/${id}`}>{tempTitle}</Link>
        <div>
          <Stars rating={rating} />
        </div>
      </div>
      <span>Price: {formatPrice(price)}</span>
      <div className='btns'>
        <Link  to={'/cart'}>
           <Button label='Buy Now' type='secondary'/>
        </Link>
        <Button type='primary' label={'Add to Cart'} onClick={ addToCart} argument={id}/>
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

    a{
      text-decoration: none;
    }
  }
`

export default Product

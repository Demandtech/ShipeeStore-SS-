import React from 'react'
import Button from './Button'
import { useProductsContext } from '../contexts/productsContext'
import { FaPlus, FaMinus } from 'react-icons/fa'
import styled from 'styled-components'

const QuantityControl = () => {
  const { singleProduct, handlequantity } = useProductsContext()
  const { quantity } = singleProduct
  return (
    <Wrapper className='stocks-btns'>
      <Button
        onClick={handlequantity}
        argument='DEC'
        label={<FaMinus className='icon' />}
      />
      <span>{quantity}</span>
      <Button
        onClick={handlequantity}
        argument='INC'
        label={<FaPlus className='icon' />}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: aliceblue;
  padding: 0 1rem;
  border-radius: 0.4rem;

  .btn {
    padding: 0;
    display: grid;
    place-items: center;

    .icon {
      color: var(--navyBlue);
    }

    &:hover {
      .icon {
        color: var(--hoverBlue);
      }
    }
  }
`

export default QuantityControl

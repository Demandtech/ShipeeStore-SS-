import React from 'react'
import { useCartsContext } from '../contexts/cartsContext'
import styled from 'styled-components'

const CartNotification = () => {
  const { cart_notification } = useCartsContext()
  return (
    <Wrapper>
      <div className={`card ${cart_notification.show ? 'slide-in' : ''}`}>
        {cart_notification.msg}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: var(--notification);
    color: #fff;
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: translateY(-100%);
    z-index: 10000;
  }

  .slide-in {
    opacity: 1;
    transform: translateY(0);
  }
`

export default CartNotification

import React from 'react'
import { useGlobalContext } from "../context";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cart = () => {
 const {cart} = useGlobalContext()

 if(cart.length < 1){
  return (
    <Wrapper>
       <p>No Item in Cart yet</p>
       <Link to={'/'} className="btn">Continue shopping</Link>
    </Wrapper>
  )
 }
  return (
    <Wrapper>Cart</Wrapper>
  )
}
const Wrapper = styled.article`
a{
 color: var(--white);
 background: var(--navyBlue);
 padding: .5rem 1rem;
 display: block;
}
 position: absolute;
 background: var(--white);
 color: var(--navyBlue);
 right: 0;
 top: 67px;
 padding: 1rem;
 z-index: 1;
 text-align:center;
 box-shadow: 1px 1px 5px gray;
 width: 350px;

 p{
  margin-bottom: 2rem;
 }

 @media screen and (max-width: 480px){
  width: 100%;
 }
`
export default Cart
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa'
import { Cart } from '../components'
import { useCartsContext } from '../contexts/cartsContext'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const { cart } = useCartsContext()
  console.log(cart.length)
  return (
    <Wrapper>
      <div className='nav-container'>
        <div className='logo-wrapper'>
          <Link to={'/'} className='logo'>
            <span>Shipee</span>
            <span>Store</span>
          </Link>
        </div>
        <ul className={openNav ? 'open' : ''}>
          <li>
            <NavLink
              onClick={() => setOpenNav(false)}
              className='nav-item'
              to={'/'}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenNav(false)}
              className='nav-item'
              to={'/contact'}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenNav(false)}
              className='nav-item'
              to={'/about'}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenNav(false)}
              className='nav-item'
              to={'/cart'}
            >
              Cart Items
            </NavLink>
          </li>
          <div className='mobile-login'>
            <Link onClick={() => setOpenNav(false)} to={'/login'}>
              Sign In
            </Link>
            <Link onClick={() => setOpenNav(false)} to={'/signup'}>
              Sign Up
            </Link>
          </div>
        </ul>
        <div className='nav-control'>
          <div className='login'>
            <Link to={'/login'}>Sign In</Link>
            <Link to={'/signup'}>Sign Up</Link>
          </div>
          <button className='cart-btn' onClick={() => setOpenCart(!openCart)}>
            <FaShoppingBag className='icon' />
            <span>{cart.length}</span>
          </button>
          <button className='hamburger' onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <FaTimes className='icon' />
            ) : (
              <FaBars className='icon' />
            )}
          </button>
        </div>
        {openCart && <Cart />}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background: var(--navyBlue);
  color: var(--white);
  padding: 1rem 4rem;
  position: relative;
  height: 67px;
  z-index: 100;

  a {
    color: var(--white);
    text-decoration: none;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-wrapper {
      .logo {
        font-size: 1.5rem;
        font-weight: 600;
        border: 4px solid var(--white);
        background: var(--white);
        span {
          &:nth-child(1) {
            border-radius: 0.5rem;
            background: var(--navyBlue);
            padding: 0 0.3rem;
          }
          &:nth-child(2) {
            color: var(--navyBlue);
            padding: 0 0.3rem;
          }
        }
      }
    }
    ul {
      display: flex;
      gap: 2rem;
      list-style-type: none;

      .nav-item {
        margin-bottom: 1rem;
        transition: width 0.5s linear;
        font-size: 1rem;
        font-family: roboto;
        &::after {
          content: '';
          display: block;
          height: 3px;
          width: 0;
          background: var(--white);
          transition: var(--transition);
          border-radius: 3px;
          margin: 0 auto;
        }
      }
      .mobile-login {
        display: none;
      }
      .active {
        &::after {
          transition: var(--transition);
          width: 50%;
        }
      }
    }
    .nav-control {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      a {
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
        padding: 0.5rem;
      }
      .cart-btn {
        all: unset;
        position: relative;
        .icon {
          font-size: 1.7rem;
        }
        span {
          position: absolute;
          top: -0.75rem;
          right: -0.75rem;
          background: red;
          width: 1.5rem;
          height: 1.5rem;
          font-size: 0.8rempx;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .hamburger {
        all: unset;
        display: none;
      }
    }
  }

  @media screen and (max-width: 835px) {
    padding: 1rem;
    width: 100%;

    .nav-container {
      .logo-wrapper {
        .logo {
          font-size: 1rem;
        }
      }
      ul {
        position: absolute;
        flex-direction: column;
        top: 67px;
        background: var(--navyBlue);
        right: 0;
        width: 15rem;
        align-items: center;
        height: 100vh;
        border-top: 2px solid var(--white);
        padding-top: 2rem;
        z-index: 100;
        overflow-x: hidden;
        transition: var(--transition);
        transform: translateX(100%);

        .mobile-login {
          display: flex;
          gap: 1rem;

          a {
            border: 0.15rem solid var(--white);
            padding: 0.3rem;
            border-radius: 0.3rem;
          }
        }
      }

      .open {
        transform: translateX(0);
      }

      .nav-control {
        .login {
          display: none;
        }

        .hamburger {
          display: block;
          cursor: pointer;

          .icon {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`

export default Navbar

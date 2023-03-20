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
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 2rem;

  a {
    color: var(--white);
    text-decoration: none;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;

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
      overflow-x: hidden;

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
          -moz-transition: var(--transition);
          -webkit-transition: var(--transition);
          -o-transition: var(--transition);
          -ms-transition: var(--transition);
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
          -moz-transition: var(--transition);
          -webkit-transition: var(--transition);
          -o-transition: var(--transition);
          -ms-transition: var(--transition);
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
        cursor: pointer;

        .icon {
          font-size: 1.7rem;
        }
        span {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(10px, -10px);
          background: red;
          width: 1.5rem;
          height: 1.5rem;
          font-size: 0.8rempx;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }
      }
      .hamburger {
        all: unset;
        display: none;
      }
    }
  }

  @media screen and (max-width: 835px) {
    padding: 0 1rem;
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
        width: 0;
        opacity: 0;
        align-items: center;
        height: 100vh;
        border-top: 2px solid var(--white);
        padding-top: 2rem;
        z-index: 100;
        transition: var(--transition);
        -moz-transition: var(--transition);
        -webkit-transition: var(--transition);
        -o-transition: var(--transition);
        -ms-transition: var(--transition);

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
        transition: var(--transition);
        -moz-transition: var(--transition);
        -webkit-transition: var(--transition);
        -o-transition: var(--transition);
        -ms-transition: var(--transition);
        opacity: 1;
        width: 15rem;
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

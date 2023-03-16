import React from 'react';
import styled from 'styled-components';
import {FaEnvelope, FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom';
//import {useHistory} from 'react-router-dom'

const Login = () => {
  return (
    <Wrapper>
      <section>
        <h2>Sign In</h2>
        <form action=''>      
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <div className='input-control'>
              <FaEnvelope className='icon' />
              <input
                placeholder='Enter email address'
                type='text'
                id='email'
                name='email'
              />
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <div className='input-control'>
              <FaEye className='icon' />
              <input
                placeholder='Enter password'
                type='password'
                id='password'
                name='password'
              />
            </div>
          </div>
          <div className='form-control'>
            <button className='btn' type='submit'>
              Sign In
            </button>
          </div>
        </form>
        <span>Not Register ? <Link to={'/signup'}>Sign up</Link>
        </span>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background:var(--blueWhiteGradient);

  section {
    background: var(--white);
    padding: 2rem;
    width: 46rem;

    h2 {
      text-align: center;
      color: var(--navyBlue);
      padding-bottom: 2rem;
    }

    form {
      margin-bottom: 2rem;
      .form-control {
        margin-bottom: 1rem;
        label {
          display: inline-block;
          color: var(--navyBlue);
          padding-bottom: .1rem;
        }

        .input-control{
          position:relative;
           input {
             width: 100%;
             border: none;
             background-color: aliceblue;
             padding: .5rem 2rem;
             border-radius: .3rem
             transition: .3s;

             &:focus{
              outline: none;
              transform: translateY(-1px)
             }
           }
           .icon{
            color: var(--navyBlue);
            position: absolute;
            top:50%;
            left: .5rem;
            transform: translateY(-50%);
           }
        }

        
      }
      .btn {
        background: var(--navyBlue);
        color: var(--white);
        font-weight: 500;
        margin-top: 2rem;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 835px){
    padding: 2rem;
    section{
      width: 100%;
    }
  }
`

export default Login
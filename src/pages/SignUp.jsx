import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaEye, FaEnvelope, FaPhone } from 'react-icons/fa'
import axios from 'axios'

const SignUp = () => {
  let history = useNavigate()
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    number: '',
    password: '',
  })
  console.log(data)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // const submitForm = (e) => {
  //   e.preventDefault()

  //   const url = 'http://localhost/enquiry.php'
  //   let fData = new FormData()

  //   fData.append('email', data.email)
  //   fData.append('firstName', data.first_name)
  //   fData.append('lastName', data.last_name)
  //   fData.append('number', data.number)
  //   fData.append('password', data.password)

  //   axios
  //     .post(url, fData)
  //     .then((response) => alert(response.data))
  //     .catch((error) => alert(error))
  //}
  return (
    <Wrapper>
      <section>
        <h2>Create Account</h2>
        <form >
          <div className='form-control'>
            <label htmlFor='first_name'>First Name</label>
            <div className='input-control'>
              <FaUser className='icon' />
              <input
                placeholder='Enter first name'
                type='text'
                id='first_name'
                name='first_name'
                onChange={handleChange}
                value={data.first_name}
              />
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='last_name'>Last Name</label>
            <div className='input-control'>
              <FaUser className='icon' />
              <input
                placeholder='Enter last name'
                type='text'
                id='last_name'
                name='last_name'
                onChange={handleChange}
                value={data.last_name}
              />
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <div className='input-control'>
              <FaEnvelope className='icon' />
              <input
                placeholder='Enter email address'
                type='text'
                id='email'
                name='email'
                onChange={handleChange}
                value={data.email}
              />
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='number'>Number</label>
            <div className='input-control'>
              <FaPhone className='icon' />
              <input
                placeholder='Enter phone number'
                type='text'
                id='number'
                name='number'
                onChange={handleChange}
                value={data.number}
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
                onChange={handleChange}
                value={data.password}
              />
            </div>
          </div>
          <div className='form-control'>
            <button className='btn' type='submit'>
              Sign Up
            </button>
          </div>
        </form>
        <span>
          Already a member?
          <Link to={'/login'}> sign in</Link>
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

export default SignUp

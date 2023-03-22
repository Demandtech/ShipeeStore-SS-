import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper>
      <div className='loader'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .loader {
    width: 50px;
    height: 50px;
    border: 4px solid aliceblue;
    border-top-color: var(--navyBlue);
    border-radius: 50%;
    animation: spinner 1s infinite;
  }

  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loading

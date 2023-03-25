import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import styled from 'styled-components'

const Stars = ({ rating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <Wrapper key={index}>
        {rating >= index + 1 ? (
          <FaStar className='icon' />
        ) : rating >= number ? (
          <FaStarHalfAlt className='icon' />
        ) : (
          <FaRegStar className='icon' />
        )}
      </Wrapper>
    )
  })
  return <div>{tempStars}</div>
}

const Wrapper = styled.span`
  .icon {
    color: #ffd700;
  }
`

export default Stars

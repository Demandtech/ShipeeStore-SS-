import React, { useEffect, useState } from 'react'
import { headerData } from '../data'
import styled from 'styled-components'

const ProductsHeader = () => {
  const [index, setIndex] = useState(0)
  const [slides, setSlides] = useState(headerData)
 
  let slider;

  const pauseSlide = ()=>{
    clearInterval(slider)
  }

  const startSlide = ()=> {

    slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > slides.length - 1) {
          index = 0
        }
        return index
      })
    }, 3000)
  }

  useEffect(() => {
    const lastIndex = slides.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, slides])

  useEffect(() => {
    startSlide()
    return () => clearInterval(slider)
    // eslint-disable-next-line
  }, [index])

  return (
    <Wrapper>
      {slides.map((slide, slideIndex) => {
        const { img, name, price } = slide
        return (
          <div
            className={`header-wrapper`}
            key={slideIndex}
            style={{ transform: `translate(${100 * (slideIndex - index)}%)` }}
            onMouseOver={pauseSlide}
            onMouseOut={startSlide}
          >
            <img src={img} alt={name} />
            <div className='overlay'>
              <div className='overlay-content'>
                <h2>{name}</h2>
                <p>${price}</p>
              </div>
            </div>
          </div>
        )
      })}
      <div className='pagination-wrapper'>
        {slides.map((_, i) => (
          <span key={i} className={`pag ${index === i ? 'active-pag' : ''}`}></span>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: relative;
  height: calc(50vh);

  .header-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: var(--transition);
    padding: 1rem;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      mix-blend-mode: color-burn;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      background: var(--transparentNavyBlue);
      width: 100%;
      height: 100%;
      padding: 1rem;
    }
  }
  .pagination-wrapper {
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    bottom: .5rem;
    gap: 5px;
    
    .pag {
      width: 15px;
      height: 15px;
      background: var(--white);
      display: block;
      border-radius: 50%;
      transform: scale(0.5);
      transition: var(--transition);
    }
    .active-pag {
      background: var(--navyBlue);
      transform: scale(1);
      transition: var(--transition);
    }
  }
`
export default ProductsHeader

import React from 'react'
import styled from 'styled-components'
import {ProductsHeader} from '../components'

const ProductsPage = () => {
  return (
    <Wrapper>
        <ProductsHeader />
    </Wrapper>
  )
}

const Wrapper = styled.section`
 background: var(--white);
 max-width: 1440px
 margin: 0 auto;
 overflow-x: hidden;
`

export default ProductsPage
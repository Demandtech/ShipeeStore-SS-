import React from 'react'
import styled from 'styled-components'
import { ProductsHeader, Filters, Product } from '../components'
import { useProductsContext } from '../contexts/productsContext'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { GET_MORE_PRODUCTS } from '../actions'


const ProductsPage = () => {
  const { products, isLoading, dispatch, limit, total, hasMore } =
    useProductsContext()
  console.log(products)
  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
  })

  const event = () => {
    if (limit === total) {
      // eslint-disable-next-line
      hasMore = false
    }
    if (
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
    ) {
      dispatch({ type: GET_MORE_PRODUCTS })
    }
  }
  return (
    <Wrapper>
      <ProductsHeader />
      <Filters />
      <h2>Products</h2>
      <div className='products-wrapper-grid'>
        {products.map((product, index) => (
          <Product key={product.id} {...product} />
        )).slice(0, limit)}
      </div>
      {isLoading ? <Loading /> : null}
    </Wrapper>
  )
}

const Wrapper = styled.section`
 background: var(--white);
 max-width: 1440px
 margin: 0 auto;
 overflow-x: hidden;
 
h2{
  padding-left: 3rem;
  color: var(--navyBlue);
  font-weight: 600;
  font-size: 2rem;
}
 .products-wrapper-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 3rem ;
 }

 @media screen and (max-width:835px){
  .products-wrapper{
    padding: 3rem 1rem;
  }
 }
`

export default ProductsPage

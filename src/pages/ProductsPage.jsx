import React from 'react'
import styled from 'styled-components'
import { ProductsHeader, Filters, Product } from '../components'
import { useProductsContext } from '../contexts/productsContext'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { GET_MORE_PRODUCTS } from '../actions'
import { useFiltersContext } from '../contexts/filtersContext'


const ProductsPage = () => {
  const {isLoading, dispatch, limit, total, hasMore } =
    useProductsContext()
  const { filtered_products, itemError } = useFiltersContext()
  console.log(filtered_products)
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
      {itemError.show && <p className='error-msg'>{itemError.msg}</p>}
      <div className='products-wrapper-grid'>
        {filtered_products
          .map((product, index) => <Product key={product.id} {...product} />)
          .slice(0, limit)}
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
 
 .products-wrapper-grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 2rem 3rem ;
 }

 .error-msg{
  text-align: center;
  padding-top: 2rem;
  color: red; 
 }

 @media screen and (max-width:835px){
  .products-wrapper-grid{
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 1rem;
  }
 }

 @media screen and (max-width:480px){
  .products-wrapper-grid{
    grid-template-columns: repeat(1, 1fr); 
  }
 }
`

export default ProductsPage

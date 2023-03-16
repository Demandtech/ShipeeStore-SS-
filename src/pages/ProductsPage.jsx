import React from 'react'
import styled from 'styled-components'
import { ProductsHeader, Filters, Product } from '../components'
import { useProductsContext } from '../contexts/productsContext'

const ProductsPage = () => {
  const {products} = useProductsContext()
  console.log(products)
  return (
    <Wrapper>
      <ProductsHeader />
      <Filters />
      <div className="products-wrapper">
      {products.map((product, index)=>(
        <Product key={product.id} {...product}/>
      ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 background: var(--white);
 max-width: 1440px
 margin: 0 auto;
 overflow-x: hidden;
 

 .products-wrapper{
  padding: 3rem ;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
 }

 @media screen and (max-width:835px){
  .products-wrapper{
    padding: 3rem 1rem;
  }
 }
`

export default ProductsPage

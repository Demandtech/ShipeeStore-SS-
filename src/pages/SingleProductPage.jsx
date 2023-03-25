import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useProductsContext } from '../contexts/productsContext'
import { useCartsContext } from '../contexts/cartsContext'
import styled from 'styled-components'
import { formatPrice } from '../utils'
import { FaCartPlus, FaPlus, FaMinus } from 'react-icons/fa'
import Loading from '../components/Loading'

const url = 'https://dummyjson.com/products'

const SingleProductPage = () => {
  const { id } = useParams()
  const { fetchSingleProduct, singleProduct, handlequantity, isLoading } =
    useProductsContext()
  const { singlePageAddToCart } = useCartsContext()
  const [imageIndex, setImageIndex] = useState(0)
  const {
    brand,
    description,
    discountPercentage,
    images,
    price,
    stock,
    title,
    quantity,
    discountPrice,
  } = singleProduct

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`)
    // eslint-disable-next-line
  }, [id])

  if (isLoading) {
    return <Loading />
  }
  return (
    <Wrapper>
      <div className='main-wrapper'>
        <div className='left-wrapper'>
          <div className='main-image'>
            {images && <img src={images[imageIndex]} alt={title} />}
          </div>
          <div className='images-wrapper'>
            {images?.map((img, index) => {
              return (
                <div
                  onClick={() => setImageIndex(index)}
                  key={index}
                  className={`image-pag ${
                    index === imageIndex ? 'active-pag' : ''
                  }`}
                >
                  <img src={img} alt={img} />
                </div>
              )
            })}
          </div>
        </div>
        <div className='right-wrapper'>
          <p className='brand'>{brand}</p>
          <h2 className='title'>{title}</h2>
          <p className='desc'>{description}</p>
          <p className='instock'>
            In stock: <span>{stock}</span>
          </p>
          <div className='prices'>
            <span className='discountprice'>{formatPrice(discountPrice)}</span>{' '}
            <span className='discount-percentage'>{discountPercentage}%</span>
            <p className='price'>{formatPrice(price)}</p>
          </div>
          <div className='controls'>
            <div className='stocks-btns'>
              <button className='btn' onClick={() => handlequantity('DEC')}>
                <FaMinus className='icon' />
              </button>
              <span>{quantity}</span>
              <button className='btn' onClick={() => handlequantity('INC')}>
                <FaPlus className='icon' />
              </button>
            </div>
            <div className='add-btn'>
              <button className='btn' onClick={() => singlePageAddToCart()}>
                <FaCartPlus className='icon' />
                Add to cart
              </button>
            </div>
          </div>
          <div className='btn-link'>
            <Link to={'/'}>Continu Shopping</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 70px);
  max-width: 1440px;
  padding: 0 4rem;

  .main-wrapper {
    display: flex;
    width: 100%;

    .left-wrapper {
      width: 50%;
      padding-right: 2rem;
      .main-image {
        width: 100%;
        height: 400px;
        margin-bottom: 2rem;
        transition: var(--transition);
        img {
          width: 100%;
          object-fit: cover;
          border-radius: 1rem;
          height: 100%;
        }
      }
      .images-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 0.5rem;
        transition: var(--transition);

        .image-pag {
          height: 5rem;
          width: 100%;
          border-radius: 0.5rem;
          transition: var(--transition);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.25rem;
            transition: var(--transition);
          }
        }

        .active-pag {
          border: 4px solid var(--navyBlue);
          opacity: 0.5;
          transition: var(--transition);
        }
      }
    }
    .right-wrapper {
      width: 50%;
      padding: 0 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .brand {
        color: var(--navyBlue);
        font-weight: 600;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 2rem;
      }

      .title {
        font-weight: 500;
        font-size: 2rem;
      }

      .desc {
        margin-bottom: 1rem;
      }

      .instock {
        font-weight: 600;

        span {
          font-weight: 400;
        }
      }
      .prices {
        margin: 1.5rem 0;

        .discountprice {
          padding-right: 0.5rem;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .discount-percentage {
          background: aliceblue;
          padding: 0.1rem 0.5rem;
          border-radius: 0.2rem;
        }
        .price {
          text-decoration: line-through;
          opacity: 0.5;
        }
      }

      .controls {
        display: flex;
        gap: 1rem;

        .stocks-btns {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          background: aliceblue;
          padding: 0 1rem;
          border-radius: 0.4rem;

          .btn {
            padding: 0;
            display: grid;
            place-items: center;

            .icon {
              color: var(--navyBlue);
            }

            &:hover {
              .icon {
                color: var(--hoverBlue);
              }
            }
          }
        }
        .add-btn {
          background: var(--navyBlue);
          color: var(--white);
          border-radius: 0.2rem;
          padding: 0.1rem 0;
          box-shadow: 1px 1px 15px var(--navyBlue);

          &:hover {
            background: var(--hoverBlue);
          }
          .btn {
            padding: 0 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        }
      }

      .btn-link {
        margin-top: auto;
        text-align: right;
        a {
          border: 1.5px solid var(--navyBlue);
          text-decoration: none;
          color: var(--navyBlue);
          padding: 0.4rem 2rem;
          border-radius: 0.4rem;
        }
      }
    }
  }

  @media screen and (max-width: 835px) {
    padding: 0 1.5rem;
    .main-wrapper {
      flex-direction: column;
      padding: 2rem 0;

      .left-wrapper {
        width: 100%;
        margin-bottom: 2rem;
        padding: 0;

        .main-image {
          height: 320px;
        }
        .images-wrapper {
          .image-pag {
            height: 3rem;
          }
        }
      }

      .right-wrapper {
        width: 100%;
        padding: 0;
      }
    }
  }
`

export default SingleProductPage

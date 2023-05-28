import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getProduct } from "../redux/feature/productSlice";
import styled from "styled-components";

import ImageContainer from "./ImageContainer";
import AmountSection from "./AmountSection";
const Product = () => {
  const dispatch = useAppDispatch();
  const { isLoading, product } = useAppSelector((store) => store.product);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  const { id, images, company, title, description, price, discountPercent } =
    product;
  return (
    <Wrapper>
      <div className='section-center product-center'>
        <ImageContainer images={images} />
        <div className='info-container'>
          <h5>{company}</h5>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className='price-section'>
            <div>
              <span className='disctounted'>
                ${((price * discountPercent) / 100).toFixed(2)}
              </span>
              <span className='discount'>{discountPercent}%</span>
            </div>
            <span className='price'>${price.toFixed(2)}</span>
          </div>
          <AmountSection id={id} product={product} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Product;

const Wrapper = styled.section`
  min-height: calc(100vh - 7rem);
  padding: 4rem 0;
  .section-center {
    width: 85vw;
    max-width: 1000px;
    margin: 0 auto;
  }
  .product-center {
    display: grid;
    align-items: center;
    gap: 3rem;
  }
  .info-container {
  }
  h4,
  h5 {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }
  h5 {
    color: var(--primary-100);
    font-size: 0.55rem;
  }
  h4 {
    color: var(--black);
    text-transform: capitalize;
    font-size: 1.65rem;
    margin-bottom: 1rem;
    max-width: 23rem;
  }
  p {
    font-size: 0.875rem;
    line-height: 2;
  }
  .price-section {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price-section > div {
    display: flex;
    align-items: center;
  }
  .disctounted {
    font-size: 1.2rem;
    color: var(--black);
    font-weight: 600;
    margin-right: 0.5rem;
  }
  .discount {
    background-color: var(--primary-200);
    color: var(--primary-100);
    padding: 0 0.2rem;
    font-size: 0.6rem;
  }
  .price {
    text-decoration: line-through;
    font-size: 0.75rem;
  }
  .amount-section {
    margin-top: 1rem;
  }
  .amount {
    background-color: var(--light-grayish-blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--black);
    font-weight: 600;
    padding: 1rem;
    border-radius: 10px;
    button {
      border: transparent;
      color: var(--primary-100);
      background-color: transparent;
      cursor: pointer;
      svg {
        font-size: 1.25rem;
      }
    }
  }
  .add-to-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    background-color: var(--primary-100);
    border: transparent;
    color: var(--white);
    padding: 1.25rem;
    width: 100%;
    cursor: pointer;
    font-family: inherit;
    border-radius: 10px;
  }
  @media (min-width: 1000px) {
    .amount-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .add-to-cart {
      margin-top: 0;
    }

    .product-center {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

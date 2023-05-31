import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import { FaTrash } from "react-icons/fa";
import { ICart } from "../redux/feature/productSlice";
const Cart = () => {
  const { cart } = useAppSelector((store) => store.product);
  const { isCartOpen } = useAppSelector((store) => store.UI);
  return (
    <Wrapper>
      <aside className={isCartOpen ? "cart show-cart" : "cart"}>
        <div className='cart-container'>
          <div className='cart-header'>
            <span>Cart</span>
          </div>
          {cart.length < 1 ? (
            <div className='empty-cart cart-info'>
              <h3>your cart is empty</h3>
            </div>
          ) : (
            <div className='cart-info'>
              {cart.map((item: ICart) => {
                const { id, images, title, amount, finalPrice } = item;
                return (
                  <article key={id}>
                    <img src={images[0].url} />
                    <div>
                      <span>{title}</span>
                      <span>
                        ${finalPrice.toFixed(2)} x {amount}
                        <strong> ${(finalPrice * amount).toFixed(2)}</strong>
                      </span>
                    </div>
                    <button type='button' className='trash'>
                      <FaTrash />
                    </button>
                  </article>
                );
              })}
              <button type='button' className='checkout-btn'>
                checkout
              </button>
            </div>
          )}
        </div>
      </aside>
    </Wrapper>
  );
};
export default Cart;

const Wrapper = styled.div`
  .cart {
    position: fixed;
    top: 7rem;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    opacity: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
  .show-cart {
    transform: translateY(0);
    opacity: 1;
    z-index: 10;
  }
  .cart-container {
    background-color: var(--white);
    padding: 1.5rem;
    border-radius: 10px;
    width: 90vw;
    max-width: 23rem;
    margin: 0 auto;
    border: 3px solid var(--primary-100);
  }
  .cart-header {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--light-grayish-blue);
  }
  .cart-info {
    padding: 0.5rem 0;
  }
  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1rem;
    div {
      display: flex;
      flex-direction: column;
      & > span {
        text-transform: capitalize;
        font-size: 0.9rem;
      }
      strong {
        color: var(--black);
      }
    }
    button {
      background-color: transparent;
      border: transparent;
      color: var(--grayish-blue);
      cursor: pointer;
      svg {
        font-size: 1.1rem;
      }
    }
  }
  img {
    width: 2.5rem;
    object-fit: cover;
  }
  .checkout-btn {
    display: block;
    width: 100%;
    padding: 1rem 0.5rem;
    background-color: var(--primary-100);
    border: transparent;
    border-radius: 10px;
    color: var(--white);
    font-family: inherit;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media (min-width: 800px) {
    .cart-container {
      margin-left: auto;
      margin-right: 30vh;
    }
  }
`;

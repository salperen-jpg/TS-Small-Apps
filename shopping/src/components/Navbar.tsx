import styled from "styled-components";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import avatar from "../assets/avatar.png";
import { navLinks } from "../links";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleCart, toggleSidebar } from "../redux/feature/UISlice";
import { useEffect } from "react";
import { calculateTotalAmount } from "../redux/feature/productSlice";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const { amount } = useAppSelector((store) => store.product);
  useEffect(() => {
    dispatch(calculateTotalAmount());
  });

  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='hamburger'
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaBars />
        </button>
        <h4 className='logo'>sneakers</h4>
        <ul className='nav-links'>
          {navLinks.map((link) => {
            return (
              <li className='nav-link' key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
        <div
          className='nav-shopping-basket-container'
          onClick={() => dispatch(toggleCart())}
        >
          <FaShoppingCart />
          <div className='amount'>{amount}</div>
        </div>
        <img className='avatar' src={avatar} alt='user' />
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  align-self: stretch;
  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    align-self: stretch;
  }

  .hamburger {
    background: transparent;
    border: transparent;
    color: var(--dark-grayish-blue);
    cursor: pointer;
  }
  .logo {
    flex: 1;
    font-size: 1.5rem;
    color: var(--black);
  }
  .nav-links {
    display: none;
  }
  .nav-shopping-basket-container {
    position: relative;
    margin-right: 0.5rem;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .amount {
    position: absolute;
    top: -0.75rem;
    right: -0.5rem;
    width: 1.3rem;
    height: 1.3rem;
    font-size: 0.8rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-color: var(--primary-100);
    color: var(--white);
  }
  .avatar {
    width: 2.2rem;
  }
  svg {
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    .hamburger {
      display: none;
    }
    .nav-center {
      border-bottom: 0.5px solid var(--grayish-blue);
      align-self: stretch;
    }
    .nav-links {
      display: flex;
      flex: 1;
      margin-left: 3rem;
      gap: 1rem;
      align-self: stretch;
    }
    .nav-link {
      display: block;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      transition: var(--transition);
      font-size: 0.875rem;

      a {
        color: var(--dark-grayish-blue);
      }
    }
    .nav-link:hover {
      border-bottom: 2px solid var(--primary-100);
    }
    .logo {
      flex: 0;
    }
  }
`;

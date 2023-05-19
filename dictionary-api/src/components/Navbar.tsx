import { styled } from "styled-components";
import logo from "../assets/logo.svg";
import { useDictionaryApp } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const fontOptions = ["space-grotesk", "roboto", "poppins"];

const Navbar = () => {
  const { fontFamily, isDarkTheme, setFont, toggleTheme } = useDictionaryApp();
  return (
    <Wrapper>
      <div className='nav-center section-center '>
        <img src={logo} className='logo' alt='dictionary' />
        <div className='nav-center-right'>
          <div className='font'>
            <select name='font' id='font' value={fontFamily} onChange={setFont}>
              {fontOptions.map((font, index) => {
                return (
                  <option key={index} value={font}>
                    {font}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='theme'>
            <button className='btn theme-btn' onClick={toggleTheme}>
              {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  .nav-center {
    display: flex;
    justify-content: space-between;
  }
  .nav-center-right {
    display: flex;
    align-items: center;
    gap: 1rem;
    .font {
      padding: 0.5rem 1rem;
      border-right: 1px solid var(--grey-100);
    }
    .theme-btn {
      background-color: transparent;
      color: var(--primary-500);
      transition: all 0.3s ease-in-out;
      svg {
        font-size: 1.5rem;
      }
    }
    .theme-btn:hover {
      transform: rotate(180deg);
    }
  }
`;

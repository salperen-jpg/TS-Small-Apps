import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <div className='header-center'>
        <div className='header-info'>
          <h2>salih alperen</h2>
          <div className='underline'></div>
          <span className='title'>full stack web developer</span>
          <div className='btn-container'>
            <a href='#Projects' className='btn work'>
              see my works
            </a>
            <a href='mailto:sal.alperen1@gmail.com' className='btn'>
              contact me
            </a>
          </div>
        </div>
        <div className='header-img'>
          <img src='/header2.svg' alt='header-img' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .header-center {
    width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .underline {
    margin-inline: 0;
  }
  .header-info {
    h2 {
      text-transform: uppercase;
    }
  }
  .header-img {
    display: none;
  }
  .title {
    text-transform: capitalize;
    font-size: 1.5rem;
  }
  .btn-container {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    font-family: var(--ff-primary);
  }
  .work {
    background: linear-gradient(to right, var(--blueish), var(--pinkish));
  }
  .btn-container .btn:hover {
    text-decoration: underline;
  }
  @media (min-width: 992px) {
    .header-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .header-img {
      display: block;
    }
  }
`;

export default Header;

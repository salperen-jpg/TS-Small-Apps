import styled from 'styled-components';
import profile from '../assets/profile.jpg';
import Title from './Title';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Techs from '../utils/Techs';
const Footer: React.FC = () => {
  return (
    <Wrapper id='About'>
      <Title title='About me' />
      <div className='section-center'>
        <div className='info'>
          <p>
            I am a passionate web developer especially interested in building
            responsive, charming and modern web applications with the
            technologies in demand in the industry. The recent technologies I
            worked with :
          </p>
          <div className='techs'>
            {Techs.map((tech) => {
              const { id, text } = tech;
              return (
                <article key={id} className='tech'>
                  <FaAngleDoubleRight className='icon' />
                  {text}
                </article>
              );
            })}
          </div>
          <button className='btn hire-btn'>hire me</button>
        </div>
        <div className='img-container'>
          <img src={profile} alt='' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .section-center {
    width: var(--min-width);
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .info {
    margin-bottom: 4rem;
  }
  p {
    line-height: 1.75;
    max-width: 35rem;
  }
  .techs {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    .tech {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .icon {
      font-size: 1.2rem;
      color: var(--pinkish);
    }
  }
  .hire-btn {
    margin-top: 2rem;
    padding: 0.7rem 1.2rem;
    transition: all 0.3s linear;
  }
  .hire-btn:hover {
    background: linear-gradient(to right, var(--blueish), var(--pinkish));
  }
  @media (min-width: 900px) {
    .section-center {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
    p {
      line-height: 2;
    }
    img {
      width: 23rem;
      height: 25rem;
      object-fit: cover;
      border-radius: var(--radius);
    }
  }
  @media (min-width: 1300px) {
    /* IMAGE */
    .img-container {
      position: relative;
      opacity: 0.5;
      transition: var(--transition);
    }
    .img-container::after {
      content: '';
      position: absolute;
      top: -1.5rem;
      right: -1.5rem;
      width: 100%;
      height: 100%;
      border: 5px solid;
      border-image-source: linear-gradient(
        to right,
        var(--blueish),
        var(--pinkish)
      );
      border-image-slice: 3;
      border-radius: 40px;
      z-index: -1;
      transition: var(--transition);
    }

    .img-container:hover {
      opacity: 1;
    }
    .img-container:hover::after {
      top: -1rem;
      right: -1rem;
    }

    /* OUTER BORDER */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      width: 85%;
      height: 100%;
      margin: 0 auto;
      border-radius: 10px;
      border-inline-start: 10px solid;
      border-block-start: 10px solid;
      border-image-source: radial-gradient(
        at bottom left,
        transparent 10%,
        var(--blueish),
        var(--pinkish),
        transparent 100%
      );
      border-image-slice: 1;
      transform: rotate(180deg);

      z-index: -1;
    }
  }
`;

export default Footer;

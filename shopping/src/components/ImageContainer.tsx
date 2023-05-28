import { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import styled from "styled-components";
interface IImage {
  url: string;
}
interface IImageContainer {
  images: IImage[];
}
const ImageContainer: React.FC<IImageContainer> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const left = () => {
    setIndex((oldState) => {
      let newState = oldState - 1;
      if (newState < 0) {
        newState = images.length - 1;
      }
      return newState;
    });
  };
  const right = () => {
    setIndex((oldState) => {
      let newState = oldState + 1;
      if (newState > images.length - 1) {
        newState = 0;
      }
      return newState;
    });
  };

  return (
    <Wrapper className='image-container'>
      <img src={images[index].url} alt='' className='small-screen' />
      <div className='btn-container'>
        <button type='button' className='image-btn left' onClick={left}>
          <AiOutlineLeft />
        </button>
        <button type='button' className='image-btn right' onClick={right}>
          <AiOutlineRight />
        </button>
      </div>
      <div className='big-screen'>
        <img src={images[index].url} className='main-img' />
        <div className='gallery-img'>
          {images.map((image, i) => {
            return (
              <img
                key={image.url}
                src={image.url}
                className={image.url === images[index].url ? "active-img" : ""}
                onClick={() => setIndex(i)}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default ImageContainer;

const Wrapper = styled.div`
  position: relative;
  .image-btn {
    position: absolute;
    top: 50%;
    background-color: var(--white);
    border: 1px solid var(--primary-100);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .left {
    left: 0;
    transform: translateX(-50%);
  }
  .right {
    right: 0;
    transform: translateX(50%);
  }
  .big-screen {
    display: none;
  }
  @media (min-width: 1000px) {
    .btn-container {
      display: none;
    }
    .small-screen {
      display: none;
    }
    .big-screen {
      display: block;
    }
    img {
      border-radius: 10px;
    }
    .main-img {
      height: 25rem;
      margin-bottom: 1rem;
    }
    .gallery-img {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5rem;
    }
    .active-img {
      border: 2px solid var(--primary-100);
      opacity: 0.5;
    }
  }
`;

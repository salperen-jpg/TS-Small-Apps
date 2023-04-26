import { AiFillCloud } from 'react-icons/ai';
const Header = () => {
  return (
    <div className='hero-header'>
      <p>
        <span className='new'>new</span>
        <small>
          Strapi cloud is live <AiFillCloud />
          <a href='https://strapi.io/cloud' className='learn-more'>
            Learn more
          </a>
        </small>
      </p>
    </div>
  );
};
export default Header;

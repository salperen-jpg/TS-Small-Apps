import { useStrapiContext } from '../Context';
import Clipboard from './Clipboard';
import Header from './Header';
import Information from './Information';
const Hero = () => {
  const { setSubmenuId } = useStrapiContext();

  const handleSubmenu = () => {
    setSubmenuId(null);
  };
  return (
    <section className='hero' onMouseOver={handleSubmenu}>
      <div className='section-center'>
        <Header />
        <Information />
        <Clipboard />
      </div>
    </section>
  );
};
export default Hero;

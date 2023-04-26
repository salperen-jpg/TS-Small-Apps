import Clipboard from './Clipboard';
import Header from './Header';
import Information from './Information';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='section-center'>
        <Header />
        <Information />
        <Clipboard />
      </div>
    </section>
  );
};
export default Hero;

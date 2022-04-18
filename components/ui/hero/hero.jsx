import { useState, useEffect } from 'react';
import Image from 'next/image';
import css from './hero.module.scss';
import TFT from '@/components/ui/tft/tft';

const Hero = ({ video }) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
  }, [animate]);

  return (
    <div className={css.hero}>
      <h1 className={css.heading}>
        {/* <span className={css.headingSub}>Hi, I'm Jam! And these are my</span> */}
        <span className={css.headingMain}>TOYS FROM TAIWAN</span>
      </h1>

      {/* <Link href="/services" passHref>
        <Nav.Link className="btn btn--hero btn--animated">Learn more</Nav.Link>
      </Link> */}
    </div>
  );
};

export default Hero;

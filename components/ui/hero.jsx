import { useState, useEffect } from 'react';
import Image from 'next/image';
import css from './hero.module.scss';

const Hero = ({ video }) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
  }, [animate]);

  return (
    <div className={css.hero}>
      {/* <h1 className={css.heading}>
        <span className={css.headingMain}>Jam In the Jam Lounge</span>
        <span className={css.headingSub}>
          (Except for the waves and nature sounds)
        </span>
      </h1> */}

      {/* <Link href="/services" passHref>
        <Nav.Link className="btn btn--hero btn--animated">Learn more</Nav.Link>
      </Link> */}
    </div>
  );
};

export default Hero;

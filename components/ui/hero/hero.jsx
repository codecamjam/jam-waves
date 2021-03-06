import { useState, useEffect, useContext } from 'react';
import NavContext from '@/store/nav-context';

import css from './hero.module.scss';

const Hero = ({ video }) => {
  const [animate, setAnimate] = useState(true);
  const ctx = useContext(NavContext);

  useEffect(() => {
    setAnimate(false);
  }, [animate]);

  const openYoutube = () => {
    window.open('https://www.youtube.com/watch?v=WeU8KtQeUDc', '_blank');
  };

  return (
    <div className={css.hero}>
      <h1 className={css.heading} onClick={openYoutube}>
        <span className={`${css.text} ${css['text--1']}`}>Toys</span>
        <span className={`${css.text} ${css['text--2']}`}>From</span>
        <span className={`${css.text} ${css['text--3']}`}>Taiwan</span>
      </h1>
      {!ctx.expanded && <p className={css.note}>果酱</p>}
    </div>
  );
};

export default Hero;

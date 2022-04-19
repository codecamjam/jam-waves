import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon/icon';
import css from './hero.module.scss';

const Hero = ({ video }) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
  }, [animate]);

  return (
    <div className={css.hero}>
      {/* <div className={css.icons}>
        <div className={[css.icon__bongos, css.icon].join(' ')}>
          <Icon spriteName="icon-bongos" />
        </div>
        <div className={[css.icon__flute, css.icon].join(' ')}>
          <Icon spriteName="icon-flute" />
        </div>
        <div className={[css.icon__xylophone, css.icon].join(' ')}>
          <Icon spriteName="icon-xylophone" />
        </div>
        <div className={[css.icon__rockstar, css.icon].join(' ')}>
          <Icon spriteName="icon-rockstar" />
        </div>
        <div className={[css.icon__handsonic, css.icon].join(' ')}>
          {' '}
          <Icon spriteName="icon-handsonic" />
        </div>
        <div className={[css.icon__synth, css.icon].join(' ')}>
          {' '}
          <Icon spriteName="icon-synth" />
        </div>
        <div className={[css.icon__shakers, css.icon].join(' ')}>
          <Icon spriteName="icon-shakers" />
        </div>
      </div> */}
      <h1 className={css.heading}>
        <span className={`${css.text} ${css['text--1']}`}>Toys</span>
        <span className={`${css.text} ${css['text--2']}`}>From</span>
        <span className={`${css.text} ${css['text--3']}`}>Taiwan</span>
      </h1>
    </div>
  );
};

export default Hero;

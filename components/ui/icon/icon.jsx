import React from 'react';
import { getCustomStyle } from './icon.utils';
import css from './icon.module.scss';

const Icon = ({ spriteName, variant }) => {
  const customStyle = getCustomStyle(spriteName);

  let spritePath = `/images/sprite.svg#${spriteName}`;

  return (
    <svg
      className={[
        css['icon'],
        css[`icon--${customStyle}`],
        css[`icon--${variant}`],
      ].join(' ')}
    >
      <use xlinkHref={spritePath}></use>
    </svg>
  );
};

export default React.memo(Icon);

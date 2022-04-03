import Icon from './icon';
import css from './Stars.module.scss';

const Stars = () => {
  return (
    <div className={css.stars}>
      <Icon spriteName="icon-star-empty" />
      <Icon spriteName="icon-star-empty" />
      <Icon spriteName="icon-star-empty" />
      <Icon spriteName="icon-star-empty" />
      <Icon spriteName="icon-star-empty" />
    </div>
  );
};

export default Stars;

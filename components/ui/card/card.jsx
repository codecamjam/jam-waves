import Icon from '@components/ui/icon/icon';
import Stars from '@components/ui/stars/stars';
import css from './card.module.scss';

const Card = ({ title, icon, list, text, img }) => {
  return (
    <div className={css.card}>
      <div className={css.header}>
        <Icon spriteName={icon} />
        <h3 className={css.title}>{title}</h3>
      </div>

      <div className={css.body}>
        <ul className={css.list}>
          {list.map((item, idx) => (
            <li key={idx} className={css.listItem}>
              {item}
            </li>
          ))}
        </ul>
        <div className={[css.img, css[`img--${img}`]].join(' ')} />
      </div>
      <div className={css.footer}>
        <blockquote className={css.quote}>&ldquo;{text}&rdquo;</blockquote>
        <Stars />
      </div>
    </div>
  );
};

export default Card;

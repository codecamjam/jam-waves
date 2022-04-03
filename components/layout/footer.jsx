import Icon from '@/components/ui/icon/';

import css from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.logos}>
        <a href="#">
          <Icon spriteName="icon-twitch" />
        </a>
        <a href="#">
          <Icon spriteName="icon-bandcamp" />
        </a>
        <a href="#">
          <Icon spriteName="icon-tiktok" />
        </a>
        <a href="#">
          <Icon spriteName="icon-instagram" />
        </a>
        <a href="#">
          <Icon spriteName="icon-youtube2" />
        </a>
      </div>
      {/* <p className={css.copyright}>&copy; JAM WAVES</p> */}
    </footer>
  );
};

export default Footer;

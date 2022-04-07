import Icon from '@/components/ui/icon/icon';

import css from './footer.module.scss';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.logos}>
        <a href="#" title="Twitch">
          <Icon spriteName="icon-twitch" />
        </a>
        <a href="#" title="Bandcamp">
          <Icon spriteName="icon-bandcamp" />
        </a>
        <a href="#" title="YouTube">
          <Icon spriteName="icon-youtube2" />
        </a>
        <a href="#" title="Instagram">
          <Icon spriteName="icon-instagram" />
        </a>

        <a href="#" title="TikTok">
          <Icon spriteName="icon-tiktok" />
        </a>
      </div>
      <p className={css.copyright}>&copy; JAM WAVES</p>
      <p className={css.jam} title="JAM">
        果酱
      </p>
    </footer>
  );
}

export default Footer;

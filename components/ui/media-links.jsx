import Icon from './icon';

import css from './media-links.module.scss';

const MediaLinks = () => {
  return (
    <footer className={css.hero}>
      <div className={css.logos}>
        <a className={css.links} href="#" title="Twitch">
          <Icon spriteName="icon-twitch" />
        </a>
        <a className={css.links} href="#">
          <Icon spriteName="icon-bandcamp" />
        </a>
        <a className={css.links} href="#">
          <Icon spriteName="icon-youtube2" />
        </a>
        <a className={css.links} href="#">
          <Icon spriteName="icon-instagram" />
        </a>

        <a className={css.links} href="#">
          <Icon spriteName="icon-tiktok" />
        </a>
      </div>
    </footer>
  );
};

export default MediaLinks;

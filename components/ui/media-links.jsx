import Icon from './icon';

import css from './media-links.module.scss';

const MediaLinks = () => {
  return (
    <footer className={css.hero}>
      <div className={css.logos}>
        <a className={css.links} href="#" title="Twitch">
          <Icon spriteName="icon-twitch" />
        </a>
        <a className={css.links} href="#" title="Bandcamp">
          <Icon spriteName="icon-bandcamp" />
        </a>
        <a className={css.links} href="#" title="YouTube">
          <Icon spriteName="icon-youtube2" />
        </a>
        <a className={css.links} href="#" title="Instagram">
          <Icon spriteName="icon-instagram" />
        </a>

        <a className={css.links} href="#" title="TikTok">
          <Icon spriteName="icon-tiktok" />
        </a>
      </div>
      <p className={css.jam} title="JAM">
        果酱
      </p>
    </footer>
  );
};

export default MediaLinks;

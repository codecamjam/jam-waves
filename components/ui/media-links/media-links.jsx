import Icon from '@/components/ui/icon/icon';

import css from './media-links.module.scss';

const MediaLinks = () => {
  return (
    <footer className={css.hero}>
      <div className={css.logos}>
        <a
          className={css.links}
          href="https://www.twitch.tv/toysfromtaiwan"
          title="Twitch"
          target="_blank"
          rel="noreferrer"
        >
          <Icon spriteName="icon-twitch" />
        </a>
        <a
          className={css.links}
          href="https://toysfromtaiwan.bandcamp.com/"
          title="Bandcamp"
          target="_blank"
          rel="noreferrer"
        >
          <Icon spriteName="icon-bandcamp" />
        </a>
        <a
          className={css.links}
          href="https://www.youtube.com/channel/UC6dxtcMsqP_EfYigct6vv0Q"
          title="YouTube"
          target="_blank"
          rel="noreferrer"
        >
          <Icon spriteName="icon-youtube2" />
        </a>
        <a href="#" title="Instagram" target="_blank" rel="noreferrer">
          <Icon spriteName="icon-instagram" />
        </a>

        <a href="#" title="TikTok" target="_blank" rel="noreferrer">
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

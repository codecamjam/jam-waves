import Icon from "../icon";
import css from "./media-links.module.scss";

export default function MediaLinks() {
  return (
    <div className={css.logos}>
      <a
        className={css.link}
        href="https://www.twitch.tv/toysfromtaiwan"
        title="Twitch"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-twitch" />
      </a>
      <a
        className={css.link}
        href="https://toysfromtaiwan.bandcamp.com/"
        title="Bandcamp"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-bandcamp" />
      </a>
      <a
        className={css.link}
        href="https://www.youtube.com/@toysfromtaiwan"
        title="YouTube"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-youtube" />
      </a>
      <a
        className={css.link}
        href="https://www.instagram.com/toysfromtaiwan/"
        title="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-instagram" />
      </a>

      <a
        className={css.link}
        href="https://www.tiktok.com/@toysfromtaiwan"
        title="TikTok"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-tiktok" />
      </a>
    </div>
  );
}

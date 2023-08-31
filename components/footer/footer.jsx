import { Icon, MediaLinks } from "@/components";
import { useRouter } from "next/router";
import css from "./footer.module.scss";

export default function Footer() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      {isHomePage ? (
        <MediaLinks />
      ) : (
        <footer className={css.footer}>
          <div className={css.logos}>
            <a
              href="https://www.twitch.tv/toysfromtaiwan"
              title="Twitch"
              target="_blank"
              rel="noreferrer"
            >
              <Icon spriteName="icon-twitch" />
            </a>
            <a
              href="https://toysfromtaiwan.bandcamp.com/"
              title="Bandcamp"
              target="_blank"
              rel="noreferrer"
            >
              <Icon spriteName="icon-bandcamp" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC6dxtcMsqP_EfYigct6vv0Q"
              title="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <Icon spriteName="icon-youtube2" />
            </a>
            <a
              href="https://www.instagram.com/toysfromtaiwan/"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Icon spriteName="icon-instagram" />
            </a>

            <a
              href="https://www.tiktok.com/@toysfromtaiwan"
              title="TikTok"
              target="_blank"
              rel="noreferrer"
            >
              <Icon spriteName="icon-tiktok" />
            </a>
          </div>
          <p className={css.copyright}>Toys From Taiwan</p>
          <p className={css.jam} title="JAM">
            果酱
          </p>
        </footer>
      )}
    </>
  );
}

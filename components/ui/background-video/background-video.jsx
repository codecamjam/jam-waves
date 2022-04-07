import css from './background-video.module.scss';
import { useRouter } from 'next/router';

const BackgroundVideo = () => {
  // const router = useRouter();
  // const isHomePage = router.pathname === '/';
  // let videoStyles = css.video;
  // videoStyles = isHomePage ? videoStyles + ' ' + css.trippy : videoStyles;
  const videoStyles = css.video + ' ' + css.trippy;

  return (
    <div className={videoStyles}>
      <video className={css.content} playsInline autoPlay loop muted>
        <source src="/videos/beach.mp4" type="video/mp4" />
        <source src="/videos/beach.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BackgroundVideo;

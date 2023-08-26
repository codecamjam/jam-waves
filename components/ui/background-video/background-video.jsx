import css from './background-video.module.scss';

export default function BackgroundVideo() {
  const videoStyles = css.video + ' ' + css.trippy;
  return <div className={videoStyles} />;
};


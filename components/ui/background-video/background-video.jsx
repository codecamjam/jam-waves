import css from './background-video.module.scss';

const BackgroundVideo = () => {
  const videoStyles = css.video + ' ' + css.trippy;
  return <div className={videoStyles} />;
};

export default BackgroundVideo;

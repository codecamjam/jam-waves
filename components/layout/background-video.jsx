import css from './background-video.module.scss';

const BackgroundVideo = () => {
  return (
    <div className={css.video}>
      <video className={css.video__content} playsInline autoPlay loop muted>
        <source src="/videos/beach.mp4" type="video/mp4" />
        <source src="/videos/beach.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BackgroundVideo;

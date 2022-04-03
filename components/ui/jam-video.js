import YouTube from 'react-youtube';

function JamVideo() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  function onReady(event) {
    event.target.pauseVideo();
  }

  return (
    <div>
      <h3>Wow look at me</h3>
    </div>
  );
}

export default JamVideo;

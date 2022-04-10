function TFT() {
  return (
    <div className="">
      <video className={''} playsInline autoPlay loop muted>
        <source src="/videos/tft.mp4" type="video/mp4" />
        <source src="/videos/tft.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default TFT;

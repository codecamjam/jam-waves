import React from "react";
import Card from "../../components/card/Card";
// import css from "./Audio.module.scss";

const Audio = () => {
  const list = [
    "Mixing & Mastering",
    "Live Entertainment",
    "Books on Tape",
    "Signal Flow",
  ];

  const text = "Providing high quality sound";

  return (
    <section>
      <Card
        title="Audio"
        icon="icon-mic"
        list={list}
        text={text}
        img="guitar"
        alt="Recording Studio"
      >
        filler
      </Card>
    </section>
  );
};

export default Audio;

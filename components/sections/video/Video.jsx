import React from "react";
import CardItem from "../../components/card/Card";
// import css from "./Video.module.scss";

const Video = () => {
  const list = [
    "News & Broadcasting",
    "Meetings & Seminars",
    "Nature / Outdoors",
    "Performing Arts",
  ];

  const text = "Gizmos to capture the magic";

  return (
    <section>
      <CardItem
        title="Video"
        icon="icon-tv"
        list={list}
        text={text}
        img="photography"
      >
        filler
      </CardItem>
    </section>
  );
};

export default Video;

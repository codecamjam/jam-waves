import React from "react";
import CardItem from "../../components/card/Card";
// import css from "./Streaming.module.scss";

const Streaming = () => {
  const list = [
    "Business Conferences",
    "House of Worship",
    "Podcasts & radio",
    "Performing Arts",
  ];

  const text = "Reliable streaming, affordable pricing";

  return (
    <section>
      <CardItem
        title="Stream"
        icon="icon-podcast"
        list={list}
        text={text}
        img="wideLens"
      >
        filler
      </CardItem>
    </section>
  );
};

export default Streaming;

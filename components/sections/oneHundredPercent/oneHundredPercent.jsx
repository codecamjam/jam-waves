import { Card } from '@/components';
// import css from "./oneHundredPercent.module.scss";

export default function OneHundredPercent() {
  const list = [
    'No Backing Tracks',
    'No Metronome',
    'In Real Time',
    'On The Fly',
  ];

  const text = 'Music for chillin out to';

  return (
    <section>
      <Card
        title="100%"
        icon="icon-equalizer2"
        list={list}
        text={text}
        img="photo1"
      >
        filler
      </Card>
    </section>
  );
};


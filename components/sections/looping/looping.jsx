import { Card } from '@/components';
// import css from "./iooping.module.scss";

const Looping = () => {
  const list = [
    'Hawaiian Slides',
    'Heady Spaces',
    `60's Lounge`,
    'Psychedelic',
  ];

  const text = 'For melting into the couch';

  return (
    <section>
      <Card
        title="Looping"
        icon="icon-music"
        list={list}
        text={text}
        img="photo3"
      >
        filler
      </Card>
    </section>
  );
};

export default Looping;

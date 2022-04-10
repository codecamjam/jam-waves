import CardItem from '@/components/ui/card/card';
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
      <CardItem
        title="Looping"
        icon="icon-music"
        list={list}
        text={text}
        img="photo3"
      >
        filler
      </CardItem>
    </section>
  );
};

export default Looping;

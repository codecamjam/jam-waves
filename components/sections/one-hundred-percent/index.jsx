import CardItem from '@/components/ui/card/card';
// import css from "./one-hundred-percent.module.scss";

const OneHundred = () => {
  const list = [
    'No Backing Tracks',
    'No Metronome',
    'All Organic',
    'On The Fly',
  ];

  const text = 'Music for chillin out to';

  return (
    <section>
      <CardItem
        title="100%"
        icon="icon-equalizer2"
        list={list}
        text={text}
        img="photo1"
      >
        filler
      </CardItem>
    </section>
  );
};

export default OneHundred;

import Card from '@/components/ui/card/card';
// import css from "./live.module.scss";

const Live = () => {
  const list = [
    'Live Entertainment',
    'Instrumental Jams',
    'Improvisational',
    'Island Vibes',
  ];

  const text = 'Deep relaxation and introspection';

  return (
    <section>
      <Card
        title="Live"
        icon="icon-headphones"
        list={list}
        text={text}
        img="photo2"
        alt="Recording Studio"
      >
        filler
      </Card>
    </section>
  );
};

export default Live;

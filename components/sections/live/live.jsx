import { Card } from '@/components';
// import css from "./live.module.scss";

export default function Live() {
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


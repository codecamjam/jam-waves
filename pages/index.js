import { useContext } from 'react';
import Context from '@/context';
import { Hero, MediaLinks } from '@/components';

export default function HomePage() {
  const ctx = useContext(Context);
  return (
    <div className="homePage">
      <Hero />
      {!ctx.expanded && <MediaLinks />}
    </div>
  );
}

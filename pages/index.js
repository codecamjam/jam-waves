import { useContext } from 'react';
import NavContext from '@/store/nav-context';
import Hero from '@/components/ui/hero';
import MediaLinks from '@/components/ui/media-links';

export default function HomePage() {
  const ctx = useContext(NavContext);
  return (
    <div className="homePage">
      <Hero />
      {!ctx.expanded && <MediaLinks />}
    </div>
  );
}

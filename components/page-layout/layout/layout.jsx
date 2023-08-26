import Header from '../header';
import Footer from '../footer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import css from './layout.module.scss';
import Context from '@/context';

function Layout({ children }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  function toggleHandler() {
    setExpanded((prevExpanded) => !prevExpanded);
  }

  return (
    <Context.Provider value={{ expanded }}>
      <Header toggle={toggleHandler} isHomePage={isHomePage} />
      <main className={css.main}>{children}</main>
      {!isHomePage && <Footer />}
    </Context.Provider>
  );
}

export default Layout;

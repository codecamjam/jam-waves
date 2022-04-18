import Header from './header';
import Footer from './footer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import css from './layout.module.scss';
import NavContext from '@/store/nav-context';

function Layout({ children }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  function toggleHandler() {
    setExpanded((prevExpanded) => !prevExpanded);
  }

  return (
    <NavContext.Provider value={{ expanded }}>
      <Header toggle={toggleHandler} isHomePage={isHomePage} />
      <main className={css.main}>{children}</main>
      {!isHomePage && <Footer />}
    </NavContext.Provider>
  );
}

export default Layout;

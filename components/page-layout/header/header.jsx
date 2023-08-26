import { Navbar, Nav, Container } from 'react-bootstrap';
import { Logo, NavLink } from '@/components';

import css from './header.module.scss';

function Header({ toggle, isHomePage }) {
  function handleToggle() {
    toggle();
  }

  return (
    <header className={css.headerNavbar}>
      <Navbar bg="dark" expand="md" className="py-0">
        <Container fluid={true}>
          <Logo isHomePage={isHomePage} />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink route="/about" text="about" icon="icon-accessibility" />
              <NavLink
                route="/contact"
                text="contact"
                icon="icon-address-book"
              />
              <NavLink route="/shows" text="shows" icon="icon-calendar" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

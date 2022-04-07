import { Navbar, Nav, Container } from 'react-bootstrap';
import Navlink from '@/components/ui/nav-link/nav-link';
import Logo from '@/components/ui/logo/logo';

import css from './header.module.scss';

function Header({ toggle }) {
  function handleToggle() {
    toggle();
  }

  return (
    <header className={css.headerNavbar}>
      <Navbar bg="dark" expand="md" className="py-0">
        <Container fluid={true}>
          <Logo />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Navlink route="/shows" text="shows" icon="icon-calendar" />
              <Navlink route="/about" text="about" icon="icon-accessibility" />
              <Navlink
                route="/contact"
                text="contact"
                icon="icon-address-book"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

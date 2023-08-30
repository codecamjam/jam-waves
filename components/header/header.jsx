import { Navbar, Nav, Container } from "react-bootstrap";
import { TFT, NavLink } from "@/components";
import { useAppContext } from "@/context";

export default function Header() {
  const { darkMode, setExpanded } = useAppContext();

  function toggleHandler() {
    setExpanded((expanded) => !expanded);
  }

  return (
    <header className="pb-0 z-index-1">
      <Navbar
        expand="md"
        className={`py-0 ${darkMode ? "navbar-dark" : "navbar-light"}`}
      >
        <Container fluid>
          <TFT />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleHandler}
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
              <NavLink route="/support" text="support" icon="icon-heart" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

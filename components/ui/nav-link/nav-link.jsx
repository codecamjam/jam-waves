import { Nav } from 'react-bootstrap';
import Link from 'next/link';
import Icon from '@/components/ui/icon/icon';
import css from './nav-link.module.scss';

const Navlink = ({ text, icon, route }) => {
  return (
    <Link href={route} passHref>
      <Nav.Link>
        <span className={css.navlink}>
          <Icon spriteName={icon} />
          <span className={css[text]}>{text}</span>
        </span>
      </Nav.Link>
    </Link>
  );
};

export default Navlink;

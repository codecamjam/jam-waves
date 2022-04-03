import { Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Icon from './icon';
import css from './logo.module.scss';
const Logo = () => {
  return (
    <div className={css.logo}>
      <Link href="/" passHref>
        <Navbar.Brand className={css.content}>
          <span className={css.jamWaves}>Toys From Taiwan 果酱</span>
          <span className={css.jam}>JAM 果酱 </span>
          <Icon spriteName="" />
        </Navbar.Brand>
      </Link>
    </div>
  );
};

export default Logo;

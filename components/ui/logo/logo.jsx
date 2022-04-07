import { Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Icon from '@/components/ui/icon/icon';
import css from './logo.module.scss';
const Logo = () => {
  return (
    <div className={css.logo}>
      <Link href="/" passHref>
        <Navbar.Brand className={css.content}>
          <span className={css.tft}>Toys From Taiwan</span>
          <Icon spriteName="" />
        </Navbar.Brand>
      </Link>
    </div>
  );
};

export default Logo;

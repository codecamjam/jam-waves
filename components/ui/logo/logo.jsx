import { Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Icon from '@/components/ui/icon/icon';
import css from './logo.module.scss';
const Logo = ({ isHomePage }) => {
  return (
    <div className={css.logo}>
      <Link href={isHomePage ? '/about' : '/'} passHref>
        <Navbar.Brand
          className={`${css.content} ${
            isHomePage ? css.content__homepage : ''
          }`}
        >
          {isHomePage && (
            <div className={css.icon}>
              <Icon spriteName="icon-eye" />
            </div>
          )}
          {!isHomePage && (
            <span className={css.toysfromtaiwan}>TOYS FROM TAIWAN</span>
          )}
          {!isHomePage && <span className={css.tft}>T.F.T.</span>}
          {isHomePage && <span className={css.jam}>jam</span>}
          <Icon spriteName="" />
        </Navbar.Brand>
      </Link>
    </div>
  );
};

export default Logo;

import { Container, Row, Col } from 'react-bootstrap';
import Headshot from '@/components/ui/head-shot/head-shot';
import Contact from '@/components/ui/contact/contact';
import Icon from '@/components/ui/icon/icon';
import { text1, text2, text3, text4 } from './bio.utils';
import css from './bio.module.scss';
import BookButton from '@/components/ui/book-button/book-button';

export default function Bio() {
  return (
    <section className={css.bioWrap}>
      <Container className={`margin-auto  pl-2 pr-2 ${css.bio}`}>
        <Headshot mobile={false} />
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Contact />
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <Headshot mobile={true} />
          </Col>

          <Col
            xs={12}
            // md={6}
            className="d-flex flex-column align-items-start justify-content-between"
          >
            <p className={css.text}>
              <span>
                {`Thanks for visiting my site! I'm a solo musician based in sunny Jacksonville, FL. I provide a`}{' '}
                <strong>live</strong>{' '}
                {`one man show that's unlike any solo act you've ever seen. `}
                Basically, my show is a <strong>100% live-looped</strong>,
                nonstop, instrumental jam session.
                {` You'll see me play guitar, bass, keys, bongos, congos, and so much more!  And it's all me,`}{' '}
                <strong>live-looped</strong>
                {`, and made in real time! I may also have
                some ambient nature sounds playing in the background from time
                to time, so it's a very relaxing, refreshing kind of vibe.`}
              </span>
            </p>
            <p className={css.text}>{text2}</p>
          </Col>
          <Col xs={12} className="d-flex justify-content-center my-3">
            <BookButton />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

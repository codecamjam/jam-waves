import { Container, Row, Col } from 'react-bootstrap';
import { OneHundredPercent, Live, Looping } from '@/components';
import css from './about.module.scss';

export default function About() {
  return (
    <div className={css.about}>
      <Container className="m-0 p-0" fluid={true}>
        <div className={css.row}>
          <Row className="w-100 m-0 p-0">
            <Col
              xs={12}
              lg={6}
              xl={{ span: 4, offset: 12 }}
              className="my-2 mx-0 p-0"
            >
              <OneHundredPercent />
            </Col>
            <Col xs={12} lg={6} xl={4} className="my-2 mx-0 p-0">
              <Live />
            </Col>
            <Col
              xs={12}
              lg={6}
              xl={4}
              className="my-2 mx-0 p-0 mx-lg-auto mx-xl-0"
            >
              <Looping />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import { Icon, Contact, HeadShot, MediaLinks } from "@/components";
import { text1, text2, text3, text4 } from "./utils";
import css from "./bio.module.scss";

export default function Bio() {
  return (
    <section className={css.bioWrap}>
      <Container fluid className={`px-2 ${css.bio}`}>
        <HeadShot mobile={false} />
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Contact />
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <HeadShot mobile={true} />
          </Col>

          <Col
            xs={12}
            // md={6}
            className="d-flex flex-column align-items-start justify-content-between"
          >
            <p className={css.text}>
              <span className="d-block">
                {`Thanks for visiting my site!  I'm a solo musician based in sunny Jacksonville, FL. I provide a`}{" "}
                <strong>live one man band</strong>{" "}
                {`show that's unlike any solo act you've ever seen! `}
                Basically, my show is a nonstop,{" "}
                <strong>100% live-looped</strong>, instrumental jam session.
                {` You'll see me play guitar, bass, keys, bongos, congos, and so much more!  And it's all me,`}{" "}
                <strong>live-looped</strong>
                {`, and made in real time! I may also have
                some ambient nature sounds playing in the background from time
                to time, so it's a very relaxing, refreshing kind of vibe.`}
              </span>
            </p>
            <p className={css.text}>{text2}</p>
          </Col>
        </Row>
        <Row>
          <Col className="my-3 d-flex justify-content-center">
            <div>
              <MediaLinks />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

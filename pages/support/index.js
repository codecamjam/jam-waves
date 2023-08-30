import { CardTitle, Icon } from "@/components";
import { useAppContext } from "@/context";
import { Card, Container, Row, Col } from "react-bootstrap";
import css from "./support.module.scss";

const Heart = () => (
  <div className={css.heart}>
    <Icon spriteName="icon-heart" />
  </div>
);

const defaultSizes = { xs: 12, sm: 12, md: 12, lg: 4, xl: 4 };

export default function Support() {
  const { darkMode } = useAppContext();
  return (
    <Container className={`my-auto px-0 mx-0  ${css.support}`}>
      <Card className="pb-2 px-3 position-relative">
        <h1 className="font-zilla-slab-highlight">TOYS FROM TAIWAN</h1>
        <CardTitle element="h2">
          <Heart />
          THANK YOU
          <Heart />
        </CardTitle>
        <p className="ml-2 py-2">
          I am truly passionate about creating live music, and I sincerely
          appreciate your visit and contribution to my work! Your support and
          encouragement mean the world to me. Please spread the word with your
          friends and loved ones about me and my Toys From Taiwan! Thanks again,
          and I hope to play for you someday soon!
        </p>
        <h3 className={css.tips}>{`$Feelin Tipsy?$`}</h3>
        <Row className="">
          <Col
            {...defaultSizes}
            className="d-flex flex-column align-items-center my-2"
          >
            <p className={css.payer}>CASH APP</p>

            <a
              href="https://cash.app/$jamcamfam"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <Icon spriteName="icon-cashapp" />
              <span>$jamcamfam</span>
            </a>
          </Col>
          <Col
            {...defaultSizes}
            className={`d-flex flex-column align-items-center my-2 ${css.tape}`}
          >
            <Icon spriteName="icon-tape" />
          </Col>
          <Col
            {...defaultSizes}
            className="d-flex flex-column align-items-center my-2"
          >
            <p className={css.payer}>VENMO</p>

            <a
              href="https://account.venmo.com/u/jamcamfam"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <Icon spriteName="icon-venmo" />
              <span>$jamcamfam</span>
            </a>
          </Col>
        </Row>

        <div className="pt-2">
          <CardTitle>
            <Heart />
            THANK YOU
            <Heart />
          </CardTitle>
        </div>
      </Card>
    </Container>
  );
}

import { CardTitle, Icon, Picture, MediaLinks } from "@/components";
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
    <>
     <div className="mt-2">
     <Picture
       img="derp.jpeg"
       alt="cartoon drawing of jam's face"
       w={500}
       h={296}
     />
   </div>
   <div className="mt-3 mx-auto">
        <MediaLinks />
      </div>
    <Container className={`my-auto px-0 mx-0 mt-4 ${css.support}`}>
      <Card className="pb-2 pt-4 px-3 position-relative">
        <h2 className={css.tips}>{`$$Feelin Tipsy?`}</h2>
        <p
          className={css.instructions}
        >{`(Tap an icon below to send a tip! Thank you!)`}</p>
        <Row className="">
          <Col
            {...defaultSizes}
            className="d-flex flex-column align-items-center my-2"
          >
            <p className={css.payer}>CASH APP</p>

            <a
              href="https://cash.app/$jamontheweb"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <Icon spriteName="icon-cashapp" />
            </a>
          </Col>
          {/* <Col
            {...defaultSizes}
            className={`d-flex flex-column align-items-center my-2 ${css.tape}`}
          >
            <Icon spriteName="icon-tape" />
          </Col> */}
          <Col
            {...defaultSizes}
            className="d-flex flex-column align-items-center my-2"
          >
            <p className={css.payer}>VENMO</p>

            <a
              href="https://account.venmo.com/u/jamontheweb"
              target="_blank"
              rel="noopener noreferrer"
              className={`mb-2 ${css.venmo}`}
            >
              <Icon spriteName="icon-venmo" />
            </a>
          </Col>
          <Col
            {...defaultSizes}
            className="d-flex flex-column align-items-center my-2"
          >
            <p className={css.payer}>PAYPAL</p>

            <a
              href="https://www.paypal.com/paypalme/toysfromtaiwan"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <Icon spriteName="icon-paypal" />
            </a>
          </Col>
        </Row>

        <CardTitle element="h3">
          <Heart />
          THANK YOU
          <Heart />
        </CardTitle>
        <p className="ml-2 pb-2">
          I am truly passionate about creating live music, and I sincerely
          appreciate your visit and contribution to my work! Your support and
          encouragement mean the world to me. Please spread the word with your
          friends and loved ones about Toys From Taiwan! Thanks
          again, and I hope to play for you someday soon!
        </p>
      </Card>
    </Container>
   </>
  );
}

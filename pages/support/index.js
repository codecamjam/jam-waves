import { Icon } from "@/components";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Support() {
  return (
    <Container className="mb-auto mt-5">
      <Card className="p-4">
        <h2 className="fw-bold text-center mb-4">THANK YOU FOR LISTENING!</h2>

        <Row className="mb-3">
          <Col xs={2} className="d-flex align-items-center">
            {/* Replace with your icon component */}
            <Icon spriteName="icon-venmo" />
          </Col>
          <Col xs={10} className="d-flex align-items-center">
            <a
              href="www.venmo-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              venmo: www.venmo-link.com
            </a>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={2} className="d-flex align-items-center">
            {/* Replace with your icon component */}
            <Icon spriteName="icon-cashapp" />
          </Col>
          <Col xs={10} className="d-flex align-items-center">
            <a
              href="www.cashapp-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              cashapp: www.cashapp-link.com
            </a>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={2} className="d-flex align-items-center">
            {/* Replace with your icon component */}
            <Icon spriteName="icon-paypal" />
          </Col>
          <Col xs={10} className="d-flex align-items-center">
            <a
              href="www.paypal-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              paypal: www.paypal-link.com
            </a>
          </Col>
        </Row>

        <p className="text-center">
          I am truly passionate about creating live looping music, and I deeply
          appreciate your visit and contribution to support my work. Your
          support means the world to me!
        </p>
      </Card>
    </Container>
  );
}

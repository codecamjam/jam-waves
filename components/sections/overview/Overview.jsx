import { Carousel, Container } from "react-bootstrap";
import guitar from "../../assets/img/guitar.jpg";
import worship from "../../assets/img/worship.jpg";
import cabling from "../../assets/img/cabling.jpg";

import css from "./Overview.module.scss";

const Overview = () => {
  return (
    <section className={css.overview}>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={guitar}
              alt="Clay playing guitar"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={worship}
              alt="Clay streaming church service"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={css.img}
              src={cabling}
              alt="Clay laying down cable"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Overview;

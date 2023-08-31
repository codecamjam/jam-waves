import css from "./shows.module.scss";
import { Container, Card, Row, Col } from "react-bootstrap";
import { shows } from "@/utils";
import { CardTitle, Heart, LoadingGears, Icon } from "@/components";

function BookingSoon() {
  return (
    <>
      <div className={css.gears}>
        <LoadingGears />
      </div>
    </>
  );
}

export default function ShowsPage() {
  return (
    <Container fluid="sm" className={`${css.shows} mx-0 px-0 mt-4 mb-auto`}>
      <Card className="position-relative">
        <div className={css.calendars}>
          <div className={css.calendar1}>
            <Icon spriteName="icon-calendar" />
          </div>

          <div className={css.calendar2}>
            <Icon spriteName="icon-calendar" />
          </div>
          <div className={css.calendar3}>
            <Icon spriteName="icon-calendar" />
          </div>
          <div className={css.calendar4}>
            <Icon spriteName="icon-calendar" />
          </div>
        </div>
        <h2 className=" mt-2 text-center h2 fw-bold text-uppercase text-decoration-underline">{` I'm booking shows soon!`}</h2>
        <div className="">
          <h3 className="px-3 pt-1 mt-3 mb-1 h4 text-uppercase fw-bold">
            Upcoming SHOWS:
          </h3>
          <section className="px-3 pt-2">
            <p className="p-0 mb-0">
              {` I am currently hard at work, meticulously scheduling and booking
              upcoming shows. I am passionate about live instrumental music and
              I'm eager to perform in venues where original music is truly
              appreciated. Please check back soon! I will be starting my live
              performances this Fall. While I'll primarily be performing locally
              in Jacksonville and St. Augustine, please don't hesitate to reach
              out if you'd like me to visit your town and play for you! Thank
              you once again for stopping by, and keep an eye out for updates on
              upcoming shows!`}
            </p>
          </section>
        </div>
        <BookingSoon />
      </Card>
    </Container>
  );
}

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Image from "next/image";

import {
  arrowImage,
  leftContainerBreakPoints,
  rightContainerBreakPoints,
} from "./constant";
import {
  arrowImageContainerClasses,
  buttonClasses,
  descriptionClasses,
  dishImageClasses,
  headingClasses,
  inputClasses,
  mainContainerClasses,
  mainRowClasses,
  rightContainerClasses,
  subHeadingClasses,
} from "./styles/contact";

const ContactUs: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <Container>
        <Row className={mainRowClasses}>
          <Col {...leftContainerBreakPoints} className={rightContainerClasses}>
            <div className={dishImageClasses}>
              <Image
                src={"/contact-1.jpg"}
                fill
                alt="OurStrength Image"
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </Col>

          <Col {...rightContainerBreakPoints}>
            <div className={arrowImageContainerClasses}>
              <Image {...arrowImage} />
              <p className={subHeadingClasses}>Booking table</p>
            </div>
            <p className={headingClasses}>Make A Reservations</p>
            <p className={descriptionClasses}>
              Sit amet consectetur adipiscing elitsue risus mauris adipiscing
              phasellus aene ante orcirat
            </p>

            <Form>
              <Form.Control placeholder="Your Name" className={inputClasses} />
              <Form.Control
                placeholder="Phone Number"
                className={inputClasses}
              />
              <Form.Control
                placeholder="Message"
                as="textarea"
                rows={5}
                className={inputClasses}
              />
              <Button className={buttonClasses} variant="text">
                Book a Table
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;

import { Button, Col, Container, Row } from "react-bootstrap";

import {
  buttonClasses,
  buttonContainerClasses,
  descriptionClasses,
  dishImageClasses,
  headingClasses,
  leftBackgroundClasses,
  leftContainerClasses,
  mainContainerClasses,
  mainRowClasses,
} from "./styles/hero";
import Image from "next/image";
import {
  arrowImage,
  heroDetail,
  leftContainerBreakPoints,
  rightContainerBreakPoints,
} from "./constant";

const Hero: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <Container>
        <Row className={mainRowClasses}>
          <Col {...leftContainerBreakPoints} className={leftContainerClasses}>
            <div className={leftBackgroundClasses} />
            <p className={headingClasses}>{heroDetail.heading}</p>
            <p className={descriptionClasses}>{heroDetail.description}</p>
            <div className={buttonContainerClasses}>
              <Image {...arrowImage} />
              <Button className={buttonClasses} variant="text">
                learn more
              </Button>
            </div>
          </Col>

          <Col {...rightContainerBreakPoints}>
            <div className={dishImageClasses}>
              <Image
                src={"/hero-1.jpg"}
                fill
                alt="OurStrength Image"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

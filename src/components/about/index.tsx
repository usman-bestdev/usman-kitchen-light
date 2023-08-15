import { Button, Col, Container, Row } from "react-bootstrap";

import {
  arrowImageContainerClasses,
  buttonClasses,
  columnClasses,
  descriptionClasses,
  dishImageClasses,
  headingClasses,
  mainContainerClasses,
  subHeadingClasses,
} from "./styles/about";
import Image from "next/image";
import {
  aboutDescription,
  aboutDishImages,
  arrowImage,
  leftContainerBreakPoints,
  rightContainerBreakPoints,
  rightInnerBreakPoints,
} from "./constant";

const About: React.FC = () => {
  return (
    <Container className={mainContainerClasses}>
      <Row className="m-0">
        <Col {...leftContainerBreakPoints} className={columnClasses}>
          <div className={arrowImageContainerClasses}>
            <Image {...arrowImage} />
            <p className={subHeadingClasses}>{aboutDescription.subHeading}</p>
          </div>
          <p className={headingClasses}>{aboutDescription.heading}</p>
          <p className={descriptionClasses}>{aboutDescription.description}</p>
          <Button className={buttonClasses} variant="text">
            learn more
          </Button>
        </Col>

        <Col {...rightContainerBreakPoints}>
          <Row>
            {aboutDishImages.map((item) => (
              <Col
                {...rightInnerBreakPoints}
                key={item.src}
                className={columnClasses}>
                <div className={dishImageClasses}>
                  <Image {...item} />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

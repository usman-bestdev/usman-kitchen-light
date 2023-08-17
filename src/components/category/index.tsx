import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { animateFadeInDownBig } from "@/animation/animation";
import { breakPoints, categoryCards, categoryDetail } from "./constant";
import {
  buttonContainerClasses,
  cardImageClasses,
  headingClasses,
  mainBackgroundClasses,
  mainContainerClasses,
  mainRowClasses,
  subHeadingClasses,
} from "./styles/category";

const Category: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={mainContainerClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={mainBackgroundClasses} />
      <p className={subHeadingClasses}>{categoryDetail.subHeading}</p>
      <p className={headingClasses}>{categoryDetail.heading}</p>
      <Container>
        <Row className={`m-0 ${isHovered ? animateFadeInDownBig : ""}`}>
          {categoryCards.map((card) => (
            <Col {...breakPoints} key={card.name} className="p-3 ">
              <Card className="cursorPointer">
                <Card.Body>
                  <div className={mainRowClasses}>
                    <Card.Img
                      variant="top"
                      src={card.imageSrc}
                      className={cardImageClasses}
                    />
                    <Card.Title>{card.name}</Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className={buttonContainerClasses}>
          <Button variant="outline-light ">{categoryDetail.buttonLabel}</Button>
        </div>
      </Container>
    </div>
  );
};

export default Category;

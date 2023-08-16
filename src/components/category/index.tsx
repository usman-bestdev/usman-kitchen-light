import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import {
  buttonContainerClasses,
  cardImageClasses,
  headingClasses,
  mainBackgroundClasses,
  mainContainerClasses,
  mainRowClasses,
  subHeadingClasses,
} from "./styles/category";
import { breakPoints, categoryCards, categoryDetail } from "./constant";

const Category: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <div className={mainBackgroundClasses} />
      <p className={subHeadingClasses}>{categoryDetail.subHeading}</p>
      <p className={headingClasses}>{categoryDetail.heading}</p>
      <Container>
        <Row className="m-0">
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

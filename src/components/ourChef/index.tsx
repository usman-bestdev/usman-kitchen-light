import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { arrowImage, chefImagesData, ourChefDetail } from "./constant";
import {
  arrowImageContainerClasses,
  buttonClasses,
  chefImageClasses,
  descriptionClasses,
  headingClasses,
  mainContainerClasses,
  subHeadingClasses,
} from "./styles/ourChef";

const OurChef: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <Container>
        <Row className="m-0">
          <Col xl={4} lg={12} md={12} sm={12}>
            <div className={arrowImageContainerClasses}>
              <Image {...arrowImage} />
              <p className={subHeadingClasses}>{ourChefDetail.subHeading}</p>
            </div>
            <p className={headingClasses}>{ourChefDetail.heading}</p>
            <p>25 Years of Experience in Restaurant Services in USA</p>
            <p>Any Kind Of Food Made For Customer and So Much Yamee $ Testy </p>
            <p className={descriptionClasses}>{ourChefDetail.description}</p>
            <Button className={buttonClasses}>Become a chef</Button>
          </Col>

          <Col xl={8} lg={12} md={12} sm={12}>
            <Row className="m-0">
              {chefImagesData.map((chefData, index) => (
                <Col xl={4} md={4} sm={12} key={index}>
                  <div className={chefImageClasses}>
                    <Image {...chefData} />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurChef;

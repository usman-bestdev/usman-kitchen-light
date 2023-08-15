import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import {
  arrowImageContainerClasses,
  chefImageClasses,
  subHeadingClasses,
  mainBackgroundClasses,
  mainContainerClasses,
  headingClasses,
  descriptionClasses,
} from "./styles/ourChef";
import {
  arrowImage,
  chefImageSize,
  chefImagesData,
  ourChefDetail,
} from "./constant";

const OurChef: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <div className={mainBackgroundClasses} />
      <Container>
        <Row className="m-0">
          <Col xl={4} lg={12} md={12} sm={12}>
            <div className={arrowImageContainerClasses}>
              <Image {...arrowImage} />
              <p className={subHeadingClasses}>{ourChefDetail.subHeading}</p>
            </div>
            <p className={headingClasses}>{ourChefDetail.heading}</p>
            <p className={descriptionClasses}>{ourChefDetail.description}</p>
          </Col>

          <Col xl={8} lg={12} md={12} sm={12}>
            <Row className="m-0">
              {chefImagesData.map((chefData) => (
                <Col xl={4} md={6} sm={12} key={chefData.imageSrc}>
                  <div className={chefImageClasses}>
                    <Image
                      style={{ objectFit: "contain", padding: "8px" }}
                      src={chefData.imageSrc}
                      fill
                      sizes={chefImageSize}
                      alt={chefData.imageSrc}
                      priority
                    />
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

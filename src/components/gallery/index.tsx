import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { galleryImagesData } from "./constant";
import { galleryImageClasses, mainContainerClasses } from "./styles/gallery";

const Gallery: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <Container>
        <Row className="m-0">
          {galleryImagesData.map((gallery, index) => (
            <Col xl={2} lg={3} md={4} sm={6} key={index} className="p-0 py-2">
              <div className={galleryImageClasses}>
                <Image {...gallery} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;

import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { galleryImagesData } from "./constant";
import { galleryImageClasses, mainContainerClasses } from "./styles/gallery";
import { animateFadeIn } from "@/animation/animation";

const Gallery: React.FC = () => {
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
      <Container>
        <Row className={`m-0 ${isHovered ? animateFadeIn : ""}`}>
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

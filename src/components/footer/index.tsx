import { Col, Container, ListGroup, Row } from "react-bootstrap";

import Image from "next/image";
import { logoImage } from "./constant";
import {
  footerBottomClasses,
  listGroupItemClasses,
  logoContainerClasses,
  mainBackgroundClasses,
  mainContainerClasses,
} from "./styles/footer";

const Footer: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <div className={mainBackgroundClasses} />
      <Container>
        <Row className="m-0">
          <Col lg={3} md={6}>
            <div className={logoContainerClasses}>
              <Image {...logoImage} />
            </div>
            <p className="secondaryColor mt-5">
              Sit amet consectetur adipiscing elitsue risus mauris adipis
            </p>
          </Col>

          <Col lg={2} md={6}>
            <p className="primaryFont h3">Quick Links</p>
            <ListGroup>
              {["HOME", "MENUS", "ABOUT US", "OUR CHEFS", "CONTACT"].map(
                (item) => (
                  <ListGroup.Item key={item} className={listGroupItemClasses}>
                    <p className="p-0 secondaryColor m-0">{item}</p>
                  </ListGroup.Item>
                )
              )}
            </ListGroup>
          </Col>

          <Col lg={4} md={6}>
            <Row className="m-0">
              <p className="primaryFont h3 p-0">Products</p>
              <Col lg={6} md={6} className="p-0">
                {[
                  "Hamburger",
                  "Chicken Burger",
                  "Vegetable Pizza",
                  "Chicken Roll",
                  "Ice Cream",
                ].map((item) => (
                  <ListGroup.Item key={item} className={listGroupItemClasses}>
                    <p className="py-2 secondaryColor m-0">{item}</p>
                  </ListGroup.Item>
                ))}
              </Col>
              <Col lg={6} md={6} className="p-0">
                {[
                  "Potato",
                  "Orange Juice",
                  "Lemon Juice",
                  "Muton Tikka",
                  "Seafood",
                ].map((item) => (
                  <ListGroup.Item key={item} className={listGroupItemClasses}>
                    <p className=" secondaryColor m-0 py-2">{item}</p>
                  </ListGroup.Item>
                ))}
              </Col>
            </Row>
          </Col>
          <Col lg={3} md={6}>
            <p className="secondaryColor ">Call for order:</p>
            <p className="primaryFont h3">+1 2345 6789 </p>
            <p>abc@abc.com</p>
            <p className="secondaryColor ">Location:</p>
            <p>119 Tanglewood Lane Gulfport, MS 39503</p>
          </Col>
        </Row>
      </Container>
      <div className={footerBottomClasses}>
        <p className="secondaryColor text-center">
          © 2023 Usman, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

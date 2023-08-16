import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import {
  bestFoodData,
  leftContainerBreakPoints,
  mainDish,
  rightContainerBreakPoints,
} from "./constant";
import {
  columnClasses,
  dishImageClasses,
  dishImageContainerClasses,
  itemContainerClasses,
  itemDescriptionClasses,
  itemHeadingClasses,
  itemImageClasses,
  itemReviewClasses,
  mainBackgroundClasses,
  mainContainerClasses,
} from "./styles/bestFood";

const BestFood: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <div className={mainBackgroundClasses} />
      <Container>
        <Row className="m-0">
          <Col {...leftContainerBreakPoints} className={columnClasses}>
            <div className={dishImageContainerClasses}>
              <Image {...mainDish} className={dishImageClasses} />
            </div>
          </Col>

          <Col {...rightContainerBreakPoints} className={columnClasses}>
            {bestFoodData.map((item) => (
              <Row className="m-0 my-3" key={item.name}>
                <Col xl={4} lg={4} md={4} className="p-0 ">
                  <Image {...item.image} className={itemImageClasses} />
                </Col>
                <Col xl={8} lg={8} className={itemContainerClasses}>
                  <p className={itemHeadingClasses}>
                    {item.name}
                    <span className="dotBorder" />
                    {item.price}
                  </p>
                  <p className={itemDescriptionClasses}>
                    Roasted langoustine, consommé
                  </p>
                  <p className={itemReviewClasses}>(5K reviews)</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BestFood;

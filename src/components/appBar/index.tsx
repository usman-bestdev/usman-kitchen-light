import Image from "next/image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import {
  buttonClasses,
  inputClasses,
  logoContainerClasses,
  mainContainerClasses,
  offcanvasNavClasses,
} from "./styles/appBar";
import { logoImage } from "./constant";

function AppBar() {
  return (
    <Navbar
      expand={"xl" || "lg" || "md"}
      className={`${mainContainerClasses}`}
      sticky="top">
      <Container fluid>
        <Navbar.Toggle />
        <div className={logoContainerClasses}>
          <Image {...logoImage} />
        </div>

        <Navbar.Offcanvas placement="start">
          <Offcanvas.Header closeButton>
            <div className={logoContainerClasses}>
              <Image {...logoImage} />
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className={offcanvasNavClasses}>
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/">MENU</Nav.Link>
              <Nav.Link href="/">ABOUT</Nav.Link>
              <Nav.Link href="/">SHOP</Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className={inputClasses}
                />
                <Button className={buttonClasses} variant="outline">
                  Search
                </Button>
              </Form>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default AppBar;

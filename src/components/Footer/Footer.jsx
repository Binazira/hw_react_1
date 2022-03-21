import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = (props) => {
  const arr = [1, 2, 3, 4, 5];
  props.getArr(arr);
  return (
    <div>
      <Navbar bg="info" style={{ marginTop: "30px" }}>
        <Container>
          <Navbar.Brand href="#home">Footer </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Binazir Usenkanova</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;

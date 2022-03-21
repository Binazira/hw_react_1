import React from "react";
import { Card, Button } from "react-bootstrap";

const Section = () => {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "30px" }}>
        <Card.Img
          variant="top"
          src="https://st2.depositphotos.com/1000423/9290/i/950/depositphotos_92909438-stock-photo-angel-girl-in-dress.jpg"
        />
        <Card.Body>
          <Card.Title>JavaScript</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: "30px" }}>
        <Card.Img
          variant="top"
          src="https://st2.depositphotos.com/1000423/9290/i/950/depositphotos_92909438-stock-photo-angel-girl-in-dress.jpg"
        />
        <Card.Body>
          <Card.Title>JavaScript</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Section;

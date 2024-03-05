import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardImg } from "react-bootstrap"; // Import CardImg directly for consistency
import Img1 from "../../assets/div.haru-icon-box__icon.svg";
import Img2 from "../../assets/div.haru-icon-box__icon(1).svg";
import Img3 from "../../assets/div.haru-icon-box__icon(2).svg";
import Img4 from "../../assets/div.haru-icon-box__icon(3).svg";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

function cardHero() {
  return (
    <>
      <div className="four-card-here d-flex justify-content-center align-items-center">
        {" "}
        <Row xs={1} md={2} lg={4} className="g-2 py-2">
          {/* ... card loop */}
          {cards.map((card, index) => (
            <Col key={index}>
              <Card className="Carddown d-flex justify-content-center align-items-center text-align-center border-0">
                {" "}
                <CardImg variant="top" src={card.imgSrc} alt={card.imgAlt} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Nav
        className=" my-4 px-0 py-2"
        style={{
          textColor: "#B479D9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          className="fw-bold justify-content  -center"
          btn
          style={{
            backgroundColor: "#B479D9",
            textColor: "#B479D9",
            width: "200px",
          }}
        >
          Quality Services
        </Button>
        <h2 className="fw-bold">T-Shirt Printing for Everyone</h2>
      </Nav>
    </>
  );
}

// Define card data for easy management
const cards = [
  {
    imgSrc: Img1,
    imgAlt: "Print",
    title: "Pricing Services",
    text: "Description 2",
  },
  {
    imgSrc: Img2,
    imgAlt: "Scan",
    title: "Digital Scanning",
    text: "Description 2",
  },
  {
    imgSrc: Img3,
    imgAlt: "Design",
    title: "Design Services",
    text: "Description 3",
  },
  {
    imgSrc: Img4,
    imgAlt: "Copy",
    title: "Copying Services",
    text: "Description 4",
  },
];

export default cardHero;

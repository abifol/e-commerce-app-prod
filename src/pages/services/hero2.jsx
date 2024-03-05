import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Img5 from "../../assets/list-service-1.jpg.svg";
import Img6 from "../../assets/Link.svg";
import Img7 from "../../assets/Link(1).svg";

function ThreeCards() {
  let data = cardData;

  return (
    <div className="d-flex justify-content-center align-items-center px-5">
      <Row xs={1} md={3} className="g-5">
        {data.map((card, index) => (
          <Col key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card.image} alt={card.alt} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <a href="/services" className="btn btn-primary">
                  {card.buttonLabel}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

const cardData = [
  {
    image: Img5,
    alt: "...",
    title: "Graphic Design Services",
    text: "What's more, we do it right! A full administration printing backgroud. Print shirts for yourself or your online business",
    buttonLabel: "Create Your Own",
  },
  {
    image: Img6,
    alt: "...",
    title: "Printing Service",
    text: "What's more, we do it right! A full administration printing backgroud. Print shirts for yourself or your online business",
    buttonLabel: "Print For Yourself",
  },
  {
    image: Img7,
    alt: "...",
    title: "POD for online stores",
    text: "What's more, we do it right! A full administration printing backgroud. Print shirts for yourself or your online business",
    buttonLabel: "Get Started Now",
  },
];

export default ThreeCards;

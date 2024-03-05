import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
// import Checkbox from "react-bootstrap/Checkbox";

function hero3() {
  return (
    <Container className="px-4 py-5 col-xl-10 col-xxl-8">
      <Row alignItems="center" className="g-lg-5 py-5">
        <Col lg={7} className="text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            Vertically centered hero sign-up form
          </h1>
          <p className="col-lg-10 fs-4">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </Col>
        <Col md={10} mx="auto" lg={5}>
          <Form className="p-4 p-md-5 border rounded-3 bg-light">
            <Button variant="primary px-r-5 mb-2" type="click" block size="lg">
              Graphic Design Services
            </Button>
            <FormGroup className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Email address">
                <FormControl type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </FormGroup>
            <FormGroup className="mb-3">
              <FloatingLabel controlId="floatingPassword" label="Password">
                <FormControl type="password" placeholder="Password" />
              </FloatingLabel>
            </FormGroup>
            <FormGroup className="mb-3"></FormGroup>

            <hr className="my-4" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default hero3;

// src/components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function WhyChooseUs() {
  return (
    <section className="why-choose-us text-center py-5 bg-dark text-light">
      <Container>
        <h2>Why Choose Us?</h2>
        <Row className="my-4">
          <Col md={4}>
            <h4>Expert Faculty</h4>
            <p>Our faculty are subject matter experts with practical knowledge.</p>
          </Col>
          <Col md={4}>
            <h4>Complete Success Package</h4>
            <p>Leading Exam Prep Destination with resources, doubt resolution...</p>
          </Col>
          <Col md={4}>
            <h4>Placements</h4>
            <p>Resume building workshops, mock interviews and placement drives.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;

// src/components/BecomeAcca.js
import React, { useState } from 'react';
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';

function BecomeAcca() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="become-acca text-center py-5">
      <Container>
        <h2>Become ACCA in 18 months</h2>
        <p>
          Acquire globally recognized accountancy qualification. ACCA (also called as Global CA), and get placed in top MNCs & Big4s. Begin ACCA prep with SFM now.
        </p>
        <Row className="my-4">
          <Col md={3}><p>Registered Users: 248,796</p></Col>
          <Col md={3}><p>Exam Fees: ₹1,14,637</p></Col>
          <Col md={3}><p>Hours/Week: 1,200-1,800 hrs</p></Col>
          <Col md={3}><p>Faculty & Experts</p></Col>
        </Row>
        <Button variant="primary" onClick={handleShow}>Request Call Back</Button>
        <Button variant="outline-primary" className="ml-2">Download Brochure</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Request Call Back</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Our team will get in touch with you soon!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

export default BecomeAcca;

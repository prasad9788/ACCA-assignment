// src/components/WhatWillYouLearn.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function WhatWillYouLearn() {
  return (
    <section className="what-will-you-learn text-center py-5">
      <Container>
        <h2>What will you Learn in ACCA?</h2>
        <Row className="my-4">
          <Col md={4}>
            <h4>Knowledge Level</h4>
            <ul>
              <li>Business and Technology (BT)</li>
              <li>Management Accounting (MA)</li>
              <li>Financial Accounting (FA)</li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Skill Level</h4>
            <ul>
              <li>Corporate and Business Law (LW)</li>
              <li>Performance Management (PM)</li>
              <li>Taxation (TX)</li>
              <li>Financial Reporting (FR)</li>
              <li>Audit and Assurance (AA)</li>
              <li>Financial Management (FM)</li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Professional Level</h4>
            <ul>
              <li>SBL - Strategic Business Leader</li>
              <li>SBR - Strategic Business Reporting</li>
              <li>Two out of the following:</li>
              <li>Advanced Financial Management (AFM)</li>
              <li>Advanced Performance Management (APM)</li>
              <li>Advanced Taxation (ATX)</li>
              <li>Advanced Audit and Assurance (AAA)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhatWillYouLearn;

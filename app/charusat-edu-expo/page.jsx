"use client";
import { Fragment } from "react";
import { Container, Row, Col, Table, Alert } from "react-bootstrap";
import Link from "next/link";

const CEE = () => {
  return (
    <Fragment>
      <div className="blog-section padding-tb section-bg">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <article>
                <div className="section-wrapper">
                  <h3 className="text-center mb-4">
                    CHARUSAT Education Expo 2024
                  </h3>
                  <h6 className="text-center mb-5">26-29 April 2024</h6>

                  <Row className="justify-content-center">
                    <Col md={6} className="mb-4">
                      <div className="card p-4">
                        <div className="image-placeholder"></div>
                        <h6 className="text-center mt-3">
                          Interactive Workshops
                        </h6>
                        <div className="text-center">
                          <Link
                            href="/coming-soon"
                            className="btn btn-sm btn-danger"
                          >
                            Click here for more details...
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-4">
                      <div className="card p-4">
                        <div className="image-placeholder"></div>
                        <h6 className="text-center mt-3">
                          Eminent Speaker Series
                        </h6>
                        <div className="text-center">
                          <Link
                            href="/coming-soon"
                            className="btn btn-sm btn-danger"
                          >
                            Click here for more details...
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row className="justify-content-center">
                    <Col md={6} className="mb-4">
                      <div className="card p-4">
                        <div className="image-placeholder"></div>
                        <h6 className="text-center mt-3">
                          Entertainment Programs
                        </h6>
                        <div className="text-center">
                          <Link
                            href="/coming-soon"
                            className="btn btn-sm btn-danger"
                          >
                            Click here for more details...
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-4">
                      <div className="card p-4">
                        <div className="image-placeholder"></div>
                        <h6 className="text-center mt-3">Expo Exhibits</h6>
                        <div className="text-center">
                          <Link
                            href="/coming-soon"
                            className="btn btn-sm btn-danger"
                          >
                            Click here for more details...
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Alert className="text-center mt-5">
                    <h5 className="mb-0">Education Expo 2024 Schedule</h5>
                  </Alert>

                  <div
                    className="mt-4"
                    style={{ margin: "auto", width: "75%" }}
                  >
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10.30 am to 12.30 pm</td>
                          <td>Expo & Institute Visit</td>
                        </tr>
                        <tr>
                          <td>12.30 pm to 1.30 pm</td>
                          <td>Self-Refreshments</td>
                        </tr>
                        <tr>
                          <td>2.00 pm to 4.00 pm</td>
                          <td>Technical Workshop</td>
                        </tr>
                        <tr>
                          <td>4.15 pm to 5.15 pm</td>
                          <td>Career Guidance/ Awareness/Query Session</td>
                        </tr>
                        <tr>
                          <td>5.30 pm onwards</td>
                          <td>Entertainment/ Motivation Talk</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .image-placeholder {
          height: 200px;
          background-color: #ccc; /* Placeholder color */
          background-image: url("/placeholder-image.jpg"); /* Placeholder image */
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
        }

        .image-placeholder:hover {
          transform: scale(1.05);
        }

        .card h6 {
          color: #333; /* Title font color */
          background-color: #f8f9fa; /* Title background color */
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </Fragment>
  );
};

export default CEE;

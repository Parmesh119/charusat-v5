import { Fragment } from "react";
import { Container, Row, Col, Table, Alert } from "react-bootstrap";
import Link from "next/link";
const CEE = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3 className="text-center">
                              CHARUSAT Education Expo 2024{" "}
                            </h3>
                            <h6 className="text-center">26-29 April 2024</h6>

                            <br />

                            <Container>
                              <Row className="p-2">
                                <Col>
                                  <div className="card  p-4">
                                    <h6 className="text-center">
                                      Interactive Workshops
                                    </h6>
                                    <p>
                                      <br />
                                      <br />
                                    </p>
                                    <Link
                                      href="/coming-soon"
                                      className="btn btn-sm btn-danger text-white p-2"
                                    >
                                      {" "}
                                      Click here for more details...
                                    </Link>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="card  p-4">
                                    <h6 className="text-center">
                                      Eminent Speaker Series
                                    </h6>
                                    <p>
                                      <br />
                                      <br />
                                    </p>
                                    <Link
                                      href="/coming-soon"
                                      className="btn btn-sm btn-danger text-white p-2"
                                    >
                                      {" "}
                                      Click here for more details...
                                    </Link>
                                  </div>
                                </Col>
                              </Row>
                              <Row className="p-2">
                                <Col>
                                  <div className="card  p-4">
                                    <h6 className="text-center">
                                      Entertainment Programs
                                    </h6>
                                    <p>
                                      <br />
                                      <br />
                                    </p>
                                    <Link
                                      href="/coming-soon"
                                      className="btn btn-sm btn-danger text-white p-2"
                                    >
                                      {" "}
                                      Click here for more details...
                                    </Link>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="card  p-4">
                                    <h6 className="text-center">
                                      Expo Exhibits
                                    </h6>
                                    <p>
                                      <br />
                                      <br />
                                    </p>
                                    <Link
                                      href="/coming-soon"
                                      className="btn btn-sm btn-danger text-white p-2"
                                    >
                                      {" "}
                                      Click here for more details...
                                    </Link>
                                  </div>
                                </Col>
                              </Row>
                              <br />

                              <Row className="p-2">
                                <Col>
                                  <Alert className="text-center ">
                                    <h5
                                      className=" mb-0"
                                      style={{ "margin-bottom": "0" }}
                                    >
                                      Education Expo 2024 Schedule
                                    </h5>
                                  </Alert>
                                </Col>
                              </Row>
                              <Row className="p-2">
                                <Col>
                                  <div style={{ margin: "auto", width: "75%" }}>
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
                                          <td>
                                            Career Guidance/ Awareness/Query
                                            Session
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>5.30 pm onwards</td>
                                          <td>
                                            Entertainment/ Motivation Talk
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </Col>
                              </Row>
                            </Container>
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CEE;

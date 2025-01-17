"use client";
import { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import img1 from "@/public/assets/images/advertisment_nov_2022.webp"
import Image from "next/image";
// import { Link } from "next/link";
//import PageHeader from "../component/layout/pageheader";
// import career1_img from "../assets/images/advertisment_nov_2022.webp";

const Certification_Courses = () => {
  return (
    <Fragment>
      <title>Careers @ CHARUSAT</title>
      <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Career " />
      <meta name="keywords" content="" />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="translate" />
      <meta name="google" content="nopagereadaloud" />
      <meta property="og:type" content="homepage" />
      <meta property="og:title" content="CSPIT Homepage" />
      <meta
        property="og:description"
        content="CSPIT - best engineering college to study in Gujarat."
      />
      <meta name="author" content="CHARUSAT Web Team" />

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
                            <h3>Work With Us :</h3>
                            <hr />
                            <br />
                            <Container>
                              <Row className="p-2">
                                <Col md={8}>
                                  <h6 className="fw-bold">
                                    Recruitment - Various positions
                                  </h6>

                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                  >
                                    Apply Now
                                  </a>
                                </Col>
                                {/* <Col md={4}>
                                  <h6 className="fw-bold">
                                    Recruitment - Various positions
                                  </h6>

                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                  >
                                    Apply Now
                                  </a>
                                </Col> */}
                              </Row>
                            </Container>
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

export default Certification_Courses;

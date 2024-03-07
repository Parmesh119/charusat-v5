import {  Fragment } from "react";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import PageHeader from "../component/layout/pageheader";
import Contact from "@/components/section/contact";
// import InquiryForm from "../files/InquiryForm.pdf";
import Lib_1 from "@/public/assets/images/lib-1.jpg";
import Head from "next/head";

const Library = () => {
  return (
    <Fragment>
      <Head>
        <title>Library @ CHARUSAT</title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
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
        <meta property="og:description" content="CSPIT - best engineering college to study in Gujarat." />
        <meta name="author" content="CHARUSAT Web Team" />
      </Head>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Library Resources</h3>
                            <hr />
                            <br />
                            <Container>
                              <Row>
                                <Col>
                                  <Image src={Lib_1} thumbnail />
                                  
                                    <h6>For Knimbus</h6>

                                    <a
                                      className="lab-btn"
                                      href="https://scpit.knimbus.com/user#/home"
                                    >
                                      <span>Click Here</span>
                                    </a>

                                    <br />
                                  
                                </Col>
                                <Col>
                                  <Image src={Lib_1} thumbnail />
                                  
                                    <h6>For SOUL WEBOPAC by INFLIBNET</h6>

                                    {/* <a
                                      className="lab-btn"
                                      href="http://172.16.11.69/WebOPAC/"
                                    >
                                      <span>Click Here</span>
                                    </a> */}

                                    <br />
                                 
                                </Col>
                              </Row>
                            </Container>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Dr. Dinesh Patel"
              email="dineshpatel.lib@charusat.ac.in"
              phone="+91-2697-265032"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Library;

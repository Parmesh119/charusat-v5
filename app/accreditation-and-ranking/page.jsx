"use client"
import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Cycle1 from "@/components/sidebar/NAAC-Cycle-1";
import Cycle2 from "@/components/sidebar/NAAC-Cycle-2";
import Contact from "@/components/section/contact";
import NIRF from "@/components/sidebar/NIRF";
import GSIRF from "@/components/sidebar/GSIRF";
import Image from "next/image";
import Coe1 from "@/public/assets/images/achive/COE-Certificate.jpg"
import CoeCertificate from "@/components/files/Accreditation/updated/COE-Notification.pdf"

const Accreditation = () => {
  const [openSection, setOpenSection] = useState('');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <Fragment>
      <Head>
        <title>Accreditation</title>
        <title>Accreditation</title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Accreditation earned by CHARUSAT" />
        <meta
          name="keywords"
          content="NAAC Accreditation, NBA Accreditated, Accreditation, CHARUSAT Accreditated A grade by NAAC, CHARUSAT Accreditated A grade by GSIRF and KCG"
        />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="Accreditatiron Homepage" />
        <meta
          property="og:description"
          content="Accreditation - CHARUSAT accreditated with A grade by NAAC"
        />
        <meta name="author" content="CHARUSAT Web Team" />
      </Head>
      <div className="course-single-section padding-tb section-bg">
        <div className="container post-item style-2">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="post-inner">
                <div className="post-content">
                  <div className="main-part">
                    <div className="course-item">
                      <div className="course-inner">
                        <div className="course-content">
                          <h3>Accreditation &amp; Ranking </h3>
                          <hr />
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="course-video">
                      <div className="course-video-content">
                        <div className="accordion" id="accordionExample">
                          {/* Accreditation Section */}
                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion01">
                              <button
                                className="d-flex flex-wrap justify-content-between"
                                onClick={() => toggleSection('Accreditation')}
                              >
                                <span style={{ color: "white" }}>Accreditation</span>{" "}
                                <span style={{ color: "white" }}>
                                  <i className={`icofont-square-${openSection === 'Accreditation' ? 'up' : 'down'}`}></i>
                                </span>{" "}
                              </button>
                            </div>
                            <div
                              id="videolist1"
                              className={`accordion-collapse collapse${openSection === 'Accreditation' ? ' show' : ''}`}
                              aria-labelledby="accordion01"
                            >
                              <div className="row">
                                <div className="col-lg-6">
                                  <Cycle2 />
                                </div>
                                <div className="col-lg-6">
                                  <Cycle1 />
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>

                          {/* Ranking Section */}
                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion02">
                              <button
                                className="d-flex flex-wrap justify-content-between"
                                onClick={() => toggleSection('Ranking')}
                              >
                                <span style={{ color: "white" }}>Ranking</span>{" "}
                                <span style={{ color: "white" }}>
                                  <i className={`icofont-square-${openSection === 'Ranking' ? 'up' : 'down'}`}></i>
                                </span>{" "}
                              </button>
                            </div>
                            <div
                              id="videolist2"
                              className={`accordion-collapse collapse${openSection === 'Ranking' ? ' show' : ''}`}
                              aria-labelledby="accordion02"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="row">
                                <div className="col-lg-6">
                                  <NIRF />
                                </div>
                                <div className="col-lg-6">
                                  <GSIRF />
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>

                          {/* CoE Section */}
                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion03">
                              <button
                                className="d-flex flex-wrap justify-content-between"
                                onClick={() => toggleSection('CoE')}
                              >
                                <span style={{ color: "white" }}>CoE, Government of Gujarat</span>{" "}
                                <span style={{ color: "white" }}>
                                  <i className={`icofont-square-${openSection === 'CoE' ? 'up' : 'down'}`}></i>
                                </span>{" "}
                              </button>
                            </div>
                            <div
                              id="videolist3"
                              className={`accordion-collapse collapse${openSection === 'CoE' ? ' show' : ''}`}
                              aria-labelledby="accordion03"
                              data-bs-parent="#accordionExample"
                            >
                              <p>
                                The Government of Gujarat has granted CHARUSAT the
                                status of a Center of Excellence.
                              </p>
                              <Link href="https://charusat.ac.in/files/iqac/coe/CoEApplicationData.pdf" className="lab-btn">
                                <span>Application Data</span>
                              </Link>
                              <br />
                              <br />
                              {/* <Image src={Coe1} alt="" height={100} width={100}/> */}
                              <Link
                                class="lab-btn btn111"
                                href={CoeCertificate}
                                target="_blank"
                              >
                                <span>COE Certificate</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Contact
              name="Dr Mayur Sutaria"
              email="coordinator.iqac@charusat.ac.in"
              phone="+91-2697-265037"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Accreditation;


"use client";
import Link from "next/link";
// import GoogleMap from "../sidebar/googlemap";
// import TheActFirstStatutes from "../../files/Footer-3/CHARUSAT-STATUTES HANDBOOK.pdf";
import { useState, useEffect } from "react";
const title = "Contact";
//const desc =  "Eduaid theme numb  er one world class university in the world There are student are studing always in this university for all time.";
// const courseTitle = "Courses";
const quickTitle = "Quick Links";
const googleMapTitle = "Map";
// const tweetTitle = "Recent Tweets";
const year = new Date().getFullYear();
const addressList1 = {
  iconName: "icofont-google-map",
  text1: "CHARUSAT Campus",
  text2: "Off. Nadiad-Petlad Highway, Changa-388421",
};

const addressList = [
  {
    iconName: "icofont-phone",
    text: "+91 2697 265011/21",
  },
  {
    iconName: "icofont-envelope",
    text: "info@charusat.ac.in",
  },
  {
    iconName: "icofont-clock-time",
    text: "Mon - Sat: 09:00 AM - 4:30 PM",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "https://www.facebook.com/thecharusat/",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "https://twitter.com/thecharusat?lang=en",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink:
      "https://www.linkedin.com/school/charotar-university-of-science-&-technology-charusat-",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "https://www.instagram.com/thecharusat/?hl=en",
    className: "instagram",
  },
  // {
  //     iconName: 'icofont-pinterest',
  //     siteLink: '#',
  //     className: 'pinterest',
  // },
];

const quickList = [
  {
    text: "Exam Result",
    link: "https://charusat.edu.in:912/Uniexamresult/",
  },
  {
    text: "Pay Fees",
    link: "https://charusat.edu.in:912/FeesPaymentApp/",
  },
  {
    text: "Admissions",
    link: "https://charusat.ac.in/admission/",
  },
  {
    text: "Downloads",
    link: "https://charusat.ac.in/Downloads/",
  },
  {
    text: "Careers",
    link: "./careers",
  },
  {
    text: "Alumni Portal",
    link: "https://charusatalumni.org/",
  },
  {
    text: "Donations",
    link: "./donation",
  },

  {
    text: "Policies and Procedures - Support Facilities",
    link: "./policies_terms",
  },
];

const footerbottomList = [
  {
    text: "Last Updated:",
    link: "#",
  },
];

const FooterThree = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };
  // window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <div
        className="news-footer-wrap grdnt-bg-custom"
        style={{
          backgroundColor: "#0066b3",
        }}
      >
        {/* <div className="fs-shape">
          <img
            src="assets/images/shape-img/03.png"
            alt="fst"
            className="fst-1"
          />
          <img
            src="assets/images/shape-img/04.png"
            alt="fst"
            className="fst-2"
          />
        </div> */}

        <footer className="style-2 ">
          <div className="footer-top padding-tb ">
            <div className="container">
              <div className="row g-4 row-cols-xl-3 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                  <div className="footer-item our-address w-75">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4 style={{ color: "#fff" }}>{title}</h4>
                        </div>
                        <div className="content">
                          {/* <p>{desc}</p> */}
                          <ul className="lab-ul office-address ">
                            <li style={{ color: "#fff" }}>
                              <i
                                className={addressList1.iconName}
                                style={{ color: "#fff" }}
                              ></i>
                              {addressList1.text1} <br />
                              {addressList1.text2}
                            </li>
                            {addressList.map((val, i) => (
                              <li key={i} style={{ color: "#fff" }}>
                                <i
                                  className={val.iconName}
                                  style={{ color: "#fff" }}
                                ></i>
                                {val.text}
                              </li>
                            ))}
                            <li>
                              <i
                                className="icofont-map-pins"
                                style={{ color: "#fff" }}
                              >
                                <Link href="/" style={{ color: "#fff" }}>
                                  &nbsp;&nbsp;How to Reach us ?
                                </Link>
                              </i>
                            </li>
                          </ul>
                          <br />
                          <ul className="lab-ul social-icons">
                            {socialList.map((val, i) => (
                              <li key={i}>
                                <Link
                                  href={val.siteLink}
                                  className={val.className}
                                >
                                  <i className={val.iconName}></i>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4 style={{ color: "#fff" }}>{quickTitle}</h4>
                        </div>
                        <div className="content">
                          <ul className="lab-ul">
                            {quickList.map((val, i) => (
                              <li key={i}>
                                <Link
                                  className="text-decoration-none"
                                  href={val.link}
                                  style={{ color: "#fff" }}
                                >
                                  {val.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col">
                  <div className="footer-item twitter-post">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4 style={{ color: "#fff" }}>{googleMapTitle}</h4>
                        </div>
                        <div
                          className="content "
                          style={{ width: "20rem !important" }}
                        >
                          <a
                            href="https://www.google.com/maps?ll=22.599358,72.820467&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=362346160943384765"
                            target="_blank"
                          >
                            <img src="assets\images\map\map.png" alt="" />
                          </a>

                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="col">
                  <div className="footer-item twitter-post">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4 style={{ color: "#fff" }}>Miscellaneous</h4>
                        </div>
                        <div
                          className="content "
                          style={{ width: "20rem !important" }}
                        >
                          <ul className="lab-ul">
                            <li>
                              <Link
                                className="text-decoration-none"
                                href="#"
                                style={{ color: "#fff" }}
                              >
                                Public Holidays
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="text-decoration-none"
                                href="#"
                                style={{ color: "#fff" }}
                              >
                                Campus Map
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="text-decoration-none"
                                href="/code-of-conduct"
                                style={{ color: "#fff" }}
                              >
                                Code of Conduct
                              </Link>
                            </li>
                            <li style={{ color: "#fff" }}>
                              NAD/ABC Videos --
                              <Link
                                className="text-decoration-none"
                                href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/1.mp4"
                                target="_blank"
                                style={{ color: "#fff" }}
                              >
                                1
                              </Link>{" "}
                              <Link
                                className="text-decoration-none"
                                href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/2.mp4"
                                target="_blank"
                                style={{ color: "#fff" }}
                              >
                                2
                              </Link>{" "}
                              <Link
                                className="text-decoration-none"
                                href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/3.mp4"
                                target="_blank"
                                style={{ color: "#fff" }}
                              >
                                3
                              </Link>{" "}
                              <Link
                                className="text-decoration-none"
                                href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/4.mp4"
                                target="_blank"
                                style={{ color: "#fff" }}
                              >
                                4
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="section-wrapper">
                <p>
                  &copy; {year}{" "}
                  <Link className="text-decoration-none" href="/">
                    C H A R U S A T
                  </Link>{" "}
                </p>
                {/* <span title="Back to top" onClick={scrollToTop} style={{
                  display: visible ? "inline" : "none", cursor: "pointer"
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-up-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
                    />
                  </svg>
                </span> */}
                {/* <div className="footer-bottom-list">
                  {footerbottomList.map((val, i) => (
                    <a href={val.link} key={i} target="_blank" rel="noreferrer">
                      {val.text}
                    </a>
                  ))}
                </div> */}

                <div>
                  <Link href="./mandatory-disclosures">
                    Mandatory Disclosure & Compliance
                  </Link>
                  &nbsp;&nbsp; || <Link href="#">Privacy Policy</Link>{" "}
                  ||&nbsp;&nbsp;
                  <Link href="#">Disclaimer</Link> ||&nbsp;&nbsp;
                  <Link href="#">Terms of Use</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterThree;

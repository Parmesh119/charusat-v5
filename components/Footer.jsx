"use client";
import Link from "next/link";

import { useEffect } from "react";
const title = "Contact";
const quickTitle = "Quick Links";
const googleMapTitle = "Map";
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
    text: "Mon - Sat: 09:00 AM - 4:30 PM (Except Holidays, Second & Fourth Saturdays)",
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
  // {
  //   text: "Admissions",
  //   link: "https://charusat.ac.in/admission/",
  // },
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
  return (
    <div
      className="news-footer-wrap grdnt-bg-custom"
      style={{
        backgroundColor: "#0066b3",
      }}
    >
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
                            ></i>
                            <Link
                              href="./how-to-reach"
                              style={{ color: "#fff" }}
                            >
                              &nbsp;&nbsp;How to Reach us ?
                            </Link>
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
                              href="https://charusat.ac.in/files/HolidayList-2024.jpeg"
                              target="_blank"
                              style={{ color: "#fff" }}
                            >
                              Public Holidays
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-decoration-none"
                              href="./campus-map"
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
                              &nbsp;1&nbsp;
                            </Link>{" "}
                            <Link
                              className="text-decoration-none"
                              href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/2.mp4"
                              target="_blank"
                              style={{ color: "#fff" }}
                            >
                              &nbsp;2&nbsp;
                            </Link>{" "}
                            <Link
                              className="text-decoration-none"
                              href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/3.mp4"
                              target="_blank"
                              style={{ color: "#fff" }}
                            >
                              &nbsp;3&nbsp;
                            </Link>{" "}
                            <Link
                              className="text-decoration-none"
                              href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/4.mp4"
                              target="_blank"
                              style={{ color: "#fff" }}
                            >
                              &nbsp;4&nbsp;
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
              <div>
                <Link href="./mandatory-disclosures">
                  Mandatory Disclosure & Compliance
                </Link>
                &nbsp;&nbsp; || <Link href="#">Privacy Policy</Link>{" "}
                ||&nbsp;&nbsp;
                <Link href="#">Disclaimer</Link> ||&nbsp;&nbsp;
                <Link href="./terms-of-use">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterThree;

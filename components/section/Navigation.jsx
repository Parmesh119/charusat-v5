"use client";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "@/css/navigation.css";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import dynamic from "next/dynamic"
import Image from "next/image";
import Logo from "@/public/assets/images/logo/logo.webp";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="bg-white">
      <header
        className="container"
        style={{
          shadow: "none",
        }}
        onClick={() => {
          document.getElementById("Academics").style.display = "none";
          document.getElementById("Admission").style.display = "none";
          // document.getElementById("CampusLife").style.display = "none";
          document.getElementById("Research").style.display = "none";
          document.getElementById("KnowCHARUSAT").style.display = "none";
        }}
      >
        <nav className="nav">
          <div className="logo">
            <Link href="/" className="charusat-main">
              <Image
                src={Logo}
                alt="CHARUSAT"
                style={{
                  width: "17rem",
                  
                }}
              />
            </Link>
          </div>
          <div className="nav-links">
            <ul className={`links `}>
            <li className="link fw-bold">
            <Link
                  id="Home-link"
                  href="/"
                  className={`${
                    activeLink === "Home" ? "green-text" : "green"
                  }`}
                >
                  Home
                </Link>
            </li>
            

            <li
                className="link fw-bold"
                onMouseOver={() => {
                  document.getElementById("KnowCHARUSAT").style.display =
                    "grid";
                  setActiveLink("KnowCHARUSAT");
                }}
                onMouseOut={() => {
                  document.getElementById("KnowCHARUSAT").style.display =
                    "none";
                }}
              >
                <Link
                  id="KnowCHARUSAT-link"
                  href=""
                  className={`${
                    activeLink === "KnowCHARUSAT" ? "green-text" : "green"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li
                className={`link green-text fw-bold`}
                onMouseOver={() => {
                  document.getElementById("Academics").style.display = "grid";
                  setActiveLink("Academics");
                }}
                onMouseOut={() => {
                  document.getElementById("Academics").style.display = "none";
                }}
              >
                <Link
                  href=""
                  className={`${
                    activeLink === "Academics" ? "green-text" : "green"
                  }`}
                >
                  Programs
                </Link>
              </li>
              <li
                className="link fw-bold"
                onMouseOver={() => {
                  document.getElementById("Admission").style.display = "grid";
                  setActiveLink("Admission");
                }}
                onMouseOut={() => {
                  document.getElementById("Admission").style.display = "none";
                }}
              >
                <Link
                  href=""
                  className={`${
                    activeLink === "Admission" ? "green-text" : "green"
                  }`}
                >
                  Admission
                </Link>
              </li>

              <li
                className="link fw-bold"
                onMouseOver={() => {
                  document.getElementById("Research").style.display = "grid";
                  setActiveLink("Research");
                }}
                onMouseOut={() => {
                  document.getElementById("Research").style.display = "none";
                }}
              >
                <Link
                  id="Research-link"
                  href=""
                  className={`${
                    activeLink === "Research" ? "green-text" : "green"
                  }`}
                >
                  Research
                </Link>
              </li>

              <li
                className="link fw-bold"
                onMouseOver={() => {
                  document.getElementById("CampusLife").style.display = "grid";
                  setActiveLink("CampusLife");
                }}
                onMouseOut={() => {
                  document.getElementById("CampusLife").style.display = "none";
                }}
              >
                <Link
                  id="CampusLife-link"
                  href=""
                  className={`${
                    activeLink === "CampusLife" ? "green-text" : "green"
                  }`}
                >
                  Campus Life
                </Link>
              </li>
              

              {/* <li className="link fw-bold">
                <Link
                  id="IQAC-link"
                  target="_blank"
                  href="https://iqac.charusat.ac.in/"
                >
                  IQAC
                </Link>
              </li> */}
              <li className="link fw-bold">
                <Link
                  id="Online-link"
                  target="_blank"
                  href="https://charusat.online/"
                >
                  Online Programmes
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
        <div
          className="menu-4"
          id="Academics"
          onMouseOver={() => {
            document.getElementById("Academics").style.display = "grid";
            setActiveLink("Academics");
          }}
          onMouseOut={() => {
            document.getElementById("Academics").style.display = "none";
            setActiveLink("");
          }}
        >
          <div className="menu-div">
            <div className="menu-d border-b">
              <h5 className="menu-head">Learn Online</h5>
              <div className="menu-items">
              <Link
                    href="http://ILMS.CHARUSAT.ac.in"
                    className="menu-link"
                  >
                    iLMS
                  </Link>
                {/* <Link
                    href="http://172.16.11.116/LocalGuru/"
                    target="_blank"
                    className="menu-link"
                  >
                    NPTEL Resources (Intranet)
                  </Link> */}
              </div>
            </div>

            <div className="menu-d ">
              <h5 className="menu-head">Other Programmes</h5>
              <div className="menu-items">
                <Link href="./certification-courses" className="menu-link">
                  Certification & Audit Courses
                </Link>
                <Link href="./course-single#GNM" className="menu-link">
                  General Nursing & Midwifery (GNM)
                </Link>
                <Link href="./course-single#6303" className="menu-link">
                  Post Graduation Diploma in Clinical Hypnosis (PGDCH)
                </Link>
                <Link href="./course-single#6304" className="menu-link">
                  Post Graduation Diploma in Cyber Security (PGDCS)
                </Link>
                <Link href="./course-single#PGDMLT" className="menu-link">
                  Post Graduation Diploma in Medical Laboratory Technology
                  (PGDMLT)
                </Link>
              </div>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Undergraduate Studies</h5>
            <div className="menu-items">
              <Link href="./course-single#1406" className="menu-link">
                B.Tech
              </Link>
              <Link href="./course-single#2401" className="menu-link">
                BCA
              </Link>
              <Link href="./course-single#2402" className="menu-link">
                B.Sc.(IT)
              </Link>
              <Link href="./course-single#3401" className="menu-link">
                B.Pharm (Bachelor of Pharmacy)
              </Link>
              <Link href="./course-single#4401" className="menu-link">
                BBA
              </Link>
              <Link href="./course-single#5401" className="menu-link">
                B.Sc.(Biology)
              </Link>
              <Link href="./course-single#6401" className="menu-link">
                BPT(Bachelor of Physiotherapy)
              </Link>
              <Link href="./course-single#6402" className="menu-link">
                B.Sc.(Nursing)
              </Link>
              <Link href="./course-single#6405" className="menu-link">
                Bachelor of Optometry (B.Optom.)
              </Link>
              <Link href="./course-single#6403" className="menu-link">
                B.Sc. (Imaging Technology)
              </Link>
              <Link href="./course-single#6406" className="menu-link">
                B.Sc. (Medical Technnology)
              </Link>
              <Link href="./course-single#6404" className="menu-link">
                B.Sc. (Operation Theatre & Anesthesia Technology)
              </Link>

              <Link href="./course-single#5401" className="menu-link">
                B.Sc. (Microbiology, Biotechnology, Biochemistry)
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Postgraduate Studies</h5>
            <div className="menu-items">
              <Link href="./course-single#1406" className="menu-link">
                M.Tech
              </Link>
              <Link href="./course-single#2501" className="menu-link">
                MCA
              </Link>
              <Link href="./course-single#2502" className="menu-link">
                M.Sc.(IT)
              </Link>
              <Link href="./course-single#3501" className="menu-link">
                M.Pharm
              </Link>
              <Link href="./course-single#4501" className="menu-link">
                MBA
              </Link>
              <Link href="./course-single#5505" className="menu-link">
                M.Sc. (Advanced Organic Chemistry)
              </Link>
              <Link href="./course-single#5502" className="menu-link">
                M.Sc. (Biochemistry)
              </Link>
              <Link href="./course-single#5501" className="menu-link">
                M.Sc. (Biotechnology)
              </Link>
              <Link href="./course-single#5503" className="menu-link">
                M.Sc. (Microbiology)
              </Link>
              <Link href="./course-single#5506" className="menu-link">
                M.Sc. (Physics)
              </Link>
              <Link href="./course-single#6501" className="menu-link">
                MPT (Master of Physiotherapy)
              </Link>
              <Link href="./course-single#6510" className="menu-link">
                M.Sc. (Nursing)
              </Link>
              <Link href="./course-single#6514" className="menu-link">
                M.Sc. (Medical Imaging Technology)
              </Link>
              <Link href="./course-single#6513" className="menu-link">
                M.Sc. (Medical Laboratory Technology)
              </Link>
              <Link href="./course-single#6513" className="menu-link">
                M.Sc. (Maths)
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <div className="menu-d">
              <h5 className="menu-head">Ph D Programs</h5>
              <div className="menu-items">
                <Link
                  href="assets\files\PHD\PhD_Regulations.pdf"
                  target="_blank"
                  className="menu-link"
                >
                  General Information
                </Link>
              </div>
            </div>
            <hr />
            <h5 className="menu-head">Information You May Need!!!</h5>
            <div className="menu-items">
              <Link
                href="https://charusat.ac.in/Downloads/Academic%20Calenders"
                className="menu-link"
              >
                Academic Calender
              </Link>
              <Link href="./student-corner" className="menu-link">
                Student&apos;s Corner
              </Link>
              <Link href="./cdpc" className="menu-link">
                Career Development and Placements
              </Link>
              {/* <Link href="" className="menu-link">
                  Distinguished Lecture Series
                </Link> */}
              <Link href="./edic" className="menu-link">
                Entrepreneurship and Innovations
              </Link>

              <Link
                href="./student-development-initiatives"
                className="menu-link"
              >
                Initiatives
              </Link>
              <Link href="./library" className="menu-link">
                Knowledge Resource Center
              </Link>
              <Link href="./code-of-conduct" className="menu-link">
                Code of Conduct
              </Link>
              {/* <Link href="" className="menu-link">
                  Academic Regulations
                </Link> */}
            </div>
          </div>
        </div>

        <div
          className="menu"
          id="Admission"
          onMouseOver={() => {
            document.getElementById("Admission").style.display = "grid";
            setActiveLink("Admission");
          }}
          onMouseOut={() => {
            document.getElementById("Admission").style.display = "none";
            setActiveLink("");
          }}
        >
          <div className="menu-div">
            <h5 className="menu-head">National</h5>
            <div className="menu-items">
              <Link
                href="https://admission2023.charusat.ac.in/"
                className="menu-link"
              >
                Apply Now
              </Link>
              {/* <Link
                href="/assets/files/navigation/AdmissionsEligibility.pdf"
                target="_blank"
                className="menu-link"
                rel="noopener noreferrer"
              >
                Eligibility Criteria
              </Link> */}
              <Link
                href="https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view"
                className="menu-link"
              >
                Fees
              </Link>
              <Link href="#" className="menu-link">
                <i
                  class="icofont-brand-whatsapp"
                  style={{ color: "#3db166" }}
                ></i>{" "}
                +91 9825961830
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">International</h5>
            <div className="menu-items">
              <Link
                href="https://admission2023.charusat.ac.in/"
                className="menu-link"
              >
                Apply Now
              </Link>
              {/* <Link
                href="/assets/files/navigation/AdmissionsEligibility.pdf"
                target="_blank"
                className="menu-link"
              >
                Eligibility Criteria
              </Link> */}
              <Link
                href="/assets/files/navigation/AdmissionsFees.pdf"
                className="menu-link"
              >
                Fees
              </Link>
              <Link href="#" className="menu-link">
                <i
                  class="icofont-brand-whatsapp"
                  style={{ color: "#3db166" }}
                ></i>{" "}
                +91 9173701614
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Other</h5>
            <div className="menu-items">
              <Link
                href="https://admission2023.charusat.ac.in/"
                className="menu-link"
              >
                Admission Login
              </Link>
              <Link href="./admission-reprentatives" className="menu-link">
                Have a query? Contact Admission Representatives
              </Link>

              <Link
                href="https://charusat.ac.in/files/UGSF%20Application%20form.pdf"
                className="menu-link"
              >
                Undergraduate Student Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf"
                className="menu-link"
              >
                Postgraduate Student Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                className="menu-link"
              >
                Ph. D. Scholars&apos; Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                className="menu-link"
              >
                Post Doctoral Fellowship Programme
              </Link>
              <Link href="./scholarship" className="menu-link">
                Scholarship
              </Link>
              <Link href="./hostels" className="menu-link">
                Hostels
              </Link>
              <Link href="./transport" className="menu-link">
                Transportation
              </Link>
              {/* <Link
                  href="https://www.charusat.ac.in/files/CHARUSAT%20Admission%20FAQ%2004-06-2022.pdf"
                  className="menu-link"
                >
                  Frequently Asked Questions (FAQs)
                </Link> */}
            </div>
          </div>
        </div>
        <div
        // className="menu"
        // id="IQAC"
        // onMouseOver={() => {
        //   document.getElementById("IQAC").style.display = "grid";
        // }}
        // onMouseOut={() => {
        //   document.getElementById("IQAC").style.display = "none";
        // }}
        >
          {/* <div className="menu-div">
              <div className="menu-d border-b">
                <h5 className="menu-head">Academic Calendars</h5>
                <div className="menu-items">
                  <Link href="" className="menu-link">
                    2021-22
                  </Link>
                  <Link href="" className="menu-link">
                    2020-21
                  </Link>
                  <Link href="" className="menu-link">
                    2019-20
                  </Link>
                </div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Academic & Administrative Audit</h5>
                <div className="menu-items">
                  <Link href="" className="menu-link">
                    AAA Process
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Undergraduate Studies</h5>
              <div className="menu-items">
                <Link href="" className="menu-link">
                  17th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  16th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  15th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  14th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  13th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  12th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  11th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  10th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  9th IQAC Meeting Minutes
                </Link>
                <Link href="" className="menu-link">
                  8th IQAC Meeting Minutes
                </Link>
              </div>
            </div>

            <div className="menu-div border-left">
              <div className="menu-d border-b">
                <h5 className="menu-head">Accreditation & Ranking</h5>
                <div className="menu-items"></div>
              </div>
              <div className="menu-d border-b">
                <h5 className="menu-head">Best Practices</h5>
                <div className="menu-items"></div>
              </div>
              <div className="menu-d border-b">
                <h5 className="menu-head">Institutional Distinctiveness</h5>
                <div className="menu-items"></div>
              </div>

              <div className="menu-d border-b">
                <h5 className="menu-head">Feedback on Curriculum</h5>
                <div className="menu-items"></div>
              </div>

              <div className="menu-d">
                <h5 className="menu-head">Student Satisfaction Survey</h5>
                <div className="menu-items">
                  <Link href="" className="menu-link">
                    SSS Poster
                  </Link>
                  <Link href="" className="menu-link">
                    SSS Analysis
                  </Link>
                </div>
              </div>
            </div> */}
        </div>
        {/* <div
            className="menu"
            id="CampusLife"
            onMouseOver={() => {
              document.getElementById("CampusLife").style.display = "grid";
            }}
            onMouseOut={() => {
              document.getElementById("CampusLife").style.display = "none";
            }}
          >
            <div className="menu-div">
              <h5 className="menu-head">Activity & Events</h5>
              <div className="menu-items">
                <Link href="./coming-soon" className="menu-link">
                  Student Activities & Events
                </Link>
                <Link href="./coming-soon" className="menu-link">
                  Student Clubs
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Residencies & Amenities</h5>
              <div className="menu-items">
                <Link href="./coming-soon" className="menu-link">
                  Boy's Hostel
                </Link>
                <Link href="./coming-soon" className="menu-link">
                  Staff Quarters
                </Link>
                <Link href="./coming-soon" className="menu-link">
                  Food / Canteen
                </Link>
                <Link href="./coming-soon" className="menu-link">
                  Transportation
                </Link>
                <Link href="./coming-soon" className="menu-link">
                  Recreation
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">
              <h5 className="menu-head">Student Helpline</h5>
              <div className="menu-items">
                <Link href="./coming-soon" className="menu-link">
                  Helpline Contacts
                </Link>
              </div>
            </div>
          </div> */}

        <div
          className="menu"
          id="Research"
          onMouseOver={() => {
            document.getElementById("Research").style.display = "grid";
            setActiveLink("Research");
          }}
          onMouseOut={() => {
            document.getElementById("Research").style.display = "none";
            setActiveLink("");
          }}
        >
          <div className="menu-div">
            <h5 className="menu-head">Initiatives</h5>
            <div className="menu-items">
              <Link
                href="https://youtu.be/Og4NMqI3q5M"
                target="_blank"
                className="menu-link"
              >
                Laboratories
              </Link>
              <Link
                href="https://charusat.ac.in/charusatjournal/"
                className="menu-link"
              >
                CHARUSAT Journal
              </Link>
              <Link href="./edic" className="menu-link">
                Enterpreneurship Development & Incubation Cell (EDIC)
              </Link>
              <Link href="http://kradle.charusat.ac.in/" className="menu-link">
                Dr. K. C. Patel Research and Development Centre (KRADLE)
              </Link>

              <Link
                href="https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC"
                className="menu-link"
              >
                International Center for Cosmology (ICC)
              </Link>
              <Link href="./ipr" className="menu-link">
                IPR Cell
              </Link>
              <Link href="./research" className="menu-link">
                Research Facilitation
              </Link>
              <Link href="./csrtc" className="menu-link">
                CHARUSAT Space Research Center
              </Link>
              <Link href="./IEC" className="menu-link">
                Research Ethics Committee
              </Link>
            </div>
          </div>
          
          <div className="menu-div border-left">
            <h5 className="menu-head">Policies</h5>
            <div className="menu-items">
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                className="menu-link"
              >
                Post Doctoral Fellowship Programme
              </Link>

              <Link
                href="https://charusat.ac.in/documents/pdfs/research/CPSF.pdf"
                className="menu-link"
              >
                Ph. D. Scholars&apos; Fellowship (CPSF)
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/CVSRI.pdf"
                className="menu-link"
              >
                Visitor Student Research Internship (CVSRI)
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf"
                className="menu-link" //charusat.ac.in/documents/pdfs/research/PGSF.pdf
              >
                Postgraduate Student Fellowship (PGSF)
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/7.%20Policy%20for%20CHARUSAT%20SEED%20Grant%20for%20Research.pdf"
                className="menu-link"
              >
                SEED Grant for Research
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/1.%20CHARUSAT%20Research%20Policy.pdf"
                className="menu-link"
              >
                Research
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/8.%20Research%20Paper%20Award%20Policy%202018.pdf"
                className="menu-link"
              >
                Research Paper Award
              </Link>

              <Link
                href="https://charusat.ac.in/documents/pdfs/research/06.Plagiarism%20Policy.pdf"
                className="menu-link"
              >
                Plagiarism
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/05.INTELLECTUAL%20PROPERTY%20POLICY.pdf"
                className="menu-link"
              >
                Patent, IPR and Royalty Sharing
              </Link>
              <Link
                href="https://drive.google.com/file/d/1CzmhA6azuxlWGMwdaJPd6DNIv5e5Vyc9/view?usp=sharing"
                className="menu-link"
              >
                Consultancy
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Outcomes</h5>
            <div className="menu-items">
              <Link href="./coming-soon" className="menu-link">
                Publications
              </Link>
              <Link href="./coming-soon" className="menu-link">
                Project Grants
              </Link>
              <Link href="./coming-soon" className="menu-link">
                Patents
              </Link>
            </div>
          </div>
        </div>
        
        {/* CAmpus life menu */}
        <div
          className="menu"
          id="CampusLife"
          onMouseOver={() => {
            document.getElementById("CampusLife").style.display = "grid";
            setActiveLink("CampusLife");
          }}
          onMouseOut={() => {
            document.getElementById("CampusLife").style.display = "none";
            setActiveLink("");
          }}
        >
          <div className="menu-div">
            <h5 className="menu-head">Initiatives</h5>
            <div className="menu-items">
              <Link
                href="https://youtu.be/Og4NMqI3q5M"
                target="_blank"
                className="menu-link"
              >
                Events
              </Link>
              
              <Link href="#" className="menu-link">
                Data
              </Link>
              <Link href="#" className="menu-link">
                Data
              </Link>

             
            </div>
          </div>
        </div>



        <div
          className="menu"
          id="KnowCHARUSAT"
          onMouseOver={() => {
            document.getElementById("KnowCHARUSAT").style.display = "grid";
            setActiveLink("KnowCHARUSAT");
          }}
          onMouseOut={() => {
            document.getElementById("KnowCHARUSAT").style.display = "none";
            setActiveLink("");
          }}
        >
          <div className="menu-div">
            <div className="menu-d ">
              <h5 className="menu-head">About University</h5>
              <div className="menu-items">
                {/* <Link href="./about" className="menu-link">
                    About University
                  </Link> */}
                <Link href="./torchbearers" className="menu-link">
                  Torchbearers
                </Link>
                <Link href="./journey" className="menu-link">
                  Journey of Charusat
                </Link>
                <Link href="./about" className="menu-link">
                  About
                </Link>
                <Link href="./president-desk" className="menu-link">
                  From President&apos;s Desk
                </Link>
                <Link href="./provost-desk" className="menu-link">
                  From Provost&apos;s Desk
                </Link>
                {/* <Link href="./coming-soon" className="menu-link">
                    Students' Reviews
                  </Link> */}
                <Link href="./convocations" className="menu-link">
                  Convocations
                </Link>
                <Link href="./associates" className="menu-link">
                  Governing Body
                </Link>
                <Link href="./associates" className="menu-link">
                  Board of Management
                </Link>
                <Link href="./associates" className="menu-link">
                  Deans, Principals & Heads
                </Link>
                <Link href="./university-officers" className="menu-link">
                  University Officers
                </Link>
                
              </div>
            </div>

            {/* <div className="menu-d"></div> */}
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Centers & Cells</h5>
            <div className="menu-items">
              <Link href="./anti-ragging" className="menu-link">
                Anti-Ragging Committee
              </Link>
              <Link href="./eoc" className="menu-link">
                Equal Opportunity Cell
              </Link>
              {/* <Link
                  href="./ecc"
                  className="menu-link"
                >
                  Energy Conservation Cell
                </Link> */}
              <Link href="./GRC" className="menu-link">
                Grievance Redressal Cell
              </Link>
              <Link href="./edic" className="menu-link">
                Enterpreneurship Development & Incubation Cell
              </Link>
              <Link
                href="./university-industry-interaction-cell"
                className="menu-link"
              >
                University Industry Interaction Cell
              </Link>
              <Link href="./wdc" className="menu-link">
                Womens&apos; Development Cell
              </Link>
              <Link href="./hrdc" className="menu-link">
                Pri. B I Patel Human Resource Development Center
              </Link>
              <Link href="https://isc.charusat.ac.in/" className="menu-link">
                International Students&apos; Cell
              </Link>
              <Link href="./ICC" className="menu-link">
              Internal Complaint Committee (ICC)
              </Link>
              {/* <Link href="" className="menu-link">
                  Internal Quality Assurance Cell (IQAC)
                </Link> */}
              <Link href="./CREDP" className="menu-link">
                Charusat Rural Education Development Program
              </Link>
              <Link href="./student-wellness-program" className="menu-link">
                Student Wellness Programme
              </Link>
              <Link href="./wincell" className="menu-link">
                Data Center @ CHARUSAT - WINCELL
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="menu-div border-left">
            {/* <div className="menu-d border-b">
                <h5 className="menu-head">Visit</h5>
                <div className="menu-items">
                  <Link href="./coming-soon" className="menu-link">
                    360 Campus Tour
                  </Link>
                </div>
              </div> */}

            {/* <div className="menu-d border-b">
                <h5 className="menu-head">Reach US</h5>
                <div className="menu-items">
                  <Link href="./contact-us" className="menu-link">
                    Connect with CHARUSAT
                  </Link>
                  <Link href="./coming-soon" className="menu-link">
                    Lodge Complaint
                  </Link>
                  <Link href="./coming-soon" className="menu-link">
                    Faculty & Staff Directory
                  </Link>
                </div>
              </div> */}

            <div className="menu-d">
              <h5 className="menu-head">Infrastructure & Resources</h5>
              <div className="menu-items border-b">
                {/* <Link href="./coming-soon" className="menu-link">
                  Auditoria & Lectures Halls
                </Link> */}
                <Link href="https://youtu.be/Og4NMqI3q5M" className="menu-link">
                  Laboratories
                </Link>

                <Link
                  href="https://scpit.new.knimbus.com/user#/home"
                  className="menu-link"
                >
                  Knowledge Resource Center
                </Link>
                {/* <Link href="./coming-soon" className="menu-link">
                  Sports & Gym
                </Link> */}
                <Link href="./coming-soon" className="menu-link">
                  Herbal Garden
                </Link>
              </div>
              <h5 className="menu-head" style={{ marginTop: "10px" }}>
                Others
              </h5>
              <div className="menu-items">
                <Link href="./donation" className="menu-link">
                  Give & Support
                </Link>
                <Link
                  href="https://www.charusat.ac.in/documents-access/"
                  target="_blank"
                  className="menu-link"
                >
                  Finance Reports
                </Link>
                <Link href="./annual-report" className="menu-link">
                  Annual Report
                </Link>
                <Link
                  href="assets\files\CHARUSAT_Action_Plan.pdf"
                  target="_blank"
                  className="menu-link"
                >
                  Strategic Plan
                </Link>
                <Link href="./samaj-gosthi" className="menu-link">
                  Samaj Gosthi
                </Link>
                <Link
                  href="assets\images\map\charusat-map.jpg"
                  target="_blank"
                  className="menu-link"
                >
                  Campus Map
                </Link>
                <Link
                  href="https://charusat.ac.in/Downloads/"
                  className="menu-link"
                >
                  Downloads
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav className="mobile-nav"></nav>
      </header>

      {/* <Navbar bg="white" expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#home">
              <Link href="./" class="charusat">
                CHARUSAT
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
      <Navbar bg="white" expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <Link href="./" class="charusat">
              <img
                src="assets/images/logo/logo.webp"
                alt="CHARUSAT"
                style={{
                  width: "15rem",
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Quick Links" id="basic-nav-dropdown">
                <Dropdown.Item href="./accreditation-and-ranking">
                  Accreditation & Ranking
                </Dropdown.Item>
                <Dropdown.Item href="https://charusatalumni.org">
                  Alumni
                </Dropdown.Item>
                <Dropdown.Item href="./careers">Careers</Dropdown.Item>
                <Dropdown.Item href="./accreditation-and-ranking">
                  NIRF
                </Dropdown.Item>
                <Dropdown.Item href="./placement">Placement</Dropdown.Item>
                <Dropdown.Item href="./scholarship">Scholarships</Dropdown.Item>
                <Dropdown.Item href="./scholarship">
                  Samaj Scholarships
                </Dropdown.Item>
                <Dropdown.Item href="./student-corner">
                  Student Corner
                </Dropdown.Item>
                <Dropdown.Item href="https://charusat.edu.in:912/UniExamResult/">
                  Exam Result
                </Dropdown.Item>
                <Dropdown.Item href="https://charusat.edu.in:912/FeesPaymentApp/">
                  Pay Fees
                </Dropdown.Item>
                <Dropdown.Item href="./contact-us">Contact Us</Dropdown.Item>
                <Dropdown.Item href="./contact-us">
                  Support Charusat
                </Dropdown.Item>
              </NavDropdown>
              <NavDropdown title="Know CHARUSAT" id="basic-nav-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    About University
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="./torchbearers">
                      Torchbearers
                    </Dropdown.Item>
                    <Dropdown.Item href="./about">About</Dropdown.Item>
                    <Dropdown.Item href="./president-desk">
                      From President&apos;s Desk
                    </Dropdown.Item>
                    <Dropdown.Item href="./provost-desk">
                      From Provost&apos;s Desk
                    </Dropdown.Item>
                    <Dropdown.Item href="./convocations">
                      Convocations
                    </Dropdown.Item>
                    <Dropdown.Item href="./associates">
                      Governing Body
                    </Dropdown.Item>
                    <Dropdown.Item href="./associates">
                      Board of Management
                    </Dropdown.Item>
                    <Dropdown.Item href="./associates">
                      Deans, Principals & Heads
                    </Dropdown.Item>
                    <Dropdown.Item href="./university-officers">
                      University Officers
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Centers & Cells
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="./anti-ragging">
                      Anti-Ragging Committee
                    </Dropdown.Item>
                    <Dropdown.Item href="./eoc">
                      Equal Opportunity Cell
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="./ecc">
                        Energy Conservation Cell
                      </Dropdown.Item> */}
                    <Dropdown.Item href="./GRC">
                      Grievance Redressal Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="/edic">
                      Enterpreneurship Development & Incubation Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="./university-industry-interaction-cell">
                      University Industry Interaction Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="./wdc">
                      Womens&apos; Development Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="./hrdc">
                      Pri. B I Patel Human Resource Development Center
                    </Dropdown.Item>
                    <Dropdown.Item href="https://isc.charusat.ac.in/">
                      International Studnts&apos; Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="./ICC">
                    Internal Complaint Committee (ICC)
                    </Dropdown.Item>
                    <Dropdown.Item href="./CREDP">
                      Charusat Rural Education Development Program
                    </Dropdown.Item>
                    <Dropdown.Item href="./student-wellness-program">
                      Student Wellness Programme
                    </Dropdown.Item>
                    <Dropdown.Item href="./wincell">
                      Data Center @ CHARUSAT - WINCELL
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Infrastructure & Resources
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://youtu.be/Og4NMqI3q5M">
                      Laboratories
                    </Dropdown.Item>
                    <Dropdown.Item href="https://scpit.new.knimbus.com/user#/home">
                      Knowledge Resource Center
                    </Dropdown.Item>
                    <Dropdown.Item href="./coming-soon">
                      Herbal Garden
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Others
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="./donation">
                      Give & Support
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.charusat.ac.in/documents-access/">
                      Finance Reports
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="./annual-report">Annual Reports</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/Downloads/">
                      Downloads
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="\assets\files\CHARUSAT Action Plan.pdf">
                        Strategic Plan
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/Downloads/">
                        Samaj Gosthi
                      </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>
              <NavDropdown title="Academics" id="basic-nav-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Learn Online
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://charuvidya.charusat.ac.in/">
                      CharuVidya
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="http://172.16.11.116/LocalGuru/">
                        NPTEL Resources (Intranet)
                      </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Other Programmes
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="./certification-courses">
                      Certification & Audit Courses
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#GNM">
                      General Nursing & Midwifery (GNM)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6303">
                      Post Graduation Diploma in Clinical Hypnosis (PGDCH)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6304">
                      Post Graduation Diploma in Cyber Security (PGDCS)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#PGDMLT">
                      Post Graduation Diploma in Medical Laboratory Technology
                      (PGDMLT)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Undergraduate Studies
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="./course-single#1406">
                      B.Tech
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#2401">
                      BCA
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#2402">
                      B.Sc(IT)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#3401">
                      B.Pharm (Bachelor of Pharmacy)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#4401">
                      BBA
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#5401">
                      B.Sc(Biology)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6401">
                      BPT(Bachelor of Physiotherapy)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6402">
                      B.Sc(Nursing)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6405">
                      Bachelor of Optometry (B.Optom)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6403">
                      B.Sc (Imaging Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6406">
                      B.Sc (Medical Technnology)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6404">
                      B.Sc (Operation Theatre & Anesthesia Technology)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Postgraduate Studies
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="./course-single#1406">
                      M.Tech
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#2501">
                      MCA
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#2502">
                      M.Sc(IT)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#3501">
                      M.Pharm
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#4501">
                      MBA
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#5505">
                      M.Sc (Advanced Organic Chemistry)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#5502">
                      M.Sc (Biochemistry)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#5501">
                      M.Sc (Biotechnology)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#5503">
                      M.Sc (Microbiology)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#5506">
                      M.Sc (Physics)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6501">
                      MPT (Master of Physiotherapy)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6510">
                      M.Sc (Nursing)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6403">
                      M.Sc (Medical Imaging Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="./course-single#6511">
                      M.Sc (Medical Laboratory Technology)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Ph D Programs
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="ph-d-programs">
                      General Information
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Information You May Need
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://charusat.ac.in/Downloads/Academic%20Calenders/">
                      Academic Calender
                    </Dropdown.Item>
                    <Dropdown.Item href="./student-corner">
                      Students Corner
                    </Dropdown.Item>
                    <Dropdown.Item href="./cdpc">
                      Career Development and Placements
                    </Dropdown.Item>
                    <Dropdown.Item href="./edic">
                      Entrepreneurship and Innovations
                    </Dropdown.Item>
                    <Dropdown.Item href="./student-development-initiatives">
                      Initiatives
                    </Dropdown.Item>
                    <Dropdown.Item href="./library">
                      Knowledge Resource Center
                    </Dropdown.Item>
                    <Dropdown.Item href="./code-of-conduct">
                      Code of Conduct
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>
              {/*  */}
              <NavDropdown title="Admission" id="basic-nav-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    National
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://admission2023.charusat.ac.in/">
                      Apply Now
                    </Dropdown.Item>
                    {/* <Dropdown.Item
                      href="/assets/files/navigation/AdmissionsEligibility.pdf"
                      target="_blank"
                      className="menu-link"
                      rel="noopener noreferrer"
                    >
                      Eligibility criteria
                    </Dropdown.Item> */}
                    <Dropdown.Item href="https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view">
                      Fees
                    </Dropdown.Item>
                    <Dropdown.Item>+91 8905500500</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    International
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://admission2023.charusat.ac.in/">
                      Apply Now
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/assets/files/navigation/AdmissionsEligibility.pdf">
                      Eligibility criteria
                    </Dropdown.Item> */}
                    <Dropdown.Item href="/assets/files/navigation/AdmissionsFees.pdf">
                      Fees
                    </Dropdown.Item>
                    <Dropdown.Item>+91 917370164</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Other
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://admission2023.charusat.ac.in/">
                      Admission Login
                    </Dropdown.Item>
                    <Dropdown.Item href="./admission-reprentatives">
                      Have a query? Contact Admission Representative
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/files/UGSF%20Application%20form.pdf">
                      Undergraduate Student Fellowship
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                      Postgraduate Student Fellowship
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                      Ph. D. Scholars&apos; Fell&apos;wship
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                      Post Doctoral Fellowship Programme
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="https://charusat.ac.in/files/UGSF%20Application%20form.pdf">
                        Need Personal Guidance!!! Talk To us
                      </Dropdown.Item>
                      <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                        Fellowship
                      </Dropdown.Item> */}
                    <Dropdown.Item href="https://www.charusat.ac.in/admission/scholarship.html">
                      Scholarship
                    </Dropdown.Item>
                    <Dropdown.Item href="./hostels">Hostels</Dropdown.Item>
                    <Dropdown.Item href="./transport">
                      Transportation
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="https://www.charusat.ac.in/admission/scholarship.html">
                        Frequently Asked Questions (FAQs)
                      </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>

              {/*  */}
              {/* <NavDropdown title="Campus Life" id="basic-nav-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Activity & Events
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2">
                        NCC@CHARUSAT
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        NSS@CHARUSAT
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Sports & Gym
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Student Activities & Events
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Student Clubs
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Residences & Amenities
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2">
                        Girl's Hostel
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Boy's Hostel
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Staff Quarters
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Transportation
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Recreation
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown">
                      Student Helpline
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2">
                        Helpline Contacts
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </NavDropdown> */}
              {/*  */}
              <NavDropdown title="Research" id="basic-nav-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Initiatives
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://youtu.be/Og4NMqI3q5M">
                      Laboratories
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/charusatjournal/">
                      CHARUSAT Journal
                    </Dropdown.Item>
                    <Dropdown.Item href="./edic">
                      Enterpreneurship Development & Incubation Cell (EDIC)
                    </Dropdown.Item>
                    <Dropdown.Item href="http://kradle.charusat.ac.in/">
                      Dr. K. C. Patel Research and Development Centre (KRADLE)
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC">
                      International Center for Cosmology (ICC)
                    </Dropdown.Item>
                    <Dropdown.Item href="./ipr">IPR Cell</Dropdown.Item>
                    <Dropdown.Item href="./research">
                      Research Facilitation
                    </Dropdown.Item>
                    <Dropdown.Item href="./csrtc">
                      CHARUSAT Space Research Center
                    </Dropdown.Item>
                    <Dropdown.Item href="./IEC">
                      Research Ethics Committee
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Policies
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf">
                      Post Doctoral Fellowship Programme
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/CPSF.pdf">
                      Ph. D. Scholars&apos; Fellowship (CPSF)
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/CVSRI.pdf">
                      Visitor Student Research Internship (CVSRI)
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                      Postgraduate Student Fellowship (PGSF)
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/PGSF.pdf">
                      SEED Grant for Research
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/1.%20CHARUSAT%20Research%20Policy.pdf">
                      Research
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/8.%20Research%20Paper%20Award%20Policy%202018.pdf">
                      Research Paper Award
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/06.Plagiarism%20Policy.pdf">
                      Plagiarism
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/documents/pdfs/research/05.INTELLECTUAL%20PROPERTY%20POLICY.pdf">
                      Patent, IPR and Royalty Sharing
                    </Dropdown.Item>
                    <Dropdown.Item href="https://drive.google.com/file/d/1CzmhA6azuxlWGMwdaJPd6DNIv5e5Vyc9/view?usp=sharing">
                      Consultancy
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Outcomes
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="./coming-soon">
                      Publications
                    </Dropdown.Item>
                    <Dropdown.Item href="./coming-soon">
                      Project Grants
                    </Dropdown.Item>
                    <Dropdown.Item href="./coming-soon">Patents</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>
              <NavDropdown title="IQAC" id="basic-nav-dropdown">
                <Dropdown href="https://iqac.charusat.ac.in/0">IQAC</Dropdown>
              </NavDropdown>
              {/*  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default dynamic(()=> Promise.resolve(Navigation),{ssr:false});

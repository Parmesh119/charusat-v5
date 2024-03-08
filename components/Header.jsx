"use client";
import Link from "next/link";
import Navigation from "./section/Navigation";
import { TypeAnimation } from "react-type-animation";
import { useState ,useEffect } from "react";
import "@/css/header.css"

const Header = () => {
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  },[])
  

  return (
    <>
    <span className="header_all">
    <div
      className={`header-section style-3 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div
        className={`header-top ${socialToggle ? "open" : ""}`}
        style={{
          backgroundColor: "#0066b3",
          // backgroundImage:
          //  "linear-gradient(to right,#642b73 0%,#c6426e 51%,#642b73 100%)",
          color: "white",
          fontSize: "0.8rem",
        }}
      >
        <div className="container c111">
          <div className="header-top-area" style={{ position: "relative", letterSpacing: "0.5px", fontSize: "11.8px"}}>
            {/* <div className="header-top-contact  ">
              <Link href="https://admission2023.charusat.ac.in" className="blink">
                Apply for Admission
              </Link>
            </div> */}
            <div className="header-top-reglog ">
              <Link href="/accreditation-and-ranking" className="login text-decoration-none">
                Accreditation & Ranking
              </Link>

              <Link
                href="https://charusatalumni.org"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none login"
              >
                {" "}
                Alumni
              </Link>
              <Link href="/careers" className="login text-decoration-none">
                Careers
              </Link>
              <Link className="text-decoration-none login" href="/accreditation-and-ranking">NIRF</Link>
              <Link className="text-decoration-none login" href="/placement">Placement</Link>
              <Link className="text-decoration-none login" href="/scholarship">Scholarship</Link>
              <Link className="text-decoration-none login" href="/scholarship">Samaj Scholarships</Link>
              <Link className="text-decoration-none login" href="/student-corner">Student Corner</Link>

              {/* <Link href="/signup" className="signup">
                Students' Corner
              </Link> */}
              <Link
                href="https://charusat.edu.in:912/UniExamResult/"
                className="login text-decoration-none"
                target="_blank"
              >
                Exam Result
              </Link>
              <Link
                href="https://charusat.edu.in:912/FeesPaymentApp/"
                className="signup text-decoration-none"
                target="_blank"
              >
                Pay Fees
              </Link>
              <Link href="/contact-us" className="signup text-decoration-none">
                Contact Us
              </Link>

              <Link href="/donation">
                <span className="support-btn text-decoration-none">
                  Support{" "}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "CHARUSAT",
                      4500,
                      "",
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
    </span>
    </>
  );
};

export default Header;

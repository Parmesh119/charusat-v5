"use client";
import Link from "next/link";
import Navigation from "./section/Navigation";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Header = () => {
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <div
      className={`header-section style-3 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
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
          <div className="header-top-area" style={{ position: "relative" }}>
            {/* <div className="header-top-contact  ">
              <Link href="https://admission2023.charusat.ac.in" className="blink">
                Apply for Admission
              </Link>
            </div> */}
            <div className="header-top-reglog ">
              <Link href="/accreditation-and-ranking" className="login">
                Accreditation & Ranking
              </Link>

              <Link
                href="https://charusatalumni.org"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Alumni
              </Link>
              <Link href="/careers" className="login">
                Careers
              </Link>
              <Link href="/accreditation-and-ranking">NIRF</Link>
              <Link href="/placement">Placement</Link>
              <Link href="/scholarship">Scholarships</Link>
              <Link href="/scholarship">Samaj Scholarships</Link>
              <Link href="/student-corner">Student Corner</Link>

              {/* <Link href="/signup" className="signup">
                Students' Corner
              </Link> */}
              <Link
                href="https://charusat.edu.in:912/UniExamResult/"
                className="login"
                target="_blank"
              >
                Exam Result
              </Link>
              <Link
                href="https://charusat.edu.in:912/FeesPaymentApp/"
                className="signup"
                target="_blank"
              >
                Pay Fees
              </Link>
              <Link href="/contact-us" className="signup">
                Contact Us
              </Link>

              <Link href="/donation">
                <span className="support-btn">
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
  );
};

export default Header;

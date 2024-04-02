"use client";
import "./globals.css";

import Header from "@/components/Header";
// import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/icofont.min.css";
import "@/css/animate.css";
import "@/css/style.css";
import "@/css/megaMenu.css";
import "@/App.css";

import Footer from "@/components/Footer";

import Link from "next/link";

const metadata = {
  title: "CHARUSAT | Best Private University in Gujarat",
  description:
    "Charusat University is one of the Best University in Gujarat located in Changa- Anand. Charusat University provides best education in various domains like Engineering, Pharmacy, Business management, Applied Science, Nursing, Physiotherapy, Computer application, Paramedical Courses and many more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <link rel="shortcut icon" href="./Logo.png"></link>
      <body>
        <div>
          <Header />
          {children}
          <div style={{ position: "relative" }}>
            <p
              className="subTitle-slider text_2 blinking-text"
              style={{
                color: "white",
                backgroundColor: "#FF4500",
                position: "fixed",
                bottom: "10%",
                right: "1%",
                zIndex: "999",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Link
                href="/cee2024"
                style={{ color: "white", textDecoration: "none" }}
              >
                Education Expo 2024
              </Link>
            </p>

            <br />
            <p
              className="subTitle-slider text_2 blinking-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF8C00, #FF5733, #FF4500)", // Gradient background with shades of blue
                position: "fixed",
                bottom: "65%",
                right: "1%",
                zIndex: "1000",
                padding: "10px",
                borderRadius: "5px",
                color: "white", // Text color
              }}
            >
              <Link
                href="https://admission.charusat.ac.in/"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
              >
                Admissions 2024-25
              </Link>
            </p>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

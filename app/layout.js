"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
// import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/icofont.min.css";
import "@/css/animate.css";
import "@/css/style.css";
import "@/css/megaMenu.css";
import "@/App.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import Loader from "./Loader";
 const metadata = {
  title: "CHARUSAT | Best Private University in Gujarat",
  description:
    "Charusat University is one of the Best University in Gujarat located in Changa- Anand. Charusat University provides best education in various domains like Engineering, Pharmacy, Business management, Applied Science, Nursing, Physiotherapy, Computer application, Paramedical Courses and many more.",
  icon: "@/public/Logo.png",
};

export default function RootLayout({ children }) {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 8000);
  }, []);
  return (
    <html lang="en">
      <body>
        {load ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Script src="bootstrap/dist/js/bootstrap.min.js" />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

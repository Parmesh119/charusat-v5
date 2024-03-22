"use client";
// import { useEffect, useState } from 'react';
// import Head from "next/head";

// Import your styles
import "normalize.css/normalize.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "@/css/slider-animations.css";
import "@/css/slider-banner.css";

// Your component content remains the same

const BannerFive = () => {
  const content = [
    {
      id: "1",
      title: "CHARUSAT",
      description: "Accreditated with 'A+' Grade by NAAC",
      button: "Apply Now",
      image: "assets/images/home/slider1111.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },

    {
      id: "2",
      title: "Laboratories",
      description:
        "Highly equipped and advanced labs for practical learning and in-depth research",
      button: "Apply Now",
      image: "assets/images/home/lab.webp",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      id: "3",
      title: "Hostels",
      description:
        "Our hostels give out the vibes of comfort and contentment, just like home",
      button: "Apply Now",
      image: "assets/images/home/s3.webp",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
    {
      id: "4",
      title: "Wi Fi Campus",
      description:
        "Connect with the world on CHARUSAT that is entirely wi-fi enabled",
      button: "Apply Now",
      image: "assets/images/home/s4.webp",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
    {
      id: "5",
      title: "Canteen",
      description:
        "Wholesome meals served as a part of indian and world cuisines replete with all 5 flavours",
      button: "Apply Now",
      image: "assets/images/home/canteen.webp",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
    {
      id: "6",
      title: "Infrastructure",
      description:
        "Future Ready Academics infrastructure with ergonomically designed classrooms, ICT and climatization",
      button: "Apply Now",
      image: "assets/images/home/s7.webp",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
    {
      id: "7",
      title: "ATHLETICS & FITNESS",
      description:
        "Physical benefits of recreational sports on the sports fields and in gymnasium facilitates. Indoor sports facility for mental endurance and relaxation",
      button: "Apply Now",
      image: "assets/images/home/s8.webp",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
    {
      id: "8",
      title: "Green Campus",
      description: "Creating a Sustainable and Eco-Friendly Campus Environment",
      button: "Apply Now",
      image: "assets/images/home/s9.webp",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];

  return (
    <section className="d-block clearfix">
      {/* <Head>
        <title>Your Page Title</title>
 
      </Head> */}

      <Slider autoplay="4000" className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
            width="100%"
            height="100%"
          >
            <div className="inner">
              <div
                className="main-text-slider animated-text-front-page"
                style={{
                  // fontFamily: "Playfair Display",
                  fontWeight: "700",
                }}
              >
                <h1> {item.title}</h1>
              </div>
              <p className="subTitle-slider text_1" style={{ color: "black" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <span className="marquee w-80">
        <marquee behavior="scroll" direction="left">
          <a
            href="https://admission.charusat.ac.in"
            className="blink text-white marquee-link"
            target="_blank"
          >
            Apply for Admission 2024-25
          </a>
        </marquee>
      </span>
    </section>
  );
};

export default BannerFive;

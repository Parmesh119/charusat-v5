"use client"
import { Component, useEffect, useState } from "react";
import Link from "next/link";
import "@/css/people.css";
import Head from "next/head";
import Image from "next/image";

const title = "";

const CourseData = [
  {
    imgUrl: "assets/images/People/SurendraSir.png",
    imgAlt: "Shri Surendra M. Patel",
    cate: ["BOM"],
    title: "Surendra Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong>President:</strong>,
      "Shri Charotar Moti Sattavis Patidar Kelavani Mandal",
      <br />,
      <strong>Former Chairman:</strong>,
      "Ahmedabad Urban Development Authority",
      <br />,
      <strong>Former Member of Parliament:</strong>,
      "Rajya Sabha",
      <br />,
     
    ],
    id: 1,
  },
  {
    imgUrl: "assets/images/People/RVU_Sir.png",
    imgAlt: "RVU Sir",
    cate: ["BOM"],
    title: "Dr. R V Upadhyay",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong>
        Provost:
      </strong>,
      "Charotar University of Science and Technology (CHARUSAT)",
    ],
    id: 2,
  },
 
  {
    imgUrl: "assets/images/People/NaginbhaiPatel.png",
    imgAlt: "Naginbhai patel",
    cate: ["BOM"],
    title: "Shri Naginbhai M. Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Member
      </strong>,
      <br />,
      <strong>
        President:
      </strong>,
      "Shri Charotar Moti Sattavis Leuva Patidar Samaj – Mathrusanstha",
    ],
    id: 5,
  },
  
  {
    imgUrl: "assets/images/People/nayan_patel_sir.png",
    imgAlt: "Nayan patel",
    cate: ["BOM"],
    title: "Shri Nayan Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [<strong>
      Member
    </strong>, <br />, "Industrialist, Mumbai"],
    id: 30,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dipenbhai patel",
    cate: ["BOM"],
    title: "Shri Dipenbhai Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [<strong>
      Member
    </strong>, <br />, ""],
    id: 16,
  },
  {
    imgUrl: "assets/images/People/HTPatel.png",
    imgAlt: "H T patel",
    cate: ["BOM"],
    title: "Shri H T Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Member
      </strong>,
      <br />,
      <strong>
        Former President:
      </strong>,
      " API Business, Zydus Cadila Healthcare Ltd",
    ],
    id: 17,
  },
  {
    imgUrl: "assets/images/People/DarshanPatel.webp",
    imgAlt: "Darshan Patel",
    cate: ["BOM"],
    title: "Dr. Darshan Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        Principal :
      </strong>,
      " P D Patel Institute of Applied Sciences (PDPIAS)",
      <br />,
      <strong>Email:</strong>,
      "principal.pdpias@charusat.ac.in",
    ],
    id: 18,
  },
  {
    imgUrl: "assets/images/People/AtulPatel.png",
    imgAlt: "Dr. Atul Patel",
    cate: ["BOM"],
    title: "Dr. Atul Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Member
      </strong>,
      <br />,
      <strong>Registrar,</strong>,
      "CHARUSAT",
      <br />,
      <strong>Email:</strong>,
      "registrar@charusat.ac.in",
    ],
    id: 19,
  },
  {
    imgUrl: "assets/images/People/BalaGanpathy.webp",
    imgAlt: "Dr. M BalaGanpathy",
    cate: ["BOM"],
    title: "Dr. M Balaganapathy",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        Principal :
      </strong>,
      " Ashok & Rita Patel Institute of Physiotherapy (ARIP)",
      <br />,
      <strong>Email:</strong>,
      "principal.arip@charusat.ac.in",
    ],
    id: 20,
  },
  
];

const customLoader = ({ src }) => {
  return src;
};

export default function People() {
  // const params = useParams()
  const [items, setItems] = useState(CourseData);
  const [active, setActive] = useState("");

  // console.log(params)

  const filterItem = async (categItem) => {
    // const updateItems = CourseData.filter((curElem) => {
    //   console.log(curElem.cate.includes(categItem));
    //     return curElem.cate.includes(categItem);

    // });
    console.log("items:" + categItem);
    
    setActive(categItem);
    const updateItems = [];
    CourseData.forEach(async (element) => {
      console.log(element.cate.includes(categItem));
      if (element.cate.includes(categItem)) {
        // console.log(updateItems.length);
        updateItems.push(element);
      }
    });
    console.log(updateItems.length);
    await setItems(updateItems);
  };
  return (
    <div className="course-section style-3 padding-b people_top">
      <Head>
        <title>CHARUSAT People</title>
        <meta http-equiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="CHARUSAT Governing Body" />
        <meta name="keywords" content="Charusat governing body, member, afilliation of governing body members" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="CHARUSAT Governing Body" />
        <meta property="og:description" content="List of governing body members of CHARUSAT" />
        <meta name="author" content="CHARUSAT Web Team" />
      </Head>
      <div className="course-shape one">
        <img src="assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="assets/images/shape-img/icon/02.png" alt="education" />
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              {/* <li onClick={() => setItems(CourseData)}>All</li> */}

             <Link href='/governing-body'> <li
                
              >
                Governing Body
              </li></Link>
              <li
                className="active"
              >
                Board of Management
              </li>
              <Link href='/deans&principal'><li
              >
                Deans & Principal
              </li></Link>
            
            </ul>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                title,
                author,
                authorName,
                price,
              } = elem;
              return (
                <div className="col" style={{ height: "" }} key={id}>
                  <div className="course-item style-4">
                    <div className="course-inner" style={{ height: "450px" }}>
                      <div
                        className="course-thumb"
                        style={{
                          height: "15rem",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <Image
                          src={imgUrl}
                          alt={imgAlt}
                          height={100}
                          width={100}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            
                          }}
                          loader={customLoader}
                        />
                        <div className="course-category">
                          {/* <div className="course-cate">
                            <a href="#">{cate}</a>
                            </div> */}
                          {/* <div className="course-reiew">
                                                        <Rating />
                                                    </div> */}
                        </div>
                      </div>
                      <div
                        className="course-content"
                        style={{ background: "", height: "100%" }}
                      >
                        {/* <Link to="/course-single"> */}
                        <h5 style={{ wordWrap: "break-word" }}>{title}</h5>
                        <h6
                          style={{
                            wordWrap: "break-word",
                            fontSize: "0.9rem",
                            fontWeight: "400",
                          }}
                        >
                          {authorName}
                        </h6>
                        {/* </Link> */}
                        {/* <div className="course-footer">
                                                    <div className="course-author">
                                                        <img src={author} alt={imgAlt} />
                                                        <Link to="/team-single" className="ca-name">{authorName}</Link>
                                                    </div>
                                                    <div className="course-price">{price}</div>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import "@/css/people.css";
//import { Helmet } from "react-helmet";
// import Head from "next/head";
const title = "";
import Image from "next/image";

import email_Logo from "@/public/assets/images/icon/03.png";

const customLoader = ({ src }) => {
  return src;
};
const CourseData = [
  {
      imgUrl: "assets/images/People/Y_P_Kosta_Sir.webp",
      imgAlt: "Dr. Y. P. Kosta",
      cate: ["DeansNPrincipals"],
      title: "Dr. Y. P. Kosta",
      author: "assets/images/course/author/03.jpg",
      authorName: [
  
        <strong key="director-label">Director: </strong>,
        "University Research Cell(URC) - CSRTC,KRADLE,ICC,ADPICoE(AI)",
        <br key="line-break" />,
        <Image src={email_Logo} height={15} width={15} key="img-photo" />,
        <>&nbsp;:&nbsp;</>,
  
        "director.urc@charusat.ac.in",
      ],
      id: 1,
    },
    {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Mayur Sutaria",
    cate: ["Admin Officer"],
    title: "Dr. Mayur Sutaria",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Coordinator</strong>,
      <br key="rg-br-001" />,
      "IQAC",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "coordinator.iqac@charusat.ac.in", 
    ],
    id: 2,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Ritesh Patel",
    cate: ["Admin Officer"],
    title: "Dr. Ritesh Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Head</strong>,
      <br key="rg-br-001" />,
      "IT Cell",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "convener.itcell@charusat.ac.in", 
    ],
    id: 3,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Mr. Mukesh Yadav",
    cate: ["Admin Officer"],
    title: "Mr. Mukesh Yadav",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Dy. Registrar</strong>,
      <br key="rg-br-001" />,
      "Academic Section",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "dy.registrar.ace@charusat.ac.in", 
    ],
    id: 4,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Abhilash Shukla",
    cate: ["Admin Officer"],
    title: "Dr. Abhilash Shukla",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Officer on Special Duty </strong>,
      <br key="rg-br-001" />,
      "Exam Section",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "abhilashshukla.mca@charusat.ac.in", 
    ],
    id: 5,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Mr. Mitesh Patel",
    cate: ["Admin Officer"],
    title: "Mr. Mitesh Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Assistant Registrar</strong>,
      <br key="rg-br-001" />,
      "Student Section",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "", 
    ],
    id: 6,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Mr. Bhadresh Rana",
    cate: ["Admin Officer"],
    title: "Mr. Bhadresh Rana",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Section Officer</strong>,
      <br key="rg-br-001" />,
      "International Student Cell",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "convener.isc@charusat.ac.in", 
    ],
    id: 7,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Pritesh Patel",
    cate: ["Admin Officer"],
    title: "Dr. Pritesh Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Assistant Director</strong>,
      <br key="rg-br-001" />,
      "Physical Education & Sports",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "sports.officer@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Ashwin Makwana",
    cate: ["Admin Officer"],
    title: "Dr. Ashwin Makwana",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Head</strong>,
      <br key="rg-br-001" />,
      "CDPC & HRDC",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "head.cdpc@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Jaimin Undavia",
    cate: ["Admin Officer"],
    title: "Dr. Jaimin Undavia",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Coordinator</strong>,
      <br key="rg-br-001" />,
      "CHARUSAT Startup & Innovation Center",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "csic@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Mr. Kruten Patel",
    cate: ["Admin Officer"],
    title: "Mr. Kruten Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Corporate Communication Officer</strong>,
      <br key="rg-br-001" />,
      
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "cco@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Mr. Rajendra Solanki",
    cate: ["Admin Officer"],
    title: "Mr. Rajendra Solanki",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Dy. Registrar</strong>,
      <br key="rg-br-001" />,
      "HR & General Administration",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "dy.registrar.hrd@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Swati Joshi",
    cate: ["Admin Officer"],
    title: "Dr. Swati Joshi",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Senior Executive Officer</strong>,
      <br key="rg-br-001" />,
      "CHARUSAT Innovative Ventures Foundation",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "seo@civf.co.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Mr. Dinesh Patel",
    cate: ["Admin Officer"],
    title: "Mr. Dinesh Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Librarian</strong>,
      <br key="rg-br-001" />,
      "Central Library",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "dineshpatel.lib@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Pramod Patel",
    cate: ["Admin Officer"],
    title: "Dr. Pramod Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Librarian & Event Convener</strong>,
      
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "events@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Dilip Gosai",
    cate: ["Admin Officer"],
    title: "Dr. Dilip Gosai",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Executive Officer</strong>,
      <br key="rg-br-001" />,
      "CREDP",
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "head.credp@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Rashmin Patel",
    cate: ["Admin Officer"],
    title: "Dr. Rashmin Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">I/c, CHARUSAT Alumni Association</strong>,
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "alumni@charusat.ac.in", 
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Mr. Jaymin Desai",
    cate: ["Admin Officer"],
    title: "Mr. Jaymin Desai",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">University Engineer-IDMC</strong>,
      <br key="rg-br-001" />,
      <Image src={email_Logo} height={15} width={15} key="img-photo" />,
      <>&nbsp;:&nbsp;</>,
      "jaymindesai.cv@charusat.ac.in", 
    ],
    id: 8,
  },
  
  
];

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
      <title>CHARUSAT People</title>
      <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="CHARUSAT Governing Body" />
      <meta
        name="keywords"
        content="Charusat governing body, member, afilliation of governing body members"
      />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="translate" />
      <meta name="google" content="nopagereadaloud" />
      <meta property="og:type" content="homepage" />
      <meta property="og:title" content="CHARUSAT Governing Body" />
      <meta
        property="og:description"
        content="List of governing body members of CHARUSAT"
      />
      <meta name="author" content="CHARUSAT Web Team" />

      <div className="course-shape one">
        <Image
          src="assets/images/shape-img/icon/01.png"
          alt="education"
          fill
          loader={customLoader}
        />
      </div>
      <div className="course-shape two">
        <Image
          src="assets/images/shape-img/icon/02.png"
          alt="education"
          fill
          loader={customLoader}
        />
      </div>
      <div className="container">
        <div className="section-header">
          <h3 className="title" style={{ margin: "auto" }}>
            University Administrative Officers
          </h3>
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
                            objectFit:"fill",
                            
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
                        key={id}
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
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

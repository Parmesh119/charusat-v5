"use client";
import {  useState } from "react";
import Link from "next/link";
import "@/css/people.css";
import email_Logo from "@/public/assets/images/icon/Email_Icon.png"
import Image from "next/image";
import Img03 from "@/public/assets/images/course/author/03.jpg";
import Img01 from "@/public/assets/images/course/author/01.jpg";
import surendra from "@/public/assets/images/People/SurendraSir.png";
import RVU_Sir from "@/public/assets/images/People/RVU_sir.png";
import NaginbhaiPatel from "@/public/assets/images/People/NaginbhaiPatel.png";
import nayan_patel_sir from "@/public/assets/images/People/nayan_patel_sir.png";
import user from "@/public/assets/images/People/user.png";
import HTPatel from "@/public/assets/images/People/HTPatel.png";
// import DarshanPatel from "@/public/assets/images/People/DarshanPatel.webp";
import AtulPatel from "@/public/assets/images/People/AtulPatel.png";
import BalaGanpathy from "@/public/assets/images/People/BalaGanpathy.webp";

const title = "";

const CourseData = [
  {
    imgUrl: surendra,
    imgAlt: "Shri Surendra M. Patel",
    cate: ["BOM"],
    title: "Shri Surendra Patel",
    author: Img01,
    authorName: [
      <strong key="president">President:</strong>,
      "Shri Charotar Moti Sattavis Patidar Kelavani Mandal",
      <br key="br1" />,
      <strong key="formerChairman">Former Chairman:</strong>,
      "Ahmedabad Urban Development Authority",
      <br key="br2" />,
      <strong key="formerMP">Former Member of Parliament:</strong>,
      "Rajya Sabha",
      <br key="br3" />,
    ],
    id: 1,
  },
  {
    imgUrl: RVU_Sir,
    imgAlt: "RVU Sir",
    cate: ["BOM"],
    title: "Dr. R V Upadhyay",
    author: Img01,
    authorName: [
      <strong key="provost">Provost:</strong>,
      "Charotar University of Science and Technology (CHARUSAT)",
    ],
    id: 2,
  },

  {
    imgUrl: NaginbhaiPatel,
    imgAlt: "Naginbhai patel",
    cate: ["BOM"],
    title: "Shri Naginbhai M. Patel",
    author: Img03,
    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      <strong key="president">President:</strong>,
      "Shri Charotar Moti Sattavis Leuva Patidar Samaj – Mathrusanstha",
    ],
    id: 5,
  },

  {
    imgUrl: nayan_patel_sir,
    imgAlt: "Nayan patel",
    cate: ["BOM"],
    title: "Shri Nayan Patel",
    author: Img03,
    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      "Industrialist, Mumbai",
    ],
    id: 30,
  },
  {
    imgUrl: user,
    imgAlt: "Dipenbhai patel",
    cate: ["BOM"],
    title: "Shri Dipenbhai Patel",
    author: Img03,
    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      <span key="empty"></span>,
    ],
    id: 16,
  },
  {
    imgUrl: HTPatel,
    imgAlt: "H T patel",
    cate: ["BOM"],
    title: "Shri H T Patel",
    author: Img03,
    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      <strong key="formerPresident">Former President:</strong>,
      " API Business, Zydus Cadila Healthcare Ltd",
    ],
    id: 17,
  },
  // {
  //   imgUrl: DarshanPatel,
  //   imgAlt: "Darshan Patel",
  //   cate: ["BOM"],
  //   title: "Dr. Darshan Patel",
  //   author: Img03,
  //   authorName: [
      
  //     <strong key="principal">Principal :</strong>,
  //     " P D Patel Institute of Applied Sciences (PDPIAS)",
  //     <br key="br2" />,
  //     <Image src={email_Logo} height={20} width={20}/>,
  //     <>: </>,
  //     "principal.pdpias@charusat.ac.in",
  //   ],
  //   id: 18,
  // },
  {
    imgUrl: AtulPatel,
    imgAlt: "Dr. Atul Patel",
    cate: ["BOM"],
    title: "Dr. Atul Patel",
    author: Img03,
    authorName: [
      <strong key="rg-br-001">Member Secretary</strong>,
      <br key="rg-br-002" />,
      <strong key="rg-br-003">Registrar,</strong>,
      "CHARUSAT",
      <br key="br2" />,
      <Image src={email_Logo} height={20} width={20}/>,
      <>: </>,
      "registrar@charusat.ac.in",
    ],
    id: 19,
  },
  {
    imgUrl: BalaGanpathy,
    imgAlt: "Dr. M BalaGanpathy",
    cate: ["BOM"],
    title: "Dr. M Balaganapathy",
    author: Img03,
    authorName: [
      
      <strong key="principal">Principal :</strong>,
      " Ashok & Rita Patel Institute of Physiotherapy (ARIP)",
      <br key="br2" />,
      <Image src={email_Logo} height={20} width={20}/>,
      <>: </>,
      "principal.arip@charusat.ac.in",
    ],
    id: 20,
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
        <img src="assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="assets/images/shape-img/icon/02.png" alt="education" />
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul demo1">
              {/* <li onClick={() => setItems(CourseData)}>All</li> */}

              <Link href="/governing-body">
                {" "}
                <li>Governing Body</li>
              </Link>
              <li className="active">Board of Management</li>
              <Link href="/deans&principal">
                <li>Deans & Principal</li>
              </Link>
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
      <br />
    </div>
  );
}

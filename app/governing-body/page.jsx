"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/css/people.css";
// import Head from "next/head";
import email_Logo from "@/public/assets/images/icon/Email_Icon.png";
import Image from "next/image";

const title = "";

const CourseData = [
  {
    imgUrl: "assets/images/People/SurendraSir.png",
    imgAlt: "Shri Surendra M. Patel",
    cate: ["Governing Body"],
    title: "Shri Surendra Patel",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Chairperson</strong>,
      <br key="chr" />,
      <strong key="rg-br-001">President:</strong>,
      "Shri Charotar Moti Sattavis Patidar Kelavani Mandal",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Former Chairman:</strong>,
      "Ahmedabad Urban Development Authority",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Former Member of Parliament:</strong>,
      "Rajya Sabha",
      <br key="rg-br-001" />,
    ],
    id: 1,
  },
  {
    imgUrl: "assets/images/People/RVU_sir.png",
    imgAlt: "RVU Sir",
    cate: ["Governing Body"],
    title: "Dr. R V Upadhyay",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Provost:</strong>,

      "Charotar University of Science and Technology (CHARUSAT)",
    ],
    id: 2,
  },
  {
    imgUrl: "assets/images/People/VirendraPatel.png",
    imgAlt: "virendra patel",
    cate: ["Governing Body"],
    title: "Shri Virendra S Patel",
    author: "assets/images/course/author/02.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Trustee:</strong>,
      "Shri Charotar Moti Sattavis Patidar Kelavani Mandal",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Treasurer:</strong>,
      " CHRF",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Founder:</strong>,
      " Charusat Educational Foundation",
    ],
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "assets/images/People/mipatel-1.png",
    imgAlt: "mipatel",
    cate: ["Governing Body"],
    title: "Dr. M. I. Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      "Former Sheriff of Mumbai",
      <br key="rg-br-001" />,
      "Renowned Technocrat and Industrialist based at Mumbai",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Chief Patron :</strong>,
      "Smt. Chandaben Mohanbhai Patel Institute of Computer Applications, CHARUSAT",
    ],
    id: 4,
  },
  {
    imgUrl: "assets/images/People/NaginbhaiPatel.png",
    imgAlt: "Naginbhai patel",
    cate: ["Governing Body"],
    title: "Shri Naginbhai M. Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001"> President:</strong>,
      "Shri Charotar Moti Sattavis Leuva Patidar Samaj – Mathrusanstha",
    ],
    id: 5,
  },
  {
    imgUrl: "assets/images/People/Bimal-Patel.png",
    imgAlt: "Dr. Bimal Patel",
    cate: ["Governing Body"],
    title: "Dr. Bimal Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Vice-Chancellor :</strong>,
      " Rashtriya Raksha University",
      <br key="rg-br-001" />,
      <span key="rg-br-001">Member :</span>,
      " International Law Commission, UN",
    ],
    id: 6,
  },

  {
    imgUrl: "assets/images/People/dr-y-p-kosta.webp",
    imgAlt: "y p kosta",
    cate: ["Governing Body"],
    title: "Dr. Y. P. Kosta",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Director:</strong>,
      "University Research Cell(URC) - CSRTC,KRADLE,ICC,ADPICoE(AI)",
      <br key="rg-br-001" />,
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/ManubhaiPatel.png",
    imgAlt: "Manubhai Patel",
    cate: ["Governing Body"],
    title: "Shri Manubhai Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      "Prominent Industrialist",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Managing Director:</strong>,
      " Sigil India Ltd., Vadodara",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Patron:</strong>,
      " P. D. Patel Institute of Applied Science (PDPIAS)",
    ],
    id: 9,
  },
  {
    imgUrl: "assets/images/People/MananRaval.webp",
    imgAlt: "Manan Raval",
    cate: ["Governing Body"],
    title: "Dr. Manan Raval",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Principal:</strong>,
      " Ramanbhai Patel College of Pharmacy (RPCP)",
      <br key="rg-br-001" />,
    ],
    id: 7,
  },
  {
    imgUrl: "assets/images/People/HemalPatel-1.png",
    imgAlt: "Hemal Patel",
    cate: ["Governing Body"],
    title: "Shri Hemal Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      "Leading Entrepreneur in IT Industry",
      <br key="rg-br-001" />,
    ],
    id: 10,
  },
  {
    imgUrl: "assets/images/People/PankajPatel-1.png",
    imgAlt: "Pankaj Patel",
    cate: ["Governing Body"],
    title: "Shri Pankaj R Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Chairman & Managing Director:</strong>,
      " Cadila Healthcare Ltd",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Chief Patron:</strong>,
      " Ramanbhai Patel College of Pharmacy, CHARUSAT",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Chairman:</strong>,
      "Ahmedabad Management Association",
    ],
    id: 11,
  },
  {
    imgUrl: "assets/images/People/DevangPatel.png",
    imgAlt: "Devang Patel",
    cate: ["Governing Body"],
    title: "Shri Devang Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Chief Executive:</strong>,
      " IPCO Industries & Business Operated at USA",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Chief Patron:</strong>,
      " Indukaka Ipcowala Institute of Management, CHARUSAT",
      <br key="rg-br-001" />,
      "A Philanthrope of repute",
    ],
    id: 12,
  },
  {
    imgUrl: "assets/images/People/dr_harish_patel.png",
    imgAlt: "harish patel",
    cate: ["Governing Body"],
    title: "Dr. Harish Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      "Prominent Technocrate, USA",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Chief Patron:</strong>,
      " Manikaka Topawala Institute of Nursing, CHARUSAT",
      <br key="rg-br-001" />,
      "A Philanthrope of repute",
    ],
    id: 13,
  },
  {
    imgUrl: "assets/images/People/SJHaider.png",
    imgAlt: "S J Haider",
    cate: ["Governing Body"],
    title: "Shri S J Haider, IAS",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      "Additional Chief Secretary, Education Department, Govt.of Gujarat",
    ],
    id: 14,
  },
  // {
  //   imgUrl: "assets/images/People/DrDevangJoshi-1.png",
  //   imgAlt: "Devang Joshi",
  //   cate: ["University Officers", "BOM"],
  //   title: "Dr. Devang Joshi",
  //   author: "assets/images/course/author/03.jpg",
  //   authorName: ["Member Secretary", <br />, "Registrar, CHARUSAT"],
  //   id: 15,
  // },

  {
    imgUrl: "assets/images/People/AtulPatel.png",
    imgAlt: "Dr. Atul Patel",
    cate: ["Governing Body"],
    title: "Dr. Atul Patel",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong key="rg-br-001">Member Secretary,</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Registrar,</strong>,
      "CHARUSAT",
      <br key="rg-br-001" />,
    ],
    id: 15,
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
    <div className="course-section style-3  people_top">
      {/* <div className="course-shape one">
        <img src="assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="assets/images/shape-img/icon/02.png" alt="education" />
      </div> */}
      <div className="container">
        <div className="section-header">
          <h3 className="title" style={{ margin: "auto" }}>
            Governing Body
          </h3>
          {/* <div className="course-filter-group">
            <ul className="lab-ul demo1">
           
              <li className="active">Governing Body</li>
              <Link href="/board-of-management">
                {" "}
                <li>Board of Management</li>
              </Link>
              <Link href="/deans&principal">
                {" "}
                <li>Deans & Principal</li>
              </Link>
            </ul>
          </div> */}
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
                        key={id}
                      >
                        <img
                          src={imgUrl}
                          alt={imgAlt}
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

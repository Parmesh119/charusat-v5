"use client";
import { Component, useEffect, useState } from "react";
import Link from "next/link";
import "@/css/people.css";
import Head from "next/head";
const title = "";

const CourseData = [
  {
    imgUrl: "assets/images/People/SurendraSir.png",
    imgAlt: "Shri Surendra M. Patel",
    cate: ["Governing Body"],
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
    cate: ["Governing Body"],
    title: "Dr. R V Upadhyay",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong>Provost:</strong>,
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
      <strong>Member</strong>,
      <br />,
      <strong>Trustee:</strong>,
      "Shri Charotar Moti Sattavis Patidar Kelavani Mandal",
      <br />,
      <strong>Treasurer:</strong>,
      " CHRF",
      <br />,
      <strong>Founder:</strong>,
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
      <strong>Member</strong>,
      <br />,
      "Former Sheriff of Mumbai",
      <br />,
      "Renowned Technocrat and Industrialist based at Mumbai",
      <br />,
      <strong>Chief Patron :</strong>,
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
      <strong>Member</strong>,
      <br />,
      <strong>President:</strong>,
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
      <strong>Member</strong>,
      <br />,
      <strong>Vice-Chancellor :</strong>,
      " Rashtriya Raksha University",
      <br />,
      <strong>Member :</strong>,
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
      <strong>Director:</strong>,
      "University Research Cell(URC) - CSRTC,KRADLE,ICC,ADPICoE(AI)",
      <br />,
      <strong>Email:</strong>,
      "director.urc@charusat.ac.in",
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
      <strong>Member</strong>,
      <br />,
      "Prominent Industrialist",
      <br />,
      <strong>Managing Director:</strong>,
      " Sigil India Ltd., Vadodara",
      <br />,
      <strong>Patron:</strong>,
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
      <strong>Member</strong>,
      <br />,
      <strong>Principal:</strong>,
      " Ramanbhai Patel College of Pharmacy (RPCP)",
      <br />,
      <strong>Email:</strong>,
      "principal.rpcp@charusat.ac.in",
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
      <strong>Member</strong>,
      <br />,
      "Leading Entrepreneur in IT Industry",
      <br />,
      <strong>Email:</strong>,
      "hemal@hemal.com",
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
      <strong>Member</strong>,
      <br />,
      <strong>Chairman & Managing Director:</strong>,
      " Cadila Healthcare Ltd",
      <br />,
      <strong>Chief Patron:</strong>,
      " Ramanbhai Patel College of Pharmacy, CHARUSAT",
      <br />,
      <strong>Chairman:</strong>,
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
      <strong>Member</strong>,
      <br />,
      <strong>Chief Executive:</strong>,
      " IPCO Industries & Business Operated at USA",
      <br />,
      <strong>Chief Patron:</strong>,
      " Indukaka Ipcowala Institute of Management, CHARUSAT",
      <br />,
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
      <strong>Member</strong>,
      <br />,
      "Prominent Technocrate, USA",
      <br />,
      <strong>Chief Patron:</strong>,
      " Manikaka Topawala Institute of Nursing, CHARUSAT",
      <br />,
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
      <strong>Member</strong>,
      <br />,
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
      <strong>Member Secretary,</strong>,
      <br />,
      <strong>Registrar,</strong>,
      "CHARUSAT",
      <br />,
      <strong>Email:</strong>,
      "registrar@charusat.ac.in",
    ],
    id: 19,
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
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              {/* <li onClick={() => setItems(CourseData)}>All</li> */}

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

"use client"
import { Component, useEffect, useState } from "react";
import  Link from "next/link";
import "@/css/people.css";
//import { Helmet } from "react-helmet";
import Head from "next/head";
const title = "";
import Image from "next/image";

const customLoader = ({ src }) => {
  return src;
};
const CourseData = [
  
  {
    imgUrl: "assets/images/People/dr-y-p-kosta.webp",
    imgAlt: "y p kosta",
    cate: ["DeansNPrincipals"],
    title: "Dr. Y. P. Kosta",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>Director:</strong>,
      "University Research Cell(URC) - CSRTC,KRADLE,ICC,ADPICoE(AI)",
      <br />,
      <strong>
        Email:
      </strong>
      , "director.urc@charusat.ac.in",
    ],
    id: 8,
  },
  {
    imgUrl: "assets/images/People/Vijay_Chaudhary.webp",
    imgAlt: "Vijay Chaudhary",
    cate: ["DeansNPrincipals"],
    title: "Dr. Vijay Chaudhary",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        I/C Dean:
      </strong>,
      " Faculty of Technology & Engineering",
      <br />,
      <strong>
        Head:
      </strong>,
      " CHAMOS Matrusanstha Department of Mechanical Engineering",
      <br />,
      <strong>Email:</strong>,
      "hod.me@charusat.ac.in",
    ],
    id: 21,
  },
  {
    imgUrl: "assets/images/People/DrBhaskarPandya.png",
    imgAlt: "Bhaskar Pandya",
    cate: ["DeansNPrincipals"],
    title: "Dr. Bhaskar Pandya",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>Dean:</strong>,
      "Faculty of Humanities",
      <br />,
      <strong>Head:</strong>, "Dept. of Humanities", <br />,
      <strong>Email:</strong>, "dean.foh@charusat.ac.in",
    ],
    id: 22,
  },
  {
    imgUrl: "assets/images/People/Gayatri-Dave.jpg",
    imgAlt: "Gayatri Dave",
    cate: ["DeansNPrincipals"],
    title: "Dr. Gayatri Dave",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        I/C Dean :
      </strong>,
      " Faculty of Sciences",
      <br />,
      <strong>Email:</strong>,
      "dean.fas@charusat.ac.in",
    ],
    id: 23,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Dhruv-Dave.webp",
    imgAlt: "Dhruv Dave",
    cate: ["DeansNPrincipals"],
    title: "Dr. Dhruv Dave",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Dhruv-Dave.webp",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        I/C Dean :
      </strong>,
      "Faculty of Medical Sciences",
      <br />,
      <strong>Email:</strong>,
      "dean.fmd@charusat.ac.in",
    ],
    id: 31,
  },
  {
    imgUrl: "assets/images/People/Samir-Patel.jpg",
    imgAlt: "Dr. Samir Patel",
    cate: ["DeansNPrincipals"],
    title: "Dr. Samir Patel",
    author: "assets/images/People/user.png",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        I/C Dean :
      </strong>,
      " Faculty of Pharmacy",
      <br />,
      <strong>Email:</strong>,
      "dean.fph@charusat.ac.in",
    ],
    id: 33,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/sanskruti_patel.jpg",
    imgAlt: "Dr. Sanskruti Patel",
    cate: ["DeansNPrincipals"],
    title: "Dr. Sanskruti Patel",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/sanskruti_patel.jpg",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        I/C Dean :
      </strong>,
      "  Faculty of Computer Science & Applications",
      <br />,
      <strong>Email:</strong>,
      "dean.fca@charusat.ac.in",
    ],
    id: 35,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Reshma.webp",
    imgAlt: "Dr. Reshma Sable",
    cate: ["DeansNPrincipals"],
    title: "Dr. Reshma Sable",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Reshma.webp",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        I/C Dean :
      </strong>,
      " Faculty of Management Studies",
      <br />,
      <strong>Email:</strong>,
      "dean.fms@charusat.ac.in",
    ],
    id: 37,
  },
  {
    imgUrl: "assets/images/People/MananRaval.webp",
    imgAlt: "Manan Raval",
    cate: ["DeansNPrincipals"],
    title: "Dr. Manan Raval",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        Principal:
      </strong>,
      " Ramanbhai Patel College of Pharmacy (RPCP)",
      <br />,
      <strong>Email:</strong>,
      "principal.rpcp@charusat.ac.in",
    ],
    id: 7,
  },
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/TKU.webp",
    imgAlt: "Dr. Trushit Upadhyay",
    cate: ["DeansNPrincipals"],
    title: "Dr. Trushit Upadhyay",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/TKU.webp",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        Principal :
      </strong>,
      " Chandubhai S Patel Institute of Technology(CSPIT)",
      <br />,
      <strong>Email:</strong>,
      "principal.cspit@charusat.ac.in",
    ],
    id: 32,
  },
  {
    imgUrl: "assets/images/People/DarshanPatel.webp",
    imgAlt: "Darshan Patel",
    cate: ["DeansNPrincipals"],
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
    imgUrl: "assets/images/People/BalaGanpathy.webp",
    imgAlt: "Dr. M BalaGanpathy",
    cate: ["DeansNPrincipals"],
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
  
  // {
  //   imgUrl: "assets/images/People/Amit_Nayak.png",
  //   imgAlt: "Dr. Amit Nayak",
  //   cate: ["DeansNPrincipals"],
  //   title: "Dr. Amit Nayak",
  //   author: "assets/images/People/Amit_Nayak.png",
  //   authorName: [
  //     <strong>
  //       Ph.D.
  //     </strong>,
  //     <br />,
  //     <strong>
  //       Principal :
  //     </strong>,
  //     " Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
  //     <br />,
  //     <strong>Email:</strong>,
  //     "principal.depstar@charusat.ac.in",
  //   ],
  //   id: 34,
  // },
  
  {
    imgUrl: "assets/images/People/Dharmendra_Patel.png",
    imgAlt: "Dr. Dharmendra Patel",
    cate: ["DeansNPrincipals"],
    title: "Dr. Dharmendra Patel",
    author: "assets/images/People/Dharmendra_Patel.png",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        Principal :
      </strong>,
      "Smt. Chandaben Mohanbhai Patel Intitute of Computer Applications (CMPICA)",
      <br />,
      <strong>Email:</strong>,
      "principal.cmpica@charusat.ac.in",
    ],
    id: 36,
  },
  
  {
    imgUrl:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Binit-Patel.webp",
    imgAlt: "Dr. Binit Patel",
    cate: ["DeansNPrincipals"],
    title: "Dr. Binit Patel",
    author:
      "https://charusat.ac.in/wp-content/uploads/Deans_Principal/Binit-Patel.webp",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        Principal :
      </strong>,
      " Indukaka Ipcowala Institute of Management(I2IM)",
      <br />,
      <strong>Email:</strong>,
      "principal.iiim@charusat.ac.in",
    ],
    id: 38,
  },
  {
    imgUrl: "assets/images/People/user.png",
    imgAlt: "Dr. Hemant Kumar",
    cate: ["DeansNPrincipals"],
    title: "Dr. Hemant Kumar",
    author: "assets/images/People/user.png",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        Principal :
      </strong>,
      " Bapubhai Desaibhai Patel Institute of Paramedical Sciences(BDPIPS)",
      <br />,
      <strong>Email:</strong>,
      "principal.cips@charusat.ac.in",
    ],
    id: 39,
  },
  // {
  //   imgUrl: "assets/images/People/PalashMandal.webp",
  //   imgAlt: "Palash Mandal",
  //   cate: ["DeansNPrincipals"],
  //   title: "Dr. Palash Mandal",
  //   author: "assets/images/course/author/03.jpg",
  //   authorName: [
  //     <strong>
      //   Ph.D.
      // </strong>,
  //     <br />,
  //     "Principal In Charge : P D Patel Institute of Applied Sciences (PDPIAS)",
  //     <br />,
  //     "principal.pdpias@charusat.ac.in",
  //   ],
  //   id: 24,
  // },
  {
    imgUrl: "assets/images/People/AnilSharma.webp",
    imgAlt: "Dr. Anil Sharma",
    cate: ["DeansNPrincipals"],
    title: "Dr. Anil Sharma",
    author: "assets/images/course/author/03.jpg",
    authorName: [
      <strong>
        Ph.D.
      </strong>,
      <br />,
      <strong>
        Principal :
      </strong>,
      " Manikaka Topawala Institute of Nursing (MTIN)",
      <br />,
      <strong>Email:</strong>,
      "principal.mtin@charusat.ac.in",
    ],
    id: 25,
  },
 
  
  // {
  //   imgUrl: "assets/images/People/PRO.png",
  //   imgAlt: "Dilip Gosai",
  //   cate: ["University Officers"],
  //   title: "Dr. Dilip Gosai",
  //   author: "assets/images/course/author/03.jpg",
  //   authorName: [
  //     "Corporate Communication Officer",
  //     <br />,
  //     <strong>
  //       Contact For:
  //     </strong>,
  //     " School Visit, Sponsorships, Workshops, Seminars, News and General Inquiries, etc.",
  //     <br />,
  //     <strong>Email:</strong>,
  //     "dilipgosai.pr@charusat.ac.in",
  //   ],
  //   id: 28,
  // },
  
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
        <Image src="assets/images/shape-img/icon/01.png" alt="education" fill loader={customLoader}/>
      </div>
      <div className="course-shape two">
        <Image src="assets/images/shape-img/icon/02.png" alt="education" fill loader={customLoader}/>
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              {/* <li onClick={() => setItems(CourseData)}>All</li> */}

             <Link href="/governing-body"> <li
                
              >
                Governing Body
              </li></Link>
             <Link href='/board-of-management'> <li
              >
                Board of Management
              </li></Link>
              <li
              className="active"
              >
                Deans & Principal
              </li>
            
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
                  <br/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

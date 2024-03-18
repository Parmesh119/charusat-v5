"use client";
import Link from "next/link";
import { useState } from "react";

// import dynamic from "next/dynamic";
import Image from "next/image";
// import Icon1 from "@/public/assets/images/shape-img/icon/01.png"
// import Icon2 from "@/public/assets/images/shape-img/icon/02.png"
import cspit from "@/public/assets/images/institute/CSPIT.jpg";
import depstar from "@/public/assets/images/institute/DEPSTAR.jpg";
import rpcp from "@/public/assets/images/institute/RPCP.jpg";
import arip from "@/public/assets/images/institute/ARIP.jpg";
import cmpica from "@/public/assets/images/institute/CMPICA.jpg";
import i2im from "@/public/assets/images/institute/I2IM.jpg";
import pdpias from "@/public/assets/images/institute/PDPIAS.jpg";
import MTIN from "@/public/assets/images/institute/MTIN.jpg";
const title = "Faculties";

const CourseData = [
  {
    imgUrl: cspit,
    imgAlt: "CSPIT image",
    cate: "Chandubhai S. Patel Institute of Technology (CSPIT)",
    programs: "Engineering",
    title: "B. Tech, M. Tech, Ph. D.",
    link: "https://www.charusat.ac.in/cspit/",
    author: "assets/images/course/author/01.jpg",
    id: 1,
  },
  {
    imgUrl: depstar,
    imgAlt: "Depstar image",
    cate: "Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    programs: "Engineering",
    title: "B. Tech, M. Tech, Ph. D.",
    link: "https://www.charusat.ac.in/depstar/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: rpcp,
    imgAlt: "RPCP image",
    cate: "Ramanbhai Patel College of Pharmacy (RPCP)",
    programs: "Pharmacy",
    title: "B. Pharm., M. Pharm., Ph. D.",
    link: "https://www.charusat.ac.in/rpcp/",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: cmpica,
    imgAlt: "CMPICA image",
    cate: "Chandaben Mohanbhai Patel Institute of Computer Application (CMPICA)",
    programs: "Computer Science and Application",
    title: "BCA, MCA, B.Sc. IT, M.Sc. IT, Ph. D.",
    link: "https://www.charusat.ac.in/cmpica/",
    author: "assets/images/course/author/03.jpg",
    id: 4,
  },
  {
    imgUrl: i2im,
    imgAlt: "I2IM image",
    cate: "Indukaka Ipcowala Institute of Management (I2IM)",
    programs: "Management Studies",
    title: "BBA, MBA, Ph. D.",
    link: "https://www.charusat.ac.in/i2im/",
    author: "assets/images/course/author/04.jpg",
    id: 5,
  },
  {
    imgUrl: pdpias,
    imgAlt: "PDPIAS image",
    cate: "P. D. Patel Institute of Applied Science (PDPIAS)",
    programs: "Sciences",
    title: "B. Sc., M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/pdpias/",
    author: "assets/images/course/author/05.jpg",

    id: 6,
  },
  {
    imgUrl: MTIN,
    imgAlt: "MTIN image",
    cate: "Manikaka Topawala Institute of Nursing (MTIN)",
    programs: "Medical Sciences",
    title: "GNM, B. Sc., M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/mtin/",
    author: "assets/images/course/author/06.jpg",
    id: 7,
  },
  {
    imgUrl: arip,
    imgAlt: "ARIP image",
    cate: "Ashok & Rita Patel Institute of Physiotherapy (ARIP)",
    programs: "Medical Sciences",
    title: "BPT, MPT, Ph. D.",
    link: "https://www.charusat.ac.in/arip/",
    author: "assets/images/course/author/01.jpg",
    id: 8,
  },
  {
    imgUrl: arip,
    imgAlt: "BDIPS image",
    cate: "Bapubhai Desaibhai Patel Institute of Paramedical Sciences (BDIPS)",
    programs: "Medical Sciences",
    title: "B. Opto., B. Sc., M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/cips/",
    author: "assets/images/course/author/02.jpg",
    id: 9,
  },
];

function Faculties() {
  const [items, setItems] = useState(CourseData);
  const filterItem = (categItem) => {
    const updateItems = CourseData.filter((curElem) => {
      return curElem.programs === categItem;
    });
    setItems(updateItems);
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <div className="course-section style-3 py-4">
      <div className="container">
        <h2 className="title text-center">{title}</h2>
        <div className="section-header">
          <div className="course-filter-group">
            <ul className="lab-ul demo1">
              <li onClick={() => setItems(CourseData)}> All</li>
              <li onClick={() => filterItem("Engineering")}>Engineering</li>
              <li onClick={() => filterItem("Pharmacy")}>Pharmacy</li>
              <li
                onClick={() => filterItem("Computer Science and Application")}
              >
                Computer Science and Application
              </li>
              <li onClick={() => filterItem("Management Studies")}>
                Management Studies
              </li>
              <li onClick={() => filterItem("Sciences")}>Sciences</li>
              <li onClick={() => filterItem("Medical Sciences")}>
                Medical Sciences
              </li>
            </ul>
          </div>
        </div>
        <div className="section-wrapper ">
          <div className="row g-3 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter ">
            {items.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                programs,
                title,
                link,
                author,
                authorName,
                price,
              } = elem;
              return (
                <Link
                  key={id}
                  href={elem.link}
                  target="_blank"
                  data-aos="fade-up"
                >
                  <div className="col" key={id}>
                    <div className="course-item style-4">
                      <div className="course-inner" style={{ height: "300px" }}>
                        <div className="course-thumb">
                          <Image src={imgUrl} alt={imgAlt} style={imageStyle} />
                          <div
                            className="course-category"
                            style={{
                              backgroundColor: "transparent",
                              fontWeight: "bold",
                            }}
                          >
                            <div
                              className="course-cate"
                              style={{
                                height: "68px",
                              }}
                            >
                              <span
                                href="# "
                                style={{
                                  color: "white",
                                  fontWeight: "800",
                                }}
                              >
                                {cate}
                              </span>
                              <p
                                style={{
                                  fontSize: "0.8rem",
                                }}
                              ></p>
                            </div>
                            {/* <div className="course-reiew">
                                                        <Rating />
                                                    </div> */}
                          </div>
                        </div>
                        <div className="course-content">
                          <p className="small">{title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculties;
//  dynamic(()=> Promise.resolve(Faculties),{ssr:false});

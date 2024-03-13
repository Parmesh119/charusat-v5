"use client";
import Link from "next/link";
import { useState } from "react";

// import dynamic from "next/dynamic";
import Image from "next/image";
// import Icon1 from "@/public/assets/images/shape-img/icon/01.png"
// import Icon2 from "@/public/assets/images/shape-img/icon/02.png"
import cspit from "@/public/assets/images/institute/CSPIT.jpg"
import depstar from "@/public/assets/images/institute/DEPSTAR.jpg"
import rpcp from "@/public/assets/images/institute/RPCP.jpg"
import arip from "@/public/assets/images/institute/ARIP.jpg"
import cmpica from "@/public/assets/images/institute/CMPICA.jpg"
import i2im from "@/public/assets/images/institute/I2IM.jpg"
import pdpias from "@/public/assets/images/institute/PDPIAS.jpg"
import MTIN from "@/public/assets/images/institute/MTIN.jpg"
const title = "Faculties";

const CourseData = [
  {
    imgUrl: cspit,
    imgAlt: "CSPIT image",
    cate: "Engineering",
    programs: "B. Tech, M. Tech, Ph. D.",
    title: "Chandubhai S. Patel Institute of Technology",
    link: "https://www.charusat.ac.in/cspit/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: depstar,
    imgAlt: "Depstar image",
    cate: "Engineering",
    programs: "B. Tech, M. Tech, Ph. D.",
    title: "Devang Patel Institute of Advance Technology and Research",
    link: "https://www.charusat.ac.in/depstar/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: rpcp,
    imgAlt: "RPCP image",
    cate: "Pharmacy",
    programs: "B. Pharm., M. Pharm., Ph. D.",
    title: "Ramanbhai Patel College of Pharmacy",
    link: "https://www.charusat.ac.in/rpcp/",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: cmpica,
    imgAlt: "CMPICA image",
    cate: "Computer Science and Application",
    programs: "BCA, MCA, B.Sc. IT, M.Sc. IT, Ph. D.",
    title: "Chandaben Mohanbhai Patel Institute of Computer Application",
    link: "https://www.charusat.ac.in/cmpica/",
    author: "assets/images/course/author/03.jpg",
    authorName: "Sajahan Sagor",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: i2im,
    imgAlt: "I2IM image",
    cate: "Management Studies",
    programs: "BBA, MBA, Ph. D.",
    title: "Indukaka Ipcowala Institute of Management",
    link: "https://www.charusat.ac.in/i2im/",
    author: "assets/images/course/author/04.jpg",
    authorName: "Ummi Nishat",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: pdpias,
    imgAlt: "PDPIAS image",
    cate: "Sciences",
    programs: "B. Sc., M. Sc., Ph. D.",
    title: "P. D. Patel Institute of Applied Science",
    link: "https://www.charusat.ac.in/pdpias/",
    author: "assets/images/course/author/05.jpg",
    authorName: "Rassel Hossin",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: MTIN,
    imgAlt: "MTIN image",
    cate: "Medical Sciences",
    programs: "GNM, B. Sc., M. Sc., Ph. D.",
    title: "Manikaka Topawala Institute of Nursing",
    link: "https://www.charusat.ac.in/mtin/",
    author: "assets/images/course/author/06.jpg",
    authorName: "Zinat Zaara",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: arip,
    imgAlt: "ARIP image",
    cate: "Medical Sciences",
    programs: "BPT, MPT, Ph. D.",
    title: "Ashok & Rita Patel Institute of Physiotherapy",
    link: "https://www.charusat.ac.in/arip/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 8,
  },
  {
    imgUrl: arip,
    imgAlt: "BDIPS image",
    cate: "Medical Sciences",
    programs: "B. Opto., B. Sc., M. Sc., Ph. D.",
    title: "Bapubhai Desaibhai Patel Institute of Paramedical Sciences",
    link: "https://www.charusat.ac.in/cips/",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 9,
  },
];

 function Faculties() {
  const [items, setItems] = useState(CourseData);
  const filterItem = (categItem) => {
    const updateItems = CourseData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    width: "100%",
  };
  
  

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        {/* <Image src={Icon1} alt="education" /> */}
      </div>
      <div className="course-shape two">
        {/* <Image src={Icon2} alt="education" /> */}
      </div>
      <div className="container">
        <h2 className="title text-center">{title}</h2>
        <div className="section-header">
          <div className="course-filter-group">
            <ul className="lab-ul demo1">
              <li onClick={() => setItems(CourseData)}>  All</li>
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
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter " >
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
                <Link key={id} href={elem.link} target="_blank" data-aos="fade-up" >
                  <div className="col" key={id}>
                    <div className="course-item style-4" >
                      <div className="course-inner" style={{height:"300px"}} >
                        <div className="course-thumb" >
                          <Image src={imgUrl} alt={imgAlt} style={imageStyle} />
                          <div className="course-category" style={{
                            backgroundColor:"#0066b3",
                            fontWeight: "bold",
                            
                          }}>
                            <div
                              className="course-cate"
                              style={{
                                height: "68px",
                              }}
                            >
                              <span href="# " style={{
                                padding: "5px 15px",
                                color:"white",
                                fontWeight: "800",
                              }}>{cate}</span>
                              <p
                                style={{
                                  fontSize: "1rem",
                                }}
                              >
                                <span style={{
                                padding: "5px 15px",
                                color:"white",
                                fontWeight: "300"
                              }}>{programs}</span>
                              </p>
                            </div>
                            {/* <div className="course-reiew">
                                                        <Rating />
                                                    </div> */}
                          </div>
                        </div>
                        <div className="course-content">
                          <h6>{title}</h6>
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

 export default Faculties
//  dynamic(()=> Promise.resolve(Faculties),{ssr:false});

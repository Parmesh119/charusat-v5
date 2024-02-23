import Link from "next/link";
import Image from "next/image";
import csrtc from "@/public/assets/images/initiative/SPACE RESEARCH CELL.jpg"
import kradle from "@/public/assets/images/event/2.jpg"
import credp from "@/public/assets/images/initiative/RURAL EDUCATION.jpg"
import icc from "@/public/assets/images/initiative/ICC.jpg"
import sdg from "@/public/assets/images/initiative/SDG HANDPRINT ACTION LAB.png"
import hrdc from "@/public/assets/images/initiative/HRDC.png"
import edic from "@/public/assets/images/initiative/EDIC.jpg"
import uiic from "@/public/assets/images/initiative/IIC_2.jpg"
import nabl from "@/public/assets/images/initiative/NABL & TESTING LAB.jpg"


const subTitle = "Why are we unique?";
const title = "Initiatives";

const eventSliderList = [
  {
    imgUrl: csrtc,
    imgAlt: "CSRTC image",
    title: "CHARUSAT Space Research and Technology Center",
    btnText: "Read More",
    url: "/crtc",
  },
  {
    imgUrl: kradle,
    imgAlt: "KRADLE image",
    title: "Dr. K. C. Patel Research & Development Center",
    btnText: "Read More",
    url: "https://kradle.charusat.ac.in/",
  },
  {
    imgUrl: credp,
    imgAlt: "CREDP image",
    title: "CHARUSAT Rural Education Development Program",
    btnText: "Read More",
    url: "./credp",
  },
  {
    imgUrl: icc,
    imgAlt: "ICC image",
    title: "International Cosmology Center (ICC)",
    btnText: "Read More",
    url: "https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC",
  },
  {
    imgUrl: sdg,
    imgAlt: "SDG Lab image",
    title: "SDG Handprint Action Lab",
    btnText: "Read More",
    url: "/coming-soon",
  },
  {
    imgUrl: hrdc,
    imgAlt: "HRDC image",
    title: "Pri. B. I. Patel Human Resource Development Center",
    btnText: "Read More",
    url: "/coming-soon",
  },
  {
    imgUrl: edic,
    imgAlt: "EDIC image",
    title: "Entrepreneurship Development and Incubation Cell",
    btnText: "Read More",
    url: "./edic",
  },
  {
    imgUrl: uiic,
    imgAlt: "UIIC image",
    title: "University Industry Interaction Cell",
    btnText: "Read More",
    url: "./university-industry-interaction-cell",
  },
  {
    imgUrl: nabl,
    imgAlt: "NABL Lab image",
    title: "NABL & Testing Facilities",
    btnText: "Read More",
    url: "/coming-soon",
  },
];

export default function initiatives() {
  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <div className="course-section shape-img  padding-b">
      {/* <div className="course-shape one">
        <img src="assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="assets/images/shape-img/icon/02.png" alt="education" />
      </div> */}
      <div className="container py-4 text-center">
        <span
          className="subtitle h5"
          style={{
            color: "#f16126",
            fontWeight: "normal",
            letterSpacing: "2px",
          }}
        >
          {subTitle}
        </span>
        <div className=" text-center">
          {/* <span className="subtitle">{subTitle}</span> */}
          <h2 className="title mx-auto mb-4">{title}</h2>
        </div>

        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {eventSliderList.map((elem) => {
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
                <a href={link} target="_blank" data-aos="fade-up" key={id}>
                  <div className="col" >
                    <div className="course-item style-4">
                      <div className="course-inner">
                        <div className="course-thumb">
                          <Image src={imgUrl} alt={imgAlt} style={imageStyle} />
                          <div className="course-category" style={{
                            backgroundColor:"#0066b3",
                            fontWeight: "bold",
                          }}>
                            <div
                              className="course-cate text-center m-auto"
                              style={{
                                height: "68px",
                              }}
                            >
                              <span style={{
                                padding: "5px 15px",
                                color:"white",
                                fontWeight: "800",
                              }}>{cate}</span>
                              <div
                                style={{
                                  fontSize: "1rem",
                                }}
                              >
                                <span style={{
                                padding: "5px 15px",
                                color:"white",
                                fontWeight: "800"
                              }}>{title}</span>
                              </div>
                            </div>
                            {/* <div className="course-reiew">
                                                          <Rating />
                                                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
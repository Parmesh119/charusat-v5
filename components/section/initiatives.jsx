import Link from "next/link";
import Image from "next/image";
import csrtc from "@/public/assets/images/initiative/SPACE RESEARCH CELL.jpg";
import kradle from "@/public/assets/images/event/2.jpg";
import credp from "@/public/assets/images/initiative/RURAL EDUCATION.jpg";
import icc from "@/public/assets/images/initiative/ICC.jpg";
import sdg from "@/public/assets/images/initiative/SDG HANDPRINT ACTION LAB.png";
import hrdc from "@/public/assets/images/initiative/HRDC.png";
import edic from "@/public/assets/images/initiative/EDIC.jpg";
import uiic from "@/public/assets/images/initiative/IIC_2.jpg";
import nabl from "@/public/assets/images/initiative/NABL & TESTING LAB.jpg";
import CIVF from "@/public/assets/images/initiative/CIVF.png";

const subTitle = "Why are we unique?";
const title = "Initiatives";

const eventSliderList = [
  {
    imgUrl: csrtc,
    imgAlt: "CSRTC image",
    title: "CHARUSAT Space Research and Technology Center",
    btnText: "Read More",
    url: "/csrtc",
    id: 1,
  },
  {
    imgUrl: kradle,
    imgAlt: "KRADLE image",
    title: "Dr. K. C. Patel Research & Development Center",
    btnText: "Read More",
    url: "https://kradle.charusat.ac.in/",
    id: 2,
  },
  {
    imgUrl: credp,
    imgAlt: "CREDP image",
    title: "CHARUSAT Rural Education Development Program",
    btnText: "Read More",
    url: "./CREDP",
    id: 3,
  },
  {
    imgUrl: icc,
    imgAlt: "ICC image",
    title: "International Cosmology Center (ICC)",
    btnText: "Read More",
    url: "https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC",
    id: 4,
  },
  {
    imgUrl: sdg,
    imgAlt: "SDG Lab image",
    title: "SDG Handprint Action Lab",
    btnText: "Read More",
    url: "./coming-soon",
    id: 5,
  },
  {
    imgUrl: hrdc,
    imgAlt: "HRDC image",
    title: "Pri. B. I. Patel Human Resource Development Center",
    btnText: "Read More",
    url: "./coming-soon",
    id: 6,
  },
  {
    imgUrl: edic,
    imgAlt: "EDIC image",
    title: "Entrepreneurship Development and Incubation Cell",
    btnText: "Read More",
    url: "./coming-soon",
    url: "./edic",
    id: 7,
  },
  {
    imgUrl: uiic,
    imgAlt: "UIIC image",
    title: "University Industry Interaction Cell",
    btnText: "Read More",
    url: "./university-industry-interaction-cell",
    id: 8,
  },
  {
    imgUrl: nabl,
    imgAlt: "NABL Lab image",
    title: "NABL & Testing Facilities",
    btnText: "Read More",
    url: "./coming-soon",
    id: 9,
  },
  {
    imgUrl: CIVF,
    imgAlt: "CIVF Image",
    title: [
      <span key="title1">Charusat Innovative Ventures Foundation</span>,
      <br key="title2" />,
      // <span key="title3">A Section-8 Company</span>,
    ],
    btnText: "Read More",
    url: "https://civf.co.in/",
    id: 10,
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
                url,
                author,
                authorName,
                price,
              } = elem;
              return (
                <Link key={id} href={url} target="_blank" data-aos="fade-up">
                  <div className="col" key={id}>
                    <div className="course-item style-4">
                      <div className="course-inner">
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
                              className="course-cate text-center m-auto"
                              style={{
                                height: "68px",
                              }}
                            >
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "800",
                                }}
                              >
                                {cate}
                              </span>
                              <div
                                style={{
                                  fontSize: "1rem",
                                }}
                              >
                                <span
                                  style={{
                                    padding: "5px 15px",
                                    color: "white",
                                    fontWeight: "800",
                                  }}
                                >
                                  {title}
                                </span>
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
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

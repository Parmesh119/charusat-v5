import Link from "next/link";
const subTitle = "Why are we unique?";
const title = "Initiatives";

const eventSliderList = [
  {
    imgUrl: "assets/images/initiative/SPACE RESEARCH CELL.jpg",
    imgAlt: "CSRTC image",
    title: "CHARUSAT Space Research and Technology Center",
    btnText: "Read More",
    url: "/crtc",
  },
  {
    imgUrl: "assets/images/event/2.jpg",
    imgAlt: "KRADLE image",
    title: "Dr. K. C. Patel Research & Development Center",
    btnText: "Read More",
    url: "https://kradle.charusat.ac.in/",
  },
  {
    imgUrl: "assets/images/initiative/RURAL EDUCATION.jpg",
    imgAlt: "CREDP image",
    title: "CHARUSAT Rural Education Development Program",
    btnText: "Read More",
    url: "./credp",
  },
  {
    imgUrl: "assets/images/initiative/ICC.jpg",
    imgAlt: "ICC image",
    title: "International Cosmology Center (ICC)",
    btnText: "Read More",
    url: "https://charusat.irins.org/faculty/index/International+Centre+for+Cosmology+ICC",
  },
  {
    imgUrl: "assets/images/initiative/SDG HANDPRINT ACTION LAB.png",
    imgAlt: "SDG Lab image",
    title: "SDG Handprint Action Lab",
    btnText: "Read More",
    url: "/coming-soon",
  },
  {
    imgUrl: "assets/images/initiative/HRDC.png",
    imgAlt: "HRDC image",
    title: "Pri. B. I. Patel Human Resource Development Center",
    btnText: "Read More",
    url: "/coming-soon",
  },
  {
    imgUrl: "assets/images/initiative/EDIC.jpg",
    imgAlt: "EDIC image",
    title: "Entrepreneurship Development and Incubation Cell",
    btnText: "Read More",
    url: "./edic",
  },
  {
    imgUrl: "assets/images/initiative/IIC_2.jpg",
    imgAlt: "UIIC image",
    title: "University Industry Interaction Cell",
    btnText: "Read More",
    url: "./university-industry-interaction-cell",
  },
  {
    imgUrl: "assets/images/initiative/NABL & TESTING LAB.jpg",
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
                          <img src={imgUrl} alt={imgAlt} style={imageStyle} />
                          <div className="course-category">
                            <div
                              className="course-cate text-center m-auto"
                              style={{
                                height: "68px",
                              }}
                            >
                              <span>{cate}</span>
                              <div
                                style={{
                                  fontSize: "1rem",
                                }}
                              >
                                <span>{title}</span>
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
// import conferenceOnEthicsReviewInHealthResearch from "../../files/event/Conference on Ethics Review in Health Research.pdf";

import Link from "next/link";

// import certifcateCourseOnRProgrammingForBeginners from "../../files/event/Brochure_RProgramming.pdf";
const subTitle = "Don’t Miss the Day";
const title = "Announcements";
const desc = "";

const eventListOne = [
  {
    imgUrl: "assets/images/event/01.jpg",
    imgAlt: "Conference on Ethics Review in Health Research",
    Date: "28",
    MonthYear: "APR 2023",

    link: `/assets/files/event/Conference on Ethics Review in Health Research.pdf`,
    title: "Conference on Ethics Review in Health Research",
    Time: "",
    Place: "CHARUSAT, MTIN-Auditorium",
  },
];

const eventListTwo = [
  {
    Date: "10",
    MonthYear: "APR 2023",
    link: "https://rb.gy/f7qfd",
    openInNewTab: true,
    title:
      "Registration form for CHARUSAT CAMPUS VISIT from Ahmedabad and Vadodara",
    Time: "",
    Place: " CHARUSAT",
  },
  {
    Date: "28",
    MonthYear: "APR 2023",
    link: `/assets/files/event/Conference on Ethics Review in Health Research.pdf`,
    openInNewTab: true,
    title: "Conference on Ethics Review in Health Research",
    Time: "",
    Place: " CHARUSAT",
  },

  {
    Date: "22",
    MonthYear: "May 2023",
    link: `/assets/files/event/Brochure_RProgramming.pdf`,
    openInNewTab: true,
    title: "Certifcate Course on R Programming for Beginners",
    Time: "",
    Place: " CHARUSAT",
  },

  // {
  //   Date: "18",
  //   MonthYear: "Nav 2021",
  //   title: "DASA Online Reporting Form",
  //   link: "https://charusat.ac.in/arip/#admission",
  //   openInNewTab: true,
  //   Time: "08:30 am",
  //   Place: " National Auditorium, Dhaka",
  // },
  // {
  //   Date: "25",
  //   MonthYear: "Nav 2021",
  //   title: "PG Admission under DASA Scheme",
  // },
];

const Event = () => {
  return (
    <div className="event-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title fw-bold">{title}</h2>
          <p className="desc">{desc}</p>
        </div>
        <div className="section-wrapper">
          <div className="row row-cols-lg-2 row-cols-1 g-4">
            {eventListOne.map((val, i) => (
              <div className="col" key={i}>
                <div className="event-left">
                  <div className="event-item">
                    <div className="event-inner">
                      <div className="event-thumb">
                        <img
                          src={`${val.imgUrl}`}
                          alt={`${val.imgAlt}`}
                          data-aos="fade-right"
                        />
                      </div>
                      <div
                        className="event-content"
                        data-aos="fade-right"
                        data-aos-duration="3000"
                      >
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <Link className="text-decoration-none" href={val.link}>
                            <h3 className="text-black fw-bold">{val.title}</h3>
                          </Link>
                          <ul className="lab-ul">
                            {val.Time ? (
                              <li>
                                <i className="icofont-clock-time"></i>
                                {val.Time}
                              </li>
                            ) : (
                              <span></span>
                            )}

                            {val.Place ? (
                              <li>
                                <i className="icofont-google-map"></i>
                                {val.Place}
                              </li>
                            ) : (
                              <span></span>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col">
              <div className="event-right">
                {eventListTwo.map((val, i) => (
                  <div className="event-item" key={i}>
                    <div className="event-inner">
                      <div className="event-content" data-aos="fade-left">
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <Link href={val.link} className="text-decoration-none">
                            <h5 className="text-black fw-bold">{val.title}</h5>
                          </Link>
                          <ul className="lab-ul">
                            {val.Time ? (
                              <li>
                                <i className="icofont-clock-time"></i>
                                {val.Time}
                              </li>
                            ) : (
                              <span></span>
                            )}

                            {val.Place ? (
                              <li>
                                <i className="icofont-google-map"></i>
                                {val.Place}
                              </li>
                            ) : (
                              <span></span>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

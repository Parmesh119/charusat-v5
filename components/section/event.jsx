// import conferenceOnEthicsReviewInHealthResearch from "@/files/event/Conference on Ethics Review in Health Research.pdf";
// import certifcateCourseOnRProgrammingForBeginners from "@/files/event/Brochure_RProgramming.pdf";
import Link from "next/link";
const subTitle = "Don’t Miss the Day";
const title = "Announcements";
const desc = "";
import Image from "next/image";
import event1 from "@/public/assets/images/event/event1.png"

const eventListOne = [
  {
    
    imgAlt:
      "National Conference on “Empowering Comprehensive Midwifery:Role in Health Care Education,Practice and Research”",
    Date: "6th & 7th",
    MonthYear: "FEB 2024",
    link: "",
    openInNewTab: true,
    title:
      "National Conference on “Empowering Comprehensive Midwifery:Role in Health Care Education,Practice and Research”",
    Time: "",
    Place: "MTIN/CHARUSAT",
  },
];

const eventListTwo = [];

const Event = () => {
  return (
    <div className="event-section  padding-tb ">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
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
                        <Link
                          href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Info.pdf"
                          target="_blank"
                        >
                          {" "}
                          <Image
                            src={event1}
                            alt={`${val.imgAlt}`}
                            data-aos="fade-right"
                            width={696.02} 
                            height={453.58}                         />
                        </Link>
                      </div>
                      <div
                        className="event-content"
                        data-aos="fade-right"
                        data-aos-duration="2800"
                      >
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <a target="_blank">
                            <h5>{val.title}</h5>
                          </a>
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
                          <div className="link-1">
                            <Link
                              target="_blank"
                              href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Info.pdf"
                              className="btn btn-danger text-white mx-2"
                            >
                              Information
                            </Link>
                            <Link
                              target="_blank"
                              href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Schedule.pdf"
                              className="btn btn-danger text-white"
                            >
                              Schedule
                            </Link>
                          </div>
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
                      <div className="event-content" data-aos="fade-left" >
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <a>
                            <h5>{val.title}</h5>
                          </a>
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
                          <div className="link-1">
                            <Link
                              target="_blank"
                              href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Info.pdf"
                              className="btn btn-danger text-white"
                            >
                              Information
                            </Link>
                            <Link
                              target="_blank"
                              href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Schedule.pdf"
                              className="btn btn-danger text-white"
                            >
                              Schedule
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content" data-aos="fade-left">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>17th</h4>
                          <p>FEB 2024</p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a>
                          <h5>Science Manthan 2024</h5>
                        </a>
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT
                          </li>
                        </ul>
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="assets/files/event/SM_2024_A3.pdf"
                            className="btn btn-danger text-white"
                          >
                            Brochure
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content" data-aos="fade-left">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>13th</h4>
                          <p>FEB 2024</p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a href="#">
                          <h5>TENDER FOR CATERING SERVICES</h5>
                        </a>
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT [ 13th-20th FEB 2024 ]
                          </li>
                        </ul>
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="assets/files/event/CANTEEN_TENDER.pdf"
                            className="btn btn-danger text-white"
                          >
                            Information
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content" data-aos="fade-left">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>12th</h4>
                          <p>FEB 2024</p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a href="https://www.charusat.ac.in/arip/#admission">
                          <h5>MPT admission open 2024-25</h5>
                        </a>
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            ARIP/CHARUSAT
                          </li>
                        </ul>
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="https://www.charusat.ac.in/arip/#admission"
                            className="btn btn-danger text-white"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
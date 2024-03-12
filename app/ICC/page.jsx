import { Fragment } from "react";
import Link from 'next/link';
import Contact from "@/components/section/contact";
import "@/css/EOC.css";

const CPSH = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>
                            Internal Complaint Committee (ICC)
                            </h3>
                            <hr />
                            <br />
                            <div className="meta-post">
                              <h5>Objective</h5>
                              The objectives of the Cell and its policy are:
                              <ul>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 To
                                  create a healthy working environment for both
                                  the genders by establishing guidelines to
                                  deter any Sexual Harassment.
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 To
                                  encourage raising of awareness about gender
                                  sensitivity and gender equality at campus
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 To set a
                                  process of accepting grievances on sexual
                                  harassment, gender dignity, their fair
                                  investigation and appropriate action on the
                                  findings of the enquiries
                                </li>
                              </ul>
                            </div>
                            <div className="meta-post">
                              <h5>Definition</h5>
                              Sexual Harassment includes such unwelcome sexually
                              determined behavior by any person individually or
                              in association with other persons or by any person
                              in authority, whether either directly or by
                              implications, such as following:
                              <ul
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Eve
                                  teasing
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Jokes
                                  causing or likely to cause awkwardness or
                                  embarrassment
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Unsavory
                                  remarks{" "}
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Gender
                                  Based insults or sexiest remarks
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                  Innuendos and taunts{" "}
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                  Unwelcome sexual overtone in any manner such
                                  as over telephone (Obnoxious telephone calls)
                                  and the like
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Touching
                                  or brushing against any part of the body and
                                  the like
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Display
                                  of pornographic or other offensive or
                                  derogatory pictures, cartoons pamphlets or
                                  sayings
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Forcible
                                  physical touch or molestation{" "}
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Physical
                                  confinement against one’s will and any other
                                  act likely to violate one’s privacy
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
{" "}
                                  Unwelcomed physical contacts and advances
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 A
                                  communication for sexual favors{" "}
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Any
                                  other unwelcome, physical, verbal or
                                  non-verbal conduct of sexual nature directly,
                                  indirectly, or through electronic media like
                                  SMS, MMS, Social Networking sites etc.
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
 Any act
                                  of Gender Discrimination such as denial of
                                  employment to women due to women’s
                                  reproductive role, or rigidity in attitude,
                                  which hinders the reproductive role of women
                                  (for example, non-flexible work hours and
                                  timings, non-availability of day care
                                  services, lack of maternity leave, etc).
                                </li>
                              </ul>
                            </div>
                            
                            <table className="table">
      <thead>
        <tr>
          <th>Document</th>
          <th>PDF Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Internal Complaint Committee</td>
          <td>
            <Link className="pdfLink" href="/assets/files/ICC/Internal-Complaint-Committee.pdf">
              <i className="icofont-file-pdf" style={{ fontSize: '22px',color:"red"  }}></i>
            </Link>
          </td>
        </tr>
        </tbody>
        </table>
    
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <Contact
              name="Dr. Mrunali R. Patel"
              email="mrunalipatel.ph@charusat.ac.in"
              
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CPSH;

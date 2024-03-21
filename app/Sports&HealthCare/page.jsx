// import React from 'react';

// const Sports = () => {
//   return (
//     <div>
//       <h2>Sports Facilities</h2>
//       <h3>Indoor Sports Facilities</h3>
//       <ul>
//         <li>Gymnasium</li>
//         <li>Indoor Courts (Badminton, Basketball, Volleyball, Table Tennis)</li>
//         <li>Indoor Track</li>
//       </ul>

//       <h3>Outdoor Sports Facilities</h3>
//       <ul>
//         <li>Football Ground</li>
//         <li>Cricket Ground</li>
//         <li>Tennis Courts</li>
//       </ul>

//       <h2>Healthcare Facilities</h2>
//       <ul>
//         <li>Medical Center</li>
//         <li>Counseling Services</li>
//         <li>Health Awareness Programs</li>
//       </ul>
//     </div>
//   );
// };

// export default Sports;
"use client"
import { Fragment, useState } from "react";
import Contact from "@/components/section/contact";
import { Table } from "react-bootstrap";
// import Link from "next/link";

const Sports = () => {
  const [openSection, setOpenSection] = useState('');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };
  const innerData1 = [
    {
      id: "1",
      title: "Academic Year: 2023-24 Government Scholarship (MYSY & Others)",
      data: "Benificiaries: All students of SC, ST and SEBC category, Free ship card for SC students, Chief Minister Scholarship Scheme, Mukhyamantri Yuva Swavalamban Yojna (MYSY)."
    },
    {
      id: "1",
      title: "Late Maniben Shankarbhai Patel Scholarship",
      data: "Benificiaries: 1st Rank of 2nd, 3rd & 4th year student of B.Sc Nursing Program.",
    },
    {
      id: "1",
      title: "Late Shankarbhai Chhaganbhai Patel Scholarship",
      data: "Benificiaries: 1st Rank of 2nd, 3rd & 4th year student of B.Pharm Program.",
    },
    {
      id: "1",
      title:
        "Late Dahiben Ravjibhai Patel & Dineshbhai Ravjibhai Patel Merit Cum Means Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of IT branch of CSPIT (Maximum 2 Students)",
    },
    {
      id: "1",
      title: "Prof. S G Shah Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of CSPIT (Other than First Year and Maximum 1 Student)",
    },
    {
      id: "1",
      title: "Urmil & Mayuri Desai Family Trust Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of Engineering of CSPIT (Twice in a Year: 50% Odd sem, 50% Even Sem - Maximum 4 Students)",
    },
    {
      id: "1",
      title: "Umedbhai Dharamdas Patel (Nar) Charitable Trust Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of Selected Course (Only for Girls)",
    },
    {
      id: "1",
      title:
        "Late Kamlaben Ambalal bin Becharbhai, Bakrol and Mrs. Pushpaben Dinesh Patel Merit Cum Means Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of DEPSTAR (Maximum 1 student)",
    },
    {
      id: "1",
      title: "CSPIT - Alumni Association Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of CSPIT (Maximum 2 students)",
    },
    {
      id: "1",
      title: "Late Shri Chunibhai Hathibhai Patel, Changa Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of ARIP (Maximum 6 students)",
    },
    {
      id: "1",
      title: "CHARUSAT Merit Scholarships",
      data: `CHARUSAT University believes that money should not be a road block for a student with innovative ideas and passion.The merit scholarships help meritorious students to pursue their career goals. Link:https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view`,
    },
    {
      id: "1",
      title: "CHARUSAT Sports Category Scholarships",
      data: "The students who have excelled in sporting activities at National level & State level will be eligible for Sports Scholarship. For updated & detailed information on the nature of sports and the eligibility criteria you may personally visit CHARUSAT.",
    },
    {
      id: "1",
      title: "Kanubhai and Kamlakshi Patel Scholarship",
      data: "Meritorious & Economically Constrained Students of CSPIT(For Each Year 3 Students) and Meritorious & Economically Constrained Students of RPCP(For Each Year 1 Student) from Charotar Moti Sattavis patidar samaj only.",
    },
    {
      id: "1",
      title: "Shri R.V. & Jayaben Patel Merit-cum-Means Scholarship Scheme",
      data: "Benificiaries: One Meritorious & Economically Constrained Student of B.Tech.(DEPSTAR), B.Pharm(RPCP), BBA(IIIM), BCA(CMPICA), BPT(ARIP), B.Sc.(PDPIAS), B.Sc.(MTIN) & B.Sc.(CIPS). AND Two Meritorious & Economically Constrained Students of B.Tech.(CSPIT)",
    },
  ];

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
                            <h3>Sports & HealthCare Facilities</h3>
                            <div className="meta-post">
                              {/*  */}
                              <div className="course-video">
                                <div className="course-video-content">
                                  <div
                                    className="accordion"
                                    id="accordionExample"
                                  >
                                    <div className="accordion-item">
                                      <div
                                        className="accordion-header"
                                        id="accordion01"
                                      >
                                        <button
                                          className="d-flex flex-wrap justify-content-between text-white"
                                          style={{
                                            width: "100%",
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                            
                                          }}
                                          data-bs-toggle="collapse"
                                          data-bs-target="#videolist1"
                                          aria-expanded="true"
                                          aria-controls="videolist1"
                                          onClick={()=>toggleSection('Domestic')}
                                        >
                                          Sports
                                          <span>
                                          <i className={`icofont-square-${openSection === 'Domestic' ? 'up' : 'down'}`}></i>
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        id="videolist1"
                                        className={`accordion-collapse collapse${openSection === 'Domestic' ? ' show' : ''}`}
                                        aria-labelledby="accordion01"
                                        data-bs-parent="#accordionExample"
                                      >
                                        {/*  */}
                                        
                                          <ul className="my-5 mx-4 lab-ul" >
                                            <li>
                                              <h5>
                                                {/* <i className="icofont-tick-mark"></i> */}{" "}
                                                Indoor Sports
                                              </h5>
                                              <h5>
                                                {/* <i className="icofont-tick-mark"></i> */}{" "}
                                                Outdoor Sports
                                              </h5>
                                            </li>
                                          </ul>
                                       

                                        {/*  */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/*  */}

                              {/*  */}
                              <div className="course-video">
                                <div className="course-video-content">
                                  <div
                                    className="accordion"
                                    id="accordionExample"
                                  >
                                    <div className="accordion-item">
                                      <div
                                        className="accordion-header"
                                        id="accordion01"
                                      >
                                        <button
                                          className="d-flex flex-wrap justify-content-between text-white"
                                          style={{
                                            width: "100%",
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                          }}
                                          data-bs-toggle="collapse"
                                          data-bs-target="#videolist2"
                                          aria-expanded="true"
                                          aria-controls="videolist2"
                                          onClick={() => toggleSection('International_students')}
                                        >
                                          HealthCare
                                          <span>
                                          <i className={`icofont-square-${openSection === 'International_students' ? 'up' : 'down'}`}></i>
                                         
                                            {/* <i
                                              class="icofont-square-down"
                                              style={{ color: "white" }}
                                            ></i> */}
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        id="videolist2"
                                        className={`accordion-collapse collapse${openSection === 'International_students' ? ' show' : ''}`}
                                        
                                         aria-labelledby="accordion01"
                                        data-bs-parent="#accordionExample"
                                      >
                                       
                                            
                                              
                                            
                                          
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
                </div>
              </article>
            </div>

            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sports;

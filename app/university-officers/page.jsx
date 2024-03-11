"use client"
import { Fragment } from "react";
import "@/css/EOC.css";


const Officers = () => {
  const pdfData = [
    { Name: 'Dr. Atul Patel', Designation: 'Registrar', Roomno: "118" },
    { Name: 'Mr. Bhavdip Patel', Designation: 'Dy. Account Officer,Finance and Account Section', Roomno: "113" },
    { Name: 'Mr. Raiendra Solanki', Designation: 'Dy. Registrar,General Adminstrotion', Roomno: "115" },
    { Name: 'Mr. Mukeshkumar Yadav', Designation: 'Dy. Registrar,Academic Section', Roomno: "116" },
    { Name: 'Mr. Dipen Patel', Designation: 'Section Officer,Academic section', Roomno: "118" },
    { Name: 'Mr. Jaymin Desai', Designation: 'University Engineer Infrastructure Development & Maintenance Section', Roomno: "122" },
    { Name: 'Mr. Riken Patel', Designation: 'Kelavani Mandal Office', Roomno: "124" },
    { Name: 'Mr. Rakesh Patel', Designation: 'Kelavani Mandal Office', Roomno: "124" },
    { Name: 'Mr. Pratik Panchal', Designation: 'OSD, Human Resource Section', Roomno: "125" },
    { Name: 'Dr. Pramod Patel', Designation: 'Event/Student Section', Roomno: "126" },
    { Name: 'Mr. Mitesh Patel', Designation: 'Student Section', Roomno: "126" },
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
                            <h3 className="fw-bold">University Officers</h3>
                            <br />
                            {/* <div className="meta-post" >
                            
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\December_2022.pdf">December 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\November_2022.pdf">November 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\October_2022.pdf">October 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\September_2022.pdf">September 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\July_2022.pdf">July 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\June_2022.pdf">June 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\April_2022.pdf">April 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                          </div> */}




                            <div>
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Room No.</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {pdfData.map((item, index) => (
                                    <tr key={index}>
                                      <td>{item.Name}</td>
                                      <td>
                                        {item.Designation}
                                      </td>
                                      <td>{item.Roomno}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>


                            {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
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
}

export default Officers;
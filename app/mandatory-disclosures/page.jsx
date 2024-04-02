import { Fragment } from "react";
// import { color } from "@mui/system";

const Mandatory = () => {
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
                            <h3>Mandatory Disclosures & Compliance</h3>
                            <hr />
                            <br />

                            <div style={{ overflowX: "auto" }}>
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td>CHARUSAT Univesity Act</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="#"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Anti-Ragging Policy</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="#"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Internal Complaint Committee</td>
                                    <td>
                                      <a
                                        className="Link"
                                        target="_blank"
                                        href="./ICC"
                                      >
                                        <i
                                          className="icofont-link"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Mechanism for Prevention / Prohibition of use of Anti-Drug and Alcohol</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="./assets/files/Anti_Drug_Alcohol_Circular.pdf"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                  

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
};

export default Mandatory;

import { Fragment } from "react";
import Link from "next/link";


const StudentCorner = () => {
    return (
        <Fragment>

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
                                                        <h3 style={{textAlign:"center"}}>Campus Life</h3>
                                                        <hr />
                                                        <div className="meta-post">
                                                            <br />



                                                            <a
                                                                href="./Life-at-charusat"
                                                                target="_blank"
                                                            >
                                                                <span>Life at Charusat</span>
                                                                <i className="icofont-long-arrow-right"></i>
                                                            </a>
                                                            <hr />


                                                            <a
                                                                href="./Sports&HealthCare"
                                                                target="_blank"
                                                            >
                                                                <span>Sports & Healthcare Facilities</span>
                                                                <i className="icofont-long-arrow-right"></i>
                                                            </a>
                                                            <hr />


                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <span>Food & Hygiene</span>
                                                                <i className="icofont-long-arrow-right"></i>
                                                            </a>
                                                            <hr />


                                                            <a
                                                                href="./hostels"
                                                                target="_blank"
                                                            >
                                                                <span>Accomodation</span>
                                                                <i className="icofont-long-arrow-right"></i>
                                                            </a>
                                                            <hr />


                                                            <a
                                                                href="./library"
                                                                target="_blank"
                                                            >
                                                                <span>Library Services</span>
                                                                <i className="icofont-long-arrow-right"></i>
                                                            </a>
                                                            <hr />


                                                            <a
                                                                href="./transport"
                                                                target="_blank"
                                                            >
                                                                <span>Transportation</span>
                                                                <i className="icofont-long-arrow-right"></i>
                                                            </a>
                                                            <hr />


                                                        

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

export default StudentCorner;

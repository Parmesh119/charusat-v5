"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Eminent from "@/public/assets/images/expo/eminent-speaker (1).jpg";
import Entertainment from "@/public/assets/images/expo/entertainment-programs2.webp";
import workshop from "@/public/assets/images/expo/workshop2.jpg";
import Expo from "@/public/assets/images/expo/education expo2.png";
const CEE = () => {
  return (
    <Fragment>
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper">
                  <h1
                    className="text-center mb-4 h1 text-white fw-bold "
                    style={{
                      backgroundColor: "#ff4d00",
                      padding: "10px", // Adding padding to make the gradient visible
                    }}
                  >
                    CHARUSAT Education Expo 2024
                  </h1>
                  <h6 className="text-center mb-5 h2">26-29 April 2024</h6>

                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                        <h6 className="text-center text-white h3 fw-bold">
                          Interactive Workshops
                        </h6>
                        <div className="image-placeholder">
                          <Image
                            src={workshop}
                            alt="Interactive Workshops"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>

                        <div className="btn-container">
                          <div className="text-center ">
                            <Link
                              href="/CEE-Workshop"
                              className="btn  btn-warning fw-bold"
                            >
                              Click here for details...
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                        <h6 className="text-center  text-white h3 fw-bold">
                          Eminent Speaker Series
                        </h6>
                        <div className="image-placeholder">
                          <Image
                            src={Eminent}
                            alt="Interactive Workshops"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>

                        <div className="btn-container">
                          <div className="text-center ">
                            <Link
                              href="/coming-soon"
                              className="btn btn-warning fw-bold"
                            >
                              Click here for details...
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                        <h6 className="text-center  text-white h3 fw-bold">
                          Entertainment Programs
                        </h6>
                        <div className="image-placeholder">
                          <Image
                            src={Entertainment}
                            alt="Interactive Workshops"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>

                        <div className="btn-container">
                          <div className="text-center ">
                            <Link
                              href="/coming-soon"
                              className="btn btn-warning fw-bold"
                            >
                              Click here for details...
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                        <h6 className="text-center  text-white h3 fw-bold">
                          Expo Exhibits
                        </h6>
                        <div className="image-placeholder">
                          <Image
                            src={Expo}
                            alt="Interactive Workshops"
                            layout="fill"
                            objectFit="cover"
                          />{" "}
                        </div>
                        <div className="btn-container">
                          <div className="text-center">
                            <Link
                              href="/coming-soon"
                              className="btn btn-warning btn112  fw-bold"
                            >
                              Click here for details...
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-center mt-5"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, #ff4d00, #ff7f0f)",
                      padding: "15px", // Adding padding to make the gradient visible
                      borderRadius: "5px", // Adding border radius for a rounded look
                    }}
                  >
                    <h5 className="mb-0 text-white h3 fw-bold">
                      Education Expo 2024 Schedule [ 9:00 AM to 7:00 PM ]
                    </h5>
                  </div>

                  <div className="mt-4 ">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10.30 am to 12.30 pm</td>
                          <td>Institute Visit</td>
                        </tr>
                        <tr>
                          <td>12.30 pm to 1.30 pm</td>
                          <td>Self-Refreshments</td>
                        </tr>
                        <tr>
                          <td>2.00 pm to 4.00 pm</td>
                          <td>Technical Workshop</td>
                        </tr>
                        <tr>
                          <td>4.15 pm to 5.15 pm</td>
                          <td>Career Guidance/ Awareness/Query Session</td>
                        </tr>
                        <tr>
                          <td>5.30 pm onwards</td>
                          <td>Entertainment/ Motivation Talk</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
     .table1{
      overflow-x: scroll;
     }
      .card-main h6{
        background-color: #182b3a;
        background-image: linear-gradient(45deg, #ff4d00, #ff7f0f);
      }
      .btn11{
        background:#ff4500;
        color:white;
        border-radius:5px;
        width:250px;
        padding:8px 0px;
      }
     .btn-container{
      display:flex;
      justify-content:center;
      text-align:center;
     }
        .card {
          width: 90%; /* Reduced width */
          margin: auto;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow */
          transition: box-shadow 0.3s ease-in-out; /* Transition effect */
        }

        .card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow on hover */
        }

        .image-placeholder {
          height: 200px;
          background-color: #ccc;
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
        }
        .image-placeholder img{
          height:100px;
        }
        .image-placeholder{
          width:94%;
          transform: scale(1.05);
          margin:auto;
          margin-bottom:10px;
          border-radius:5px;
          margin-top:5px;
          margin-bottom:15px;
        }

        .card h6 {
          color: #333;
          background-color: #f8f9fa;
          padding: 10px;
          border-radius: 5px;
        }

        
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Add box shadow to the table */
          border-radius: 10px;
          overflow: hidden; /* Hide overflowing box shadow */
        }

        .table th,
        .table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        .table thead th {
          background-color: #f8f9fa;
          border-top: 2px solid #dee2e6;
        }

        .table tbody tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        .table tbody tr:hover {
          background-color: #e9ecef;
        }
        .
      `}</style>
    </Fragment>
  );
};

export default CEE;

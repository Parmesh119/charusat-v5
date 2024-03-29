"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import LifeatCHARUSAT from "@/public/assets/images/campus-life/life-at-charusat.webp";
import food from "@/public/assets/images/campus-life/food.webp";
import Lib_1 from "@/public/assets/images/lib-1.jpg";
import transport from "@/public/assets/images/campus-life/transport.jpg";
import accomodation from "@/public/assets/images/campus-life/Accomodation.jpg";

const Campus = () => {
  return (
    <Fragment>
      <div className="blog-section p-4">
        <div className="container p-4"  style={{backgroundColor:"#fff"}}>
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper" style={{color: "#0066b3"}}>
                  <p className="text-center mb-4 h1 fw-bold" >CHARUSAT CAMPUS LIFE</p>

                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                      <Link href="./Life-at-charusat">
                         <h6 className="text-center text-white h3 fw-bold">Life At Charusat</h6>
                        <div className="image-placeholder">
                          <Image src={LifeatCHARUSAT} alt="Interactive Workshops" layout="fill" objectFit="cover" />
                        </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                      <Link href="./sports-healthcare">
                        <h6 className="text-center text-white h3 fw-bold">Sports & Healthcare Facilities</h6>
                        <div className="image-placeholder">
                          {/* <Image src={Eminent} alt="Interactive Workshops" layout="fill" objectFit="cover" /> */}
                        </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                      <Link href="./coming-soon">
                        <h6 className="text-center text-white h3 fw-bold">Food & Hygiene</h6>
                        <div className="image-placeholder">
                          <Image src={food} alt="Interactive Workshops" layout="fill" objectFit="cover" />
                        </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                      <Link href="./hostels">
                        <h6 className="text-center text-white h3 fw-bold">Accommodation</h6>
                        <div className="image-placeholder">
                       <Image src={accomodation} alt="Interactive Workshops" layout="fill" objectFit="cover" />
                        </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                      <Link href="./library">
                        <h6 className="text-center text-white h3 fw-bold">Library Services</h6>
                        <div className="image-placeholder">
                          <Image src={Lib_1} alt="Interactive Workshops" layout="fill" objectFit="cover" />
                        </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                      <Link href="./transport">
                        <h6 className="text-center text-white h3 fw-bold">Transportation Services</h6>
                        <div className="image-placeholder">
                          <Image src={transport} alt="Interactive Workshops" layout="fill" objectFit="cover" />
                        </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

.blog-section {
  background-color : #FFF9F1;
}


        .card-main h6 {
          background-color: #fff; /* White background */
          background-image: linear-gradient(45deg, #0066b3, #004080); /* Updated blue gradient */
          color: #fff; /* Text color */
          padding: 10px;
          border-radius: 5px;
        }

        .image-placeholder {
          height: 200px;
          background-color: #fff; /* White background */
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
          width: 94%;
          transform: scale(1.05);
          margin: auto;
          margin-bottom: 10px;
          border-radius: 5px;
          margin-top: 5px;
          margin-bottom: 15px;
        }

        .card {
          width: 90%;
          margin: auto;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow */
          transition: box-shadow 0.3s ease-in-out; /* Transition effect */
        }

        .card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow on hover */
        }

        .card h6 {
          color: #0066b3; /* Updated blue text color */
          background-color: #fff; /* White background */
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </Fragment>
  );
};

export default Campus;


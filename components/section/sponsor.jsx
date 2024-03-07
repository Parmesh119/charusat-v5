import React from 'react';
import Image from 'next/image';
import samsung from "@/public/assets/images/recruiters/samsung.png"
import tcs from "@/public/assets/images/recruiters/tcs.png"
import gsfc from "@/public/assets/images/recruiters/gsfc.png"
import Ain from "@/public/assets/images/recruiters/in.png"
import byju from "@/public/assets/images/recruiters/byju.png"
import jeavio from "@/public/assets/images/recruiters/jeavio.png"
import evosys from "@/public/assets/images/recruiters/evosys.png"
import mg from "@/public/assets/images/recruiters/mg.png"
import berger from "@/public/assets/images/recruiters/berger.png"
import ops from "@/public/assets/images/recruiters/ops.png"
import jaro from "@/public/assets/images/recruiters/jaro.png"
import crest from "@/public/assets/images/recruiters/crest.png"
import adani from "@/public/assets/images/recruiters/adani.png"
import motorola from "@/public/assets/images/recruiters/motorola.png"
import icici from "@/public/assets/images/recruiters/icici.jpeg"
import tbea from "@/public/assets/images/recruiters/tbea.png"
import tr from "@/public/assets/images/recruiters/tr.png"
import meditab from "@/public/assets/images/recruiters/meditab.png"

const title = "Recruiters";

const sponsorList = [
  {
    imgUrl: jaro,
    imgAlt: "Jaro Education",
  },
  {
    imgUrl: Ain,
    imgAlt: "Indian Navy",
  },
  {
    imgUrl: gsfc,
    imgAlt: "GSFC",
  },
  {
    imgUrl: ops,
    imgAlt: "OPS",
  },
  {
    imgUrl: mg,
    imgAlt: "MG",
  },
  {
    imgUrl: evosys,
    imgAlt: "Evosys",
  },
  {
    imgUrl: tbea,
    imgAlt: "TBEA",
  },
  {
    imgUrl: meditab,
    imgAlt: "Meditab",
  },
  {
    imgUrl: tr,
    imgAlt: "TR",
  },
  {
    imgUrl: adani,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: berger,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: byju,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: crest,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: jeavio,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: samsung,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: tcs,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: motorola,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: icici,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  
];

const Sponsor = () => {
  

  return (
    <div className="sponsor-section ">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle ">Major</span>
          <h2 className="title">{title}</h2>
        </div>

        <div className="section-wrapper">
          <div className="sponsor-slider row sponsor-main">
            {sponsorList.map((val, i) => (
              <div key={i} className="col-md-2" data-aos="flip-right">
                <div className="sponsor-iten">
                  <div className="sponsor-thumb bg-white border p-3 m-2 rounded">
                    <Image  src={val.imgUrl} alt={val.imgAlt} width={200} height={200} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

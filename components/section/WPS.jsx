import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import I1 from "@/public/assets/images/clients/01.jpg";
import I2 from "@/public/assets/images/clients/02.jpg";
import I3 from "@/public/assets/images/clients/03.jpg";
import I4 from "@/public/assets/images/clients/04.webp";

const subTitle = "Testimonials";
const title = "What People Say";
// const absTitle = "Testimonials";

const clientSliderList = [
  {
    imgUrl: I1,
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: "I am happy to know that CHARUSAT has a goal set for mission of social uplifment with components of knowledge acquisition and imparting education.",
    name: "Dr A P J Abdul Klalam",
    degi: "Former President of India & Architect of Missile Programme of India",
  },
  {
    imgUrl: I2,
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: "I am extremely impressed with CHARUSAT as it is driven by Research and innovation.",
    name: "Dr. Vijay Bhatkar",
    degi: "Padmashri, Architech First Super Computer-PARAM",
  },
  {
    imgUrl: I3,
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: "I was proud to see that CHARUSAT has the dream of becoming world class in education and reserach. This dream can be converted into reality, if we match this great ambition with stimulating ambience. I have no doubt that this dream will become a reality.",
    name: "Dr. R A Mashelkar",
    degi: "Padma Vibhushan, National Research Professor, National Chemical Laboratory",
  },
  {
    imgUrl: I4,
    imgAlt: "education thumb rajibraj91 rajibraj",
    iconNane: "icofont-quote-left",
    desc: "CHARUSAT is indeed a Golden Truth of Gujarat.",
    name: "Shri Naredra Modi",
    degi: "Hon. Prime Minister of India",
  },
];

const ClientsThree = () => {
  return (
    <div className="clients-section style-3 py-4">
      <div className="container">
        <div className="section-header text-center py-1">
          <span className="subtitle ">{subTitle}</span>
          <h2 className="title">{title}</h2>
          {/* <h2 className="abs-title">{absTitle}</h2> */}
        </div>
        <div className="section-wrapper">
          <div className="clients-slider2 overflow-hidden">
            <Swiper
              loop={"true"}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".clients-slider2-prev",
                nextEl: ".clients-slider2-next",
              }}
              modules={[Autoplay, Navigation]}
            >
              {clientSliderList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="client-item">
                    <div className="client-inner">
                      <div className="_client-thumb">
                        <Image
                          style={{ height: "250px", borderRadius: "100%" }}
                          src={val.imgUrl}
                          alt={`${val.imgAlt}`}
                          width={300}
                          height={250}
                        />
                        <div className="quote">
                          <i className={val.iconNane}></i>
                        </div>
                      </div>
                      <div className="client-content">
                        <p>{val.desc}</p>
                        <div className="client-info">
                          <h6 className="client-name">{val.name}</h6>
                          <span className="client-degi">{val.degi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="clients-slider-nav clients-slider2-next">
              <i className="icofont-double-left"></i>
            </div>
            <div className="clients-slider-nav clients-slider2-prev">
              <i className="icofont-double-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsThree;

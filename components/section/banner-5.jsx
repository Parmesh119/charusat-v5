import "normalize.css/normalize.css";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
import "@/css/slider-animations.css";
import "@/css/slider-banner.css";

const content = [
  {
    id: "1",
    title: "CHARUSAT",
    description: "Accreditated with 'A+' Grade by NAAC",
    button: "Apply Now",
    image: "assets/images/home/s1-updated.png",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },

  {
    id: "2",
    title: "Laboratories",
    description:
      "Highly equipped and advanced labs for practical learning and in-depth research",
    button: "Apply Now",
    image: "assets/images/home/lab.webp",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    id: "3",
    title: "Hostels",
    description:
      "Our hostels give out the vibes of comfort and contentment, just like home",
    button: "Apply Now",
    image: "assets/images/home/s3.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    id: "4",
    title: "Wi Fi Campus",
    description:
      "Connect with the world on CHARUSAT that is entirely wi-fi enabled",
    button: "Apply Now",
    image: "assets/images/home/s4.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    id: "5",
    title: "Canteen",
    description:
      "Wholesome meals served as a part of indian and world cuisines replete with all 5 flavours",
    button: "Apply Now",
    image: "assets/images/home/canteen.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    id: "6",
    title: "Infrastucture",
    description:
      "Future Ready Academics infrastructure with ergonomically designed classrooms, ICT and climatization",
    button: "Apply Now",
    image: "assets/images/home/s7.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    id: "7",
    title: "ATHLETICS & FITNESS",
    description:
      "Physical benefits of recreational sports on the sports fields and in gymnasium facilitates. Indoor sports facility for mental endurance and relaxation",
    button: "Apply Now",
    image: "assets/images/home/s8.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    id: "8",
    title: "Green Campus",
    description: "Creating a Sustainable and Eco-Friendly Campus Environment",
    button: "Apply Now",
    image: "assets/images/home/s9.webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
];

const subTitle = "C H A R U S A T";
const title = (
  <h2 className="title">
    NAAC A+ <span>University</span>
  </h2>
);
const desc = "Current Happening";
const btnText = "View Lincon’s Courses";

const BannerFive = () => {
  return (
    <section className="d-block clearfix">
      {/* <Slider autoplay="4000" className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <div
                className="main-text-slider animated-text-front-page"
                style={{
                  fontFamily: "Playfair Display",
                  fontweight: "700",
                }}
              >
                <h1> {item.title}</h1>
              </div>
              <p className="subTitle-slider text_1" style={{ color: "black" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider> */}

      <br />
    </section>
  );
};

export default BannerFive;

"use client";
import { Fragment } from "react";
import Faculties from "@/components/section/Faculties";
import About from "@/components/section/about";
import AchievementThree from "@/components/section/achievement-3";
import Banner from "@/components/section/banner-5";
import ClientsThree from "@/components/section/WPS";
import Collaboration from "@/components/section/collaboration";
import Event from "@/components/section/event";
import Intiatives from "@/components/section/initiatives";
// import NewsFrontPage from "@/components/section/newsFrontPage";
import Sponsor from "@/components/section/sponsor";
import VisionMission from "@/components/section/MissionVission.jsx";
// import Loader from "./Loader";

const Home = () => {
  return (
    <Fragment>
      <title>CHARUSAT | Best Private University in Gujarat </title>
      <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Charusat University is one of the Best University in Gujarat located in Changa- Anand. Charusat University provides best education in various domains like Engineering, Pharmacy, Business management, Applied Science, Nursing, Physiotherapy, Computer application, Paramedical Courses and many more."
      />
      <meta
        name="keywords"
        content="Charusat, CHARUSAT, Top 10 university in gujarat, Best University in Gujarat, Top Private university in Gujarat, Changa university, University, Charusat university admission, Under graduate admission, Anand, Changa, Vallabh Vidyanagar, Gujarat, India, Education, Educational institute, changa university, charusat university"
      />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="translate" />
      <meta name="google" content="nopagereadaloud" />
      <meta
        name="google-site-verification"
        content="iHUSfPMMFQRCIgicrAlVofHWVhWwQsDgTzGNUC7WzMk"
      />
      <meta property="og:type" content="homepage" />
      <meta property="og:title" content="CHARUSAT Homepage" />
      <meta
        property="og:description"
        content="CHARUSAT - Best University in Gujarat"
      />
      <meta name="author" content="CHARUSAT Web Team" />

      {/* <Header /> */}
      {/* <a href="https://eequeuestorage.blob.core.windows.net/staticfiles/charusat/ee-form-widget/form-2/charusatEnq.html"></a>

      <script src="https://eequeuestorage.blob.core.windows.net/staticfiles/charusat/ee-form-widget/form-2/widget.js"></script> */}

      <Banner />
      <About />
      <Event />
      <VisionMission />
      {/* <NewsFrontPage /> */}
      {/* <Messages /> */}
      <Faculties />
      <Intiatives />
      {/* <Goals /> */}
      {/* <Instructor /> */}
      <Collaboration />
      <AchievementThree />
      {/* <Achievement2/> */}
      {/* <Event /> */}
      {/* <Publication/> */}
      {/* <Blog />            
            <Clients /> */}
      <ClientsThree />
      {/* <Feature />
            <Category />
            <Course />
            <CourseFour />
            <Instructor />
            <ClientsThree />
            <Student />
            <Achievement />
            <AboutTwo /> */}
      {/* <Placement/> */}
      <Sponsor />
      {/* <NoSSR /> */}
      {/* <Contact/> */}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;

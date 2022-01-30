import { useTheme } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Contact from "../Contact/Contact";
import EnterprisePrograms from "../Programs/EnterprisePrograms";
import MainBanner from "./components/MainBanner";
import MessageCarousel from "./components/MessageCarousel";
import Newsletter from "./components/Newsletter";
import OnlinePrograms from "../Programs/OnlinePrograms";
import ReflexiveExperiences from "./components/ReflexiveExperiences";
import Testimonies, { ITestimony } from "./components/Testimonies";

import backgroundImage from "./images/munecos-fondo.png";

export const testimonies: ITestimony[] = [
  {
    name: "Gregorio",
    image: "https://miro.medium.com/max/1200/1*HEoLBLidT2u4mhJ0oiDgig.png",
    testimony:
      "Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.",
  },
  {
    name: "Gregorio",
    image: "https://miro.medium.com/max/1200/1*HEoLBLidT2u4mhJ0oiDgig.png",
    testimony:
      "Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.",
  },
  {
    name: "Gregorio",
    image: "https://miro.medium.com/max/1200/1*HEoLBLidT2u4mhJ0oiDgig.png",
    testimony:
      "Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.",
  },
];

interface IInicio {}

const Inicio = (props: IInicio) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-y",
        }}
      >
        <MainBanner />
        <OnlinePrograms showAllButton />
        <ReflexiveExperiences />
        <EnterprisePrograms />
        <MessageCarousel
          backgroundColor={theme.palette.primary.main}
          color={"white"}
          steps={[]}
        />
        <Testimonies testimonies={testimonies} />
        <Newsletter />
      </div>
      <Contact />
    </React.Fragment>
  );
};
export default Inicio;

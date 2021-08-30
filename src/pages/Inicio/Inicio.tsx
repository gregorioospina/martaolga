import { useTheme } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import EnterprisePrograms from "./components/EnterprisePrograms";
import MainBanner from "./components/MainBanner";
import MessageCarousel from "./components/MessageCarousel";
import Newsletter from "./components/Newsletter";
import OnlinePrograms from "./components/OnlinePrograms";
import ReflexiveExperiences from "./components/ReflexiveExperiences";
import Testimonies, { ITestimony } from "./components/Testimonies";

const testimonies: ITestimony[] = [
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
    <div>
      <MainBanner />
      <OnlinePrograms />
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
  );
};
export default Inicio;

import React, { useState, useEffect } from "react";
import EnterprisePrograms from "./components/EnterprisePrograms";
import MainBanner from "./components/MainBanner";
import OnlinePrograms from "./components/OnlinePrograms";
import ReflexiveExperiences from "./components/ReflexiveExperiences";

interface IInicio {}

const Inicio = (props: IInicio) => {
  return (
    <div>
      <MainBanner />
      <OnlinePrograms />
      <ReflexiveExperiences />
      <EnterprisePrograms />
    </div>
  );
};
export default Inicio;

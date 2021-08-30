import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Columns from "./components/Columns";
import Header from "./components/Header";
import Topics from "./components/Topics";

export interface IProgramDetail {
  color: string;
  title: string;
  icon: string;
  subtitle: string;
  subtitle2: string;
  photo: string;
  column1: any;
  column2: any;
  afterColumnImage: string;
  topics: {
    topic: string;
    description: string;
    subtopics: string[];
  }[];
  footerImage?: string;
}

const ProgramDetail = (props: IProgramDetail) => {
  return (
    <Grid container style={{ marginTop: 120 }}>
      <Header
        icon={props.icon}
        subtitle={props.subtitle}
        title={props.title}
        subtitle2={props.subtitle2}
        color={props.color}
      />
      {props.photo && <img src={props.photo} alt={props.title} width="100%" />}
      <Columns column1={props.column1} column2={props.column2} />
      {props.afterColumnImage && (
        <img src={props.afterColumnImage} alt={props.title} width="100%" />
      )}
      <Topics topics={props.topics} color={props.color} />
      {props.footerImage && (
        <img src={props.footerImage} alt={props.title} width="100%" />
      )}
    </Grid>
  );
};

export default ProgramDetail;

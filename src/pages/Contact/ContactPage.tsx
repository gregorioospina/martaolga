import React, { useEffect, useState } from "react";
import Contact from "./Contact";

interface IContactPage {}

const ContactPage = (props: IContactPage) => {
  return (
    <div
      style={{ paddingTop: 200, paddingBottom: 100, backgroundColor: "white" }}
    >
      <Contact />
    </div>
  );
};
export default ContactPage;

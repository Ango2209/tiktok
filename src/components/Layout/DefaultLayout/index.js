import React, { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar/Sidebar";

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{props.children}</div>
      </div>
    </Fragment>
  );
};
export default DefaultLayout;

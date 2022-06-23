import React, { Fragment } from "react";
import Header from "../components/Header";

const HeaderOnly = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="content">{props.children}</div>
      </div>
    </Fragment>
  );
};
export default HeaderOnly;

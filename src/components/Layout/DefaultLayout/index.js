import React from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const DefaultLayout = (props) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{props.children}</div>
      </div>
    </div>
  );
};
export default DefaultLayout;

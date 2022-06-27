import classNames from "classnames/bind";
import styles from "./Propper.module.scss";
const cx = classNames.bind(styles);
const Wrapper = (props) => {
  return <div className={cx("wrapper")}>{props.children}</div>;
};

export default Wrapper;

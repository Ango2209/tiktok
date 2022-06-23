import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Sidebar = () => {
  return <aside className={cx("wrapper")}>Side bar</aside>;
};

export default Sidebar;

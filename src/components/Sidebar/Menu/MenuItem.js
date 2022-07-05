import styles from "./Menu.module.scss";
import classes from "classnames/bind";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const cx = classes.bind(styles);

const MenuItem = ({ to, title, icon, activeIcon }) => {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("menu-item", { active: nav.isActive })}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("active-icon")}>{activeIcon}</span>
      <span className={cx("menu-title")}>{title}</span>
    </NavLink>
  );
};
MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default MenuItem;

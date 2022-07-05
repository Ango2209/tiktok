import styles from "./Menu.module.scss";
import classes from "classnames/bind";
import PropTypes from "prop-types";

const Menu = ({ children }) => {
  return <nav>{children}</nav>;
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Menu;

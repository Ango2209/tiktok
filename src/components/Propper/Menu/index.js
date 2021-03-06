import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PropperWrapper } from "../../Propper";
import MenuItems from "./MenuItems";
import Header from "./Header";
import { useState } from "react";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);
const defaultFn = () => {};
const Menu = ({
  children,
  hideOnClick = false,
  items = [],
  onChange = defaultFn,
}) => {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  //Reset to first page
  const hanleResetMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <Tippy
      hideOnClick={hideOnClick}
      interactive
      delay={[0, 700]}
      offset={[10, 12]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PropperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header title={current.title} onBack={hanleResetMenu} />
            )}
            <div className={cx("menu-body")}>{renderItems()}</div>
          </PropperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  hideOnClick: PropTypes.array,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

export default Menu;

import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PropperWrapper } from "../../Propper";
import MenuItems from "./MenuItems";

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItems key={index} data={item}></MenuItems>;
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PropperWrapper className={cx("menu-popper")}>
            {renderItems()}
          </PropperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;

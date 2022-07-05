import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";

import config from "~/config";
import {
  HomeIcon,
  HomeIconActive,
  UserGroupIcon,
  UserActiveGroupIcon,
  LiveActiveIcon,
  LiveIcon,
} from "~/components/Icons";
const cx = classNames.bind(styles);
const Sidebar = () => {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For Your"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeIconActive />}
        ></MenuItem>
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserActiveGroupIcon />}
        ></MenuItem>
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        ></MenuItem>
      </Menu>
    </aside>
  );
};

export default Sidebar;

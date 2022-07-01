import classNames from "classnames/bind";
import img from "../../../../assets/img";
import Button from "../../../Button";

import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Menu from "../../../Propper/Menu";
import styles from "./Header.module.scss";

import { faBitcoin, faGoodreads } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleRight,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { BoxIcon, MessageIcon } from "../../../Icons";
import Image from "../../../Image";
import Search from "../../../Search";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tieng viet",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcut",
  },
];

const Header = () => {
  let currentUser = false;

  //Handle Logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faBitcoin} />,
      title: "Get coins",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faGoodreads} />,
      title: "Setting",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowAltCircleRight} />,
      title: "Logout",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={img.logo.default} alt="Tiktok" />
        </div>
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <BoxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>

              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                alt="nguyen Van A"
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e4dcc558851166ef623ecc17db5a5766~c5_100x100.jpeg?x-expires=1656489600&x-signature=zWaGEcrn3MLTk2D1svyH2MKj%2FKU%3D"
                fallback="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
              ></Image>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;

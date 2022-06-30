import classNames from "classnames/bind";
import img from "../../../../assets/img";
import Button from "../../../Button";

import React from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Wrapper as PropperWrapper } from "../../../Propper";
import AccountItem from "../../../AccountItem";
import Menu from "../../../Propper/Menu";

import {
  faArrowAltCircleRight,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBitcoin, faGoodreads } from "@fortawesome/free-brands-svg-icons";
import { BoxIcon, MessageIcon } from "../../../Icons";
import Image from "../../../Image";
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
  const [searchResult, setSearchResult] = useState([]);
  let currentUser = true;
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });
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
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PropperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PropperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and video" spellCheck={false} />
            <button className={cx("clear")}>
              {<FontAwesomeIcon icon={faCircleXmark} />}
            </button>
            {<FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}

            <button className={cx("search-btn")}>
              {<FontAwesomeIcon icon={faMagnifyingGlass} />}
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Tippy delay={[0, 200]} content="upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <BoxIcon />
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

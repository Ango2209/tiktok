import classNames from "classnames/bind";
import img from "../../../../assets/img";
import Button from "../../../Button";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react/headless";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSign,
  faSignIn,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Wrapper as PropperWrapper } from "../../../Propper";
import AccountItem from "../../../AccountItem";
const cx = classNames.bind(styles);
const Header = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={img.logo.default} alt="Tiktok" />
        </div>
        <Tippy
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
        </Tippy>
        <div className={cx("actions")}>
          <Button text>Upload</Button>

          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

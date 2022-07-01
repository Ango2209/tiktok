import classNames from "classnames/bind";

import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../Icons";
import AccountItem from "./../AccountItem";
import { Wrapper as PropperWrapper } from "./../Propper";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
          searchValue
        )}&type=more`
      );

      const json = await data.json();
      const dataUser = json.data;
      setIsLoading(false);
      setSearchResult(dataUser);
      return dataUser;
    };
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setIsLoading(true);
    fetchData().catch(() => {
      setIsLoading(true);
    });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PropperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PropperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and video"
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        {!isLoading && !!searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            {<FontAwesomeIcon icon={faCircleXmark} />}
          </button>
        )}

        {isLoading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}

        <button className={cx("search-btn")} onMouseDown={handleSubmit}>
          {<SearchIcon />}
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;

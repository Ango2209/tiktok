import classNames from "classnames/bind";

import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";

import * as seachServices from "../../services/searchService";
import { SearchIcon } from "../Icons";
import AccountItem from "./../AccountItem";
import { Wrapper as PropperWrapper } from "./../Propper";
import styles from "./Search.module.scss";
import { useDebounce } from "../../hooks";
const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const debounceValue = useDebounce(searchValue, 500);
  const inputRef = useRef();

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setIsLoading(true);
      const result = await seachServices.search(debounceValue);
      setSearchResult(result);
      setIsLoading(false);
    };

    fetchApi();
  }, [debounceValue]);

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
    <div>
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
    </div>
  );
};

export default Search;

import { forwardRef, useState } from "react";
import img from "../../assets/img";
import styles from "./Image.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const Image = forwardRef(
  (
    { src, alt, className, fallback: customFallback = img.noImage, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(customFallback);
    };
    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};
export default Image;

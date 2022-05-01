import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./ButtonHeader.scss";

export const ButtonHeader = ({ title, icon, path }) => {
  return (
    <>
      {icon ? (
        <Link to="/">
          <img src={icon} alt="header icon" className="iconHeader" />
        </Link>
      ) : (
        <Link to={path}>
          <span className="buttonHeader">{title}</span>
        </Link>
      )}
    </>
  );
};

ButtonHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

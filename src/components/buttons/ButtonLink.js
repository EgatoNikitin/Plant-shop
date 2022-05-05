import PropTypes from "prop-types";
import "./ButtonLink.scss";
import { BUTTONS } from "../constants";

export const ButtonLink = ({ text, url, type }) => {
  return (
    <>
      {type === BUTTONS.LINK ? (
        <button className="button-link">
          <a className="link" target="_blank" href={url} rel="noreferrer">
            {text}
          </a>
        </button>
      ) : (
        <button className="servicesButton" >{text}</button>
      )}
    </>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  type: BUTTONS.LINK,
};

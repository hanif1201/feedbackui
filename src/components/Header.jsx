import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, bgColor, textcolor }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textcolor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "FeedbackUI",
  bgColor: "rgba(0,0,0,0.4)",
  textcolor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;

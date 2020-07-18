import React from "react";
import PropTypes from "prop-types";

const MoreIcon = ({ children }) => {
  return (
    <div className="dropdown dropdown-right">
      <i className="fas fa-ellipsis-v dropdown-toggle c-hand" tabIndex="0"></i>
      <ul className="menu">{children}</ul>
    </div>
  );
};

MoreIcon.propTypes = {
  children: PropTypes.node,
};

export default MoreIcon;

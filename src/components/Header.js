import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

const HeaderComp = () => {
  const user = {
    name: "Peter Akaliro",
    role: "Supper Admin",
  };

  return (
    <Header className="bg-primary">
      <nav className="container">
        <div className="d-flex ">
          <h6 className="flex-1">Edfhr</h6>
          <div className="right">
            <ul className="d-flex">
              <li className="mr-2">{user.name}</li>
              <li>
                <img className="avatar avatar-sm" src="/avatar.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  ul {
    align-items: center;
    img {
      max-width: 5rem;
      height: 5rem;
    }
  }
`;

HeaderComp.propTypes = {
  user: PropTypes.object,
};

Header.defaultProps = {
  user: {
    name: "Peter Akaliro",
    role: "Supper Admin",
  },
};

export default HeaderComp;

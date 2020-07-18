import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Dashboard", link: "/", icon: "fa-tachometer-alt", id: 1 },
  { name: "Report", link: "/reports", icon: "fa-file-medical-alt", id: 2 },
  { name: "Users", link: "/users", icon: "fa-user", id: 3 },
  { name: "Applicants", link: "/applicants", icon: "fa-users", id: 6 },
  { name: "Draft", link: "/draft", icon: "fa-file-word", id: 4 },
  { name: "Settings", link: "/settings", icon: "fa-user-cog", id: 5 },
];

const Sidebar = () => {
  const [more, setMore] = useState(false);

  return (
    <Aside className="px-2" more={more}>
      <ul className="nav">
        {navItems.map((nav) => (
          <li className="nav-item" key={nav.id}>
            <Link to={nav.link}>
              <i className={`fas fa-tachometer-alt mr-2 ${nav.icon}`}></i>{" "}
              {nav.name}
            </Link>
          </li>
        ))}
        {/* <li className="nav-item">
          <Link to="/reports">
            <i className="fas fa-file-medical-alt mr-2"></i> Reports
          </Link>
        </li>
        <li className="nav-item  ">
          <Link to="/users">
            <span className="flex-icon c-hand">
              <i className="fas fa-user "></i>
              <span className="" style={{ marginRight: "2rem" }}>
                User
              </span>
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/draft">
            <i className="fas fa-file-word mr-2"></i> Draft
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings">
            <i className="fas fa-user-cog mr-2"></i> Settings
          </Link>
        </li> */}
      </ul>
    </Aside>
  );
};

const Aside = styled.div`
  .nav {
    margin-top: 1rem;
    .nav-item {
      margin: 0.8rem 0;
    }
    .nav-child {
      display: ${(props) => (props.more ? "block" : "none")};
      transition: 0.5s ease-in all;
      li {
        margin: 0.5rem 0;
      }
    }
    .flex-icon {
      /* display: flex;
      align-items: center; */
      .fa-user {
        margin-right: 0.5rem;
      }
      .fa-chevron-right {
        transform: ${(props) => props.more && "rotateZ(90deg)"};
        transition: 0.2s ease-in all;
      }
    }
  }
`;

Sidebar.propTypes = {
  props: PropTypes.number,
};

export default Sidebar;

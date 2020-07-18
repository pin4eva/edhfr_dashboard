import HeaderComp from "components/Header";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import Sidebar from "components/Sidebar";
import styled from "@emotion/styled";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        />

        <title>Dashboard</title>
      </Helmet>
      <HeaderComp />
      <div className="wrapper">
        <aside>
          <div className="pc">
            <Sidebar />
          </div>
          <div className="mobile">
            <Sidebar />
          </div>
        </aside>
        <main className="container bg-gray">
          <div className="my-2 main-wrapper">{children}</div>
        </main>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vmin;
  display: flex;
  flex-direction: column;
  .wrapper {
    display: flex;
    flex: 1;
    main {
      flex: 1;
    }
    aside {
      width: 100%;
      max-width: 12rem;
      .pc {
        display: none;
      }
    }
  }
  .main-wrapper {
    @media (min-width: 768px) {
      width: 100%;
      max-width: 80%;
      margin: auto;
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

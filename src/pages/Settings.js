import React from "react";
import Layout from "Layout";
import ProfileEdit from "components/Users/ProfileEdit";
import styled from "@emotion/styled";

const Settings = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="profile-edit">
          <ProfileEdit />
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`;
export default Settings;

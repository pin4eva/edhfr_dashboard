import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center ">
      <img className="avatar avatar-lg" src={user.imag} alt="" />
      <div>
        <p className="text-18 my-0">{user.name}</p>
        <p className="my-0">{user.state}</p>
        <a href="tel:+2347062275085">
          <small className="m-0">{user.phone}</small>
        </a>
      </div>
      <div className="my-2">
        <span>2</span> <i className="fas fa-folder"></i>
      </div>
    </Card>
  );
};

const Card = styled.div`
  /* box-shadow: 5px 5px 5px rgba(247, 248, 249, 0.5); */
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 1rem;
`;
UserCard.propTypes = { user: PropTypes.object };

export default UserCard;

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ProfileEdit = (props) => {
  return (
    <Wrapper className="card">
      <div className="wrapper">
        <div className="left">
          <div className="image-wrapper text-center mt-2">
            <div className="image mb-2">
              <img src="/miracle.jpg" alt="" className="avatar avatar-xl " />
            </div>
            <button className="btn btn-outline-primary">Change</button>
          </div>
          <div className="text-content">
            <ul>
              <li>Reset Password</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="right-wrapper">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Address</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">State</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Account Number</label>
                <input type="text" className="form-input" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Bank Name</label>
                <input type="text" className="form-input" />
              </div>
              <button className="btn btn-primary ">Update</button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      .left {
        width: 25%;
      }
      .right {
        flex: 1;
      }
    }
  }
`;

ProfileEdit.propTypes = {};

export default ProfileEdit;

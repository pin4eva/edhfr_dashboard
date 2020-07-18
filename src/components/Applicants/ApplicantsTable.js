import React from "react";
import PropTypes from "prop-types";
import MoreIcon from "components/MoreIcon";

const ApplicantsTable = (props) => {
  return (
    <table className="table table-hover table-striped  ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Amount Paid</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>C-0001</td>
          <td>Peter Cash</td>
          <td>07062275085</td>
          <td>N500</td>
          <td>
            <MoreIcon>
              <li>Edit</li>
              <li>Delete</li>
            </MoreIcon>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

ApplicantsTable.propTypes = {};

export default ApplicantsTable;

import React, { useState } from "react";
import Layout from "Layout";
import styled from "@emotion/styled";
import { SimpleGrid } from "@chakra-ui/core";

import ApplicantsTable from "components/Applicants/ApplicantsTable";
import AddApplicant from "components/Applicants/AddApplicant";

const Applicants = () => {
  const [view, setView] = useState(1);

  return (
    <Layout>
      <Wrapper>
        <div className="dec-card">
          <SimpleGrid columns={[1, 3]} gridGap={3}>
            <div className="card board-desc">
              <h6 className="count">500</h6>
              <p className="item">Applicants</p>
            </div>
            <div className="card board-desc">
              <h6 className="count">500</h6>
              <p className="item">Applicants</p>
            </div>
            <div className="card board-desc">
              <h6 className="count">500</h6>
              <p className="item">Applicants</p>
            </div>
          </SimpleGrid>
        </div>
        {view === 0 && (
          <section className="table-section">
            <div className="top-pannel my-2">
              <div className="left">
                <input type="search" name="search" className="form-input " />
              </div>
              <div className="right ">
                <button className="btn btn-outline-primary">
                  Add Applicant
                </button>
              </div>
            </div>
            <div className="card">
              <div className="board-table">
                <ApplicantsTable />
              </div>
            </div>
          </section>
        )}
        {view === 1 && <AddApplicant />}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  .table-section {
    margin-top: 2rem;
    .top-pannel {
      width: 100%;
      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        background: yellow;
        .left {
          width: 40%;
        }
        .right {
          width: 50%;
          text-align: right;
        }
      }
    }
  }
`;
export default Applicants;

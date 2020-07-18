import { Box, Input, Select, Stack, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import breaches from "utils/breaches";
import courts from "utils/CourtState";
import states from "utils/states";

const AddApplicant = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [lga, setLga] = useState([]);
  const [view, setView] = useState(0);
  const [inPrison, setInPrison] = useState(false);
  const [relatives, setRelatives] = useState([]);
  const [monthsPlus, setMonthsPlus] = useState(false);
  const [daysPlus, setdaysPlus] = useState(false);
  const [relInfo, setRelInfo] = useState({
    name: "",
    phone: "",
  });

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    breach_type: "",
    arrested_on: "",
    arrested_at: "",
    offence_charged: "",
    offence_suspected: "",
    case_mates: 0,
    itinerary: "",
    station: "",
    station2: "",
    station_duration: "",
    station2_duration: "",
    beaten: "",
    injured: "",
    bail_amount: 0,
    detention_cost: "",
    arraigned_on: "",
    arraigned_at: "",
    first_accused: "",
    state_residence: "",
    lga: "",
    adjournment_date: "",
    division: "",
    dpp: "",
  });

  const handleInfoChange = (e) => {
    let { name, value, type } = e.target;
    setInfo({
      ...info,
      [name]: type === "number" ? Number(value) : value,
    });
  };
  const handleRelChange = (e) => {
    let { name, value } = e.target;
    setRelInfo({
      ...relInfo,
      [name]: value,
    });
  };

  const handleRelSubmit = (e) => {
    e.preventDefault();
    if (!relInfo.name || !relInfo.phone) return;
    setRelatives([...relatives, relInfo]);
    setRelInfo({
      name: "",
      phone: "",
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (view !== 9) {
      setView(view + 1);
    }
  };

  const handlePrev = () => {
    if (view !== 0) {
      setView(view - 1);
    }
  };

  useEffect(() => {
    if (selectedState) {
      let filteredState = states.find(
        (state) => state.state.name === selectedState
      );
      if (filteredState) {
        setLga(filteredState.state.locals);
      }
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCourt) {
      let filteredCourt = courts.find((court) => court.state === selectedCourt);
      if (filteredCourt) setDivisions(filteredCourt.divisions);
    }
  }, [selectedCourt]);

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...info,
      monthsPlus,
      daysPlus,
      inPrison,
      relatives,
      state_origin: selectedState,
      state_arriagned: selectedCourt,
    };

    console.log(payload);
  };

  return (
    <Wrapper>
      <div className="container">
        <h6 className="text-center">NEW APPLICANT REGISTRATION</h6>
        <Box>
          {view === 0 && (
            <Stack>
              <Input
                size="sm"
                placeholder="Full Name"
                name="name"
                value={info.name}
                onChange={handleInfoChange}
              />

              <Input
                size="sm"
                placeholder="Phone number of primary contact person"
                name="phone"
                value={info.phone}
                onChange={handleInfoChange}
              />
              <Input
                size="sm"
                placeholder="Email Address of primary contact person "
                name="email"
                value={info.email}
                onChange={handleInfoChange}
              />
              <Text mt={3}>State of Residence</Text>
              <Select
                size="sm"
                name="state_residence"
                value={info.state_residence}
                onChange={handleInfoChange}
              >
                {states.map((state, i) => (
                  <option key={i + 1}>{state.state.name}</option>
                ))}
              </Select>
              <Input
                size="sm"
                placeholder="Address"
                name="address"
                value={info.address}
                onChange={handleInfoChange}
              />
              <Text mt={3}>State of Origin</Text>
              <Select
                size="sm"
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {states.map((state, i) => (
                  <option key={i + 1}>{state.state.name}</option>
                ))}
              </Select>
              <Select
                size="sm"
                isDisabled={!selectedState}
                name="lga"
                value={info.lga}
                onChange={handleInfoChange}
              >
                {lga.map((l, i) => (
                  <option key={i + 1}>{l.name}</option>
                ))}
              </Select>

              <Select
                name="gender"
                value={info.gender}
                onChange={handleInfoChange}
              >
                <option>Select a gender</option>
                <option>Male</option>
                <option>Female</option>
              </Select>
              <Text mt={2}>Did the breach amount to any of the following</Text>
              <Select
                name="breach_type"
                value={info.breach_type}
                onChange={handleInfoChange}
              >
                {breaches.map((item, i) => (
                  <option key={i + 1}>{item.name}</option>
                ))}
              </Select>

              <Stack mt={3} isInline>
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              </Stack>
            </Stack>
          )}
          {/* Breach type */}
          <hr />
          {view === 1 && (
            <Stack my={6}>
              <Text>Where is the Applicant</Text>
              <Select
                value={inPrison}
                onChange={(e) => setInPrison(Boolean(e.target.value))}
              >
                <option value={null}>Select an option</option>
                <option value={false}>In Police detention</option>
                <option value={true}>In Prison custody</option>
                <option value={null}>None of the above</option>
              </Select>
              <Stack isInline style={{ justifyContent: "space-between" }}>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handlePrev}
                >
                  Prev
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleNext}
                >
                  Next
                </button>
              </Stack>
            </Stack>
          )}
          {view === 2 && (
            <Stack>
              <Box>
                <Text mt={2}>When was applicant arrested</Text>
                <Input
                  type="date"
                  name="arrested_on"
                  value={info.arrested_on}
                  onChange={handleInfoChange}
                />
              </Box>
              {!inPrison ? (
                <Stack>
                  <Text mt={2}>
                    How long has the applicant been in police detention?
                  </Text>
                  <Select
                    onChange={(e) => setdaysPlus(Boolean(e.target.value))}
                  >
                    <option value={null}>Please select an option</option>
                    <option value={false}>Less than 24 hours</option>
                    <option value={true}>More than 24hours </option>
                  </Select>
                </Stack>
              ) : (
                <Box>
                  <Text mt={2}>
                    How long has the applicant been in Prison Custody?
                  </Text>
                  <Select
                    onChange={(e) => setMonthsPlus(Boolean(e.target.value))}
                  >
                    <option value={null}>Select an option</option>
                    <option value={false}>Less than three months </option>
                    <option value={true}>More than thress months</option>
                  </Select>
                </Box>
              )}
              <Box>
                <Text mt={2}>Where was applicant arrested</Text>
                <Input
                  type="text"
                  name="arrested_at"
                  value={info.arrested_at}
                  onChange={handleInfoChange}
                />
              </Box>

              <Box>
                <Text mt={2}>What is the offence suspected of ?</Text>
                <Input
                  type="text"
                  name="offence_suspected"
                  value={info.offence_suspected}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>
                  Does the applicant have a case mate ? if yes how many ?
                </Text>
                <Input
                  type="number"
                  name="case_mates"
                  value={info.case_mates}
                  onChange={handleInfoChange}
                  defaultValue={0}
                />
              </Box>
              <Box>
                <Text mt={2}>
                  Where was the applicant going/coming from before the arrest?
                </Text>
                <Input
                  type="text"
                  name="itinerary"
                  value={info.itinerary}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>Name the police station taken to</Text>
                <Input
                  type="text"
                  name="station"
                  value={info.station}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>
                  How many days did the applicant stay in police station ?
                </Text>
                <Input
                  type="number"
                  name="station_duration"
                  value={info.station_duration}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>
                  Was the applicant beaten/tortured? if Yes, briefly explain
                </Text>
                <Input
                  type="text"
                  name="beaten"
                  value={info.beaten}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>
                  Did the applicant sustain any injuries ? if Yes, briefly
                  explain
                </Text>
                <Input
                  type="text"
                  name="injured"
                  value={info.injured}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>
                  Was the applicant asked to pay some money for release ? if
                  Yes, state the amount in words
                </Text>
                <Input
                  type="text"
                  name="bail_amount"
                  value={info.bail_amount}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>
                  Did the detention casue any job loss or vocational
                  displacement ? if Yes, explain
                </Text>
                <Input
                  type="text"
                  name="detention_cost"
                  value={info.detention_cost}
                  onChange={handleInfoChange}
                />
              </Box>
            </Stack>
          )}
          {view === 2 && inPrison && (
            <Stack>
              <Box>
                <Text mt={2}>Is the applicant waiting for DPP’s advice?</Text>
                <Select name="dpp" value={info.dpp} onChange={handleInfoChange}>
                  <option value={null}>Select an option</option>
                  <option>Yes</option>
                  <option>No, But facing criminal trial </option>
                  <option>No, already on bail</option>
                </Select>
              </Box>

              <Box>
                <Text mt={2}>When was the applicant arraigned?</Text>
                <Input
                  type="date"
                  name="arraigned_on"
                  value={info.arraigned_on}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>Which state was the applicant arraigned ?</Text>
                <Select onChange={(e) => setSelectedCourt(e.target.value)}>
                  {courts.map((state, i) => (
                    <option key={i + 1}>{state.state}</option>
                  ))}
                </Select>
              </Box>
              <Box>
                <Text mt={2}>Select a judicial division</Text>
                <Select
                  disabled={!selectedCourt}
                  name="division"
                  value={info.division}
                  onChange={handleInfoChange}
                >
                  {divisions.map((state, i) => (
                    <option key={i + 1}>{state.item}</option>
                  ))}
                </Select>
              </Box>
              <Box>
                <Text mt={2}>When was the last adjournment date?</Text>
                <Input
                  type="date"
                  name="adjournment_date"
                  value={info.adjournment_date}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>What is/are the offence(s) charged</Text>
                <Input
                  type="text"
                  name="offence_charged"
                  value={info.offence_charged}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>Name the first accused person </Text>
                <Input
                  type="text"
                  name="first_accused"
                  value={info.first_accused}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>
                  Name of the police station later transffered to if any{" "}
                </Text>
                <Input
                  type="text"
                  name="station2"
                  value={info.station2}
                  onChange={handleInfoChange}
                />
              </Box>
              <Box>
                <Text mt={2}>How long did you stay there ?</Text>
                <Input
                  type="text"
                  name="station2_duration"
                  value={info.station2_duration}
                  onChange={handleInfoChange}
                />
              </Box>

              <Stack isInline style={{ justifyContent: "space-between" }}>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handlePrev}
                >
                  Prev
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleNext}
                >
                  Next
                </button>
              </Stack>
            </Stack>
          )}

          {view === 3 && (
            <Box>
              <Stack>
                <Input
                  name="name"
                  placeholder="Name "
                  value={relInfo.name}
                  onChange={handleRelChange}
                />
                <Input
                  name="phone"
                  placeholder="phone"
                  type="number"
                  value={relInfo.phone}
                  onChange={handleRelChange}
                />
              </Stack>

              <Stack>
                <button
                  className="btn btn-success my-2"
                  onClick={handleRelSubmit}
                >
                  Add Relative
                </button>

                <button
                  disabled={relatives.length < 1}
                  className="btn btn-primary"
                  onClick={onSubmit}
                >
                  Submit Form
                </button>
              </Stack>
            </Box>
          )}
        </Box>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default AddApplicant;

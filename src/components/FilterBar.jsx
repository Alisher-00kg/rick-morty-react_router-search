import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "../utils/constants";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const FilterBar = () => {
  const [isSearched, setIsSearched] = useSearchParams();
  const handleChangeGender = (e) => {
    isSearched.set("gender", e.target.value);
    setIsSearched(isSearched);
  };
  const handleChangeStatus = (e) => {
    isSearched.set("status", e.target.value);
    setIsSearched(isSearched);
  };
  const genderValue = isSearched.get("gender") || " ";
  const statusValue = isSearched.get("status") || " ";
  return (
    <div>
      <Typography variant="h5" sx={{ margin: "1rem 0" }}>
        Filter by:
      </Typography>
      <Container>
        <StyledFormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            className="form"
            value={genderValue}
            onChange={handleChangeGender}
          >
            {GENDER_OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                label={option.label}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </StyledFormControl>
        <StyledFormControl>
          <FormLabel>Status</FormLabel>
          <RadioGroup
            className="form"
            value={statusValue}
            onChange={handleChangeStatus}
          >
            {STATUS_OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                label={option.label}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </StyledFormControl>
      </Container>
    </div>
  );
};
const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
});
const StyledFormControl = styled(FormControl)({
  border: "1px solid black !important",
  padding: "0.5rem 1rem !important",
  borderRadius: "0.8rem",
  "& .form": {
    display: "flex",
    flexDirection: "row",
  },
});

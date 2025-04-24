import { TextField, Typography } from "@mui/material";
import React from "react";

export const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <Typography variant="h4" sx={{ margin: "1rem 0" }}>
        Search character:
      </Typography>
      <TextField
        fullWidth
        placeholder="Search character by name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

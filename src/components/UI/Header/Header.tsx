import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-2 w-full h-full shadow-lg-border">
      <div className="flex gap-4 col-start-2 justify-end items-center px-4 " >
        <FormControl sx={{width:150}}>
          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           // value={age}
            label="Age"
           //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Header;

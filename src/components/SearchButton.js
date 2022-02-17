import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";

const SearchButton = ({click, color}) =>
  <IconButton onClick={click}>
    <SearchIcon sx={{color: color}}/>
  </IconButton>

export default SearchButton;

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { WHITE } from "../util/Consts";
import * as React from "react";

const SearchButton = ({click}) =>
  <IconButton onClick={click}>
    <SearchIcon sx={{color: WHITE}}/>
  </IconButton>

export default SearchButton;

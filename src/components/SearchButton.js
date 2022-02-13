import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { WHITE } from "../util/Consts";
import * as React from "react";

const SearchButton = () =>
  <IconButton>
    <SearchIcon sx={{color: WHITE}}/>
  </IconButton>

export default SearchButton;

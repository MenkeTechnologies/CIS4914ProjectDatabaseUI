import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
/**
 * @file Search button component
 */

/**
 * @param click
 * @param color
 * @returns {JSX.Element}
 * @constructor
 */
const SearchButton = ({click, color}) =>
  <IconButton onClick={click}>
    <SearchIcon sx={{color: color}}/>
  </IconButton>

export default SearchButton;

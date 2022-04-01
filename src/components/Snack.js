import { Slide, Snackbar } from "@mui/material";
import * as React from "react";

/**
 * @file Snack bar component wrapper
 */

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const TransitionUp = props => <Slide {...props} direction="up"/>;

/**
 * @param children
 * @param open
 * @param set
 * @returns {JSX.Element}
 * @constructor
 */
const Snack = ({children, open, set}) =>
  <Snackbar
    open={open}
    autoHideDuration={5000}
    TransitionComponent={TransitionUp}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    onClose={() => set(false)}
  >
    {children}
  </Snackbar>


export default Snack;

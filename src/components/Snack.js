import { Slide, Snackbar } from "@mui/material";
import * as React from "react";

const TransitionUp = props => <Slide {...props} direction="up"/>;

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

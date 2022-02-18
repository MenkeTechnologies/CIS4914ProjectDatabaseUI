import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import GlobalState from "../state/GlobalState";


const Login = () => {
  const {
    loginUser,
  } = React.useContext(GlobalState);

  return <React.Fragment>


    <Box
      component="form"
      sx={{
        display: "flex", flex: "1", justifyContent: "center"
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant={"h1"}>Senior Project Database</Typography>
    </Box>
    <Box
      component="form"
      sx={{
        display: "flex", flex: "1", justifyContent: "center"
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" component="h6">
        Email
      </Typography>
    </Box>

    <Box sx={{display: "flex", flex: "1", justifyContent: "center"}}>
      <TextField required
                 id="outlined-basic"
                 variant="outlined"/>
    </Box>
    <Box sx={{display: "flex", flex: "1", justifyContent: "center"}}>
      <Typography variant="h6" component="h6">
        Password
      </Typography>
    </Box>
    <Box sx={{display: "flex", flex: "1", justifyContent: "center"}}>
      <TextField
        required
        id="password-input"
        type="password"
        autoComplete="current-password"

      />
    </Box>
    <Box sx={{display: "flex", flex: "1", justifyContent: "center"}}>
      <Button variant="contained" component="span" sx={{mt: 3}} onClick={loginUser}>
        Login
      </Button>
    </Box>
  </React.Fragment>
}
export default Login;

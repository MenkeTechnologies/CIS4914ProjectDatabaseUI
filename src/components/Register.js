import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import GlobalState from "../state/GlobalState";
import { REGISTRATION } from "../util/Consts";


const Register = () => {
  const {
    loginUser,
    notRegistering
  } = React.useContext(GlobalState);

  return <React.Fragment>

    <Box
      component="form"
      sx={{
        display: "flex", flex: "1", justifyContent: "center", mt: 2
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{color: "darkgray"}} variant={"h2"} mt={3}>{REGISTRATION}</Typography>
    </Box>
    <Box
      component="form"
      sx={{
        display: "flex", flex: "1", justifyContent: "center", mt: 8
      }}
      noValidate
      autoComplete="off"
    >

      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="my-helper-text"/>
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="pw">Password</InputLabel>
        <Input id="pw" aria-describedby="my-helper-text"/>
        <FormHelperText id="my-helper-text">Minimum 8 characters</FormHelperText>
      </FormControl>


    </Box>
    <Box sx={{display: "flex", flex: "1", justifyContent: "center"}}>
      <FormControl>
        <InputLabel htmlFor="user">Username</InputLabel>
        <Input id="user" aria-describedby="my-helper-text"/>
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </Box>
    <Box sx={{display: "flex", flex: "1", justifyContent: "center"}}>
      <Button variant="contained" component="span" sx={{mt: 3}} onClick={loginUser}>
        Register
      </Button>
    </Box>
    <Box sx={{display: "flex", flex: "1", justifyContent: "center"}}>
      <Typography sx={{color: "darkgray"}} variant={"h6"} mt={3}>Already registered?</Typography>
    </Box>
    <Box sx={{display: "flex", flex: "1", justifyContent: "center"}}>
      <Button variant="contained" component="span" sx={{mt: 3}} onClick={notRegistering}>
        Login
      </Button>
    </Box>
  </React.Fragment>
}
export default Register;

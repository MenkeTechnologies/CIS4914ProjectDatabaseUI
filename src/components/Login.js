import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import Typography from "@mui/material/Typography";
import GlobalState from "../state/GlobalState";


const Login = () => {
    const {
        loginUser,
    } = React.useContext(GlobalState);

    return <React.Fragment>

        <img
            src={'https://www.uff.ufl.edu/wp/wp-content/uploads/2020/02/logo-uf-primary.png'}
            alt={"UF Logo"}
            style={{height: 138.908/3,
                width: 757/3,
                margin: 44.8462/5
            }}
        />


        <Box
            component="form"
            sx={{
                display: "flex", flex: "1", justifyContent: "center", mt: 2
            }}
            noValidate
            autoComplete="off"
        >
            <Typography sx={{color: "darkgray"}} variant={"h2"} mt={3}>Senior Project Database</Typography>
        </Box>
        <Box
            component="form"
            sx={{
                display: "flex", flex: "1", justifyContent: "center", mt: 8
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

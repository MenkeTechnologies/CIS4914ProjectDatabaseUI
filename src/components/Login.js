import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Avatar, Button, Checkbox, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import GlobalState from "../state/GlobalState";
import { BLUE, DK_GRAY, LT_GRAY, ORANGE, TITLE } from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LoginIcon from '@mui/icons-material/Login';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { checkUser } from "../service/Auth";
import Snack from "./Snack";
/**
 * @file Login component
 */

/**
 * @returns {JSX.Element}
 * @constructor
 */
const Login = () => {
  const {loginUser, registering} = React.useContext(GlobalState);
  const [loginErr, setLoginErr] = React.useState(false)
  const [apiErr, setApiErr] = React.useState(false)

  const paperStyle = {padding: 20, width: 300, margin: '30px auto'}
  const avatarStyle = {backgroundColor: ORANGE}
  const btnStyle = {margin: '20px 0'}
  const initialValues = {
    email: '', password: '', remember: false
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email').required("Required"),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required("Required")
  })
  return <React.Fragment>
    <Box
      component="form"
      sx={{
        display: "flex", flex: "1", justifyContent: "center", mt: 2
      }}
    >
      <img
        src={require('../img/logo-uf-primary.png')}
        alt={"UF Logo"}
        style={{
          height: 138.908 / 2.5, width: 757 / 2.5, margin: 44.8462 / 5
        }}
      />
    </Box>
    <Box
      component="form"
      sx={{
        display: "flex", flex: "1", justifyContent: "center", mt: 0
      }}
    >
      <Typography sx={{color: LT_GRAY, textAlign: "center"}} variant={"h2"} mt={7}>{TITLE}</Typography>
    </Box>

    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Typography sx={{color: DK_GRAY}} variant={"h6"}>Login
            <Avatar style={avatarStyle}><LoginIcon/></Avatar>
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} isInitialValid={false}
                validateOnMount={true}
                onSubmit={(v) => {
                  checkUser(v.email, v.password, setApiErr).then((match) => {
                    if (match) {
                      loginUser(match.name, match.email, match._id, match.type)
                    } else {
                      setLoginErr(true)
                    }
                  }).catch((e) => {
                    console.error(e);
                  });

                }}>
          {(props) => (<Form>
            <Field as={TextField}
                   label='Email'
                   name='email'
                   placeholder='Enter email'
                   fullWidth required
                   sx={{mt: 3}}
                   helperText={<ErrorMessage name="email"/>}
            />
            <Field as={TextField}
                   label='Password'
                   name='password'
                   placeholder='Enter Password'
                   type='password'
                   fullWidth required
                   autoComplete="current-password"
                   sx={{mt: 3, mb: 3}}
                   helperText={<ErrorMessage name="password"/>}
            />
            <Field as={FormControlLabel}
                   name='remember'
                   control={<Checkbox
                     color='primary'
                   />}
                   label="Remember me"
            />
            <Button type='submit' variant="contained"
                    disabled={!props.isValid}
                    color='primary'
                    sx={{backgroundColor: BLUE}}
                    style={btnStyle}
                    fullWidth>{"Sign in"}
            </Button>

            <Button type='submit' variant="contained"
                    onClick={registering}
                    color='primary'
                    sx={{backgroundColor: BLUE}}
                    fullWidth>{"Register"}
            </Button>


            <Snack open={loginErr} set={() => setLoginErr(false)}>
              <Alert severity="error">Error: email or password is not valid</Alert>
            </Snack>

            <Snack open={apiErr} set={() => setApiErr(false)}>
              <Alert severity="error">Error: could not connect to API</Alert>
            </Snack>

          </Form>)}
        </Formik>

      </Paper>
    </Grid>


  </React.Fragment>
}
export default Login;

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Checkbox, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import GlobalState from "../state/GlobalState";
import { BLUE, DK_GRAY, FACULTY, LT_GRAY, ORANGE, STUDENT, TITLE } from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LoginIcon from '@mui/icons-material/Login';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { checkEmail, createUser } from "../service/Auth";


const Register = () => {
  const {
    notRegistering,
    registerUser
  } = React.useContext(GlobalState);

  const [registrationError, setRegistrationError] = React.useState('');

  const paperStyle = {padding: 20, width: 300, margin: '30px auto'}
  const avatarStyle = {backgroundColor: ORANGE}
  const btnStyle = {margin: '20px 0'}
  const initialValues = {
    username: '',
    email: '',
    password: '',
    userType: ''
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
          height: 138.908 / 2.5,
          width: 757 / 2.5,
          margin: 44.8462 / 5
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
          <Typography sx={{color: DK_GRAY}} variant={"h6"}>Register
          </Typography>
          <Avatar style={avatarStyle}><LoginIcon/></Avatar>
        </Grid>
        <Formik initialValues={initialValues} isInitialValid={false} validateOnMount={true}
                validationSchema={validationSchema}
                onSubmit={(v) => {
                  checkEmail(v.email).then((match) => {
                    if (match) {
                      setRegistrationError('Error: account already exists for email.')
                    } else {
                      createUser(v.username, v.email, v.password, v.userType).then((data) => {
                        registerUser(v.username)
                      }).catch((e) => {
                        console.error(e);
                      })

                    }
                  }).catch((e) => {
                    console.error(e);
                  })

                }}>
          {(props) => (
            <Form>
              <Field as={TextField}
                     label='Username'
                     name='username'
                     placeholder='Enter username'
                     fullWidth required
                     sx={{mt: 3}}
                     helperText={<ErrorMessage name="username"/>}
              />
              <FormControl fullWidth sx={{mt: 2}}>
                <InputLabel id="demo-simple-select-helper-label">User Type</InputLabel>
                <Field as={Select}
                       labelId="demo-simple-select-helper-label"
                       id="demo-simple-select-helper"
                       label="User Type"
                       name='userType'
                       fullWidth required
                       helperText={<ErrorMessage name="userType"/>}
                >
                  <MenuItem value={STUDENT}>Student</MenuItem>
                  <MenuItem value={FACULTY}>Faculty</MenuItem>
                </Field>
              </FormControl>
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
                     control={
                       <Checkbox
                         color='primary'
                       />
                     }
                     label="Remember me"
              />
              <Button type='Submit' variant="contained"
                      disabled={!props.isValid}
                      color='primary'
                      sx={{backgroundColor: BLUE}}
                      style={btnStyle}
                      fullWidth>{"Register"}
              </Button>

              <Button type={"button"} variant="contained"
                      onClick={notRegistering}
                      color='primary'
                      sx={{backgroundColor: BLUE}}
                      fullWidth>{"Login"}
              </Button>

              {registrationError ? <h1>{registrationError}</h1> : <React.Fragment/>}


            </Form>
          )}
        </Formik>

      </Paper>
    </Grid>


  </React.Fragment>
}
export default Register;

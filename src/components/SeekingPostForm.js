import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Checkbox, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import GlobalState from "../state/GlobalState";
import { BLUE, DK_GRAY, emptyOrInvalid, FACULTY, LT_GRAY, ORANGE, STUDENT, TITLE } from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LoginIcon from '@mui/icons-material/Login';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const SeekingPostForm = () => {
  const {
    notRegistering,
    registerUser
  } = React.useContext(GlobalState);

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
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(v) => {
          registerUser(v.username)
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
                      disabled={emptyOrInvalid(props)}
                      color='primary'
                      sx={{backgroundColor: BLUE}}
                      style={btnStyle}
                      fullWidth>{"SeekingPostForm"}
              </Button>

              <Button type={"button"} variant="contained"
                      onClick={notRegistering}
                      color='primary'
                      sx={{backgroundColor: BLUE}}
                      style={btnStyle}
                      fullWidth>{"Login"}
              </Button>


            </Form>
          )}
        </Formik>

      </Paper>
    </Grid>


  </React.Fragment>
}
export default SeekingPostForm;

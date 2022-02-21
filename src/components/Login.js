import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Checkbox, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import GlobalState from "../state/GlobalState";
import { TITLE } from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LoginIcon from '@mui/icons-material/Login';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'


const Login = () => {
  const {
    loginUser,
    registering
  } = React.useContext(GlobalState);

  const paperStyle = {padding: 20, height: '55vh', width: 300, margin: '30px auto'}
  const avatarStyle = {backgroundColor: 'rgba(255,103,0,0.83)'}
  const btnstyle = {margin: '20px 0'}
  const initialValues = {
    username: '',
    password: '',
    remember: false
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().email('Please enter valid email').required("Required"),
    password: Yup.string().required("Required")
  })
  const onSubmit = (values) => {
    console.log(values)
    // setTimeout(() => {
    //     props.resetForm()
    //     props.setSubmitting(false)
    // }, 2000)
  }
  const onKeyDown = (e) => {

  }

  return <React.Fragment>
    <Box
      component="form"
      sx={{
        display: "flex", flex: "1", justifyContent: "center", mt: 2
      }}
      noValidate
      autoComplete="off"
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
      noValidate
      autoComplete="off"
    >
      <Typography sx={{color: "#C0C0C0"}} variant={"h2"} mt={7}>{TITLE}</Typography>
    </Box>
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LoginIcon/></Avatar>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props) => (
            <Form>
              <Field as={TextField}
                     label='Username'
                     onKeyDown={onKeyDown}
                     name='username'
                     placeholder='Enter username'
                     fullWidth required
                     sx={{mt: 3}}
                     helperText={<ErrorMessage name="username"/>}
              />
              <Field as={TextField}
                     label='Password'
                     onKeyDown={onKeyDown}
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
                      disabled={props}
                      onClick={loginUser}
                      component="span"
                      color='primary'
                      sx={{backgroundColor: "rgba(0,78,152,0.88)"}}
                      style={btnstyle}
                      fullWidth>{"Sign in"}
              </Button>

              <Button type='Submit' variant="contained"
                      onClick={registering}
                      component="span"
                      color='primary'
                      sx={{backgroundColor: "rgba(0,78,152,0.88)"}}
                      style={btnstyle}
                      fullWidth>{"Register"}
              </Button>

            </Form>
          )}
        </Formik>

      </Paper>
    </Grid>


  </React.Fragment>
}
export default Login;

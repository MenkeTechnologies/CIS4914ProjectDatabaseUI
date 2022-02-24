import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from "@mui/material";
import GlobalState from "../state/GlobalState";
import { BLUE } from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


const MessageForm = () => {
  const {
    notRegistering, registerUser
  } = React.useContext(GlobalState);

  const paperStyle = {
    padding: 20, margin: '30px auto', display: 'grid', height: '100%', width: "25%"
  }
  const btnStyle = {margin: '20px 5px'}
  const initialValues = {
    toName: '',
    subject: '',
    message: ''
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  })

  const clear = props => {
    Object.keys(props.values).forEach(v => props.values[v] = '');
  };

  return <React.Fragment>

    <Grid container spacing={'spacing'}>
      <Paper elevation={10} style={paperStyle}>
        <Typography variant='h4' align='center'>
          New Message
        </Typography>
        <Formik initialValues={initialValues} isInitialValid={false} validateOnMount={true}
                validationSchema={validationSchema}
                onSubmit={(v) => {
                  registerUser(v.username)
                }}>
          {(props) => (<Form>
            <Grid container item spacing={2}>
              <Grid item xs={12}>
                <Field as={TextField}
                       label='Username'
                       name='username'
                       placeholder='Username'
                       fullWidth required
                       sx={{mt: 3}}
                       helperText={<ErrorMessage name="To"/>}
                />

              </Grid>
              <Grid item xs={12}>
                <Field as={TextField}
                       label='Subject'
                       name='subject'
                       placeholder='Enter Subject'
                       fullWidth required
                       sx={{mt: 3}}
                       helperText={<ErrorMessage name="Subject"/>}
                />
              </Grid>
            </Grid>
            <Field as={TextField}
                   label='Message'
                   name='message'
                   placeholder='Message'
                   multiline
                   rows={4}
                   fullWidth required
                   sx={{mt: 3}}
                   helperText={<ErrorMessage name="Message"/>}

            />

            <Stack direction='row' spacing={2} justifyContent='center'>
              <Button type={"reset"} variant="contained"
                      color='primary'
                      sx={{backgroundColor: BLUE}}
                      style={btnStyle}
                      startIcon={<DeleteIcon/>}
              >Clear
              </Button>
              <Button type={"submit"} variant="contained"
                      disabled={!props.isValid}
                      color='primary'
                      sx={{backgroundColor: BLUE}}
                      style={btnStyle}
                      endIcon={<SendIcon/>}
              >
                Send
              </Button>
            </Stack>

          </Form>)}
        </Formik>

      </Paper>
    </Grid>

  </React.Fragment>
}
export default MessageForm;


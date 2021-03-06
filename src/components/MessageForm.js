import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button, Stack, Typography } from "@mui/material";
import { BLUE, STATE, USER_ID, USERNAME } from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { createMessage } from '../service/Message';
import GlobalState from "../state/GlobalState";
import Snack from "./Snack";
/**
 * @file Message form component
 */

/**
 * @returns {JSX.Element}
 * @constructor
 */
const MessageForm = () => {

  const {
    [STATE]: {[USERNAME]: username, [USER_ID]: userId}
  } = React.useContext(GlobalState);
  const [success, setSuccess] = React.useState(false);
  const [apiErr, setApiErr] = React.useState(false)
  const [messageErr, setMessageErr] = React.useState(false)

  const paperStyle = {
    padding: 20, margin: '30px auto', display: 'grid', height: '100%', width: "25%"
  }
  const btnStyle = {margin: '20px 5px'}
  const initialValues = {
    senderId: userId,
    recipientId: '',
    subject: '',
    body: ''
  }
  const validationSchema = Yup.object().shape({
    recipientId: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
    body: Yup.string().required("Required"),
  })

  return <React.Fragment>

    <Grid container spacing={'spacing'}>
      <Paper elevation={10} style={paperStyle}>
        <Typography variant='h4' align='center'>
          New Message
        </Typography>
        <Formik initialValues={initialValues} isInitialValid={false} validateOnMount={true}
                validationSchema={validationSchema}
                onSubmit={(v) => {
                  //TODO need to validate recipient userId
                  createMessage(v, userId).then((resp) => {

                    if (resp.status === 200) {
                      setSuccess(true);
                    } else {
                      setMessageErr(true);
                    }

                  }).catch((e) => {
                    setMessageErr(true);
                    console.error(e);
                  })
                }}>
          {(props) => (<Form>
            <Grid container item spacing={2}>
              <Grid item xs={12}>
                <Field as={TextField}
                       label='Recipient'
                       name='recipientId'
                       placeholder='Recipient'
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
                   label='Body'
                   name='body'
                   placeholder='Body'
                   multiline
                   rows={4}
                   fullWidth required
                   sx={{mt: 3}}
                   helperText={<ErrorMessage name="Body"/>}

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
    <Snack open={success} set={() => setSuccess(false)}>
      <Alert severity="success">Success</Alert>
    </Snack>
    <Snack open={apiErr} set={() => setApiErr(false)}>
      <Alert severity="error">Error: could not connect to API</Alert>
    </Snack>
    <Snack open={messageErr} set={() => setMessageErr(false)}>
      <Alert severity="error">Error: could not send message to API</Alert>
    </Snack>

  </React.Fragment>
}
export default MessageForm;


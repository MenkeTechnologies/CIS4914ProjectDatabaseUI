import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from "@mui/material";
import { BLUE } from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { createSeekingPost } from '../service/Post';


const OfferingPostForm = () => {

  const paperStyle = {
    padding: 20, margin: '30px auto', display: 'grid', height: '100%', width: "100%"
  }
  const btnStyle = {margin: '20px 5px'}
  const initialValues = {
    authorType: 'Student',
    title: '',
    preferredContact: '',
    summary: '',
    memberList: ''
  }
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    preferredContact: Yup.string().required("Required"),
    summary: Yup.string().required("Required"),
  })

  return <React.Fragment>
    <Grid container spacing={'spacing'}>
      <Paper elevation={10} style={paperStyle}>
        <Formik initialValues={initialValues} isInitialValid={false} validateOnMount={true}
                validationSchema={validationSchema}
                onSubmit={(v) => {
                  createSeekingPost(v)
                }}>
          {(props) => (<Form>
            <Grid container item spacing={2}>
              <Grid item xs={6}>
                <Field as={TextField}
                       label='Name'
                       name='title'
                       placeholder='Name'
                       fullWidth required
                       sx={{mt: 3}}
                       helperText={<ErrorMessage name="topic"/>}
                />

              </Grid>
              <Grid item xs={6}>
                <Field as={TextField}
                       label='Preferred Contact'
                       name='preferredContact'
                       placeholder='Enter preferred contact'
                       fullWidth required
                       sx={{mt: 3}}
                       helperText={<ErrorMessage name="preferredContact"/>}
                />
              </Grid>
            </Grid>
            <Field as={TextField}
                   label='Summary'
                   name='summary'
                   placeholder='Project Summary'
                   multiline
                   rows={4}
                   fullWidth required
                   sx={{mt: 3}}
                   helperText={<ErrorMessage name="Project Summary"/>}

            />
            <Field as={TextField}
                   label='Other members'
                   name='members'
                   placeholder='List of other students'
                   sx={{
                     mt: 3, display: 'flex',

                   }}
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
                Post
              </Button>
            </Stack>

          </Form>)}
        </Formik>

      </Paper>
    </Grid>

  </React.Fragment>
}
export default OfferingPostForm;


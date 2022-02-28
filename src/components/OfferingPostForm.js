import * as React from 'react';
<<<<<<< HEAD
import { TextField, Grid, Paper, Chip, Button, InputAdornment, IconButton, Divider } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import GlobalState from "../state/GlobalState";
import { BLUE, DK_GRAY, emptyOrInvalid, FACULTY, LT_GRAY, ORANGE, STUDENT, TITLE } from "../util/Consts";
import { FieldArray, FormikProvider, useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { boolean } from 'yup';
=======
import TextField from '@mui/material/TextField';
import { Button, Stack } from "@mui/material";
import GlobalState from "../state/GlobalState";
import { BLUE } from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { createOfferingPost } from '../service/Post';
>>>>>>> 73040b30cfce137421753e149b18a245bd3cd479

const paperStyle = {
    padding: 20,
    margin: '30px auto',
    display: 'grid',
    height: '100%',
}
const btnStyle = { margin: '20px 5px' }

const OfferingPostForm = () => {
<<<<<<< HEAD

    const initialValues = {
        authorType: "Student",
        topic: "",
        preferredContact: "",
        summary: "",
        skillToAdd: "",
        skillsList: [],
        hasSkill: boolean,
        softwareToAdd: "",
        softwareList: [],
        advisor: "",
        memberNameToAdd: "",
        memberEmailToAdd: "",
        memberContactToAdd: "",
        memberList: []
    }

    const validationSchema = Yup.object().shape({
        topic: Yup.string().required("Required"),
        preferredContact: Yup.string().required("Required"),
        summary: Yup.string().required("Required"),
        skillToAdd: Yup.string().when("skillsList", {
            is: value => !(value.length >= 1),
            then: Yup.string().required("Please add at least one applicable project skill")
        }),
        softwareToAdd: Yup.string().when("softwareList", {
            is: value => !(value.length >= 1),
            then: Yup.string().required("Please add at least one applicable project software.")
        })
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            axios.post('/projecttopicposts/create-projecttopicpost', {
                authorType: values.authorType,
                topic: values.topic,
                preferredContact: values.preferredContact,
                summary: values.summary,
                skillsList: values.skillsList,
                softwareList: values.softwareList,
                advisor: values.advisor,
                memberList: values.softwareList
            });
        }
    });

    return <React.Fragment>
        <Paper elevation={10} style={paperStyle}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12}>
                        <Divider>
                            <Chip label="Project Data" />
                        </Divider>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            id="topic"
                            name="topic"
                            label="Topic"
                            value={formik.values.topic}
                            onChange={formik.handleChange}
                            error={formik.touched.topic && Boolean(formik.errors.topic)}
                            helperText={formik.touched.topic && formik.errors.topic}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            id="advisor"
                            name="advisor"
                            label="Advisor"
                            value={formik.values.advisor}
                            onChange={formik.handleChange}
                            error={formik.touched.advisor && Boolean(formik.errors.advisor)}
                            helperText={formik.touched.advisor && formik.errors.advisor}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            required
                            id="preferredContact"
                            name="preferredContact"
                            label="Preferred Contact"
                            value={formik.values.preferredContact}
                            onChange={formik.handleChange}
                            error={formik.touched.preferredContact && Boolean(formik.errors.preferredContact)}
                            helperText={formik.touched.preferredContact && formik.errors.preferredContact}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="summary"
                            name="summary"
                            label="Summary"
                            value={formik.values.summary}
                            onChange={formik.handleChange}
                            error={formik.touched.summary && Boolean(formik.errors.summary)}
                            helperText={formik.touched.summary && formik.errors.summary}
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormikProvider value={formik}>
                            <FieldArray name="skillsList">
                                {({ remove, push }) => (
                                    <>
                                        <TextField
                                            fullWidth
                                            id="skillToAdd"
                                            name="skillToAdd"
                                            label="Add Required Skills*"
                                            value={formik.values.skillToAdd}
                                            onChange={formik.handleChange}
                                            error={formik.touched.skillToAdd && Boolean(formik.errors.skillToAdd)}
                                            helperText={formik.touched.skillToAdd && formik.errors.skillToAdd}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <IconButton edge="end" onClick={() => {
                                                        push(formik.values.skillToAdd)
                                                        formik.setFieldValue('skillToAdd', '');
                                                    }}>
                                                        <AddCircleOutlineIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            }}
                                        />
                                        {formik.values.skillsList.length > 0 && formik.values.skillsList.map((skill, index) => (
                                            <Chip label={skill} style={{ marginTop: "5px", marginRight: "5px" }} variant="outlined"
                                                onDelete={() => {
                                                    remove(index);
                                                }
                                                } />
                                        ))}
                                    </>
                                )}
                            </FieldArray>
                        </FormikProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <FormikProvider value={formik}>
                            <FieldArray name="softwareList">
                                {({ remove, push }) => (
                                    <>
                                        <TextField
                                            fullWidth
                                            id="softwareToAdd"
                                            name="softwareToAdd"
                                            label="Add Required Software*"
                                            value={formik.values.softwareToAdd}
                                            onChange={formik.handleChange}
                                            error={formik.touched.softwareToAdd && Boolean(formik.errors.softwareToAdd)}
                                            helperText={formik.touched.softwareToAdd && formik.errors.softwareToAdd}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <IconButton edge="end" onClick={() => {
                                                        push(formik.values.softwareToAdd)
                                                        formik.setFieldValue('softwareToAdd', '');
                                                    }}>
                                                        <AddCircleOutlineIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            }}
                                        />
                                        {formik.values.softwareList.length > 0 && formik.values.softwareList.map((software, index) => (
                                            <Chip label={software} style={{ marginTop: "5px", marginRight: "5px" }} variant="outlined" onDelete={() => remove(index)} />
                                        ))}
                                    </>
                                )}
                            </FieldArray>
                        </FormikProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider>
                            <Chip label="Additional Members" />
                        </Divider>
                    </Grid>
                    <FormikProvider value={formik}>
                        <FieldArray name="memberList">
                            {({ remove, push }) => (
                                <>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="memberNameToAdd"
                                            name="memberNameToAdd"
                                            label="Member Name"
                                            value={formik.values.memberNameToAdd}
                                            onChange={formik.handleChange}
                                            error={formik.touched.memberNameToAdd && Boolean(formik.errors.memberNameToAdd)}
                                            helperText={formik.touched.memberNameToAdd && formik.errors.memberNameToAdd}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            fullWidth
                                            id="memberContactToAdd"
                                            name="memberContactToAdd"
                                            label="Member Contact"
                                            value={formik.values.memberContactToAdd}
                                            onChange={formik.handleChange}
                                            error={formik.touched.memberContactToAdd && Boolean(formik.errors.memberContactToAdd)}
                                            helperText={formik.touched.memberContactToAdd && formik.errors.memberContactToAdd}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            fullWidth
                                            id="memberEmailToAdd"
                                            name="memberEmailToAdd"
                                            label="Member Email"
                                            value={formik.values.memberEmailToAdd}
                                            onChange={formik.handleChange}
                                            error={formik.touched.memberEmailToAdd && Boolean(formik.errors.memberEmailToAdd)}
                                            helperText={formik.touched.memberEmailToAdd && formik.errors.memberEmailToAdd}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">@ufl.edu</InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Button
                                            type="button"
                                            variant="outlined"
                                            fullWidth
                                            onClick={() => {
                                                push({
                                                    memberName: formik.values.memberNameToAdd,
                                                    memberContact: formik.values.memberContactToAdd,
                                                    memberEmail: formik.values.memberEmailToAdd + "@ufl.edu"
                                                });
                                                formik.setFieldValue('memberNameToAdd', '');
                                                formik.setFieldValue('memberContactToAdd', '');
                                                formik.setFieldValue('memberEmailToAdd', '');
                                            }}
                                        >Add
                                        </Button>
                                    </Grid>
                                    {formik.values.memberList.length > 0 && formik.values.memberList.map((member, index) => (
                                        <>
                                            <Grid item xs={4}>
                                                <TextField
                                                    fullWidth
                                                    id={index + "name"}
                                                    defaultValue={member.memberName}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    fullWidth
                                                    id={index + "contact"}
                                                    defaultValue={member.memberContact}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <TextField
                                                    fullWidth
                                                    id={index + "email"}
                                                    defaultValue={member.memberEmail}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    variant="standard"
                                                />
                                            </Grid>
                                            <Grid item xs={1}>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => remove(index)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                        </>
                                    ))}
                                </>
                            )}
                        </FieldArray>
                    </FormikProvider>

                    <Grid item xs={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={!(formik.isValid && formik.dirty)}
                        >Post
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            type="button"
                            variant="outlined"
                            color="error"
                            fullWidth
                        >Cancel
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </React.Fragment>
=======
  const {
    notRegistering,
    registerUser
  } = React.useContext(GlobalState);

  const paperStyle = {
    padding: 20,
    margin: '30px auto',
    display: 'grid',
    width: "100%",
    height: '100%',
  }
  const btnStyle = {margin: '20px 5px'}
  const initialValues = {
    topic: '',
    authorType: 'Student',
    preferredContact: '',
    summary: '',
    skillsList: '',
    softwareList: '',
    members: '',
    advisor: '',

  }
  const validationSchema = Yup.object().shape({
    topic: Yup.string().required("Required"),
    preferredContact: Yup.string().required("Required"),
    summary: Yup.string().required("Required"),
    skillsList: Yup.string().required("Required"),
    softwareList: Yup.string().required("Required"),
  })

  return <React.Fragment>
    <Grid container justifyContent="center" spacing={'spacing'}
          alignItems="center">
      <Paper elevation={10} style={paperStyle}>
        <Formik initialValues={initialValues} isInitialValid={false} validateOnMount={true}
                validationSchema={validationSchema}
                onSubmit={(v) => {
                  createOfferingPost(v)
                }}>
          {(props) => (
            <Form>
              <Grid container item spacing={2}>
                <Grid item xs={6}>
                  <Field as={TextField}
                         label='Topic'
                         name='topic'
                         placeholder='Enter topic'
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
              <Grid container item spacing={2}>
                <Grid item xs={6}>
                  <Field as={TextField}
                         label='Skills'
                         name='skillsList'
                         placeholder='Preferred Skills required for project'
                         fullWidth required
                         sx={{mt: 3}}
                         helperText={<ErrorMessage name="Preferred skills"/>}
                  />

                </Grid>
                <Grid item xs={6}>
                  <Field as={TextField}
                         label='Software'
                         name='softwareList'
                         placeholder='Targeted tech stack for project'
                         fullWidth required
                         sx={{mt: 3}}
                         helperText={<ErrorMessage name="Software"/>}
                  />
                </Grid>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={6}>
                  <Field as={TextField}
                         label='Advisor'
                         name='advisor'
                         placeholder='Current Advisor (left blank if none yet'
                         fullWidth
                         sx={{mt: 3}}
                  />

                </Grid>
                <Grid item xs={6}>
                  <Field as={TextField}
                         label='Other members'
                         name='memberList'
                         placeholder='List of other students'
                         fullWidth
                         sx={{mt: 3}}
                  />
                </Grid>
              </Grid>
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

            </Form>
          )}
        </Formik>

      </Paper>
    </Grid>

  </React.Fragment>
>>>>>>> 73040b30cfce137421753e149b18a245bd3cd479
}
export default OfferingPostForm;


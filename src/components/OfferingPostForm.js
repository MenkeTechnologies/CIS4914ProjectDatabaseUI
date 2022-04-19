import * as React from 'react';
import { Button, Chip, Divider, Grid, IconButton, InputAdornment, Paper, TextField, Typography, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ClearIcon from '@mui/icons-material/Clear';
import { FieldArray, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { createOfferingPost } from '../service/Post';
import { ALL_TAB, BLUE, STATE, USER_ID } from "../util/Consts";
import GlobalState from "../state/GlobalState";

const OfferingPostForm = () => {

  const {
    [STATE]: { [USER_ID]: userId },
    handleNavChange,

  } = React.useContext(GlobalState);

  const initialValues = {
    authorId: userId,
    authorType: "Student",
    topic: "",
    preferredContact: "",
    summary: "",
    skillToAdd: "",
    skillsList: [],
    softwareToAdd: "",
    softwareList: [],
    advisor: "",
    memberNameToAdd: "",
    memberEmailToAdd: "",
    memberContactToAdd: "",
    memberList: [],
    maximumMembers: 6
  }
  const [success, setSuccess] = React.useState(false);
  const [apiErr, setApiErr] = React.useState(false)

  const validationSchema = Yup.object().shape({
    topic: Yup.string().required("Required"),
    preferredContact: Yup.string().required("Required"),
    summary: Yup.string().required("Required"),
    maximumMembers: Yup.number().min(1).max(6).required("Required"),
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
      createOfferingPost(values)
        .then(handleNavChange(ALL_TAB));
    }
  });

  return <React.Fragment>
    <Paper elevation={10} fullWidth sx={{ marginTop: 3 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} justifyContent={"center"} sx={{ padding: 3, paddingTop: 0 }}>
          <Grid item xs={12}>
            <Divider sx={{ "&::before, &::after": { borderColor: BLUE, } }}>
              <Chip label="Project Details" sx={{ backgroundColor: BLUE, color: "white" }} />
            </Divider>
          </Grid>
          <Grid item xs={12} md={5}>
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
          <Grid item xs={12} sm={6} md={3}>
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
          <Grid item xs={12} md={1} sm={1}>
            <TextField
              fullWidth
              id="maximumMembers"
              name="maximumMembers"
              label="maximumMembers"
              value={formik.values.maximumMembers}
              onChange={formik.handleChange}
              error={formik.touched.maximumMembers && Boolean(formik.errors.maximumMembers)}
              helperText={formik.touched.maximumMembers && formik.errors.maximumMembers}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
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
          <Grid item xs={12} sm={12} md={6}>
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
                            <AddCircleOutlineIcon sx={{ color: BLUE }} />
                          </IconButton>
                        </InputAdornment>
                      }}
                    />
                    <Grid container direction={"row"}>
                      {formik.values.skillsList.length > 0 && formik.values.skillsList.map((skill, index) => (
                        <Grid item sx={{ border: 1, borderColor: "rgba(0, 0, 0, 0.23)", borderRadius: "30px", marginTop: 1, marginRight: 1, padding: 2 }} maxWidth={"100%"}>
                          <Stack direction="row" alignItems="center" gap={1} >
                            <ClearIcon onClick={() => remove(index)} sx={{ fontSize: 18 }}></ClearIcon>
                            <Typography style={{ wordWrap: "break-word" }} maxWidth={"95%"}>
                              {skill}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </FieldArray>
            </FormikProvider>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
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
                            <AddCircleOutlineIcon sx={{ color: BLUE }} />
                          </IconButton>
                        </InputAdornment>
                      }}
                    />
                    <Grid container direction={"row"}>
                      {formik.values.softwareList.length > 0 && formik.values.softwareList.map((software, index) => (
                        <Grid item sx={{ border: 1, borderColor: "rgba(0, 0, 0, 0.23)", borderRadius: "30px", marginTop: 1, marginRight: 1, padding: 2 }} maxWidth={"100%"}>
                          <Stack direction="row" alignItems="center" gap={1} >
                            <ClearIcon onClick={() => remove(index)} sx={{ fontSize: 18 }}></ClearIcon>
                            <Typography style={{ wordWrap: "break-word" }} maxWidth={"95%"}>
                              {software}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </FieldArray>
            </FormikProvider>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ "&::before, &::after": { borderColor: BLUE, } }}>
              <Chip label="Additional Members" sx={{ backgroundColor: BLUE, color: "white" }} />
            </Divider>
          </Grid>
          <FormikProvider value={formik}>
            <FieldArray name="memberList">
              {({ remove, push }) => (
                <Grid container alignItems={"center"} justifyContent={"center"} padding={3} spacing={3}>
                  <Grid item xs={12} md={4}>
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
                  <Grid item xs={12} md={4}>
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
                  <Grid item xs={12} md={3}>
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
                  <Grid item xs={12} md={1}>
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
                    ><PersonAddAlt1Icon></PersonAddAlt1Icon>
                    </Button>
                  </Grid>
                  {formik.values.memberList.length > 0 && formik.values.memberList.map((member, index) => (
                    <>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          id={index + "name"}
                          defaultValue={member.memberName}
                          InputProps={{
                            readOnly: true,
                            startAdornment:
                              <InputAdornment position="end">
                                <IconButton edge="start">
                                  <AccountBoxIcon sx={{ color: BLUE, margin: 1 }} />
                                </IconButton>
                              </InputAdornment>
                          }}
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          id={index + "contact"}
                          defaultValue={member.memberContact}
                          InputProps={{
                            readOnly: true,
                            startAdornment:
                              <InputAdornment position="end">
                                <IconButton edge="start">
                                  <ContactPhoneIcon sx={{ color: BLUE, margin: 1 }} />
                                </IconButton>
                              </InputAdornment>
                          }}
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          id={index + "email"}
                          defaultValue={member.memberEmail}
                          InputProps={{
                            readOnly: true,
                            startAdornment:
                              <InputAdornment position="end">
                                <IconButton edge="start">
                                  <ContactMailIcon sx={{ color: BLUE, margin: 1 }} />
                                </IconButton>
                              </InputAdornment>
                          }}
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} md={1} >
                        <Button
                          type="button"
                          variant="outlined"
                          size="small"
                          fullWidth
                          color="error"
                          onClick={() => remove(index)}>
                          <PersonRemoveIcon></PersonRemoveIcon>
                        </Button>
                      </Grid>
                    </>
                  ))}
                </Grid>
              )}
            </FieldArray>
          </FormikProvider>
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!(formik.isValid && formik.dirty)}
            >Post
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              type="button"
              onClick={formik.resetForm}
              variant="outlined"
              color="error"
              fullWidth
            >Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </React.Fragment >
}
export default OfferingPostForm;


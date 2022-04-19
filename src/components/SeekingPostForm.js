import * as React from 'react';
import { Button, Chip, Divider, Grid, IconButton, InputAdornment, Paper, TextField, Alert } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail'; import { FieldArray, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { createSeekingPost } from '../service/Post';
import { STATE, USER_ID, ALL_TAB, BLUE } from "../util/Consts";
import GlobalState from "../state/GlobalState";
import Snack from "./Snack";

const SeekingPostForm = () => {

  const { [STATE]: { [USER_ID]: userId }, handleNavChange } = React.useContext(GlobalState);

  const [success, setSuccess] = React.useState(false);
  const [apiErr, setApiErr] = React.useState(false)

  const initialValues = {
    authorId: userId,
    authorType: "Student",
    title: "",
    preferredContact: "",
    summary: "",
    memberNameToAdd: "",
    memberEmailToAdd: "",
    memberContactToAdd: "",
    memberList: []
  }

  const _id = "";

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    preferredContact: Yup.string().required("Required"),
    summary: Yup.string().required("Required")
  });

  const formik = useFormik({
    initialValues: initialValues, validationSchema: validationSchema, onSubmit: values => {
      createSeekingPost(values)
        .then(handleNavChange(ALL_TAB));
    }
  });

  return <React.Fragment>
    <Paper elevation={10} fullWidth sx={{ marginTop: 3 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} justifyContent={"center"} sx={{ padding: 3, paddingTop: 0 }}>
          <Grid item xs={12}>
            <Divider sx={{ "&::before, &::after": { borderColor: BLUE, } }}>
              <Chip label="Student Details" sx={{ backgroundColor: BLUE, color: "white" }} />
            </Divider>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="title"
              name="title"
              label="Post Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>

          <Grid item xs={6}>
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

          <Grid item xs={12}>
            <Divider sx={{ "&::before, &::after": { borderColor: BLUE, } }}>
              <Chip label="Additional Members" sx={{ backgroundColor: BLUE, color: "white" }} />
            </Divider>
          </Grid>
          <FormikProvider value={formik}>
            <FieldArray name="memberList">
              {({ remove, push }) => (<>
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
              </>)}
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
              onClick={formik.resetForm}
            >Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    <Snack open={success} set={() => setSuccess(false)}>
      <Alert severity="success">Success</Alert>
    </Snack>
    <Snack open={apiErr} set={() => setApiErr(false)}>
      <Alert severity="error">Error: could not connect to API</Alert>
    </Snack>
  </React.Fragment>
}
export default SeekingPostForm;


import * as React from 'react';
import { Button, Chip, Divider, Grid, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FieldArray, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { createSeekingPost } from '../service/Post';
import { STATE, USER_ID } from "../util/Consts";
import GlobalState from "../state/GlobalState";

const paperStyle = {
  padding: 20, margin: '30px auto', display: 'grid', height: '100%',
}

const SeekingPostForm = () => {

  const {[STATE]: {[USER_ID]: userId}} = React.useContext(GlobalState);

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
      createSeekingPost(values, _id).then((resp) => {

          if (resp.status === 200) {
            //TODO snackbar successful post
          } else {
            // resp.statusText
            //TODO snackbar error
          }

        }).catch((e) => {
        // resp.statusText
        //TODO snackbar error
        console.error(e);
      })
    }
  });

  return <React.Fragment>
    <Paper elevation={10} style={paperStyle}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Divider>
              <Chip label="Student Data"/>
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
            <Divider>
              <Chip label="Additional Members"/>
            </Divider>
          </Grid>
          <FormikProvider value={formik}>
            <FieldArray name="memberList">
              {({remove, push}) => (<>
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
                {formik.values.memberList.length > 0 && formik.values.memberList.map((member, index) => (<>
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
                      <DeleteIcon/>
                    </IconButton>
                  </Grid>
                </>))}
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
  </React.Fragment>
}
export default SeekingPostForm;


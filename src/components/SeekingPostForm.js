import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Avatar, Button, Checkbox, FormControlLabel, Stack} from "@mui/material";
import GlobalState from "../state/GlobalState";
import {BLUE, DK_GRAY, emptyOrInvalid, FACULTY, LT_GRAY, ORANGE, STUDENT, TITLE} from "../util/Consts";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


const OfferingPostForm = () => {
    const {
        notRegistering,
        registerUser
    } = React.useContext(GlobalState);

    const paperStyle = {
        padding: 20,
        margin: '30px auto',
        display: 'grid',
        height: '100%',
    }
    const btnStyle = {margin: '20px 5px'}
    const initialValues = {
        topic: '',
        preferredContact: '',
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
        <Grid container spacing={'spacing'}>
            <Paper elevation={10} style={paperStyle}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(v) => {
                    registerUser(v.username)
                }}>
                    {(props) => (
                        <Form>
                            <Grid container item spacing={2}>
                                <Grid item xs={6}>
                                    <Field as={TextField}
                                           label='Name'
                                           name='Name'
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
                                   name='Summary'
                                   placeholder='Project Summary'
                                   multiline
                                   rows={4}
                                   fullWidth required
                                   sx={{mt: 3}}
                                   helperText={<ErrorMessage name="Project Summary"/>}

                            />
                            <Field as={TextField}
                                   label='Other members'
                                   name='Members'
                                   placeholder='List of other students'
                                   sx={{
                                       mt: 3,
                                       ml: 9,
                                       width: '70%',
                                       display: 'flex',

                                   }}
                            />

                            <Stack direction='row' spacing={2} justifyContent='center'>
                                <Button type={"button"} variant="contained"
                                        onClick={notRegistering}
                                        color='primary'
                                        sx={{backgroundColor: BLUE}}
                                        style={btnStyle}
                                        startIcon={<DeleteIcon/>}
                                >Clear
                                </Button>
                                <Button type='Post' variant="contained"
                                        disabled={emptyOrInvalid(props)}
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
}
export default OfferingPostForm;


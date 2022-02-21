import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import * as Yup from "yup";

export const DRAWER_OPEN = 'drawerOpen';
const prefix = 'cis4914seniorprojectApp::';
export const USERNAME = prefix + 'username';
export const LOGGED_IN = prefix + 'loggedIn';
export const REGISTER = 'register';
export const LEFT = 'left';
export const STATE = 'state';
export const SORT_BY = 'sortBy';
export const ACTIVE_TAB = 'activeTab';
export const TITLE = 'Senior Project App';
export const REGISTRATION = 'Senior Project App Registration';
export const SEEKING = 'seeking';
export const OFFERING = 'offering';
export const POST_TYPE = "postType"
export const STUDENT = 'Student';
export const FACULTY = 'Faculty';
export const WHITE = "#FFF";
export const BLACK = "#000";
export const GRAY = "#CCC";
export const LT_GRAY = "#C0C0C0";
export const ORANGE = "rgba(255,103,0,0.83)"
export const BLUE = "rgba(0,78,152,0.88)";
export const DK_GRAY = "#888";
export const KEYDOWN = 'keydown';
export const TAB = 'Tab';
export const SHIFT = 'Shift';
export const DATE_POSTED = "Date_Posted";
export const AVAILABILITY = "Availability";
export const ADVISOR_READY = "Advisor_ready";
export const PROJECT_LOOKING = "Project_Looking";
export const ALL_TAB = 0;
export const STUDENT_TAB = 1;
export const FACULTY_TAB = 2;
export const POST_TAB = 3;
export const PROJECT_TAB = 4;
export const SEEKING_TAB = 5;
export const MESSAGES_TAB = 6;
export const API_HOSTNAME = "apiHostname"
export const DEPLOYED_API = "https://cis4914projectdatabase-api.herokuapp.com:4000";
export const LOCALHOST = "http://localhost:4000";

export const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const emptyOrInvalid = (props) => {
  console.log(`\n_____________'props' = '${JSON.stringify(props)}'_____________\n`);
  return Object.values(props.values).some((v) => v === '') || !props.isValid;
}

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required("Required"),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required("Required")
})

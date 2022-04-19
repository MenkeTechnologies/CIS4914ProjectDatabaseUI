import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import * as Yup from "yup";

const LOCAL_STORAGE_PREFIX = 'cis4914seniorprojectApp::';
export const DRAWER_OPEN = LOCAL_STORAGE_PREFIX + 'drawerOpen';
export const USERNAME = LOCAL_STORAGE_PREFIX + 'username';
export const LOGGED_IN = LOCAL_STORAGE_PREFIX + 'loggedIn';
export const EMAIL = LOCAL_STORAGE_PREFIX + 'email'
export const USER_ID = LOCAL_STORAGE_PREFIX + 'userId'

export const REGISTER = 'register';
export const LEFT = 'left';
export const STATE = 'state';
export const ACTIVE_TAB = 'activeTab';
export const ACTIVE_TAB_STORED = LOCAL_STORAGE_PREFIX + 'activeTab';
export const TITLE = 'Senior Project App';
export const REGISTRATION = 'Senior Project App Registration';
export const VIEW_WIDTH = "View_Width";

export const SORT_BY = 'sortBy';
export const POST_TYPE = "postType";
export const SEEKING = 'seeking';
export const OFFERING = 'offering';
export const DATE_POSTED = "Date_Posted";
export const DATE_ASC = "Date_Ascending";
export const DATE_DESC = "Date_Descending";
export const AVAILABILITY = "Availability";
export const PROJECT_AVAILABLE_ONLY = "Project_Available_Only";
export const PROJECT_ALL_AVAILABILITY = "Project_All_Availability";
export const ADVISOR_READY = "Advisor_Ready";
export const PROJECT_ADVISED_ONLY = "Project_Advised_Only";
export const PROJECT_ALL_ADVISEMENT = "Project_All_Advisement";
export const SEARCH_VALUE = "Search_Value";

export const STUDENT = 'Student';
export const FACULTY = 'Faculty';
export const WHITE = "#FFF";
export const BLACK = "#000";
export const GRAY = "#CCC";
export const LT_GRAY = "#C0C0C0";
export const ORANGE = "rgba(255,103,0,0.83)"
export const BLUE = "rgba(25,118,210,1)";
export const DK_GRAY = "#888";
export const GREYED_BLUE = "#7AAFE5";
export const LIGHT_BLUE = "#DDEDFD";

export const KEYDOWN = 'keydown';
export const TAB = 'Tab';
export const SHIFT = 'Shift';
export const PROJECT_LOOKING = "Project_Looking";
export const ALL_TAB = 0;
export const USER_POST_TAB = 1;
export const FACULTY_TAB = 2;
export const POST_TAB = 3;
export const PROJECT_TAB = 4;
export const SEEKING_TAB = 5;
export const MESSAGES_TAB = 6;
export const FACULTY_STATISTICS_TAB = 7;
export const DEPLOYED_API = "https://cis4914projectdatabase-api.herokuapp.com";
export const LOCALHOST = "http://localhost:4000";
export const API_HOSTNAME = window.location.hostname.match(/(localhost|127\.0\.0\.[\d]+)/) ? LOCALHOST : DEPLOYED_API;
export const MESSAGE = 'message'
export const USER = 'user'
export const SEARCH_USER = USER + '/search'
export const PROJECT_POST = 'project-post'
export const SEEKING_POST = 'seeking-post'

export const getApiUrl = (path) => `${API_HOSTNAME}/${path}`

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required("Required"),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required("Required")
})


export const createUser = (name, email, password, contact, date = Date.now()) => ({
  name,
  email,
  password,
  contact,
  date
})

export const createSeekingPost = (name, email, password, contact, date = Date.now()) => ({
  name,
  email,
  password,
  contact,
  date
})

export const createProjectPost = (name, email, password, contact, date = Date.now()) => ({
  name,
  email,
  password,
  contact,
  date
})

import {
  ACTIVE_TAB,
  ACTIVE_TAB_STORED,
  DRAWER_OPEN,
  EMAIL,
  LOGGED_IN,
  REGISTER,
  SORT_BY,
  USER_ID,
  USERNAME,
  POST_TYPE,
  DATE_POSTED,
  AVAILABILITY,
  ADVISOR_READY,
  PROJECT_ALL_AVAILABILITY,
  PROJECT_ALL_ADVISEMENT,
  SEARCH_VALUE,
  ALL_TAB,
} from "../util/Consts";

const initialState = {
  [ACTIVE_TAB]: parseInt(localStorage.getItem(ACTIVE_TAB_STORED) || ALL_TAB),
  [DRAWER_OPEN]: false,
  [LOGGED_IN]: sessionStorage.getItem(LOGGED_IN),
  [USERNAME]: sessionStorage.getItem(USERNAME) || "John Doe",
  [EMAIL]: sessionStorage.getItem(EMAIL) || "john.doe@gmail.com",
  [USER_ID]: sessionStorage.getItem(USER_ID) || '',
  [REGISTER]: false,
  [SORT_BY]: {
    [POST_TYPE]: null,
    [DATE_POSTED]: null,
    [AVAILABILITY]: PROJECT_ALL_AVAILABILITY,
    [ADVISOR_READY]: PROJECT_ALL_ADVISEMENT,
    [SEARCH_VALUE]: ""
  },
};

export default initialState;

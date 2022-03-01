import {
  ACTIVE_TAB,
  ACTIVE_TAB_STORED,
  DRAWER_OPEN,
  EMAIL,
  LOGGED_IN,
  REGISTER,
  SORT_BY,
  USERNAME
} from "../util/Consts";

const initialState = {
  [ACTIVE_TAB]: parseInt(localStorage.getItem(ACTIVE_TAB_STORED) || 0),
  [DRAWER_OPEN]: false,
  [LOGGED_IN]: sessionStorage.getItem(LOGGED_IN),
  [USERNAME]: sessionStorage.getItem(USERNAME) || "John Doe",
  [USERNAME]: sessionStorage.getItem(EMAIL) || "john.doe@gmail.com",
  [REGISTER]: false,
  [SORT_BY]: '',
};

export default initialState;

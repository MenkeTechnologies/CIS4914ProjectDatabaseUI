import {
  ACTIVE_TAB,
  API_HOSTNAME,
  DEPLOYED_API,
  DRAWER_OPEN,
  LOCALHOST,
  LOGGED_IN,
  REGISTER,
  SORT_BY,
  USERNAME
} from "../util/Consts";

const initialState = {
  [ACTIVE_TAB]: 0,
  [DRAWER_OPEN]: false,
  [LOGGED_IN]: localStorage.getItem(LOGGED_IN),
  [USERNAME]: localStorage.getItem(USERNAME) || "John Doe",
  [REGISTER]: false,
  [SORT_BY]: '',
};

export default initialState;

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
  [LOGGED_IN]: false,
  [REGISTER]: false,
  [DRAWER_OPEN]: false,
  [ACTIVE_TAB]: 0,
  [SORT_BY]: '',
  [USERNAME]: 'John Doe',
  [API_HOSTNAME]: window.location.hostname.includes("localhost") ? LOCALHOST : DEPLOYED_API
};

export default initialState;

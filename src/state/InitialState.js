import { ACTIVE_TAB, DRAWER_OPEN, LOGGED_IN, REGISTER, SORT_BY, USERNAME } from "../util/Consts";

const initialState = {
  [ACTIVE_TAB]: 0,
  [DRAWER_OPEN]: false,
  [LOGGED_IN]: sessionStorage.getItem(LOGGED_IN),
  [USERNAME]: sessionStorage.getItem(USERNAME) || "John Doe",
  [REGISTER]: false,
  [SORT_BY]: '',
};

export default initialState;

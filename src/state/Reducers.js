import {
  ACTIVE_TAB,
  ACTIVE_TAB_STORED,
  DRAWER_OPEN,
  EMAIL,
  KEYDOWN,
  LOGGED_IN,
  REGISTER,
  SHIFT,
  SORT_BY,
  TAB,
  USER_ID,
  USERNAME,
  USER_TYPE,
} from "../util/Consts";

/**
 * Create reducers
 * @param state
 * @param setState
 */
export const createReducers = (state, setState) => {
  const addState = (obj) => setState({ ...state, ...obj });
  const stayOpen = (e) => e.type === KEYDOWN && (e.key === TAB || e.key === SHIFT);
  const toggleDrawer = (e) => {
    if (!stayOpen(e)) {
      addState({ [DRAWER_OPEN]: !state[DRAWER_OPEN] });
    }
  };
  const setTab = (e, v) => {
    return addState({ [ACTIVE_TAB]: v });
  };
  const setSortBy = (sortType, sortValue) => {
    addState({ [SORT_BY]: { ...state[SORT_BY], [sortType]: sortValue } });
  };
  const setFullSort = (sort) => {
    addState({ [SORT_BY]: sort });
  };

  const setUserName = (uname, email, id, userType) => {
    state[USERNAME] = uname
    sessionStorage.setItem(USERNAME, uname)
    state[USER_ID] = id
    sessionStorage.setItem(USER_ID, id)
    state[EMAIL] = email
    state[USER_TYPE] = userType
    sessionStorage.setItem(USER_TYPE, userType)
    sessionStorage.setItem(EMAIL, email)
  };

  const hideDrawer = () => {
    state[DRAWER_OPEN] = false
    addState({ [DRAWER_OPEN]: false });
  };
  const handleNavChange = (tabIdx) => (e) => {
    hideDrawerAndSetTab(e, tabIdx);
  }

  const loginUser = (uname, email, id, userType) => {
    hideDrawer();
    setUserName(uname, email, id, userType);
    sessionStorage.setItem(LOGGED_IN, 'true')
    addState({ [LOGGED_IN]: 'true' })
  }

  const registerUser = (uname, email, id, userType) => {
    loginUser(uname, email, id, userType)
  }

  const registering = () => {
    logoutUser();
    addState({ [REGISTER]: true });
  }

  const notRegistering = () => {
    logoutUser();
    addState({ [REGISTER]: false })
  }

  const logoutUser = () => {
    sessionStorage.removeItem(LOGGED_IN);
    sessionStorage.removeItem(USERNAME);
    localStorage.removeItem(ACTIVE_TAB_STORED);
    state[LOGGED_IN] = null;
  }

  const hideDrawerAndSetTab = (e, tab) => {
    hideDrawer();
    addState({
      [ACTIVE_TAB]: tab
    }
    );
    localStorage.setItem(ACTIVE_TAB_STORED, tab)
  };
  return {
    addState,
    stayOpen,
    toggleDrawer,
    setSortBy,
    setFullSort,
    setTab,
    hideDrawer,
    handleNavChange,
    hideDrawerAndSetTab,
    logoutUser,
    loginUser,
    registering,
    notRegistering,
    registerUser
  }
}

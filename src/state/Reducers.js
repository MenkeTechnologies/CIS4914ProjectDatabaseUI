import {
  ACTIVE_TAB,
  ACTIVE_TAB_STORED,
  DRAWER_OPEN,
  KEYDOWN,
  LOGGED_IN,
  REGISTER,
  SHIFT,
  SORT_BY,
  TAB,
  USERNAME
} from "../util/Consts";

export const createReducers = (state, setState) => {
  const addState = (obj) => setState({...state, ...obj})
  const stayOpen = (e) => e.type === KEYDOWN && (e.key === TAB || e.key === SHIFT);
  const toggleDrawer = (e) => {
    if (!stayOpen(e)) {
      addState({[DRAWER_OPEN]: !state[DRAWER_OPEN]});
    }
  };
  const setTab = (e, v) => {
    return addState({[ACTIVE_TAB]: v});
  };
  const setSortBy = (v) => {
    return addState({[SORT_BY]: v});
  }

  const setUserName = (uname) => {
    state[USERNAME] = uname
    sessionStorage.setItem(USERNAME, uname)
  };

  const hideDrawer = () => {
    state[DRAWER_OPEN] = false
    addState({[DRAWER_OPEN]: false});
  };
  const handleNavChange = (tabIdx) => (e) => {
    hideDrawerAndSetTab(e, tabIdx);
  }

  const loginUser = () => {
    hideDrawer();
    sessionStorage.setItem(LOGGED_IN, 'true')
    addState({[LOGGED_IN]: 'true'})
  }

  const registerUser = (uname) => {
    setUserName(uname);
    loginUser()
  }

  const registering = () => {
    logoutUser();
    addState({[REGISTER]: true});
  }

  const notRegistering = () => {
    logoutUser();
    addState({[REGISTER]: false})
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

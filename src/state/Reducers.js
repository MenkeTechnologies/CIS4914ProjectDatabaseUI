import { ACTIVE_TAB, DRAWER_OPEN, KEYDOWN, LOGGED_IN, REGISTER, SHIFT, SORT_BY, TAB, USERNAME } from "../util/Consts";

export const createReducers = (state, setState) => {
  const addState = (obj) => setState({...state, ...obj})
  const stayOpen = (e) => e.type === KEYDOWN && (e.key === TAB || e.key === SHIFT);
  const toggleDrawer = (e) => {
    if (!stayOpen(e)) {
      addState({[DRAWER_OPEN]: !state[DRAWER_OPEN]});
    }
  };
  const setTab = (e, v) => addState({[ACTIVE_TAB]: v});
  const setSortBy = (v) => addState({[SORT_BY]: v})

  const setUserName = (uname) => {
    addState({[USERNAME]: uname})
  };

  const hideDrawer = () => {
    state[DRAWER_OPEN] = false
    addState({[DRAWER_OPEN]: false});
  };
  const handleNavChange = (tabIdx) => (e) => hideDrawerAndSetTab(e, tabIdx)

  const loginUser = (e) => {
    addState({[LOGGED_IN]: true})
  }

  const registering = (e) => {
    addState({[REGISTER]: true, [LOGGED_IN]: false})
  }

  const notRegistering = (e) => {
    addState({[REGISTER]: false, [LOGGED_IN]: false})
  }

  const logoutUser = (e) => {
    addState({[LOGGED_IN]: false})
  }

  const hideDrawerAndSetTab = (e, v) => {
    hideDrawer();
    addState({
        [ACTIVE_TAB]: v
      }
    );
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
    notRegistering
  }
}

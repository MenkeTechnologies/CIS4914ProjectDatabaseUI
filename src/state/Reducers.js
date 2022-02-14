import { ACTIVE_TAB, DRAWER_OPEN, KEYDOWN, SHIFT, SORT_BY, TAB } from "../util/Consts";

export const createReducers = (state, setState) => {
  const addState = (obj) => setState({...state, ...obj})
  const stayOpen = (e) => e.type === KEYDOWN && (e.key === TAB || e.key === SHIFT);
  const toggleDrawer = (e) => stayOpen(e) || addState({[DRAWER_OPEN]: !state[DRAWER_OPEN]});
  const setTab = (e, v) => addState({[ACTIVE_TAB]: v});
  const setSortBy = (v) => addState({[SORT_BY]: v})

  const hideDrawerAndSetTab = (e, v) => addState({
      [DRAWER_OPEN]: stayOpen(e) ? state[DRAWER_OPEN] : false,
      [ACTIVE_TAB]: v
    }
  );
  return {
    addState,
    stayOpen,
    toggleDrawer,
    setSortBy,
    setTab,
    hideDrawerAndSetTab
  }
}

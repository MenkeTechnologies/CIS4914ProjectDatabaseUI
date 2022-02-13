import { ACTIVE_TAB, KEYDOWN, LEFT, SHIFT, SORT_BY, TAB } from "../util/Consts";

export const createReducers = (state, setState) => {
  const addState = (obj) => setState({...state, ...obj})
  const stayOpen = (e) => e.type === KEYDOWN && (e.key === TAB || e.key === SHIFT);
  const toggleDrawer = (e) => stayOpen(e) || addState({[LEFT]: !state[LEFT]});
  const setTab = (e, v) => addState({[ACTIVE_TAB]: v});
  const setSortBy = (v) => addState({[SORT_BY]: v})

  const hideDrawerAndSetTab = (e, v) => addState({
      [LEFT]: stayOpen(e) ? state[LEFT] : !state[LEFT],
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

import '../style/App.css';
import * as React from 'react';
import TabContent from "./TabContent";
import DrawerNav from "./DrawerNav";
import AppNav from "./AppNav";
import initialState from "../state/InitialState";
import GlobalState from "../state/GlobalState";
import { createReducers } from "../state/Reducers";

const App = () => {
  const [state, setState] = React.useState(initialState);
  const reducers = createReducers(state, setState);

  return <GlobalState.Provider value={{state, setState, ...reducers}}>
    <AppNav/>
    <TabContent/>
    <DrawerNav/>
  </GlobalState.Provider>
};

export default App;

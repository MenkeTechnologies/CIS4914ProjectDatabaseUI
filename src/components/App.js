import '../style/App.css';
import * as React from 'react';
import TabContent from "./TabContent";
import DrawerNav from "./DrawerNav";
import AppNav from "./AppNav";
import { createReducers } from "../state/Reducers";
import initialState from "../state/InitialState";

const App = () => {
  const [state, setState] = React.useState(initialState);
  const {setTab, hideDrawerAndSetTab, toggleDrawer, setSortBy} = createReducers(state, setState);

  return <div className="App">
    <AppNav state={state} setTab={setTab} toggleDrawer={toggleDrawer} setSortBy={setSortBy}/>
    <TabContent state={state}/>
    <DrawerNav state={state} hideDrawerAndSetTab={hideDrawerAndSetTab} toggleDrawer={toggleDrawer}/>
  </div>;
};

export default App;

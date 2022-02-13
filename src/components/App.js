import '../style/App.css';
import * as React from 'react';
import { KEYDOWN, LEFT, SHIFT, TAB } from "../util/Consts";
import TabContent from "./TabContent";
import DrawerNav from "./DrawerNav";
import AppNav from "./AppNav";

const App = () => {
  const [state, setState] = React.useState({
    [LEFT]: false,
  });
  const [activeTab, setActiveTab] = React.useState(0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === KEYDOWN && (event.key === TAB || event.key === SHIFT)) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  return <div className="App">

    <AppNav activeTab={activeTab} setActiveTab={setActiveTab} state={state} toggleDrawer={toggleDrawer}/>

    <TabContent activeTab={activeTab}/>

    <DrawerNav state={state} setState={setState} toggleDrawer={toggleDrawer} setActiveTab={setActiveTab}/>

  </div>;
};

export default App;

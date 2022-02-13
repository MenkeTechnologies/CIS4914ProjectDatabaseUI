import '../style/App.css';
import * as React from 'react';
import { LEFT } from "../util/Consts";
import TabContent from "./TabContent";
import DrawerNav from "./DrawerNav";
import AppNav from "./AppNav";


const App = () => {
  const [state, setState] = React.useState({
    [LEFT]: false,
  });
  const [activeTab, setActiveTab] = React.useState(0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open});
  };

  return (<div className="App">

    <AppNav activeTab={activeTab} setActiveTab={setActiveTab} state={state} toggleDrawer={toggleDrawer}/>

    <TabContent activeTab={activeTab}/>

    <DrawerNav state={state} setState={setState} toggleDrawer={toggleDrawer}/>

  </div>);
};

export default App;

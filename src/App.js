import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import { createContext, useState } from "react";
import ObjectState from "./Components/ObjectState";
import PropsComp from "./Components/PropsComp";
import Card from "./Components/Card";
import Avatar from "./Components/Avatar";
import ComponentA from "./Components/Context/ComponentA";
import UseEffectHook from "./Components/UseEffectHook";
import ApiComp from "./Components/ApiComp";
import Forms from "./Components/Forms";

export const messageContext = createContext(null);

function App() {
  const [dataFromChild, setDataFromChild] = useState("Empty");

  const [mount, setMount] = useState(true) 
  // console.log(dataFromChild);
  return (
    <div className="App">
      {/* <PropsComp name="XYZ" age={10} arr={[1, 2, 3]}  /> */}
      {/* <Avatar setDataFromChild={setDataFromChild}/> */}

      {/* <messageContext.Provider
        value={{
          text: "Message from App.js",
          arr: [1, 2, 3]
        }}
      >
        <ComponentA />
      </messageContext.Provider> */}
      {/* <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      {mount && <UseEffectHook/>} */}
      {/* <ApiComp/> */}
      <Forms/>
    </div>
  );
}

export default App;

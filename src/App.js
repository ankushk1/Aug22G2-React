import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import { useState } from "react";
import ObjectState from "./Components/ObjectState";
import PropsComp from "./Components/PropsComp";
import Card from "./Components/Card";
import Avatar from "./Components/Avatar";

function App() {

  const [dataFromChild, setDataFromChild] = useState("Empty")

  console.log(dataFromChild)
  return (
    <div className="App">
      {/* <PropsComp name="XYZ" age={10} arr={[1, 2, 3]}  /> */}
      <Avatar setDataFromChild={setDataFromChild}/>
    </div>
  );
}

export default App;

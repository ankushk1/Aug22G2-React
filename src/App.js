import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import { useState } from "react";
import ObjectState from "./Components/ObjectState";

function App() {
  // let count = 0;
  // const [count, setCount] = useState(1);
  // const [name, setName] = useState("ABC");

  // const onIncrement = () => {
  //   setCount((prevCount) => {
  //     console.log(prevCount);
  //     return prevCount + 1;
  //   });
  //   setCount(count + 1);
  //   // setCount((prevCount) => {
  //   //   console.log(prevCount);
  //   //   return prevCount + 1;
  //   // });
  // };

  // const onIncrementNumber = () => {
  //   setName("XYZ");
  // };

  const [arr, setArr] = useState([1, 2, 3]);

  const onChnageArr = () => {
    const val = Math.floor(Math.random() * 100);
    const arrCopy = [...arr];
    if (arrCopy.length > 5) return;
    arrCopy.push(val);
    setArr(arrCopy);
  };

  return (
    <div className="App">
      <ObjectState/>
    </div>
  );
}

export default App;

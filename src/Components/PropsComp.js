import React from "react";
import InnerChild from "./InnerChild";

const PropsComp = (props) => {
  console.log(props)
  const {name, arr, age , obj} = props

  return <div className="props-comp">PropsComp

    <h2>{name ?? "No name"}</h2>
    <h3>{age}</h3>
    <h3>{arr ?? "No array values"}</h3>
    <h3>{obj  && obj?.city}</h3>

    {/* <InnerChild {...props}/> */}
  </div>;
};

export default PropsComp;

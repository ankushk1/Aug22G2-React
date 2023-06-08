import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(5);

  useEffect(() => {
    console.log("useEffect Called, Mounted");
  }, []);

  useEffect(() => {
    console.log("useEffect2 Called");
  }, [num, count]);

  useEffect(() => {
    return () => {
      console.log("Unmount");
    };
  }, []);

  return (
    <div>
      {console.log("render")}

      <div>Component rendered {count} times</div>
      <div>{num}</div>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <button onClick={() => setNum(num + 1)}>Increment Num</button>
      </div>
    </div>
  );
};

export default UseEffectHook;

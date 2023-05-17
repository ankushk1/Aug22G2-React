import React, { useState } from "react";

const ObjectState = () => {
  const [user, setUser] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      arr: [3, 4, 7, 8] // add 10 to this arr
    }
  });

  const onNameChange = () => {
    setUser({ ...user, name: "Jake" });
  };

  const onAgeChange = () => {
    // setUser({ ...user, age: 40 });
    // To change the user city to DELHI
    // const currObj  = {...user};
    // currObj.artwork.city = "Delhi"
    // setUser(currObj)
    // setUser({ ...user, artwork: { ...user.artwork, city: "Delhi" } });

    // 1st way
    // const currObj = { ...user };
    // // currObj.artwork.arr.push(10)
    // currObj.artwork.arr = [...user.artwork.arr, 10]
    // setUser(currObj)

    //2nd Way
    // const currObj = { ...user };
    // currObj.artwork = {
    //   ...user.artwork,
    //   arr: [...user.artwork.arr, 10]
    // };
    // setUser(currObj);

    // 3rd Way
    setUser({
      ...user,
      artwork: {
        ...user.artwork,
        arr: [...user.artwork.arr, 10]
      }
    });
  };

  console.log(user.artwork.arr);

  return (
    <div>
      <div>
        Name - {user.name} <br />
        City - {user.artwork.city}
      </div>

      <div>
        <button onClick={() => onNameChange()}>Change Name</button>
        <button onClick={() => onAgeChange()}>Change City</button>
      </div>
    </div>
  );
};

export default ObjectState;

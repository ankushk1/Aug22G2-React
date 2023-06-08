import React, { useState } from "react";

const Forms = () => {
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email:""
  });

    console.log(userInfo)

  return (
    <div>
      <div className="fs-3 my-3">React Form</div>
      <div className="d-flex justify-content-center">
        <form className="w-50 ">
          <input
            className="form-control my-2"
            type="text"
            placeholder="Name"
            value={userInfo.name}
            onChange={(event) =>
              setUserInfo({ ...userInfo, name: event.target.value })
            }
          />
          <input
            className="form-control my-2"
            type="text"
            placeholder="Last Name"
            value={userInfo.lastName}
            onChange={(event) =>
              setUserInfo({ ...userInfo, lastName: event.target.value })
            }
          />
          <input
            className="form-control my-2"
            type="text"
            placeholder="Email"
            value={userInfo.email}
            onChange={(event) =>
              setUserInfo({ ...userInfo, email: event.target.value })
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Forms;

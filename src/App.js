import React, { useState } from "react";

const App = () => {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
    email: "",
    mobilenum: "",
  });

  const changeevent = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setfullname((prevalue) => {
      // small code
      return {
        ...prevalue,
        [name]: value,
      };

      //   if (name === "fname") {
      //     return {
      //       fname: value,
      //       lname: prevalue.lname,
      //       email: prevalue.email,
      //       mobilenum: prevalue.mobilenum,
      //     };
      //   } else if (name === "lname") {
      //     return {
      //       fname: prevalue.fname,
      //       lname: value,
      //       email: prevalue.email,
      //       mobilenum: prevalue.mobilenum,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fname: prevalue.fname,
      //       lname: prevalue.lname,
      //       email: value,
      //       mobilenum: prevalue.mobilenum,
      //     };
      //   } else if (name === "mobilenum") {
      //     return {
      //       fname: prevalue.fname,
      //       lname: prevalue.lname,
      //       email: prevalue.email,
      //       mobilenum: value,
      //     };
      //   }
    });
  };
  const submitval = (event) => {
    event.preventDefault();
    alert("your form submitted");
  };

  return (
    <React.Fragment>
      <form onSubmit={submitval}>
        <h1>
          hello,{fullname.fname}
          {fullname.lname}
        </h1>
        <p>{fullname.email}</p>
        <p>{fullname.mobilenum}</p>
        <input
          type="text"
          name="fname"
          id=""
          placeholder="Enter your content"
          value={fullname.fname}
          onChange={changeevent}
        />
        <input
          type="text"
          name="lname"
          id=""
          placeholder="Enter your content"
          value={fullname.lname}
          onChange={changeevent}
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your content"
          value={fullname.email}
          onChange={changeevent}
        />
        <input
          type="number"
          name="mobilenum"
          id=""
          placeholder="Enter your content"
          value={fullname.mobilenum}
          onChange={changeevent}
        />
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
};
export default App;

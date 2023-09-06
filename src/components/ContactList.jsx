import React, { useState } from "react";
import "./ContactList.css";
export default function ContactList(props) {
  const [showAge, setShowAge] = useState(false);
  const[btnName, setBtnName] = useState("Show Age")
  const ageHandler = () => {
    setShowAge(!showAge);
    if (showAge) {
        setBtnName("Show Age")

    }else{
        setBtnName("Hide Age")

    }
  };
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={props.imgUrl} alt="" />
        </div>
        <div className="details">
          <h3>Name: <span>{props.name}</span></h3>
          <h3>Email: <span>{props.email}</span></h3>
          <button onClick={ageHandler}>{btnName}</button>
          {showAge ? <h3>Age: <span>{props.age}</span> </h3> : null}
        </div>
      </div>
    </>
  );
}

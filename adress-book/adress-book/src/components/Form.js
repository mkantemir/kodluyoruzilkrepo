import React, { useState } from "react";
import "./Form.css";

const Form = ({ setContacts, contacts }) => {
  //   const [fullname, setFullname] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");

  const initialValue = { fullname: "", phoneNumber: "" };
  const [inputValue, setInputValue] = useState(initialValue);

  const getInputValue = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };
  const submit = (event) => {
    event.preventDefault();
    if (inputValue.fullname === "" || inputValue.phoneNumber === "") {
      return false;
    }
    setContacts([...contacts, inputValue]);
    setInputValue(initialValue)
  };

  return (
    <div className="form">
      <input
        className="form-input"
        placeholder="Fullname"
        name="fullname"
        value={inputValue.fullname}
        onChange={getInputValue}
      ></input>
      <input
        className="form-input"
        placeholder="Phone Number"
        name="phoneNumber"
        value={inputValue.phoneNumber}
        onChange={getInputValue}
      ></input>
      <div>
        <button className="btn" onClick={submit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;

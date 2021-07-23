import React from "react";
import "./input.css";
function Input(props) {
  return (
    <input
      className="inp"
      type="number"
      max="9"
      min="1"
      // autocomplete="false"
      //onChange={handleChange}
      //value={note.title}
      placeholder="0"
    />
  );
}

export default Input;

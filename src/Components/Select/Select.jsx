import { useState } from "react";
import "./Select.css";

const Select = ({ handleChange, name, disabled }) => {
  return (
    <>
      <select
        name={name}
        className="select"
        onChange={handleChange}
        disabled={disabled}
      >
        <option value="Select the Option 1">Select the Option 1</option>
        <option value="Select the Option 2">Select the Option 2</option>
      </select>
    </>
  );
};

export default Select;

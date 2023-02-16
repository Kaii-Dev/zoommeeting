import React, { useState } from "react";

const Input = ({ htmlForValue, labelName, onChildData }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChildData(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <label htmlFor={htmlForValue}>{labelName}: </label>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        style={{
          borderRadius: "5px",
          padding: "5px 10px",
          border: "none",
          outline: "none",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.2s ease-in-out",
          margin: "5px 10px",
        }}
        onFocus={(event) =>
          (event.target.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.4)")
        }
        onBlur={(event) =>
          (event.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)")
        }
      />
    </div>
  );
};

export default Input;

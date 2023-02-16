import React, { useState } from "react";

const Button = ({ ...props }) => {
  const { type, buttonName } = { ...props };
  return (
    <>
      <button
        type={type}
        style={{
          background: "#3E54AC",
          color: "white",
          borderRadius: "5px",
          padding: "5px 10px",
          border: "none",
          margin: "10px 10px",
          transition: "background 0.2s ease-in-out",
        }}
      >
        {buttonName}
      </button>
    </>
  );
};
export default Button;

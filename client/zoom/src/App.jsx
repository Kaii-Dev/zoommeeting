import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [formData, setFormData] = useState({
    apiKey: "",
    apiSecret: "",
    meetingNumber: "",
    hostId: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };
    for (const key in updatedFormData) {
      updatedFormData[key] = updatedFormData[key]
        .split("")
        .filter((char) => char !== "-")
        .join("");
    }
    setFormData(updatedFormData);
    try {
      const response = await fetch("http://localhost:3000/zoominfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
      console.log("Form data submitted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "12px",
      }}
      onSubmit={handleSubmit}
    >
      <div
        style={{
          fontSize: "50px",
          color: "#537FE7",
          fontStyle: "bold",
        }}
      >
        Please enter Zoom meeting info below 👇🏻
      </div>
      <div className="input-container">
        <Input
          htmlForValue="apiKey"
          labelName="API Key"
          value={formData.apiKey}
          onChildData={(data) => handleInputChange("apiKey", data)}
        />
        <Input
          htmlForValue="apiSecret"
          labelName="API Secret"
          value={formData.apiSecret}
          onChildData={(data) => handleInputChange("apiSecret", data)}
        />
        <Input
          htmlForValue="meetingNumber"
          labelName="Meeting Number"
          value={formData.meetingNumber}
          onChildData={(data) => handleInputChange("meetingNumber", data)}
        />
        <Input
          htmlForValue="hostId"
          labelName="Host ID"
          value={formData.hostId}
          onChildData={(data) => handleInputChange("hostId", data)}
        />
        <Button type="submit" buttonName="Submit" />
      </div>
    </form>
  );
}

export default App;

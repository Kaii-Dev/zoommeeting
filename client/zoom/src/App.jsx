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

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };
    for (const key in updatedFormData) {
      updatedFormData[key] = updatedFormData[key]
        .split("")
        .filter((char) => char !== "-")
        .join("");
    }
    setFormData(updatedFormData);
    console.log(formData);
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
      <h1>Please enter Zoom meeting URL below 👇🏻</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          rowGap: "12px",
        }}
      >
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
      </div>
      <Button type="submit" buttonName="Submit" />
    </form>
  );
}

export default App;
